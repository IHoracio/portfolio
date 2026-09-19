# Portfolio Web
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)]()
[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)]()

Personal web portfolio built with **React + Vite**, using **TypeScript** and **Tailwind CSS**.

Originally hosted on Cloudflare Pages, this project has been migrated to a comprehensive **self-hosted environment**. It features a **Continuous Integration and Continuous Deployment (CI/CD)** pipeline using **Jenkins** and **Docker** (Nginx) containers. The website is served to the public through a reverse proxy (**Caddy**) hosted on a **VPS in Germany**, securely connected to the local infrastructure via a VPN tunnel (**Tailscale**) to automate SSL certificates, ensure high availability, and bypass network restrictions.

## Features
- **Responsive** and modern design
- **Featured projects** section
- Accessible **contact information**
- **Animations** and interactive effects
- **Easy customization**

## Projects Included
In my portfolio, I showcase my **personal programming projects**

## Installation
To run locally:
```bash
git clone git@github.com:IHoracio/porfolio-web.git
cd portfolio-web
npm install
npm run dev
