import React from 'react';
import styles from './CertificationsSection.module.css';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const certifications = [
  {
    name: 'ALX Data Analytics Certificate',
    date: '2025/09',
    logo: `${basePath}/alx.png`,
  },
  {
    name: 'ALX AI Career Essentials Certificate',
    date: '2025/05',
    logo: `${basePath}/alx.png`,
  },
    {
    name: 'Python Associate 2',
    date: '2025/03',
    logo: `${basePath}/pcap.png`,
  },
  {
    name: 'Machine Learning by Stanford University',
    date: '2021/07',
    logo: `${basePath}/stanford.png`,
  },
];

export default function CertificationsSection() {
  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.heading}>
        Certifications
      </h2>
      <ul className={styles.certificationsList}>
        {certifications.map((cert, idx) => (
          <li key={cert.name + cert.date} className={styles.certificationRow}>
            <span className={styles.certNum}>{idx + 1}.</span>
            <span className={styles.certMain}>
              <img src={cert.logo} alt={cert.name + ' logo'} className={styles.certLogo} />
              <span className={styles.certName}>{cert.name}</span>
            </span>
            <span className={styles.certDate}>{cert.date}</span>
            <span className={styles.certTooltip}>click to check the authenticity</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
