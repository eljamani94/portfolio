import React from 'react';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Programming & Data Analysis',
    skills: ['Python', 'R', 'SQL', 'Pandas', 'Numpy', 'Statsmodels'],
    windowColor: '#1E93AB', // Teal
    topBarColor: '#0D92F4' // Blue
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'Keras', 'LangChain', 'Hugging Face', 'MLflow'],
    windowColor: '#E62727', // Red
    topBarColor: '#C62E2E' // Dark red
  },
  {
    title: 'Data Visualization & Notebooks',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Google Colab'],
    windowColor: '#77CDFF', // Light blue
    topBarColor: '#0D92F4' // Blue
  },
  {
    title: 'Cloud, Deployment & Tools',
    skills: ['BigQuery', 'Google Compute', 'Cloud Storage', 'Git', 'Docker', 'FastAPI', 'Prefect', 'Streamlit'],
    windowColor: '#F95454', // Light red
    topBarColor: '#E62727' // Red
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical thinking', 'Problem-solving', 'Adaptability', 'Project management', 'Communication', 'Collaboration'],
    windowColor: '#F3F2EC', // Cream
    topBarColor: '#DCDCDC' // Light gray
  }
];

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category, idx) => (
          <div 
            key={category.title} 
            className={styles.skillCategory}
            style={{
              '--window-color': category.windowColor,
              '--topbar-color': category.topBarColor
            }}
          >
            <div className={styles.retroWindow}>
              <div className={styles.windowTopBar}>
                <div className={styles.trafficLights}>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#E62727' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#0D92F4' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#1E93AB' }}></span>
                </div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill} className={styles.skillItem}>
                      {skill}
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
