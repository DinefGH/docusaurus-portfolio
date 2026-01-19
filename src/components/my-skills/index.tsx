import React from 'react';
import styles from './my-skills.module.css';

export interface SkillItem {
  name: string;
  iconSrc: string; 
  alt?: string;
  highlights?: string[];
}

interface MySkillsProps {
  title?: string;
  items: ReadonlyArray<SkillItem>;
}

const MySkills: React.FC<MySkillsProps> = ({ title = 'My skills', items }) => {
  return (
    <section id="my-skills" className={styles.wrap}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.name} className={styles.card} aria-label={it.name}>
              <img className={styles.icon} src={it.iconSrc} alt={it.alt ?? it.name} />
              <div className={styles.label}>{it.name}</div>

{it.highlights && it.highlights.length > 0 && (
  <div className={styles.overlay} aria-hidden="true">
    <div className={styles.overlayCard}>
      {/* NEW: icon + name inside overlay */}
      <div className={styles.overlayHead}>
        <img className={styles.overlayIcon} src={it.iconSrc} alt="" />
        <div className={styles.overlayName}>{it.name}</div>
      </div>

      <ul className={styles.overlayList}>
        {it.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  </div>
)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;