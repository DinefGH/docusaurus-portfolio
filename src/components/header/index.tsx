// src/components/header/index.tsx
import React from 'react';
import styles from './header.module.css';

interface NavItem {
  label: string;
  href: string;
}
interface HeaderProps {
  logoSrc?: string;
  nav: ReadonlyArray<NavItem>;
  children?: React.ReactNode; // ✅ add children prop
}

const Header: React.FC<HeaderProps> = ({ logoSrc = '/img/logo.svg', nav, children }) => {
  return (
    <header className={styles.header}>
      <div className="containerNarrow">
        <div className={styles.row}>

          <nav className={styles.nav} aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </a>
            ))}
          </nav>

          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;