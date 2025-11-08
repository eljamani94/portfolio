import React from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.retroWindow}>
        <div className={styles.windowTopBar}>
          <div className={styles.trafficLights}>
            <span className={styles.trafficLight}></span>
            <span className={styles.trafficLight}></span>
            <span className={styles.trafficLight}></span>
          </div>
          <h3 className={styles.windowTitle}>About Me</h3>
        </div>
        <div className={styles.windowContent}>
          <div className={styles.aboutText}>
            <p>
              I'm Aymen El Jamani, a data scientist based in Casablanca with a passion for turning complexity into clarity.
            </p>
            <p>
              My journey began with a Master's in IT from Supinfo International University and took an unexpected turn when I moved to China, an experience that fundamentally changed how I approach problems and work with people across cultures. After stepping away from tech, I discovered that what I missed most was the work itself: the challenge of extracting meaning from data and using it to drive real decisions.
            </p>
            <p>
              Today, I'm focused on data science, building skills in Python, machine learning, and deep learning through hands-on projects that balance technical rigor with creative problem-solving. What drives me is the intersection of logic and impact, whether that's understanding user behavior, optimizing business performance, or uncovering insights that weren't obvious before.
            </p>
            <p>
              I'm looking for opportunities where curiosity is valued, where challenges are met collaboratively, and where the work matters beyond the code. If you're building something meaningful and need someone who brings both technical capability and a global perspective, let's connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

