import React from 'react';
import styles from './hero.module.css';

interface HeroProps {
  greeting: string;
  name: string;
  role: string;
  about: string;
  cta: { label: string; href: string };
  avatarSrc: string;
  avatarAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  greeting,
  name,
  role,
  about,
  cta,
  avatarSrc,
  avatarAlt = 'Portrait photo',
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.greeting}>{greeting}</p>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.role}>{role}</p>

            <p className={styles.about}>{about}</p>

            <div className={styles.actions}>
              <a className={styles.cta} href={cta.href}>{cta.label}</a>
            </div>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.photoCard}>
              <img src={avatarSrc} alt={avatarAlt} className={styles.photo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;