# PipelineX

[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-blue)](https://tailwindcss.com/)

---

## Project Overview

**PipelineX** is a production-ready **full-stack template** designed for DevOps and Full-Stack engineers.
It provides a solid starting point for building modern applications with proper CI/CD, testing, Docker readiness, and a clean structure.

- **Frontend**: Next.js + TypeScript + Tailwind 3
- **Backend**: Node.js + Express + TypeScript
- **Testing**: Jest (unit & integration), Playwright (E2E)
- **CI/CD**: GitHub Actions
- **Documentation**: Postman collection + README
- **Docker**: ready for containerized deployments

---

## Repository Structure

```yaml
pipelinex/
├── frontend/ # Next.js frontend
├── backend/ # Node.js backend
├── postman/ # API collection & environment
├── .github/workflows/ # CI/CD workflows
├── docker/ # Dockerfiles & compose (optional)
├── README.md # This main README
└── LICENSE # MIT license
```

## Getting Started

1. Frontend

```bash
// go to frontend folder
cd frontend

// Install dependencies
npm install

// run server on dev mode
npm run dev
```

- Open http://localhost:3000

2. Backend

```bash
// go to backend folder
cd backend

// Install dependencies
npm install

// run server on dev mode
npm run dev
```

- Open http://localhost:4000/health or /version

## Notes

The project is modular: front, back, CI/CD, and Postman collections are separated

Tailwind 3 installed manually for frontend

Backend in TypeScript, ready for tests & MongoDB integration

This is the first minimal commit; features and functionality will be added incrementally

## License

This project is licensed under the MIT License.
