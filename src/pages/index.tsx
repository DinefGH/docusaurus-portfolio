// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MySkills, { SkillItem } from '@site/src/components/my-skills';
import MyProjectHighlights, { ProjectItem } from '@site/src/components/my-project-highlights';
import ContactMe from '@site/src/components/contact-me';
import Footer from '@site/src/components/footer';

export default function Home(): JSX.Element {
  const u = (p: string) => useBaseUrl(p);

  const skills: ReadonlyArray<SkillItem> = [
    { name: 'HTML',                    iconSrc: u('/img/html.svg'),
         highlights: [
      'User-friendly navigation menus',
      'Contact forms and login pages',
    ], },
    { name: 'CSS',                     iconSrc: u('/img/css.svg') ,
         highlights: [
      'Responsive layout and grid',
      'Transitions and hover effects',
    ],
    },

    { name: 'Static site generator',   iconSrc: u('/img/ssg.svg'),
         highlights: [
      'static website and customization',
      'tags,categories and writeups',
    ], },
    { name: 'Python',                  iconSrc: u('/img/python.svg'),
         highlights: [
      'using libraries like PyTorch',
      'Build APIs',
      'scripting',
    ], },
    { name: 'Shell scripting',         iconSrc: u('/img/shell-light.svg'),
         highlights: [
    'Managing Docker containers and images',
    'Creating deployment scripts',
    ], },
    { name: 'YAML',                    iconSrc: u('/img/yaml-light.svg'),
         highlights: [
      'store settings like database connections',
      'enviroment-specific variables',
    ], },
    { name: 'Container',               iconSrc: u('/img/docker.svg'),
         highlights: [
      'Deploy Docker Compose',
      'build microservices-based applications',
    ], },
    { name: 'CI/CD', iconSrc: u('/img/gha.svg'),
         highlights: [
      'Automated Builds and deployments',
      'push, pull request, or schedule',
    ], },
    { name: 'IT Security',             iconSrc: u('/img/security.svg'),
         highlights: [
      'simulate attacks',
      'Identify vulnerabilities',
      'Exploit',
    ], },
  ];

  const projects: ReadonlyArray<ProjectItem> = [
    {
      id: 'minecraft',
      title: 'Minecraft',
      tags: [
        { label: 'Yaml',            iconSrc: u('/img/yaml-dark.svg') },
        { label: 'Shell scripting', iconSrc: u('/img/shell-dark.svg') },
        { label: 'Container',       iconSrc: u('/img/docker.svg') },
      ],
      description: translate({
        id: 'projects.minecraft.desc',
        message: `A fully containerized Minecraft Java Edition server setup using Docker Compose.
Includes a custom Dockerfile to build your own server image, an easy .env configuration for RAM, difficulty, and player limits, plus persistent world data.`,
      }),
      imageSrc: u('/img/minecraft.png'),
      repoUrl: 'https://github.com/DinefGH/minecraft-server-DA',
      docsUrl: '/docusaurus-portfolio/docs/projects/minecraft',
    },
    {
      id: 'truck-signs',
      title: 'Truck Signs API',
      tags: [
        { label: 'Python',          iconSrc: u('/img/python.svg') },
        { label: 'Shell scripting', iconSrc: u('/img/shell-dark.svg') },
        { label: 'Container',       iconSrc: u('/img/docker.svg') },
      ],
      description: translate({
        id: 'projects.truck.desc',
        message: `Django & DRF backend with modular environment configs (.env), PostgreSQL, and Docker support.
Implements nested serializers for dynamic product customization, custom CBVs for order/payment workflows, and Stripe API integration for secure checkout.`,
      }),
      imageSrc: u('/img/truck-signs-logo.png'),
      repoUrl: 'https://github.com/DinefGH/truck_signs_api',
      docsUrl: '/docusaurus-portfolio/docs/projects/truck-signs-api',
    },
    {
      id: 'juice-shop-meister',
      title: 'Juice Shop Meister',
      tags: [
        { label: 'IT Security', iconSrc: u('/img/security.svg') },
        { label: 'Linux',       iconSrc: u('/img/linux.svg') },
      ],
      description: translate({
        id: 'projects.juice.desc',
        message: `Educational security research project documenting solutions to OWASP Juice Shop challenges.
Includes detailed write-ups with exploited vulnerabilities, payloads, and mitigation notes for tasks like CAPTCHA bypass, privilege escalation to admin login.`,
      }),
      imageSrc: u('/img/JuiceShop_Logo_400px.png'),
      repoUrl: 'https://github.com/DinefGH/Juice-Shop-Meister',
        docsUrl: '/docusaurus-portfolio/docs/projects/OWASP-juice-shop/CAPTCHA-Bypass',
    },


    {
      id: 'baby-tools-shop',
      title: 'Baby Tools Shop',
      tags: [
        { label: 'Shell scripting', iconSrc: u('/img/shell-dark.svg') },
        { label: 'Container',       iconSrc: u('/img/docker.svg') },
      ],
      description: translate({
        id: 'projects.baby.desc',
        message: `Django e-commerce app containerized with Docker. Provides environment-based settings, persistent database volume, and simple Docker commands for building, running, and managing the server in production.`,
      }),
      imageSrc: u('/img/baby-tools-shop.svg'),
      repoUrl: 'https://github.com/DinefGH/babyshop',
      docsUrl: '/docusaurus-portfolio/docs/projects/baby-tools-shop',
    },


    {
      id: 'wordpress',
      title: 'Wordpress',
      tags: [
        { label: 'Yaml',            iconSrc: u('/img/yaml-dark.svg') },
        { label: 'Shell scripting', iconSrc: u('/img/shell-dark.svg') },
        { label: 'Container',       iconSrc: u('/img/docker.svg') },
      ],
      description: translate({
        id: 'projects.wp.desc',
        message: `Containerized WordPress + MariaDB stack with Docker Compose.
Uses .env for DB and site configs, persistent volumes for data, and simple commands for start/stop/update.`,
      }),
      imageSrc: u('/img/wordpress.svg'),
      repoUrl: 'https://github.com/DinefGH/wordpress-DA',
      docsUrl: '/docusaurus-portfolio/docs/projects/wordpress',
    },

    {
      id: 'conduit',
      title: 'Conduit',
      tags: [
        { label: 'Python',          iconSrc: u('/img/python.svg') },
        { label: 'Yaml',            iconSrc: u('/img/yaml-dark.svg') },
        { label: 'Shell scripting', iconSrc: u('/img/shell-dark.svg') },
        { label: 'Container',       iconSrc: u('/img/docker.svg') },
      ],
      description: translate({
        id: 'projects.conduit.desc',
        message: `Full-stack Medium clone built with Django REST and Angular, containerized via Docker Compose.
Features JWT auth, CORS config, Nginx API proxying, and GitHub Actions CI/CD for automated deployment.`,
      }),
      imageSrc: u('/img/conduit-container.svg'),
      repoUrl: 'https://github.com/DinefGH/conduit-project-DA',
      docsUrl: '/docusaurus-portfolio/docs/projects/conduit',
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
          { label: translate({ id: 'nav.about', message: 'About me' }), href: '#hero' },
          { label: translate({ id: 'nav.skills', message: 'My skills' }), href: '#my-skills' },
          { label: translate({ id: 'nav.projects', message: 'My projects' }), href: '#my-project-highlights' },
          { label: translate({ id: 'nav.contact', message: 'Contact' }), href: '#contact' },
        ]}
      />

      <section id="hero">
        <Hero
          greeting={translate({ id: 'hero.greeting', message: 'Hey there. 👋 I am' })}
          name="Fabian Dürr"
          role={translate({ id: 'hero.role', message: 'Security operations developer' })}
          about={translate({
            id: 'hero.about',
            message:
              `I am passionate about creating secure and efficient digital solutions that make technology both powerful and safe to use.
Constantly learning and exploring new tools, I stay up to date with modern development practices and security standards.`,
          })}
          cta={{ label: translate({ id: 'hero.cta', message: 'Contact me' }), href: '#contact' }}
          avatarSrc={u('/img/portfolio-portrait-docusaurus.png')}
          avatarAlt="Fabian Dürr portrait"
        />
      </section>

      <MySkills title={translate({ id: 'skills.title', message: 'My skills' })} items={skills} />

      <MyProjectHighlights
        headline={translate({ id: 'projects.headline', message: 'My project highlights' })}
        projects={projects}
      />

      <ContactMe />

      <Footer name="Fabian Dürr" legalHref={u('/legal')} />
    </Layout>
  );
}
