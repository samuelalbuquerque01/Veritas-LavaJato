import Image from 'next/image';
import { business, services } from '@/data/business';
import Icon from './Icon';

export default function Services() {
  return <section id="servicos" className="section services-section" aria-labelledby="services-heading">
    <div className="container services-layout">
      <div className="services-intro">
        <h2 id="services-heading">Cuidado por dentro.<br />E por fora.</h2>
        <p>Para carros e motos. Da lavagem completa à atenção aos acabamentos, encontre o serviço que seu veículo precisa.</p>
        <figure className="services-photo">
          <Image src="/images/service.webp" width={1350} height={1800} sizes="(max-width: 760px) 100vw, 34vw" alt="HB20 preto na área coberta da Veritas" />
          <figcaption>{business.support}</figcaption>
        </figure>
      </div>
      <div className="services-list">
        {services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.description}</p></article>)}
        <a className="text-link" href="#catalogo">Ver catálogo de preços <Icon name="arrow" /></a>
      </div>
    </div>
  </section>;
}
