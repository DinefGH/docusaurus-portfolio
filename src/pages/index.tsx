import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header'; // default import matches your export
import headerStyles from '@site/src/components/header/header.module.css';
import Hero from '@site/src/components/hero'; // default import matches your export
import heroStyles from '@site/src/components/hero/hero.module.css';


export default function Home(): JSX.Element {
  return (
    <Layout
      title="Docusaurus Fabian Dürr"
      description="Angular 18, TypeScript, Django & DevOps — Portfolio"
    >
      <a id="top" />
      <Header
        nav={[
          { label: 'About me', href: '#hero' },
          { label: 'My Skills', href: '#my-skills' },
          { label: 'My Projects', href: '#my-project-highlights' },
          { label: 'Contact', href: '#contact' },
        ]}
      >
        <button type="button" className={headerStyles.langBtn}>EN</button>
        <button type="button" className={headerStyles.langBtn}>DE</button>
      </Header>

<section id="hero">
  <Hero
    greeting="Hey there. 👋 I am"
    name="Fabian Dürr"
    role="Security operations developer"
    about={`Write some information about yourself that is IT related.
For example: Why are you passionate about coding? What inspires you to improve your skills? Are you constantly learning and keeping up to date?`}
    cta={{ label: 'Contact me', href: '#contact' }}
    avatarSrc="/img/portfolio-portrait-docusaurus.png"   
    avatarAlt="Fabian Dürr portrait"
  />
</section>

      {/* TODO: add <MySkills />, <MyProjectHighlights />, <Contact />, <Footer /> */}
    </Layout>
  );
}