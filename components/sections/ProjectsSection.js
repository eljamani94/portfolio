import styles from './ProjectsSection.module.css';

const projects = [
  {
    name: 'House Prices – Advanced Regression Techniques | Kaggle',
    image: '/project1.jpg',
    desc: 'Score: 13.276 RMSLE (Leaderboard)',
    skills: [
      'Built an end-to-end regression pipeline with Scikit-learn, including KNN imputation, feature scaling, One-Hot Encoding, cyclical features, and log-target transformation.',
      'Tuned ensemble models (Gradient Boosting & Random Forest) via GridSearchCV and (SelectFromModel) to achieve robust generalization.',
      'Strengthened skills in feature engineering, model optimization, and cross-validation, improving baseline RMSLE from 0.21 → 0.13.',
    ],
    link: 'https://kaggle.com/',
  },
  {
    name: 'Olist E-Commerce Data Analysis',
    image: '/project2.jpg',
    desc: 'Predicted house sale prices using advanced regression pipelines.',
    skills: [
      'Cleaned and joined multi-table e-commerce data using pandas and SQLwith an OOP pipeline design.',
      'Built an interactive Plotly Dash dashboard to visualize sales trends, customer satisfaction, and delivery performance',
      'Applied machine learning models to predict late deliveries, improving logistics efficiency.',
    ],
    link: 'https://github.com/',
  },
  {
    name: 'Cyclistic Bike Share Case Study',
    image: '/project3.jpg',
    desc: 'Analyzed e-commerce data to optimize operations and delivery',
    skills: [
      'Processed and analyzed 500k+ bike share trips using R, data.table, and ggplot2, improving data processing speed by 4× compared to standard methods.',
      'Built interactive visualizations to identify peak usage hours, high-demand stations, and rider behavior trends.',
      'Delivered insights that informed marketing campaigns and operational adjustments, increasing weekday ridership by 12% and reducing idle bikes by 15%.',
    ],
    link: 'https://github.com/',
  },
];

import React, { useState } from 'react';

export default function ProjectsSection() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, idx: null });

  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Recent Projects</h2>
      <div className={styles.projectList}>
        {projects.map((proj, idx) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
            onMouseMove={e => setTooltip({ visible: true, x: e.clientX, y: e.clientY, idx })}
            onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
            onMouseEnter={e => setTooltip({ visible: true, x: e.clientX, y: e.clientY, idx })}
          >
            <div style={{ flex: 1 }}>
              <h3>{proj.name}</h3>
              <p style={{ marginBottom: 10 }}>{proj.desc}</p>
              <div style={{ marginBottom: 8 }}>
                <strong>Description:</strong>
                <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                  {proj.skills.map((skill) => (
                    <li key={skill} style={{ fontSize: 14, color: '#5d7b80', marginBottom: 2 }}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              src={proj.image}
              alt={proj.name}
              className={styles.projectImg}
              style={{ width: 170, height: 120, objectFit: 'cover', borderRadius: 12 }}
            />
            <span className={styles.projectTooltip}>Click for more details</span>
          </a>
        ))}
      </div>
    </div>
  );
}
