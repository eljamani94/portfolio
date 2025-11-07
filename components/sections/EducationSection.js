import React from 'react';
import styles from './EducationSection.module.css';

const educationList = [
  {
    school: 'Le Wagon',
    startDate: 'Jan 2025',
    endDate: 'Mar 2025',
    country: 'France',
    degree: 'Data Science & AI Bootcamp',
  },
  {
    school: 'SUPINFO International University',
    startDate: 'Sep 2018',
    endDate: 'Jun 2020',
    country: 'France',
    degree: 'Master of Science - MS, Computer Science',
  },
  {
    school: 'University of Haute-Alsace',
    startDate: 'Sep 2017',
    endDate: 'Jun 2018',
    country: 'France',
    degree: "Bachelor's Degree, Applied Computer Methods in Business Management (MIAGE)",
  },
  {
    school: 'IGA - Institut supérieur du Génie Appliqué',
    startDate: 'Sep 2016',
    endDate: 'Jun 2018',
    country: 'Morocco',
    degree: "Bachelor's Degree, Computer and Electronic Systems Engineering (ISIE)",
  },
  {
    school: 'Sidi Mohammed Ben Abdellah University-EST Fez',
    startDate: 'Sep 2013',
    endDate: 'Jun 2015',
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
          <li key={edu.school + edu.startDate} className={styles.timelineRow}>
            <div className={styles.timelineYear}>{edu.startDate} – {edu.endDate}</div>
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
