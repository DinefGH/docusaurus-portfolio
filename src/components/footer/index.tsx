import React from 'react';
import styles from './footer.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

interface FooterProps {
  name: string;                  
  year?: number;                 
  legalLabel?: string;           
  legalHref?: string;           
}

const Footer: React.FC<FooterProps> = ({
  name,
  year = new Date().getFullYear(),
  legalLabel = translate({ id: 'footer.legal', message: 'Legal notice' }),
  legalHref = '/legal',
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.toTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
<svg width="24" height="64" viewBox="0 0 24 56" aria-hidden="true">
  <line x1="12" y1="44" x2="12" y2="12" stroke="currentColor" stroke-width="2" />
  <path d="M6 18l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" />
</svg>
        </button>

        <div className={styles.copy}>© {name} {year}</div>

<Link className={styles.legal} to="/legal">
  {legalLabel}
</Link>
      </div>
    </footer>
  );
};

export default Footer;
