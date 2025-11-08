import React, { useState } from 'react';
import styles from './EducationSection.module.css';

const educationList = [
  {
    school: 'Le Wagon',
    startDate: 'Jan 2025',
    endDate: 'Mar 2025',
    country: 'France',
    degree: 'Data Science & AI Bootcamp',
    yearRange: '2025'
  },
  {
    school: 'SUPINFO International University',
    startDate: 'Sep 2018',
    endDate: 'Jun 2020',
    country: 'France',
    degree: 'Master of Science - MS, Computer Science',
    yearRange: '2018-2020'
  },
  {
    school: 'University of Haute-Alsace',
    startDate: 'Sep 2017',
    endDate: 'Jun 2018',
    country: 'France',
    degree: "Bachelor's Degree, Applied Computer Methods in Business Management (MIAGE)",
    yearRange: '2017-2018'
  },
  {
    school: 'IGA - Institut supérieur du Génie Appliqué',
    startDate: 'Sep 2016',
    endDate: 'Jun 2018',
    country: 'Morocco',
    degree: "Bachelor's Degree, Computer and Electronic Systems Engineering (ISIE)",
    yearRange: '2016-2018'
  },
  {
    school: 'Sidi Mohammed Ben Abdellah University-EST Fez',
    startDate: 'Sep 2013',
    endDate: 'Jun 2015',
    country: 'Morocco',
    degree: 'University Technology Degree (DUT), Electronics and Industrial Computing',
    yearRange: '2013-2015'
  },
];

export default function EducationSection() {
  // Initialize only the first folder (most recent) as expanded
  const allYearRanges = [...new Set(educationList.map(edu => edu.yearRange))];
  // Sort by first year, descending (same as in render)
  const sortedYearRanges = allYearRanges.sort((a, b) => {
    const yearA = parseInt(a.split('-')[0]);
    const yearB = parseInt(b.split('-')[0]);
    return yearB - yearA;
  });
  const [expandedFolders, setExpandedFolders] = useState(
    sortedYearRanges.reduce((acc, yearRange, index) => {
      acc[yearRange] = index === 0; // Only first folder is open
      return acc;
    }, {})
  );

  // Group education by year range
  const groupedEducation = educationList.reduce((acc, edu) => {
    const yearRange = edu.yearRange;
    if (!acc[yearRange]) {
      acc[yearRange] = [];
    }
    acc[yearRange].push(edu);
    return acc;
  }, {});

  const toggleFolder = (yearRange) => {
    setExpandedFolders(prev => ({
      ...prev,
      [yearRange]: !prev[yearRange]
    }));
  };

  return (
    <section className={styles.educationSection}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.fileExplorer}>
        <div className={styles.explorerContent}>
          {Object.keys(groupedEducation).sort((a, b) => {
            // Sort by first year, descending
            const yearA = parseInt(a.split('-')[0]);
            const yearB = parseInt(b.split('-')[0]);
            return yearB - yearA;
          }).map((yearRange) => {
            const isExpanded = expandedFolders[yearRange];
            const files = groupedEducation[yearRange];
            
            return (
              <div key={yearRange} className={styles.folderContainer}>
                <div className={styles.retroWindow}>
                  <div 
                    className={styles.windowTopBar}
                    onClick={() => toggleFolder(yearRange)}
                  >
                    <div className={styles.trafficLights}>
                      <span className={styles.trafficLight}></span>
                      <span className={styles.trafficLight}></span>
                      <span className={styles.trafficLight}></span>
                    </div>
                    <div className={styles.folder}>
                      <span className={styles.expandIcon}>
                        {isExpanded ? '−' : '+'}
                      </span>
                      <span className={styles.folderIcon}>
                        {isExpanded ? '📂' : '📁'}
                      </span>
                      <span className={styles.folderName}>{yearRange}</span>
                      <span className={styles.fileCount}>({files.length})</span>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className={styles.windowContent}>
                      <div className={styles.filesContainer}>
                        {files.map((edu, idx) => (
                          <div key={edu.school + edu.startDate} className={styles.file}>
                            <span className={styles.fileIcon}>📄</span>
                            <div className={styles.fileContent}>
                              <div className={styles.fileName}>{edu.school}</div>
                              <div className={styles.fileDetails}>
                                <span className={styles.fileDegree}>{edu.degree}</span>
                                <span className={styles.fileMeta}>
                                  {edu.startDate} – {edu.endDate} • {edu.country}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
