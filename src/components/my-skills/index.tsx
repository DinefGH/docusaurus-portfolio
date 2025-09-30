import React from 'react';
import styles from './my-skills.module.css';

export interface SkillItem {
  name: string;
  iconSrc: string;     // e.g. /img/skills/html.svg
  alt?: string;
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;