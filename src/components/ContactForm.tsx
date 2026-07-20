'use client';

import { FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'unavailable';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('unavailable');
    setMessage('The contact form is temporarily unavailable while the backend is being configured. Please contact me via email or LinkedIn.');
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <label>Name<input name="name" placeholder="Your name" required minLength={2} /></label>
      <label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
      <label>Phone<input name="phone" type="tel" placeholder="Your number" required /></label>
      <label>Company<input name="company" placeholder="Company or organisation" /></label>
      <label>Project type<select name="projectType" defaultValue="" required><option value="" disabled>Select one</option><option>Web application</option><option>UI implementation</option><option>Collaboration</option></select></label>
      <label>Budget<select name="budget" defaultValue=""><option value="" disabled>Select range</option><option>Under KES 50k</option><option>KES 50k – 150k</option><option>KES 150k+</option></select></label>
    </div>
    <label>Subject<input name="subject" placeholder="What are we discussing?" required minLength={3} /></label>
    <label>Message<textarea name="message" rows={5} placeholder="A little about the problem, the people, and the opportunity…" required minLength={12} /></label>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <button className={`solid-button ${styles.submit}`} type="submit">Contact backend unavailable</button>
    {status !== 'idle' && <p className={`${styles.notice} ${styles.unavailable}`} role="status">{message}</p>}
  </form>;
}
