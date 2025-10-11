import React from 'react';
import styles from './EducationSection.module.css';

const educationList = [
  {
    school: 'Le Wagon',
    years: '2025-2025',
    country: 'France',
    degree: 'Data Science & AI Bootcamp',
  },
  {
    school: 'SUPINFO International University',
    years: '2018-2020',
    country: 'France',
    degree: 'Master of Science - MS, Computer Science',
  },
  {
    school: 'University of Haute-Alsace',
    years: '2017-2018',
    country: 'France',
    degree: "Bachelor's Degree, Applied Computer Methods in Business Management (MIAGE)",
  },
  {
    school: 'IGA - Institut supérieur du Génie Appliqué',
    years: '2016-2018',
    country: 'Morocco',
    degree: "Bachelor's Degree, Computer and Electronic Systems Engineering (ISIE)",
  },
  {
    school: 'Sidi Mohammed Ben Abdellah University-EST Fez',
    years: '2013-2015',
    country: 'Morocco',
    degree: 'University Technology Degree (DUT), Electronics and Industrial Computing',
  },
];

export default function EducationSection() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.heading}>
        Education
      </h2>
      <ul className={styles.educationList}>
        {educationList.map((edu, i) => (
          <li key={edu.school + edu.years} className={styles.timelineRow}>
            <div className={styles.timelineYear}>{edu.years.split('-')[0]}</div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineSchool}><strong>{edu.school}</strong></div>
              <div className={styles.timelineDegree}>{edu.degree}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
