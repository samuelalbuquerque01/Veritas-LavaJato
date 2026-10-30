'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { navigation, whatsapp } from '@/data/business';
import Icon from './Icon';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (!menu.current?.contains(event.target as Node) && !toggle.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="#inicio" aria-label="Veritas Lava Jato — início"><Image src="/images/logo.png" width={587} height={217} sizes="180px" alt="Veritas Lava Jato" preload /></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
    <nav ref={menu} id="main-navigation" aria-label="Navegação principal" className={`main-navigation ${open ? 'is-open' : ''}`}>
      {navigation.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      <a className="header-contact" href={whatsapp()} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /> Fale com a Veritas</a>
    </nav>
  </div></header>;
}
