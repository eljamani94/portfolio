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
          <p className={styles.aboutText}>
            Passionate about AI and data science, with experience in machine learning and deep learning. My time in China strengthened my communication, adaptability, and teamwork skills. My goal is to work with collaborative, driven, and innovative people, apply and grow my skills, and build intelligent systems that make real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}

