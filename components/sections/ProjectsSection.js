import styles from './ProjectsSection.module.css';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

const projects = [
  {
    name: 'GPT from Scratch',
    image: `${basePath}/project1.png`,
    desc: 'A from-scratch implementation of GPT-style transformer decoder architecture for text generation',
    skills: [
      'Built complete GPT-style transformer decoder architecture using TensorFlow/Keras from scratch.',
      'Implemented custom attention mechanisms, positional embeddings, and training pipeline.',
      'Developed text generation capabilities with configurable model parameters and architecture.',
    ],
    link: 'https://github.com/eljamani94/gpt-from-scratch',
    color: '#1E93AB', // Teal
    rotation: -1.5
  },
  {
    name: 'RAG System for European Parliament Documents',
    image: `${basePath}/project2.png`,
    desc: 'Retrieval Augmented Generation system for European Parliament transcripts',
    skills: [
      'Built RAG system using LangChain, Chroma vector store, and Google Gemini for parliamentary documents.',
      'Implemented semantic search and temporal filtering for efficient question-answering.',
      'Developed persistent embeddings system for optimized retrieval over large document collections.',
    ],
    link: 'https://github.com/eljamani94/european-parliament-rag-system',
    color: '#77CDFF', // Light blue
    rotation: 2
  },
  {
    name: 'House Prices Prediction - Kaggle Competition',
    image: `${basePath}/project3.png`,
    desc: 'Advanced regression pipeline achieving RMSE of 0.12336 - Top 10% solution',
    skills: [
      'Built end-to-end regression pipeline with comprehensive EDA and feature engineering.',
      'Implemented ensemble methods combining Gradient Boosting and Random Forest models.',
      'Achieved top 15% ranking on Kaggle leaderboard with RMSE of 0.12336.',
    ],
    link: 'https://github.com/eljamani94/house-prices-prediction',
    color: '#E62727', // Red
    rotation: -2
  },
  {
    name: 'Cyclistic Bike Share Analysis',
    image: `${basePath}/project4.png`,
    desc: 'Complete data analysis comparing casual riders vs annual members',
    skills: [
      'Performed comprehensive data cleaning and exploratory analysis of bike-share usage patterns using R.',
      'Created visualizations to identify usage trends and behavioral differences between user types.',
      'Delivered actionable business recommendations for membership conversion strategy.',
    ],
    link: 'https://github.com/eljamani94/house-prices-prediction',
    color: '#F95454', // Light red
    rotation: 1
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.stickyNotesContainer}>
        {projects.map((proj, idx) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stickyNote}
            style={{
              backgroundColor: proj.color,
              transform: `rotate(${proj.rotation}deg)`,
              zIndex: projects.length - idx
            }}
          >
            <div className={styles.noteHeader}>
              <h3 className={styles.noteTitle}>{proj.name}</h3>
            </div>
            <div className={styles.projectImageWrapper}>
              <img
                src={proj.image}
                alt={proj.name}
                className={styles.projectImg}
              />
            </div>
            <div className={styles.noteContent}>
              <p className={styles.projectDesc}>{proj.desc}</p>
              <div className={styles.projectSkills}>
                {proj.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className={styles.skillItem}>
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.noteFooter}>
              <span className={styles.noteHint}>Click to view project</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
