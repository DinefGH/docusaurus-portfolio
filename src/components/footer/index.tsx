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
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 5l6 6h-4v8h-4v-8H6l6-6z"
              fill="currentColor"
            />
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
