import styles from './ProjectsSection.module.css';

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
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Recent Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((proj, idx) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            <div className={styles.browserWindow}>
              <div className={styles.browserTopBar}>
                <div className={styles.trafficLights}>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#ff5f57' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#ffbd2e' }}></span>
                  <span className={styles.trafficLight} style={{ backgroundColor: '#28ca42' }}></span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <div className={styles.projectImageWrapper}>
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className={styles.projectImg}
                  />
                </div>
                <div className={styles.projectContent}>
                  <h3>{proj.name}</h3>
                  <p className={styles.projectDesc}>{proj.desc}</p>
                  <ul className={styles.projectSkills}>
                    {proj.skills.map((skill, skillIdx) => (
                      <li key={skillIdx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
