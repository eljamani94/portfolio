import React from 'react';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Programming & Data Analysis',
    skills: ['Python', 'R', 'SQL', 'Pandas', 'Numpy', 'Statsmodels'],
    windowColor: '#a8e6cf', // Light teal
    topBarColor: '#ffd3b6' // Light peach
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'Keras', 'LangChain', 'Hugging Face', 'MLflow'],
    windowColor: '#ffaaa5', // Light pink
    topBarColor: '#ffd3a5' // Light orange
  },
  {
    title: 'Data Visualization & Notebooks',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Google Colab'],
    windowColor: '#c7ceea', // Light purple
    topBarColor: '#ffd3b6' // Light peach
  },
  {
    title: 'Cloud, Deployment & Tools',
    skills: ['BigQuery', 'Google Compute', 'Cloud Storage', 'Git', 'Docker', 'FastAPI', 'Prefect', 'Streamlit'],
    windowColor: '#a8d8ea', // Light blue
    topBarColor: '#ffaaa5' // Light pink
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical thinking', 'Problem-solving', 'Adaptability', 'Project management', 'Communication', 'Collaboration'],
    windowColor: '#ffd3a5', // Light yellow/orange
    topBarColor: '#c7ceea' // Light purple
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
                  <span className={styles.trafficLight} style={{ backgroundColor: '#ff5f57' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#ffbd2e' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#28ca42' }}></span>
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
