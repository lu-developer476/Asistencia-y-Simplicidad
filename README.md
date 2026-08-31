# Gestoría AyS

Sitio web corporativo desarrollado para **Gestoría AyS**, orientado a la presentación de sus servicios y a la gestión de consultas mediante un formulario de contacto integrado.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.24-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)

## 🚀 Stack

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Node.js** mediante Netlify Functions
- **Netlify Forms** para la recepción de consultas
- **CSS** responsive
- **Netlify** para deployment y hosting

## 📋 Características

- Diseño responsive y adaptable a distintos dispositivos.
- Presentación de los servicios de Gestoría AyS.
- Formulario de contacto integrado con Netlify Forms.
- Protección anti-spam mediante honeypot.
- API backend para operaciones de contacto y health check.
- Configuración de deployment mediante `netlify.toml`.
- Integración con `@netlify/plugin-nextjs`.

## 🛠️ Desarrollo

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible localmente en:

```text
http://localhost:3000
```

## 🌐 Deploy

El proyecto está preparado para desplegarse en **Netlify** mediante:

- `netlify.toml`
- `@netlify/plugin-nextjs`
- Netlify Functions
- Netlify Forms

El deployment puede realizarse conectando el repositorio a Netlify o mediante el CLI de Netlify.

## 📩 Formularios

El formulario `consultas` utiliza **Netlify Forms** mediante:

- `data-netlify="true"`
- `form-name`
- Honeypot anti-spam

Esto permite recibir las consultas enviadas desde el sitio sin necesidad de implementar un servidor de formularios independiente.

## 🔌 API

El proyecto dispone de los siguientes endpoints:

### Health Check

```http
GET /api/health
```

Permite verificar que el backend se encuentre operativo.

### Contacto

```http
POST /api/contact
```

Endpoint destinado al procesamiento de solicitudes de contacto.

## 📁 Estructura general

```text
gestoria-ays/
├── app/
├── components/
├── public/
├── netlify/
├── netlify.toml
├── package.json
└── README.md
```

## 📄 Licencia

Copyright (c) 2026 Lucas Leonel Montenegro Burgos

Todos los derechos reservados.
