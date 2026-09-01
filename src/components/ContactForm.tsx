'use client';

import { FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';
import { MailIcon, PhoneIcon, CheckCircleIcon, ArrowRightIcon, CopyIcon, CheckIcon } from './Icons';

type FormState = 'idle' | 'submitting' | 'success';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'AI / Machine Learning Project',
    budget: 'Flexible / Let\'s Discuss',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rockyjunior254@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('submitting');

    // Simulate clean client-side submission & construct mailto fallback
    setTimeout(() => {
      setState('success');
    }, 900);
  }

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || `Project Inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hi Rocky,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:rockyjunior254@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={styles.formContainer}>
      {state === 'success' ? (
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <CheckCircleIcon size={36} />
          </div>
          <h3>Message Ready to Connect!</h3>
          <p>
            Thank you, <b>{formData.name || 'friend'}</b>. You can launch your email client directly or copy my address to send the message right away.
          </p>
          <div className={styles.successActions}>
            <button type="button" onClick={handleDirectEmail} className="solid-button">
              <span>Open in Email App</span>
              <ArrowRightIcon size={14} />
            </button>
            <button type="button" onClick={handleCopyEmail} className={styles.secondaryActionBtn}>
              {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
          </div>
          <button 
            type="button" 
            className={styles.resetBtn}
            onClick={() => setState('idle')}
          >
            ← Send another note
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              Your Name *
              <input
                name="name"
                placeholder="e.g. Alex Kamau"
                required
                minLength={2}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Email Address *
              <input
                name="email"
                type="email"
                placeholder="e.g. alex@company.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label>
              Phone / WhatsApp
              <input
                name="phone"
                type="tel"
                placeholder="+254 700 000 000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </label>
            <label>
              Company / Organization
              <input
                name="company"
                placeholder="Company, startup, or school"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </label>
            <label>
              Domain of Interest *
              <select
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="AI / Machine Learning Project">AI & Machine Learning Solution</option>
                <option value="Speech & Multilingual AI">Speech AI & Multilingual Platform</option>
                <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                <option value="Enterprise LMS or POS System">Enterprise LMS / POS System</option>
                <option value="Internship / Full-time Opportunity">Internship / Developer Role</option>
                <option value="General Collaboration">General Collaboration</option>
              </select>
            </label>
            <label>
              Project Budget / Scale
              <select
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                <option value="Flexible / Let's Discuss">Flexible / Let's Discuss</option>
                <option value="Under KES 50,000">Under KES 50,000</option>
                <option value="KES 50,000 – 150,000">KES 50,000 – 150,000</option>
                <option value="KES 150,000+">KES 150,000+</option>
                <option value="Employment / Internship">Employment / Internship</option>
              </select>
            </label>
          </div>

          <label>
            Subject *
            <input
              name="subject"
              placeholder="Brief summary of what you'd like to build"
              required
              minLength={3}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </label>

          <label>
            Project Details & Message *
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your goals, timeline, and key requirements…"
              required
              minLength={10}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </label>

          <div className={styles.formFooter}>
            <button 
              className={`solid-button ${styles.submitBtn}`} 
              type="submit"
              disabled={state === 'submitting'}
            >
              <span>{state === 'submitting' ? 'Processing…' : 'Send Message ↗'}</span>
            </button>

            <button 
              type="button" 
              onClick={handleCopyEmail}
              className={styles.copyEmailBtn}
            >
              {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
              <span>{copied ? 'Copied rockyjunior254@gmail.com!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
