import React, {useEffect, useRef, useState} from 'react';
import styles from './header.module.css';

export interface NavItem { label: string; href: string; }
interface HeaderProps {
  logoSrc?: string;
  nav: ReadonlyArray<NavItem>;
  locale?: 'en' | 'de';
  onLocaleChange?: (loc: 'en' | 'de') => void;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  nav,
  locale = 'en',
  onLocaleChange,
}) => {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);


  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);


  useEffect(() => {
    if (open && firstFocusable.current) firstFocusable.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const switchLocale = (loc: 'en'|'de') => {
    onLocaleChange?.(loc);
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {logoSrc && (
          <a className={styles.brand} href="#top" aria-label="Home">
            <img src={logoSrc} alt="Logo" />
          </a>
        )}

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop locale */}
        <div className={styles.lang}>
          <button
            type="button"
            className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
            onClick={() => switchLocale('en')}
            aria-pressed={locale === 'en'}
          >EN</button>
          <button
            type="button"
            className={`${styles.langBtn} ${locale === 'de' ? styles.langActive : ''}`}
            onClick={() => switchLocale('de')}
            aria-pressed={locale === 'de'}
          >DE</button>
        </div>

        {/* Mobile hamburger */}
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

      {/* Mobile overlay menu */}
      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <button
            ref={firstFocusable}
            type="button"
            className={styles.close}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <ul className={styles.menu} role="menu">
            {nav.map((item) => (
              <li key={item.href} role="none">
                <a role="menuitem" href={item.href} className={styles.menuLink} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.menuLang}>
            <button
              type="button"
              className={`${styles.menuLangBtn} ${locale === 'en' ? styles.menuLangActive : ''}`}
              onClick={() => switchLocale('en')}
            >EN</button>
            <button
              type="button"
              className={`${styles.menuLangBtn} ${locale === 'de' ? styles.menuLangActive : ''}`}
              onClick={() => switchLocale('de')}
            >DE</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
