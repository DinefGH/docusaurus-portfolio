import React, { useState } from 'react';
import styles from './my-project-highlights.module.css';

export interface ProjectTag {
  label: string;
  iconSrc?: string; // optional small icon in the chip
}

export interface ProjectItem {
  id: string;
  title: string;
  tags: ReadonlyArray<ProjectTag>;
  description: string;
  imageSrc: string;
  liveUrl?: string;
  repoUrl?: string;
  docsUrl?: string;
}

interface ProjectHighlightsProps {
  headline: string;
  projects: ReadonlyArray<ProjectItem>;
  seeMoreHref?: string;
}

const MyProjectHighlights: React.FC<ProjectHighlightsProps> = ({
  headline,
  projects,
  seeMoreHref,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = projects[activeIdx];

  return (
    <section id="my-project-highlights" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.h2}>{headline}</h2>

        {/* ------------------ DESKTOP GRID ------------------ */}
        <div className={styles.grid}>
          {/* Left numbered list */}
          <ol className={styles.list} aria-label="Project list">
            {projects.map((p, i) => (
              <li key={p.id} className={styles.listItem}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`${styles.listBtn} ${i === activeIdx ? styles.active : ''}`}
                  aria-current={i === activeIdx ? 'true' : undefined}
                >
                  <span className={styles.index}>{i + 1}.</span> {p.title}
                </button>
              </li>
            ))}
            {seeMoreHref && (
              <li className={styles.moreRow}>
                <a className={styles.moreLink} href={seeMoreHref}>
                  ↳ see more projects
                </a>
              </li>
            )}
          </ol>

          {/* Right featured card */}
          <article className={styles.card} aria-live="polite">
            <div className={styles.cardHead}>
              <h3 className={styles.cardTitle}>{active.title}</h3>
              <div className={styles.badges}>
                {active.tags.map((t) => (
                  <span key={t.label} className={styles.badge}>
                    {t.iconSrc && <img alt="" src={t.iconSrc} />}
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.media}>
                <img src={active.imageSrc} alt="" loading="lazy" />
              </div>
              <p className={styles.desc}>{active.description}</p>
            </div>

            <div className={styles.actions}>
              {active.docsUrl && (
                <a
                  className={styles.primaryBtn}
                  href={active.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              )}
              {active.repoUrl && (
                <a
                  className={styles.secondaryBtn}
                  href={active.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {active.liveUrl && (
                <a
                  className={styles.secondaryBtn}
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        </div>

        {/* ------------------ MOBILE STACK ------------------ */}
        <div className={styles.stack} aria-label="Projects">
          {projects.map((p, i) => (
            <article key={p.id} className={styles.stackCard}>
              <h3 className={styles.stackHeading}>
                <span className={styles.stackIndex}>{i + 1}.</span>
                {p.title}
              </h3>

              <div className={styles.stackBadges}>
                {p.tags.map((t) => (
                  <span key={t.label} className={styles.badge}>
                    {t.iconSrc && <img alt="" src={t.iconSrc} />}
                    {t.label}
                  </span>
                ))}
              </div>

              <div className={styles.stackMedia}>
                <img src={p.imageSrc} alt="" loading="lazy" />
              </div>

              <p className={styles.stackDesc}>{p.description}</p>

              <div className={styles.stackActions}>
                {p.docsUrl && (
                  <a
                    className={styles.primaryBtn}
                    href={p.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    className={styles.secondaryBtn}
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    className={styles.secondaryBtn}
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjectHighlights;
