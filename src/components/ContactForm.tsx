'use client';

import { FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your message could not be delivered.');
      form.reset();
      setStatus('success');
      setMessage('Message received — Rocky has been notified and will reply soon.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please email Rocky directly.');
    }
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <label>Name<input name="name" placeholder="Your name" required minLength={2} disabled={status === 'sending'} /></label>
      <label>Email<input name="email" type="email" placeholder="you@company.com" required disabled={status === 'sending'} /></label>
      <label>Phone<input name="phone" type="tel" placeholder="Your number" required disabled={status === 'sending'} /></label>
      <label>Company<input name="company" placeholder="Company or organisation" disabled={status === 'sending'} /></label>
      <label>Project type<select name="projectType" defaultValue="" required disabled={status === 'sending'}><option value="" disabled>Select one</option><option>Web application</option><option>UI implementation</option><option>Collaboration</option></select></label>
      <label>Budget<select name="budget" defaultValue="" disabled={status === 'sending'}><option value="" disabled>Select range</option><option>Under KES 50k</option><option>KES 50k – 150k</option><option>KES 150k+</option></select></label>
    </div>
    <label>Subject<input name="subject" placeholder="What are we discussing?" required minLength={3} disabled={status === 'sending'} /></label>
    <label>Message<textarea name="message" rows={5} placeholder="A little about the problem, the people, and the opportunity…" required minLength={12} disabled={status === 'sending'} /></label>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <button className={`solid-button ${styles.submit}`} type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending securely…' : 'Send enquiry ↗'}</button>
    {status !== 'idle' && <p className={`${styles.notice} ${styles[status]}`} role="status">{message}</p>}
  </form>;
}
