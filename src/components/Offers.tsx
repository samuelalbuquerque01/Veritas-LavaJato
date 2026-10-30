import Image from 'next/image';
import { delivery, money, promotion } from '@/data/business';
import Icon from './Icon';
import WhatsAppLink from './WhatsAppLink';

export function Delivery() {
  return <section id="delivery" className="section delivery-section" aria-labelledby="delivery-heading">
    <div className="container delivery-layout">
      <div className="delivery-copy">
        <h2 id="delivery-heading">Lavagem delivery.</h2>
        <h3>O cuidado Veritas vai até você.</h3>
        <p>Seu carro ou moto limpo sem sair de casa.</p>
        <div className="delivery-included">
          <h3>O que está incluso na oferta</h3>
          <ul className="check-list">{delivery.included.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul>
          <p className="fine-print">Itens anunciados na oferta. Consulte os itens aplicáveis à lavagem de motos pelo WhatsApp.</p>
        </div>
      </div>
      <div className="delivery-pricing">
        <div className="delivery-prices">{delivery.prices.map(item => <div key={item.label}><span>{item.label}</span><strong>{money(item.price)}</strong></div>)}</div>
        <p className="additional"><span><strong>Serviço adicional</strong>{delivery.additional.label}</span><b>{money(delivery.additional.price)}</b></p>
        <WhatsAppLink message={delivery.message}>Consultar atendimento delivery</WhatsAppLink>
        <p className="fine-print">Consulte disponibilidade de atendimento para seu endereço.</p>
      </div>
    </div>
  </section>;
}

export function Promotion() {
  if (!promotion.enabled) return null;
  return <section className="section promotion-section" aria-labelledby="promotion-heading">
    <div className="container promotion-layout">
      <div className="promotion-info">
        <h2 id="promotion-heading">Promoção completa.<br />Dois brindes incluídos.</h2>
        <p className="promotion-lead">Conheça a promoção completa da Veritas e os dois brindes do pacote.</p>
        <ul className="promotion-items">{promotion.components.map(item => <li key={item.label}>
          {item.gift && <span className="gift">Brinde</span>}
          <h3>{item.label}</h3>
          <span className="reference-price">{money(item.reference)}</span>
        </li>)}</ul>
        <p className="fine-print">Valores de referência dos componentes na arte. Não constituem uma tabela de contratação avulsa.</p>
      </div>
      <div className="promotion-purchase">
        <div className="promotion-photo"><Image src="/images/promotion-detail.webp" width={1000} height={750} sizes="(max-width: 760px) 100vw, 35vw" alt="Painel e volante de um veículo nos registros da Veritas" /></div>
        <div className="promotion-price">
          <p><strong>{money(promotion.pix)}</strong><span>no Pix</span></p>
          <p className="card-payment">{money(promotion.card)} no cartão<br />em até {promotion.installments} vezes sem juros</p>
          <WhatsAppLink message={promotion.message}>Consultar promoção</WhatsAppLink>
          <p className="fine-print">Consulte disponibilidade e condições pelo WhatsApp.</p>
        </div>
      </div>
    </div>
  </section>;
}
