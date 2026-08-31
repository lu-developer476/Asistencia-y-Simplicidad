'use client';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [open,setOpen]=useState(false);
  const links=[['Inicio','#inicio'],['Servicios','#servicios'],['Cómo trabajamos','#proceso'],['Preguntas frecuentes','#faq'],['Contacto','#contacto']];
  return <header className="site-header"><div className="container header-inner">
    <Link href="#inicio" className="brand" onClick={()=>setOpen(false)} aria-label="Gestoría AyS - inicio"><span>GESTORÍA</span><b>AyS</b></Link>
    <nav className={open?'desktop-nav mobile-open':'desktop-nav'} aria-label="Navegación principal">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
    <a className="header-phone" href="tel:+541156609916"><Phone size={16}/>+54 11 5660-9916</a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  </div></header>;
}
