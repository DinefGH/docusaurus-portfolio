---
title: Wordpress Mariadb with Docker Compose
slug: /projects/wordpress
---

# Wordpress Mariadb with Docker Compose

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [Environment Configuration](#environment-configuration)
* [Useful Links](#useful-links)

## Introduction

Welcome to the WordPress + MariaDB Docker setup! This project provides an easy way to run a WordPress site using Docker Compose with the bitnami/wordpress and bitnami/mariadb images. It includes persistent data storage, configurable options via a .env file, and simple start/stop commands.

## Prerequisites

Before you begin, ensure the following tools are installed on your system:

Git (to clone the repository)

Docker & Docker Compose (to run the server containers)

## Quickstart

1. Clone GitHub Repository

    ```bash
    git clone https://github.com/DinefGH/wordpress-docker-server.git
    cd wordpress-docker-server
    ```

2. Copy and Configure the Environment File

    ```bash
    cp .env.example .env
    ```

    Edit .env to change your database name, username, password, and host port.

3. Start the Server

    ```bash
    docker compose up -d
    ```

4. Access Your WordPress Site

    In your browser, visit:

    ```bash
    http://YOUR_SERVER_IP:WP_PORT
    ```

    Replace YOUR_SERVER_IP with your server's IP address and WP_PORT with the correct port from .env (e.g., 1234).

## Usage

1. View Logs

    ```bash
    docker logs -f wordpress
    ```

2. Restart the Server

    ```bash
    docker compose restart
    ```

3. Stop the Server

    ```bash
    docker compose down
    ```

4. Update the Server

    ```bash
    docker compose pull
    ```

## Environment Configuration

All configuration is managed through the .env file. Below is an example:

```bash
# WordPress Database configuration
WORDPRESS_DB_NAME=bitnami_wordpress
WORDPRESS_DB_USER=bn_wordpress
WORDPRESS_DB_PASSWORD=my_password
WORDPRESS_DB_HOST=wordpress-db

# WordPress site configuration
WORDPRESS_USERNAME=example_admin
WORDPRESS_PASSWORD=adminpassword
WORDPRESS_EMAIL=admin@example.com
WORDPRESS_FIRST_NAME=Admin
WORDPRESS_LAST_NAME=User
WORDPRESS_BLOG_NAME=My Docker WordPress

# Host port
WP_PORT=8080
```

To apply changes:

```bash
docker compose down && docker compose up -d
```

## Useful Links

* [bitnami/wordpress on Docker Hub](https://hub.docker.com/r/bitnami/wordpress)
* [bitnami/mariadb on Docker Hub](https://hub.docker.com/r/bitnami/mariadb)
* [Docker Compose Documentation](https://docs.docker.com/compose/)
* [WordPress Official Site](https://wordpress.org/)

---

Happy blogging! 📝
