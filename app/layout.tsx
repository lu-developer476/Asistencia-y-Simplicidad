import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gestoría AyS | Trámites y servicios técnicos',
  description: 'Gestoría AyS: trámites, habilitaciones y servicios técnicos con más claridad y menos burocracia.',
  keywords: ['gestoría','Ley 6116','ascensores','AGIP','calderas','IFCI','termografía','Buenos Aires'],
  metadataBase: new URL('https://asistencia-y-simplicidad.netlify.app'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><Header /><main>{children}</main><Footer /></body></html>;
}
