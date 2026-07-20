import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const recipientEmail = 'rockyjunior254@gmail.com';
const recipientPhone = '+254729465262';
const requiredEnvironment = ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_FROM_NUMBER'] as const;

type Contact = { name: string; email: string; phone: string; company?: string; projectType?: string; budget?: string; subject: string; message: string; website?: string };

function clean(value: unknown, maximum = 1000) { return typeof value === 'string' ? value.trim().slice(0, maximum) : ''; }
function validEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function clientIp(request: NextRequest) { return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'; }

async function supabase(path: string, options: RequestInit = {}) {
  const url = process.env.SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return fetch(`${url}/rest/v1/${path}`, { ...options, headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', ...(options.headers || {}) }, cache: 'no-store' });
}

function escapeHtml(value: string) { return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]!)); }

export async function POST(request: NextRequest) {
  const missing = requiredEnvironment.filter(key => !process.env[key]);
  if (missing.length) return NextResponse.json({ error: 'Contact service is not configured. Please email Rocky directly.' }, { status: 503 });

  let raw: Record<string, unknown>;
  try { raw = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  const contact: Contact = { name: clean(raw.name, 100), email: clean(raw.email, 160).toLowerCase(), phone: clean(raw.phone, 40), company: clean(raw.company, 120), projectType: clean(raw.projectType, 80), budget: clean(raw.budget, 80), subject: clean(raw.subject, 160), message: clean(raw.message, 5000), website: clean(raw.website, 200) };
  if (contact.website) return NextResponse.json({ ok: true });
  if (contact.name.length < 2 || !validEmail(contact.email) || contact.phone.length < 7 || contact.subject.length < 3 || contact.message.length < 12) return NextResponse.json({ error: 'Please complete the required fields with valid details.' }, { status: 422 });

  const ip = clientIp(request);
  const cutoff = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const recent = await supabase(`contact_messages?select=id&ip_address=eq.${encodeURIComponent(ip)}&created_at=gte.${encodeURIComponent(cutoff)}`);
  if (!recent.ok) return NextResponse.json({ error: 'Contact log is temporarily unavailable. Please try again shortly.' }, { status: 503 });
  const recentMessages = await recent.json() as unknown[];
  if (recentMessages.length >= 4) return NextResponse.json({ error: 'Too many messages from this connection. Please try again in an hour.' }, { status: 429 });

  const submittedAt = new Date();
  const record = { name: contact.name, email: contact.email, phone: contact.phone, company: contact.company || null, project_type: contact.projectType || null, budget: contact.budget || null, subject: contact.subject, message: contact.message, ip_address: ip, created_at: submittedAt.toISOString(), notification_status: 'pending' };
  const saved = await supabase('contact_messages', { method: 'POST', headers: { Prefer: 'return=representation' }, body: JSON.stringify(record) });
  if (!saved.ok) return NextResponse.json({ error: 'Your message could not be saved. Please try again or email Rocky directly.' }, { status: 503 });
  const [savedMessage] = await saved.json() as Array<{ id: string }>;

  const details = `Name: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\nCompany: ${contact.company || '—'}\nProject type: ${contact.projectType || '—'}\nBudget: ${contact.budget || '—'}\nSubject: ${contact.subject}\nSubmitted: ${submittedAt.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi', dateStyle: 'medium', timeStyle: 'short' })}\n\nMessage:\n${contact.message}`;
  const emailRequest = fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [recipientEmail], reply_to: contact.email, subject: `New portfolio enquiry: ${contact.subject}`, text: details, html: `<h2>New portfolio enquiry</h2><pre>${escapeHtml(details)}</pre>` }) });
  const smsBody = `New portfolio enquiry\n${contact.name} · ${contact.phone}\n${contact.subject}\n${contact.message.slice(0, 900)}\n${submittedAt.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}`;
  const auth = Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64');
  const smsRequest = fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, { method: 'POST', headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ To: recipientPhone, From: process.env.TWILIO_FROM_NUMBER!, Body: smsBody }).toString() });
  const [email, sms] = await Promise.allSettled([emailRequest, smsRequest]);
  const emailOk = email.status === 'fulfilled' && email.value.ok;
  const smsOk = sms.status === 'fulfilled' && sms.value.ok;
  await supabase(`contact_messages?id=eq.${savedMessage.id}`, { method: 'PATCH', body: JSON.stringify({ notification_status: emailOk && smsOk ? 'delivered' : 'delivery_failed', email_delivered: emailOk, sms_delivered: smsOk }) });
  if (!emailOk || !smsOk) return NextResponse.json({ error: 'Your message was saved, but its alert could not be delivered. Rocky can still retrieve it.' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
