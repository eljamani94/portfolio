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
    windowColor: '#1E93AB', // Teal
    topBarColor: '#0D92F4' // Blue
  },
];

export default function ExperienceSection() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.experienceGrid}>
        {experiences.map((exp, index) => (
          <div 
            key={exp.company + index} 
            className={styles.experienceCategory}
            style={{
              '--window-color': exp.windowColor,
              '--topbar-color': exp.topBarColor
            }}
          >
            <div className={styles.retroWindow}>
              <div className={styles.windowTopBar}>
                <div className={styles.trafficLights}>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#E62727' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#0D92F4' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#1E93AB' }}></span>
                </div>
                <h3 className={styles.windowTitle}>
                  {exp.title}
                  {exp.ageRange && <span className={styles.ageRange}> {exp.ageRange}</span>}
                </h3>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.companyName}>{exp.company}</div>
                <div className={styles.metaInfo}>
                  <span className={styles.metaItem}>📅 {exp.period}</span>
                  <span className={styles.metaItem}>📍 {exp.location}</span>
                </div>
                <div className={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <div key={idx} className={styles.descriptionItem}>
                      <span className={styles.bullet}>•</span>
                      <span className={styles.descriptionText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
