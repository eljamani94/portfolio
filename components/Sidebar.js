'use client';

import { useState } from 'react';
import styles from './Sidebar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <>
      <button 
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      <img src={`${basePath}/my_photo.jpg`} alt="Profile" className={styles.profileImage} />
      <h2 className={styles.sidebarName}>Aymen El Jamani</h2>
      <div className={styles.sidebarBio}>
        Data Scientist | ML Engineer
      </div>
      <div className={styles.socials}>
        <div className={styles.retroWindow}>
          <div className={styles.windowTopBar}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
            </div>
            <h3 className={styles.windowTitle}>Social Links</h3>
          </div>
          <div className={styles.windowContent}>
            <div className={styles.socialsList}>
              <a href="https://github.com/eljamani94" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/aymen-eljamani/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.codewars.com/users/zerowaymen" aria-label="Codewars" target="_blank" rel="noopener noreferrer"><img src={`${basePath}/icons8-codewars-48.png`} alt="Codewars" width="22" height="22" style={{display:'block'}} /></a>
              <a href="https://www.kaggle.com/aymeneljamani" aria-label="Kaggle" target="_blank" rel="noopener noreferrer"><img src={`${basePath}/icons8-kaggle-48.png`} alt="Kaggle" width="22" height="22" style={{display:'block'}} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.retroWindow}>
          <div className={styles.windowTopBar}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
              <span className={styles.trafficLight}></span>
            </div>
            <h3 className={styles.windowTitle}>Contact</h3>
          </div>
          <div className={styles.windowContent}>
            <div className={styles.contactRow}>
          <span className={styles.contactIcon}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></span>
          <a href="mailto:eljamani.aej@gmail.com" className={styles.contactText}>eljamani.aej@gmail.com</a>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11z"/></svg></span>
          <span className={styles.contactText}>+212 773 567 766</span>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}><img src={`${basePath}/icons8-wechat-50.png`} alt="WeChat" width="18" height="18" style={{display:'block'}} /></span>
          <span className={styles.contactText}>WeChat: zeroa94</span>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.contactIcon}><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
          <span className={styles.contactText}>Casablanca, Morocco</span>
        </div>
          </div>
        </div>
      </div>
      <button 
        className={styles.closeButton}
        onClick={closeMenu}
        aria-label="Close menu"
      >
        ×
      </button>
    </aside>
    </>
  );
}
