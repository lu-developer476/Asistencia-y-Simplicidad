Gestoría AyS

Sitio web corporativo desarrollado para Gestoría AyS, orientado a la presentación de sus servicios y a la gestión de consultas mediante un formulario de contacto integrado.

🚀 Stack
Next.js 15
React 19
TypeScript
Node.js mediante Netlify Functions
Netlify Forms para la recepción de consultas
CSS responsive
Netlify para deployment y hosting
📋 Características
Diseño responsive y adaptable a distintos dispositivos.
Presentación de los servicios de Gestoría AyS.
Formulario de contacto integrado con Netlify Forms.
Protección anti-spam mediante honeypot.
API backend para operaciones de contacto y health check.
Configuración de deployment mediante netlify.toml.
Integración con @netlify/plugin-nextjs.
🛠️ Desarrollo

Instalar las dependencias:

npm install

Iniciar el servidor de desarrollo:

npm run dev

El proyecto estará disponible localmente en:

http://localhost:3000
🌐 Deploy

El proyecto está preparado para desplegarse en Netlify mediante:

netlify.toml
@netlify/plugin-nextjs
Netlify Functions
Netlify Forms

El deployment puede realizarse conectando el repositorio a Netlify o mediante el CLI de Netlify.

📩 Formularios

El formulario consultas utiliza Netlify Forms mediante:

data-netlify="true"
form-name
Honeypot anti-spam

Esto permite recibir las consultas enviadas desde el sitio sin necesidad de implementar un servidor de formularios independiente.

🔌 API

El proyecto dispone de los siguientes endpoints:

Health Check
GET /api/health

Permite verificar que el backend se encuentre operativo.

Contacto
POST /api/contact

Endpoint destinado al procesamiento de solicitudes de contacto.

📁 Estructura general
gestoria-ays/
├── app/
├── components/
├── public/
├── netlify/
├── netlify.toml
├── package.json
└── README.md
📄 Licencia

Copyright (c) 2026 Lucas Leonel Montenegro Burgos

Todos los derechos reservados.
