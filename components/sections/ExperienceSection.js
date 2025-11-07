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
      <div className={styles.comicPage}>
        <div className={styles.comicHeader}>
          <div className={styles.headerBanner}>
            <span className={styles.bannerText}>EXPERIENCE</span>
          </div>
        </div>
        <div className={styles.comicContent}>
          {experiences.map((exp, index) => (
            <div key={exp.company + index} className={styles.comicCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {exp.title}
                  {exp.ageRange && <span className={styles.ageRange}> {exp.ageRange}</span>}
                </h3>
                <div className={styles.cardSubtitle}>{exp.company}</div>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>📅 {exp.period}</span>
                <span className={styles.metaItem}>📍 {exp.location}</span>
              </div>
              <div className={styles.cardBody}>
                {exp.description.map((item, idx) => (
                  <div key={idx} className={styles.descriptionItem}>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.descriptionText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
