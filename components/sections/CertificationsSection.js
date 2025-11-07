import React from 'react';
import styles from './CertificationsSection.module.css';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const certifications = [
  {
    name: 'ALX Data Analytics Certificate',
    date: '2025/09',
    logo: `${basePath}/alx.png`,
    link: 'https://savanna.alxafrica.com/certificates/ePBn78LEzJ',
    color: '#ffeb3b', // Yellow
    rotation: -2
  },
  {
    name: 'ALX AI Career Essentials Certificate',
    date: '2025/05',
    logo: `${basePath}/alx.png`,
    link: 'https://savanna.alxafrica.com/certificates/rYpyBLTzf9',
    color: '#ff9800', // Orange
    rotation: 1.5
  },
  {
    name: 'Python Associate 2',
    date: '2025/03',
    logo: `${basePath}/pcap.png`,
    link: 'https://drive.google.com/file/d/1kVLdIUPDQqPjVwXklQiLACrqYWz5a7Af/view',
    color: '#4caf50', // Green
    rotation: -1
  },
  {
    name: 'Machine Learning by Stanford University',
    date: '2021/07',
    logo: `${basePath}/stanford.png`,
    link: 'https://www.coursera.org/account/accomplishments/verify/MCKWATV3Q8XA',
    color: '#2196f3', // Blue
    rotation: 2
  },
];

export default function CertificationsSection() {
  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.stickyNotesContainer}>
        {certifications.map((cert, idx) => (
          <a
            key={cert.name + cert.date}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stickyNote}
            style={{
              backgroundColor: cert.color,
              transform: `rotate(${cert.rotation}deg)`,
              zIndex: certifications.length - idx
            }}
          >
            <div className={styles.noteHeader}>
              <img src={cert.logo} alt={cert.name + ' logo'} className={styles.noteLogo} />
              <span className={styles.noteDate}>{cert.date}</span>
            </div>
            <div className={styles.noteContent}>
              <h3 className={styles.noteTitle}>{cert.name}</h3>
            </div>
            <div className={styles.noteFooter}>
              <span className={styles.noteHint}>Click to verify</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
