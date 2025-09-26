import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header'; // default import matches your export
import styles from '@site/src/components/header/header.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout title="Portfolio" description="DevSecOps Portfolio">
      <Header
        nav={[
            { label: 'About me', href: '#hero' },
            { label: 'My Skills', href: '#my-skills' },
            { label: 'My Projects', href: '#my-project-highlights' },
            { label: 'Contact', href: '#contact' },

            
        ]}

      >
        <button className={styles.langBtn}>EN</button>
        <button className={styles.langBtn}>DE</button>
</Header>
      {/* other sections */}
    </Layout>
  );
}