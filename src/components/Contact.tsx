import { business, mapsUrl, navigation } from '@/data/business';
import Icon from './Icon';
import WhatsAppLink from './WhatsAppLink';

export default function Contact() {
  return <>
    <section id="contato" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div className="contact-location">
          <h2 id="contact-heading">A gente se encontra em Messejana.</h2>
          <address>{business.address}.<span>{business.complement}. {business.reference}.</span></address>
          <a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Como chegar <Icon name="arrow" /></a>
        </div>
        <div className="contact-details">
          <div className="contact-hours"><h3>Horários de atendimento</h3><dl className="hours">{business.hours.map(item => <div key={item.days}><dt>{item.days}</dt><dd>{item.time}</dd></div>)}</dl></div>
          <div className="contact-conversation"><h3>Vamos conversar</h3><a className="contact-phone" href={business.whatsapp} target="_blank" rel="noopener noreferrer">{business.phone}</a><a className="contact-email" href={`mailto:${business.email}`}>{business.email}</a><WhatsAppLink>Falar pelo WhatsApp</WhatsAppLink><a className="text-link" href={business.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" /> Ver Instagram</a></div>
        </div>
      </div>
    </section>
    <footer className="site-footer"><div className="container"><div className="footer-top"><a className="footer-name" href="#inicio">VERITAS<span>LAVA JATO</span></a><p>{business.slogan}</p><nav aria-label="Navegação do rodapé">{navigation.filter(item => item.href !== '#inicio').map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav></div><div className="footer-bottom"><span>© Veritas Lava Jato</span><a href={`mailto:${business.email}`}>{business.email}</a><span>Messejana, Fortaleza — CE</span></div></div></footer>
    <WhatsAppLink className="floating-whatsapp">WhatsApp</WhatsAppLink>
  </>;
}
