'use client';

import styles from './MenuBar.module.css';
import { FaHome, FaFolderOpen, FaWrench, FaBriefcase, FaGraduationCap, FaPen, FaEnvelope, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'about', icon: <FaHome />, label: 'About Me' },
  { id: 'skills', icon: <FaWrench />, label: 'Skills' },
  { id: 'projects', icon: <FaFolderOpen />, label: 'Projects' },
  { id: 'certifications', icon: <FaGraduationCap />, label: 'Certifications' },
  { id: 'education', icon: <FaPen />, label: 'Education' },
  { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
  { id: 'contact', icon: <FaEnvelope />, label: 'Contact Me' },
];

export default function MenuBar() {
  const [active, setActive] = useState('about');

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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
          <a href="/resume.pdf" download style={{display:'flex',alignItems:'center',justifyContent:'center',color:'inherit'}}>
            <FaDownload />
          </a>
        </li>
      </ul>
    </nav>
  );
}
