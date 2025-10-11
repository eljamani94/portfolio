import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={styles.hero}>
      <h3 className={styles.aboutHeading}>About Me.</h3>
      <div style={{ maxWidth: '100%', width: '100%', color: '#cfe5e7', fontSize: 18, marginTop: 24, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p className={styles.body}>
          Passionate about AI and data science, with experience in machine learning and deep learning. My time in China strengthened my communication, adaptability, and teamwork skills.

My goal is to work with collaborative, driven, and innovative people, apply and grow my skills, and build intelligent systems that make real-world impact.
        </p>
      </div>
    </div>
  );
}
