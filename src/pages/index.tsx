import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header'; // default import matches your export
import headerStyles from '@site/src/components/header/header.module.css';
import Hero from '@site/src/components/hero'; // default import matches your export
import heroStyles from '@site/src/components/hero/hero.module.css';
import mySkillsStyles from '@site/src/components/my-skills/my-skills.module.css';
import MySkills, { SkillItem } from '@site/src/components/my-skills';


export default function Home(): JSX.Element {

  const skills: ReadonlyArray<SkillItem> = [
    { name: 'HTML', iconSrc: '/img/html.png' },
    { name: 'CSS', iconSrc: '/img/css.png' },
    { name: 'Static site generator', iconSrc: '/img/ssg.png' },
    { name: 'Python', iconSrc: '/img/python.png' },
    { name: 'Shell scripting', iconSrc: '/img/shell.png' },
    { name: 'YAML', iconSrc: '/img/yaml.png' },
    { name: 'Container', iconSrc: '/img/docker.png' },
    { name: 'CI/CD with GitHub Actions', iconSrc: '/img/gha.png' },
    { name: 'IT Security', iconSrc: '/img/security.png' },
  ];

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



<MySkills title="My skills" items={skills} />
    </Layout>
  );
}