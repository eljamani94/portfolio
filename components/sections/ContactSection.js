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
        // Get the error details from the response
        const errorData = await res.text();
        console.error('EmailJS Error:', errorData);
        setStatus(`❌ Failed to send message: ${errorData || 'Try again later.'}`);
      }
    } catch (err) {
      console.error('Network Error:', err);
      setStatus(`❌ Error sending message: ${err.message}`);
    }
    setSending(false);
  };

  return (
    <section className={styles.contactSectionWrapper}>
      <h2 className={styles.heading}>
        Contact me.
      </h2>
      <p className={styles.contactDescription}>
        I love diving into new challenges and creative projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
      </p>
      <div className={styles.retroWindow}>
        <div className={styles.windowTitleBar}>
          <div className={styles.trafficLights}>
            <span className={styles.trafficLight}></span>
            <span className={styles.trafficLight}></span>
            <span className={styles.trafficLight}></span>
          </div>
          <span className={styles.windowTitle}>Contact Form</span>
          <button className={styles.closeButton} type="button" aria-label="Close">×</button>
        </div>
        <div className={styles.windowContent}>
          <form onSubmit={handleSubmit} className={styles.contactFormWrapper}>
            <div className={styles.flexRow}>
              <div className={styles.flexItem}>
                <label htmlFor="name" className={styles.formLabel}>Name<span className={styles.requiredStar}>*</span></label>
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
                <label htmlFor="email" className={styles.formLabel}>Email<span className={styles.requiredStar}>*</span></label>
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
              <label htmlFor="message" className={styles.formLabel}>Message<span className={styles.requiredStar}>*</span></label>
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
              {sending ? 'Sending...' : 'OK'}
            </button>
          </form>
        </div>
      </div>
      {status && (
        <div className={styles.retroWindow}>
          <div className={
            status.startsWith('✅')
              ? `${styles.windowTitleBar} ${styles.successTitleBar}`
              : `${styles.windowTitleBar} ${styles.errorTitleBar}`
          }>
            <div className={styles.trafficLights}>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
            </div>
            <span className={styles.windowTitle}>
              {status.startsWith('✅') ? 'Success' : 'Error'}
            </span>
            <button 
              className={styles.closeButton} 
              type="button" 
              onClick={() => setStatus('')}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className={styles.windowContent}>
            <div className={
              status.startsWith('✅')
                ? `${styles.statusMessage} ${styles.statusSuccess}`
                : `${styles.statusMessage} ${styles.statusError}`
            }>
              {status.replace('✅ ', '').replace('❌ ', '')}
            </div>
            <button
              type="button"
              className={styles.okButton}
              onClick={() => setStatus('')}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
