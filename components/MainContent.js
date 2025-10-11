"use client";
import styles from './MainContent.module.css';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import MenuBar from './MenuBar';

import { useEffect, useRef } from 'react';

const sections = [
  { id: 'about', label: 'About Me', component: <HeroSection /> },
  { id: 'projects', label: 'Projects', component: <ProjectsSection /> },
  { id: 'certifications', label: 'Certifications', component: <CertificationsSection /> },
  { id: 'education', label: 'Education', component: <EducationSection /> },
  { id: 'experience', label: 'Experience', component: <ExperienceSection /> },
  { id: 'skills', label: 'Skills', component: <SkillsSection /> },
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
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          ref={el => (sectionRefs.current[idx] = el)}
          className={
            [
              'about',
              'projects',
              'certifications',
              'education',
              'experience',
              'skills',
            ].includes(section.id)
              ? `${styles.sectionWrapper} ${styles[section.id]}`
              : styles.sectionWrapper
          }
        >
          {section.component}
        </section>
      ))}
    </main>
  );
}
