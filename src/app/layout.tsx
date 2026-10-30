import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteUrl } from '@/data/business';
import './globals.css';
const display = localFont({ src: [{ path: '../../public/fonts/font-0.ttf', weight: '500' }, { path: '../../public/fonts/font-1.ttf', weight: '600' }, { path: '../../public/fonts/font-2.ttf', weight: '700' }], variable: '--font-display', display: 'swap' });
const body = localFont({ src: [{ path: '../../public/fonts/font-3.ttf', weight: '400' }, { path: '../../public/fonts/font-4.ttf', weight: '500' }, { path: '../../public/fonts/font-5.ttf', weight: '600' }, { path: '../../public/fonts/font-6.ttf', weight: '700' }], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Veritas Lava Jato em Messejana, Fortaleza',
  description: 'Lavagem de carros e motos, higienização interna e lavagem delivery em Messejana, Fortaleza. Veja fotos reais e solicite atendimento pelo WhatsApp.',
  applicationName: 'Veritas Lava Jato',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Veritas Lava Jato em Messejana, Fortaleza',
    description: 'Cuidado com carros e motos. Conheça os serviços, veja os trabalhos e fale pelo WhatsApp.',
    url: '/', siteName: 'Veritas Lava Jato', locale: 'pt_BR', type: 'website',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Veritas Lava Jato — cuidado com carros e motos em Messejana' }],
  },
  twitter: {
    card: 'summary_large_image', title: 'Veritas Lava Jato em Messejana, Fortaleza',
    description: 'Cuidado com carros e motos em Messejana, Fortaleza.',
    images: ['/opengraph-image.jpg'],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
