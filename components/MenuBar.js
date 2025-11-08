'use client';

import styles from './MenuBar.module.css';
import { FaHome, FaFolderOpen, FaWrench, FaBriefcase, FaGraduationCap, FaPen, FaEnvelope, FaDownload, FaUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'projects', icon: <FaFolderOpen />, label: 'Projects' },
  { id: 'skills', icon: <FaWrench />, label: 'Skills' },
  { id: 'certifications', icon: <FaGraduationCap />, label: 'Certifications' },
  { id: 'education', icon: <FaPen />, label: 'Education' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'about', icon: <FaUser />, label: 'About Me' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact Me' },
];

export default function MenuBar() {
  const [active, setActive] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      // Find the heading (h2) element within the section
      const heading = el.querySelector('h2.heading, h2');
      if (heading) {
        // Calculate the position of the heading
        const headingRect = heading.getBoundingClientRect();
        const absoluteHeadingTop = headingRect.top + window.pageYOffset;
        // Offset to account for menu bar and padding (approximately 100px)
        const offset = 100;
        // Scroll to the heading position with offset
        window.scrollTo({
          top: absoluteHeadingTop - offset,
          behavior: 'smooth'
        });
      } else {
        // Fallback: if no heading found, scroll to section start
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className={styles.menuBarWrapper}>
      <nav className={styles.menuBar}>
        <ul>
          {sections.map(section => (
            <li
              key={section.id}
              className={active === section.id ? styles.active : ''}
              onClick={() => handleNav(section.id)}
              title={section.label}
            >
              {section.icon}
            </li>
          ))}
          <li className={styles.downloadBtn} title="Download Resume">
            <a href="/resume_french.pdf" download style={{display:'flex',alignItems:'center',justifyContent:'center',color:'inherit'}}>
              <FaDownload />
            </a>
            <div className={styles.arrowText}>DOWNLOAD RESUME</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
