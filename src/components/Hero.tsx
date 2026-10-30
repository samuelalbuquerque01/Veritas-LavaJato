import Image from 'next/image';
import { business, mapsUrl } from '@/data/business';
import Icon from './Icon';
import WhatsAppLink from './WhatsAppLink';

export default function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-heading">
    <div className="container hero-layout">
      <figure className="hero-visual">
        <Image src="/images/hero.webp" width={1350} height={1100} sizes="(max-width: 760px) 100vw, 65vw" alt="Polo vermelho fotografado na área de atendimento da Veritas Lava Jato" preload fetchPriority="high" />
        <figcaption><span>Polo vermelho na Veritas</span><a href="#trabalhos">Ver os trabalhos <Icon name="arrow" /></a></figcaption>
      </figure>
      <div className="hero-copy">
        <h1 id="hero-heading">Seu veículo merece cuidado em cada detalhe.</h1>
        <p className="hero-slogan">{business.slogan}</p>
        <p className="hero-description">Lavagem de carros e motos em Messejana. Venha à Veritas ou consulte o atendimento no seu endereço.</p>
        <WhatsAppLink>Solicitar atendimento</WhatsAppLink>
        <a className="text-link hero-services-link" href="#servicos">Conheça os serviços <Icon name="arrow" /></a>
      </div>
    </div>
    <div className="container visit-strip" aria-label="Informações para sua visita">
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" /><span><strong>Veritas em Messejana</strong>{business.address}. {business.complement}.</span><Icon name="arrow" /></a>
      <div><Icon name="clock" /><span><strong>{business.hours[0].days}: {business.hours[0].time}</strong>{business.hours[1].days}: {business.hours[1].time}</span></div>
      <a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /><span><strong>Converse com a gente</strong>{business.phone}</span><Icon name="arrow" /></a>
    </div>
  </section>;
}
