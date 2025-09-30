import React from 'react';
import Layout from '@theme/Layout';
import Header from '@site/src/components/header'; // default import matches your export
import headerStyles from '@site/src/components/header/header.module.css';
import Hero from '@site/src/components/hero'; // default import matches your export
import heroStyles from '@site/src/components/hero/hero.module.css';
import mySkillsStyles from '@site/src/components/my-skills/my-skills.module.css';
import MySkills, { SkillItem } from '@site/src/components/my-skills';
import MyProjectHighlights, { ProjectItem } from '@site/src/components/my-project-highlights';


export default function Home(): JSX.Element {

  const skills: ReadonlyArray<SkillItem> = [
    { name: 'HTML', iconSrc: '/img/html.svg' },
    { name: 'CSS', iconSrc: '/img/css.svg' },
    { name: 'Static site generator', iconSrc: '/img/ssg.svg' },
    { name: 'Python', iconSrc: '/img/python.svg' },
    { name: 'Shell scripting', iconSrc: '/img/shell-light.svg' },
    { name: 'YAML', iconSrc: '/img/yaml.svg' },
    { name: 'Container', iconSrc: '/img/docker.svg' },
    { name: 'CI/CD with GitHub Actions', iconSrc: '/img/gha.svg' },
    { name: 'IT Security', iconSrc: '/img/security.svg' },
  ];

  const projects: ReadonlyArray<ProjectItem> = [
    {
      id: 'minecraft',
      title: 'Project Minecraft',
      tags: [
        { label: 'Yaml',           iconSrc: '/img/yaml-dark.svg' },
        { label: 'Shell scripting',iconSrc: '/img/shell-dark.svg' },
        { label: 'Container',      iconSrc: '/img/docker.svg' },
      ],
      description:
        `A fully containerized Minecraft Java Edition server setup using Docker Compose.  
        Includes a custom Dockerfile to build your own server image, an easy .env configuration for
        RAM, difficulty, and player limits, plus persistent world data. Quickly start, stop, and
        rebuild the server with simple Docker commands, perfect for running a personal or small
        community Minecraft server with minimal manual setup.`,
      imageSrc: '/img/minecraft.png',
      repoUrl: 'https://github.com/DinefGH/minecraft-server-DA',
    },

    {
      id: 'truck-signs',
      title: 'Truck Signs API',
      tags: [
        { label: 'Python',           iconSrc: '/img/python.svg' },
        { label: 'Shell scripting',iconSrc: '/img/shell-dark.svg' },
        { label: 'Container',      iconSrc: '/img/docker.svg' },
      ],
      description: `Django & DRF backend with modular environment configs (.env), PostgreSQL, and Docker support. 
        Implements nested serializers for dynamic product customization, custom CBVs for order/payment workflows, 
        and Stripe API integration for secure checkout.`,
      imageSrc: '/img/truck-signs-logo.png',
      repoUrl: 'https://github.com/DinefGH/truck_signs_api',
    },
    {
      id: 'juice-shop-meister',
      title: 'Juice Shop Meister',
      tags: [
            { label: 'IT Security',    iconSrc: '/img/security.svg' },
            { label: 'Linux',    iconSrc: '/img/linux.svg' },

      ],
      description: `Educational security research project documenting solutions to OWASP Juice Shop challenges. 
        Includes detailed write-ups with exploited vulnerabilities, payloads, and mitigation notes for tasks like CAPTCHA bypass, 
        privilege escalation to admin login, confidential document access, and scoreboard manipulation.`,
      imageSrc: '/img/JuiceShop_Logo_400px.png',
      repoUrl: 'https://github.com/DinefGH/Juice-Shop-Meister',
    },

        {
      id: 'baby-tools-shop',
      title: 'Baby Tools Shop',
      tags: [
        { label: 'Shell scripting',iconSrc: '/img/shell-dark.svg' },
        { label: 'Container',      iconSrc: '/img/docker.svg' },
      ],
      description: `Django e-commerce app containerized with Docker. Provides environment-based settings, persistent database volume, 
        and simple Docker commands for building, running, and managing the server in production.`,
      imageSrc: '/img/baby-tools-shop.svg',
      repoUrl: 'https://github.com/DinefGH/babyshop',
    },


            {
      id: 'wordpress',
      title: 'Wordpress',
      tags: [
        { label: 'Yaml',           iconSrc: '/img/yaml-dark.svg' },
        { label: 'Shell scripting',iconSrc: '/img/shell-dark.svg' },
        { label: 'Container',      iconSrc: '/img/docker.svg' },
      ],
      description: `Containerized WordPress + MariaDB stack with Docker Compose. 
        Uses .env for DB and site configs, persistent volumes for data, and simple commands for start/stop/update.`,
      imageSrc: '/img/wordpress.svg',
      repoUrl: 'https://github.com/DinefGH/wordpress-DA',
    },

                {
      id: 'conduit',
      title: 'Conduit',
      tags: [
        { label: 'Python',           iconSrc: '/img/python.svg' },
        { label: 'Yaml',           iconSrc: '/img/yaml-dark.svg' },
        { label: 'Shell scripting',iconSrc: '/img/shell-dark.svg' },
        { label: 'Container',      iconSrc: '/img/docker.svg' },
      ],
      description: `Full-stack Medium clone built with Django REST and Angular, containerized via Docker Compose. 
Features JWT auth, CORS config, Nginx API proxying, and GitHub Actions CI/CD for automated deployment.`,
      imageSrc: '/img/conduit-container.svg',
      repoUrl: 'https://github.com/DinefGH/conduit-project-DA',
    },
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


     <MyProjectHighlights
        headline="My project highlights"
        projects={projects}
      />

    </Layout>
  );
}