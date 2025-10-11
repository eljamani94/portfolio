import React, { useState } from 'react';
import styles from './ContactSection.module.css';

// NOTE: To enable email sending, you need to create a free account at https://www.emailjs.com/
// Then create a service and email template, and get your service_id, template_id, and public_key (user_id).
// Replace the placeholders below with your actual EmailJS credentials.

const EMAILJS_SERVICE_ID = 'service_ptwb2um'; // <-- Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_6z78dmb'; // <-- Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'c-1n3cn83NVDxoSjO'; // <-- Replace with your EmailJS public key

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('⚠️ EmailJS credentials not set. Please configure them in the code.');
      setSending(false);
      return;
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'eljamani.aej@gmail.com',
          },
        }),
      });
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message. Try again later.');
      }
    } catch (err) {
      setStatus('❌ Error sending message.');
    }
    setSending(false);
  };

  return (
    <section className={styles.contactSectionWrapper}>
      <h2 className={styles.heading}>
        Contact me.
      </h2>
      <p className={styles.contactDescription}>
        I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
      </p>
      <form onSubmit={handleSubmit} className={styles.contactFormWrapper}>
        <div className={styles.flexRow}>
          <div className={styles.flexItem}>
            <label htmlFor="name" className={styles.formLabel}>Name<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.flexItem}>
            <label htmlFor="email" className={styles.formLabel}>Email<span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="john@doe.com"
              className={styles.inputField}
            />
          </div>
        </div>
        <div className={styles.textAreaContainer}>
          <label htmlFor="message" className={styles.formLabel}>Message<span style={{ color: 'red' }}>*</span></label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Hello there, I would like to ask you about..."
            maxLength={500}
            rows={6}
            className={styles.textArea}
          />
          <div className={styles.characterCount}>
            {form.message.length}/500
          </div>
        </div>
        <button
          type="submit"
          className={styles.sendButton}
          disabled={sending || !form.name || !form.email || !form.message}
        >
          {sending ? 'Sending...' : <><span className={styles.sendIcon}>✉️</span> Send</>}
        </button>
        {status && (
          <div className={
            status.startsWith('✅')
              ? `${styles.statusMessage} ${styles.statusSuccess}`
              : `${styles.statusMessage} ${styles.statusError}`
          }>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}
