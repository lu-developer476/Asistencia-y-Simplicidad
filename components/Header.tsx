'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [open,setOpen]=useState(false);
  const links=[['Inicio','#inicio'],['Preguntas frecuentes','#faq'],['Contacto','#contacto']];
  return <header className="site-header"><div className="container header-inner">
    <nav className={open?'desktop-nav mobile-open':'desktop-nav'} aria-label="Navegación principal">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  </div></header>;
}
