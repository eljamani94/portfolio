import React from 'react';
import styles from './SkillsSection.module.css';

const skillCategories = [
  {
    title: 'Programming & Data Analysis',
    skills: ['Python', 'R', 'SQL', 'Pandas', 'Numpy', 'Statsmodels']
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-Learn', 'XGBoost', 'TensorFlow', 'Keras', 'LangChain', 'Hugging Face', 'MLflow']
  },
  {
    title: 'Data Visualization & Notebooks',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Google Colab']
  },
  {
    title: 'Cloud, Deployment & Tools',
    skills: ['BigQuery', 'Google Compute', 'Cloud Storage', 'Git', 'Docker', 'FastAPI', 'Prefect', 'Streamlit']
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical thinking', 'Problem-solving', 'Adaptability', 'Project management', 'Communication', 'Collaboration']
  }
];

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
