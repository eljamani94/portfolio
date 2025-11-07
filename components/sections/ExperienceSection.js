import styles from './ExperienceSection.module.css';

const experiences = [
  {
    title: 'Physical Education & English Teacher',
    ageRange: '(Ages 1-5)',
    company: 'KidsHome 毅英宝贝家',
    period: '02/2021 - 09/2024',
    location: 'Beijing, China',
    description: [
      'Taught early childhood classes combining physical education and beginner English for children aged 1–5.',
      'Managed a class of 10 children with parent participation, creating a safe and engaging learning environment.',
      'Designed original class themes, dances, and nursery rhymes to develop motor skills, language, and social interaction.',
      'Applied observational and analytical skills to adapt activities based on each child\'s development.',
      'Strengthened communication and storytelling abilities by explaining concepts clearly to parents and learners',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.heading}>Other Experience</h2>
      <ul className={styles.expList}>
        {experiences.map((exp, index) => (
          <li key={exp.company + index} className={styles.timelineRow}>
            <div className={styles.timelineYear}>{exp.period.split(' - ')[0].trim()}</div>
            <div className={styles.timelineLine} />
            <div className={styles.timelineContent}>
              <div className={styles.timelineCompany}>
                <strong>{exp.title}</strong>
                {exp.ageRange && <span className={styles.ageRange}> {exp.ageRange}</span>}
              </div>
              <div className={styles.timelineCompanyName}>{exp.company}</div>
              <div className={styles.timelinePeriod}>{exp.period} {exp.location}</div>
              <ul className={styles.descriptionList}>
                {exp.description.map((item, idx) => (
                  <li key={idx} className={styles.descriptionItem}>{item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
