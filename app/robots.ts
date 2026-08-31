import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://asistencia-y-simplicidad.netlify.app/sitemap.xml' };
}
