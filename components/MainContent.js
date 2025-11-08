"use client";
import styles from './MainContent.module.css';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import EducationSection from './sections/EducationSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import MenuBar from './MenuBar';

import { useEffect, useRef } from 'react';

const sections = [
  { id: 'projects', label: 'Projects', component: <ProjectsSection /> },
  { id: 'skills', label: 'Skills', component: <SkillsSection /> },
  { 
    id: 'education-certifications', 
    label: 'Education & Certifications', 
    component: (
      <div className={styles.sideBySideWrapper}>
        <section id="education" className={styles.sideBySideSection}>
          <EducationSection />
        </section>
        <section id="certifications" className={styles.sideBySideSection}>
          <CertificationsSection />
        </section>
      </div>
    )
  },
  { id: 'experience', label: 'Experience', component: <ExperienceSection /> },
  { id: 'about', label: 'About Me', component: <AboutSection /> },
  { id: 'contact', label: 'Contact Me', component: <ContactSection /> },
];

export default function MainContent() {
  // Refs for fade-in animation
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // If any part of the section is within the viewport, add visible; else remove it
        if (rect.bottom > 60 && rect.top < window.innerHeight - 60) {
          ref.classList.add(styles.visible);
        } else {
          ref.classList.remove(styles.visible);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.mainContent}>
      <MenuBar />
      {sections.map((section, idx) => {
        // Special handling for the combined education-certifications section
        if (section.id === 'education-certifications') {
          return (
            <div
              key={section.id}
              ref={el => (sectionRefs.current[idx] = el)}
              className={`${styles.sectionWrapper} ${styles.educationCertifications}`}
            >
              {section.component}
            </div>
          );
        }
        
        return (
          <section
            key={section.id}
            id={section.id}
            ref={el => (sectionRefs.current[idx] = el)}
            className={
              [
                'projects',
                'certifications',
                'education',
                'experience',
                'skills',
                'about',
              ].includes(section.id)
                ? `${styles.sectionWrapper} ${styles[section.id]}`
                : styles.sectionWrapper
            }
          >
            {section.component}
          </section>
        );
      })}
    </main>
  );
}
