import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const display = localFont({ src: [{ path: '../../public/fonts/font-0.ttf', weight: '500' }, { path: '../../public/fonts/font-1.ttf', weight: '600' }, { path: '../../public/fonts/font-2.ttf', weight: '700' }], variable: '--font-display', display: 'swap' });
const body = localFont({ src: [{ path: '../../public/fonts/font-3.ttf', weight: '400' }, { path: '../../public/fonts/font-4.ttf', weight: '500' }, { path: '../../public/fonts/font-5.ttf', weight: '600' }, { path: '../../public/fonts/font-6.ttf', weight: '700' }], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  title: 'Veritas Lava Jato | Cuidado com carros e motos em Messejana',
  description: 'Lavagem de carros e motos, higienização interna e lavagem delivery em Messejana, Fortaleza. Conheça os trabalhos da Veritas e fale pelo WhatsApp.',
  applicationName: 'Veritas Lava Jato',
  openGraph: { title: 'Veritas Lava Jato', description: 'A verdade no cuidado. A confiança em cada detalhe.', locale: 'pt_BR', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Veritas Lava Jato', description: 'Cuidado com carros e motos em Messejana, Fortaleza.' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
