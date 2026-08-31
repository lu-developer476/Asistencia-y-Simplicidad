import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Trámites y servicios técnicos',
  description: 'Gestoría AyS: trámites, habilitaciones y servicios técnicos con más claridad y menos burocracia.',
  keywords: ['gestoría','Ley 6116','ascensores','AGIP','calderas','IFCI','termografía','Buenos Aires'],
  metadataBase: new URL('https://asistencia-y-simplicidad.netlify.app'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

const structuredData = { '@context':'https://schema.org', '@type':'Organization', name:'Gestoría AyS', email:'ays.informes@gmail.com', telephone:'+54 11 5660-9916', url:'https://asistencia-y-simplicidad.netlify.app' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>;
}
