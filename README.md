# Docusaurus Portfolio

* [Introduction](#introduction)
* [Folder structure](#folder-structure)
* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Build and Deployment](#build-and-deployment)
* [Usage](#usage)
* [Useful Links](#useful-links)

## Introduction

Welcome to my Docusaurus Portfolio!
This project is a personal portfolio website built with Docusaurus and TypeScript. It showcases my skills, projects, and experience as a developer.
The site is fully responsive, supports multiple languages (English & German), and is deployed automatically via GitHub Actions to GitHub Pages.

## Folder structure

```bash
docusaurus-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow for automatic deployment
├── docs/                      # Docusaurus documentation system (if used)
├── i18n/                      # Translation files (EN / DE JSON)
├── src/
│   ├── components/            # Custom React components (Hero, Header, Footer, etc.)
│   └── pages/                 # Website pages (index.tsx, legal.tsx, ...)
├── static/
│   └── img/                   # Images & icons used in the portfolio
├── docusaurus.config.ts       # Docusaurus configuration
├── package.json
└── README.md

```

## Prerequisites

Before you begin, make sure you have the following installed on your system:

* Node.js (v18 or higher recommended)

* npm (comes with Node.js)

* Git (to clone and work with the repository)

Optional (but useful for deployment):

* A GitHub account with a repository set up

* GitHub Pages enabled on your repository

## Quickstart

1. Clone GitHub Repository

    ```bash
    git clone https://github.com/DinefGH/docusaurus-portfolio.git
    cd docusaurus-portfolio
    ```

2. Install Dependencies

    ```bash
    npm install
    ```

3. Start the Development Server

    ```bash
    npm run start
    ```

Your site will be available at **`http://localhost:3000`**

## Build and Deployment

Build for Production

```bash
    npm run build
```

The production-ready files will be in the build/ folder.

Deploy to GitHub Pages (automatic with CI/CD)

This project uses GitHub Actions to deploy automatically to GitHub Pages whenever you push to the main branch.

1. Make sure your repository settings have GitHub Pages enabled.

2. Push your changes:

    ```bash
    git add .
    git commit -m "Update portfolio"
    git push origin main
    ```

3. GitHub Actions will build and deploy the site automatically to

    https://**`your-username`**.github.io/**`repo-name`**/

## Usage

1. Multi-language Support (i18n)

    This site supports English and German.

    * Default language: English

    * Switch between languages using the EN / DE buttons in the navigation bar.

    * All translatable strings are stored in i18n/de/code.json.

    To add or edit translations:

    ```bash
        i18n/
        └── de/
            └── code.json
    ```

2. Useful Commands

    | Command | Description |
    |---------|-------------|
    | `npm run start` | Run development server with hot reload |
    | `npm run build` | Build static production site |
    | `npm run serve` | Preview the production build locally |
    | `npm run write-translations` | Extract new text keys for translation |

## Useful Links

* [Docusaurus Documentation](https://docusaurus.io/docs)
* [GitHub Pages Documentation](https://docs.github.com/en/pages)
* [GitHub Actions](https://docs.github.com/en/actions)
