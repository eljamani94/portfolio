import styles from './ExperienceSection.module.css';

const experiences = [
  {
    company: 'PixelForge Studios',
    role: 'Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.',
    period: 'Jan 2020 – Present',
  },
  {
    company: 'BlueWave Innovators',
    role: 'Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.',
    period: 'Jun 2017 – Dec 2019',
  },
  {
    company: 'TrendCraft Solutions',
    role: 'Designed user interfaces for e-commerce platforms, focusing on enhancing usability and conversion rates.',
    period: 'Mar 2013 – May 2017',
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Other Experience</h2>
      <ul className={styles.expList}>
        {experiences.map((exp) => (
          <li key={exp.company} className={styles.timelineRow}>
            <div className={styles.timelineYear}>{exp.period.split('–')[0].trim()}</div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineCompany}><strong>{exp.company}</strong></div>
              <div className={styles.timelineRole}>{exp.role}</div>
              <div className={styles.timelinePeriod}>{exp.period}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
