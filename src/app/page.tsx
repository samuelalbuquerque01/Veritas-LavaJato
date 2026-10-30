import Image from 'next/image';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import { Delivery, Promotion } from '@/components/Offers';
import Contact from '@/components/Contact';
import Icon from '@/components/Icon';
import { business } from '@/data/business';

export default function Home() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <Hero />
      <Services />
      <Gallery />
      <Delivery />
      <Promotion />
      <section className="section about-section" aria-labelledby="about-heading">
        <div className="container about-layout">
          <div className="about-photos">
            <Image src="/images/works/img_5922.webp" width={1350} height={1800} sizes="(max-width: 760px) 48vw, 25vw" alt="Moto preta fotografada na Veritas" />
            <Image src="/images/works/img_6105.webp" width={1350} height={1800} sizes="(max-width: 760px) 48vw, 25vw" alt="Volante e painel de um veículo nos registros da Veritas" />
          </div>
          <div className="about-copy">
            <h2 id="about-heading">A verdade no cuidado.</h2>
            <p className="about-lead">Somos a Veritas Lava Jato, em Messejana, Fortaleza.</p>
            <p>Cuidamos de carros e motos, da carroceria ao interior. Aqui no site, você encontra nossos serviços e os registros reais do dia a dia da Veritas.</p>
            <p>Venha conhecer o espaço ou converse com a gente para consultar os serviços e a lavagem delivery.</p>
            <a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" /> Acompanhe a Veritas</a>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  </>;
}
