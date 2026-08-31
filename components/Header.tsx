'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(false);
  const links=[['Inicio','#inicio'],['Servicios','#servicios'],['Preguntas frecuentes','#faq'],['Contacto','#contacto']];

  useEffect(()=>{
    const saved=localStorage.getItem('ays-theme');
    const isDark=saved==='dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark',isDark);
  },[]);

  const toggleTheme=()=>{
    const next=!dark;
    setDark(next);
    document.documentElement.classList.toggle('dark',next);
    localStorage.setItem('ays-theme',next?'dark':'light');
  };

  return <header className="site-header"><div className="container header-inner">
    <Link href="#inicio" className="brand" onClick={()=>setOpen(false)} aria-label="Gestoría AyS - inicio"><span className="brand-logo-wrap"><Image src="/logo.png" alt="" width={34} height={34} className="brand-logo" priority/></span><span>GESTORÍA AyS</span></Link>
    <nav className={open?'desktop-nav mobile-open':'desktop-nav'} aria-label="Navegación principal">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark?'Activar modo claro':'Activar modo oscuro'} title={dark?'Modo claro':'Modo oscuro'}>{dark?<Sun size={17}/>:<Moon size={17}/>}</button></nav>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open}>{open?<X/>:<Menu/>}</button>
  </div></header>;
}
