# Gestoría AyS

Sitio web corporativo para Gestoría AyS, basado en el flyer provisto.

## Stack
- Next.js 15 + React 19 + TypeScript
- Node.js mediante Netlify Functions
- Netlify Forms para recepción de consultas
- CSS responsive

## Desarrollo
`npm install` y luego `npm run dev`.

## Deploy
Preparado para Netlify mediante `netlify.toml` y `@netlify/plugin-nextjs`.

El formulario `consultas` usa `data-netlify="true"`, `form-name` y honeypot anti-spam.

Backend: `GET /api/health` y `POST /api/contact`.
