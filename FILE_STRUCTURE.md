# Repository File Structure

Overview

This document summarizes the repository file tree (up to 4 levels), lists top-level projects with their key files, and includes one-line summaries for important Markdown docs found in the workspace.

---

**Filesystem tree (4 levels)**

f:/ott-adda/
├── .git/
├── admin-backend/
│   ├── index.js
│   ├── nodemon.json
│   ├── package.json
│   ├── prisma.config.ts
│   ├── src/
│   │   ├── configs/
│   │   ├── constants/
│   │   ├── errors/
│   │   ├── events/
│   │   ├── helpers/
│   │   ├── lib/
│   │   ├── prisma/
│   │   └── rest-resources/
│   └── tsconfig.json
├── admin-frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── Dockerfile
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public/
│   └── tsconfig.json
├── DATABASE_SCHEMA.md
├── executer/
│   ├── docker-compose.prod.yml
│   ├── docker-compose.yml
│   └── setup.sh
├── OTT_SETUP.md
├── PROJECT_FLOW.md
├── PROJECT_SUMMARY.md
├── README_OTT.md
├── user-backend/
│   ├── index.js
│   ├── nodemon.json
│   ├── package.json
│   ├── prisma.config.ts
│   ├── src/
│   │   ├── configs/
│   │   ├── constants/
│   │   ├── errors/
│   │   ├── events/
│   │   ├── helpers/
│   │   ├── lib/
│   │   ├── prisma/
│   │   └── rest-resources/
│   └── tsconfig.json
├── user-frontend/
│   ├── AGENTS.md
│   ├── CLAUDE.md
│   ├── Dockerfile
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── postcss.config.mjs
│   ├── public/
│   ├── src/
│   └── tsconfig.json
└── WORKFLOW.md

---

**Top-level projects and key files**

- admin-backend: `index.js`, `package.json`, `prisma.config.ts`, `src/`, `tsconfig.json`
- admin-frontend: `Dockerfile`, `next.config.ts`, `package.json`, `app/`, `components/`, `tsconfig.json`
- user-backend: `index.js`, `package.json`, `prisma.config.ts`, `src/`, `tsconfig.json`
- user-frontend: `Dockerfile`, `next.config.ts`, `package.json`, `public/`, `src/`, `tsconfig.json`
- executer: `docker-compose.yml`, `docker-compose.prod.yml`, `setup.sh`

---

**Markdown docs (one-line summaries)**

- `OTT_SETUP.md`: Comprehensive guide for setting up the OTT Platform demo, including architecture and tech stack.
- `DATABASE_SCHEMA.md`: Detailed database schema with entity relationships for users, subscriptions, and content.
- `README_OTT.md`: Overview of the OTT platform as a scalable demo project with clean architecture.
- `PROJECT_SUMMARY.md`: Summary of files and configurations created for the OTT platform demo.
- `PROJECT_FLOW.md`: Documentation of the project flow, including frontend and backend architecture.
- `WORKFLOW.md`: Complete workflow documentation for the OTT platform, including user journeys.
- `user-frontend/CLAUDE.md`: Notes on the user-frontend project and its agents.
- `user-frontend/AGENTS.md`: Details about agents, their roles, and usage in the user-frontend project.
- `user-frontend/README.md`: Getting started guide for the user-frontend Next.js project.
- `admin-frontend/README.md`: Overview of the admin-frontend project and its setup.
- `admin-frontend/README.Docker.md`: Instructions for building and deploying the admin-frontend project using Docker.
- `admin-frontend/explaination.md`: Explanation of the admin-frontend project and its advanced features.

---

**Notes & next steps**

- File created at repository root as `FILE_STRUCTURE.md`.
- Next recommended actions: review the file for completeness, optionally add file sizes/timestamps, and commit the file to git.

If you want, I can now commit this file with message "Add repository file structure doc". If you'd like file sizes or timestamps included, tell me and I'll update the document.
