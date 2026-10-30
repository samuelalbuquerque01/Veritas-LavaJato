'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { categories, gallery, type Category } from '@/data/gallery';
import Icon from './Icon';

export default function Gallery() {
  const [category, setCategory] = useState<Category>('Todos');
  const [limit, setLimit] = useState(6);
  const [active, setActive] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const filtered = gallery.filter(item => category === 'Todos' || item.category === category);
  const photos = filtered.filter(item => item.type === 'image');
  const index = photos.findIndex(item => item.id === active);
  const photo = photos[index];
  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [active]);
  function move(direction: number) {
    if (photos.length) setActive(photos[(index + direction + photos.length) % photos.length].id);
  }
  function close() { dialog.current?.close(); }
  return <section id="trabalhos" className="section gallery-section" aria-labelledby="gallery-heading"><div className="container">
    <div className="section-heading"><h2 id="gallery-heading">Trabalhos realizados.</h2><p>Carros, motos e detalhes no dia a dia da Veritas. Explore nossos trabalhos de perto.</p></div>
    <div className="gallery-toolbar"><div className="filters" role="group" aria-label="Filtrar trabalhos">{categories.map(value => <button key={value} aria-pressed={category === value} onClick={() => { setCategory(value); setLimit(6); }}>{value}</button>)}</div><span className="gallery-count" aria-live="polite">{filtered.length} registros</span></div>
    <div className="gallery-grid">{filtered.slice(0, limit).map((item, i) => <figure key={item.id} className={`gallery-item gallery-item-${i % 6}`}>
      {item.type === 'image' ? <button className="gallery-image-button" aria-label={`Ampliar: ${item.caption}`} onClick={event => { opener.current = event.currentTarget; setActive(item.id); dialog.current?.showModal(); }}><Image src={item.src} alt={item.caption} width={item.width} height={item.height} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 40vw" /><span className="expand-icon"><Icon name="expand" /></span></button> : <video controls playsInline preload="none" poster={item.poster} aria-label={item.caption} width={item.width} height={item.height}><source src={item.src} type="video/mp4" />Seu navegador não reproduz este vídeo. <a href={item.src}>Abrir vídeo</a></video>}
      <figcaption>{item.caption}<span>{item.type === 'video' ? 'Vídeo' : item.category}</span></figcaption>
    </figure>)}</div>
    {filtered.length === 0 && <p>Nenhum registro nesta categoria no momento.</p>}
    {limit < filtered.length && <div className="gallery-more"><button className="button button-outline" onClick={() => setLimit(limit + 6)}>Ver mais trabalhos <Icon name="arrow" /></button></div>}
    <dialog ref={dialog} className="lightbox" aria-labelledby="lightbox-caption" onClose={() => { setActive(null); opener.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => {
      if (event.key === 'Tab') {
        const controls = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not([disabled])'));
        const focused = controls.findIndex(control => control === document.activeElement);
        event.preventDefault();
        controls[(focused + (event.shiftKey ? -1 : 1) + controls.length) % controls.length]?.focus();
      }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    }}>
      <button className="lightbox-close icon-button" aria-label="Fechar foto" onClick={close} autoFocus><Icon name="close" /></button>
      {photo && <div className="lightbox-content"><Image key={photo.id} src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} sizes="95vw" /><p id="lightbox-caption" aria-live="polite">{photo.caption}<span>{index + 1} / {photos.length}</span></p></div>}
      <button className="lightbox-previous icon-button" aria-label="Foto anterior" onClick={() => move(-1)}><Icon name="chevron" /></button><button className="lightbox-next icon-button" aria-label="Próxima foto" onClick={() => move(1)}><Icon name="chevron" /></button>
    </dialog>
  </div></section>;
}
