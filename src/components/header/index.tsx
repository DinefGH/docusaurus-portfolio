// src/components/header/index.tsx
import React, {useEffect, useRef, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import styles from './header.module.css';

export interface NavItem { label: string; href: string; }

interface HeaderProps {
  logoSrc?: string;
  nav: ReadonlyArray<NavItem>;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, nav }) => {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);

  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const {createUrl} = useAlternatePageUtils();
  const enUrl = createUrl({locale: 'en', fullyQualified: false});
  const deUrl = createUrl({locale: 'de', fullyQualified: false});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open && firstFocusable.current) firstFocusable.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    window.location.assign(href);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {logoSrc && (
          <a className={styles.brand} href="#top" aria-label="Home">
            <img src={logoSrc} alt="Logo" />
          </a>
        )}

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.lang}>
          <a
            href={enUrl}
            className={styles.langBtn}
            aria-pressed={currentLocale === 'en'}
            onClick={(e) => {
              if (currentLocale === 'en') { e.preventDefault(); }
            }}
          >
            EN
          </a>
          <a
            href={deUrl}
            className={styles.langBtn}
            aria-pressed={currentLocale === 'de'}
            onClick={(e) => {
              if (currentLocale === 'de') { e.preventDefault(); }
            }}
          >
            DE
          </a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <button
            ref={firstFocusable}
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            
          </button>

          <ul className={styles.menu} role="menu">
            {nav.map((item) => (
              <li key={item.href} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={styles.menuLink}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.menuLang}>
            <button
              type="button"
              className={styles.menuLangBtn}
              onClick={() => go(enUrl)}
              aria-pressed={currentLocale === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={styles.menuLangBtn}
              onClick={() => go(deUrl)}
              aria-pressed={currentLocale === 'de'}
            >
              DE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
