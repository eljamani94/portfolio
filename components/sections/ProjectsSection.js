import styles from './ProjectsSection.module.css';
import React, { useState } from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const projects = [
  {
    name: 'GPT from Scratch',
    image: `${basePath}/project1.jpg`,
    desc: 'A from-scratch implementation of GPT-style transformer decoder architecture for text generation',
    skills: [
      'Built complete GPT-style transformer decoder architecture using TensorFlow/Keras from scratch.',
      'Implemented custom attention mechanisms, positional embeddings, and training pipeline.',
      'Developed text generation capabilities with configurable model parameters and architecture.',
    ],
    link: 'https://github.com/eljamani94/gpt-from-scratch',
  },
  {
    name: 'RAG System for European Parliament Documents',
    image: `${basePath}/project2.jpg`,
    desc: 'Retrieval Augmented Generation system for European Parliament transcripts',
    skills: [
      'Built RAG system using LangChain, Chroma vector store, and Google Gemini for parliamentary documents.',
      'Implemented semantic search and temporal filtering for efficient question-answering.',
      'Developed persistent embeddings system for optimized retrieval over large document collections.',
    ],
    link: 'https://github.com/eljamani94/european-parliament-rag-system',
  },
  {
    name: 'House Prices Prediction - Kaggle Competition',
    image: `${basePath}/project3.jpg`,
    desc: 'Advanced regression pipeline achieving RMSE of 0.12336 - Top 15% solution',
    skills: [
      'Built end-to-end regression pipeline with comprehensive EDA and feature engineering.',
      'Implemented ensemble methods combining Gradient Boosting and Random Forest models.',
      'Achieved top 15% ranking on Kaggle leaderboard with RMSE of 0.12336.',
    ],
    link: 'https://github.com/eljamani94/house-prices-prediction',
  },
  {
    name: 'Cyclistic Bike Share Analysis',
    image: `${basePath}/project4.jpg`,
    desc: 'Complete data analysis comparing casual riders vs annual members',
    skills: [
      'Performed comprehensive data cleaning and exploratory analysis of bike-share usage patterns using R.',
      'Created visualizations to identify usage trends and behavioral differences between user types.',
      'Delivered actionable business recommendations for membership conversion strategy.',
    ],
    link: 'https://github.com/eljamani94/house-prices-prediction',
  },
];

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
