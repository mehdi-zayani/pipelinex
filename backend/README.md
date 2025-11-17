# PipelineX Backend

Minimal Node.js + Express backend for PipelineX full-stack template.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open browser or Postman:

```yaml

* Health endpoint: http://localhost:4000/health

* Version endpoint: http://localhost:4000/version

```

Project Structure

```yaml
src/app.ts → Express app + middleware + routes

src/server.ts → starts the server

src/routes/health.ts → /health endpoint

src/routes/version.ts → /version endpoint

src/config/db.ts → MongoDB connection (empty for now)
```

## Notes

- Backend in TypeScript, ready for CI/CD

Scripts:

```bash
npm run dev → start server with auto-reload

npm run build → compile TypeScript

npm run start → start server from compiled JS
```
