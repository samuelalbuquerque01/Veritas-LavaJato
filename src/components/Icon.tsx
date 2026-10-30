type Name = 'arrow' | 'whatsapp' | 'menu' | 'close' | 'check' | 'pin' | 'instagram' | 'mail' | 'car' | 'motorcycle' | 'spark' | 'engine' | 'seat' | 'layers' | 'expand' | 'chevron' | 'clock';
const paths: Record<Name, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  whatsapp: <><path d="M20.3 11.5a8.3 8.3 0 0 1-12.2 7.3L3 20l1.3-4.8A8.3 8.3 0 1 1 20.3 11.5Z" /><path d="M8.4 7.6c-.5 1 .5 3.1 2 4.6s3.5 2.4 4.5 2l1.1-1.5-2.7-1.3-.7.8c-1-.4-2.1-1.5-2.5-2.5l.7-.7L9.5 6.7Z" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  car: <><path d="m5 10 2-5h10l2 5M3 11l2-1h14l2 1v7H3ZM5 18v3M19 18v3M6 14h2M16 14h2" /></>,
  motorcycle: <><circle cx="5" cy="17" r="4" /><circle cx="19" cy="17" r="4" /><path d="m5 17 5-8h5l4 8M10 9l4 8H5M14 5h3l2 12M7 8h4" /></>,
  spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4M18 4h4" /></>,
  engine: <><path d="M5 9h3l3-3h6v3h4v9h-4l-2 2H8v-3H5ZM2 10v6M2 13h3M10 3h6M13 3v3" /></>,
  seat: <><path d="M8 3h5v8l5 2v6H7l-2-6V6a3 3 0 0 1 3-3ZM8 7v6l7 3M7 19v2M18 19v2" /></>,
  layers: <><path d="m12 3 10 5-10 5L2 8ZM2 12l10 5 10-5M2 16l10 5 10-5" /></>,
  expand: <path d="M9 3H3v6M15 21h6v-6M3 3l7 7M21 21l-7-7" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
};
export default function Icon({ name, className = '' }: { name: Name; className?: string }) {
  return <svg className={`icon ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
