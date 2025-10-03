---
title: Minecraft – Docker Compose Server
slug: /projects/minecraft
---

# Minecraft Server with Docker Compose

* [Introduction](#introduction)
* [Folder structure](#folder-structure)
* [Prerequisites](#prerequisites)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [Useful Links](#useful-links)

## Introduction

Welcome to the Minecraft Docker Server setup! This project provides an easy way to run a Minecraft Java Edition server using Docker Compose. It includes persistent data storage, configurable server options via a .env file, and a custom Dockerfile to build your own Minecraft server image.

## Folder structure

```bash
minecraft-docker-server/
├── Dockerfile
├── docker-compose.yaml
├── .example-env
├── Minecraft Server Checkliste.pdf
└── README.md

```

## Prerequisites

Before you begin, ensure the following tools are installed on your system:

* Git (to clone the repository)
* Docker & Docker Compose (to run the server container)

## Quickstart

1. Clone GitHub Repository

    ```bash
    git clone https://github.com/DinefGH/minecraft-docker-server.git
    cd minecraft-docker-server
    ```

2. Copy and Configure the Environment File

    ```bash
    cp .env.example .env
    ```

    Edit .env to change your server settings like RAM, difficulty, max players, etc.

3. Start the Server

    ```bash
    docker compose up -d --build
    ```

4. Connect to the Server

    In your Minecraft client, connect using:

    ```bash
    YOUR_SERVER_IP:MC_PORT
    ```

    Make sure to replace YOUR_SERVER_IP and use the correct port defined in .env (e.g., 1234).

## Usage

1. View Logs

    ```bash
    docker logs -f minecraft-custom
    ```

2. Restart the Server

    ```bash
    docker compose restart
    ```

3. Stop the Server

    ```bash
    docker compose down
    ```

4. Rebuild and Update the server

    ```bash
    docker compose build --no-cache && docker compose up -d
    ```

## Useful Links

* [Docker Compose Documentation](https://docs.docker.com/compose/)
* [Docker Compose Documentation](https://docs.docker.com/compose/)
* [Minecraft Java Edition Server Setup Guide](https://minecraft.wiki/w/Tutorials/Setting_up_a_server)

---

Happy crafting! ⛏️
