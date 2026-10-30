import { catalog } from '@/data/catalog';
import { money } from '@/data/business';
import Icon from './Icon';
import WhatsAppLink from './WhatsAppLink';
import styles from './Catalog.module.css';

export default function Catalog() {
  return <section id="catalogo" className={`section ${styles.catalog}`} aria-labelledby="catalog-heading">
    <div className="container">
      <div className={styles.heading}>
        <div><h2 id="catalog-heading">Catálogo de preços.</h2><p>Compare as lavagens e veja os serviços adicionais. Os valores de delivery e da promoção estão nas seções próprias.</p></div>
        <a className="text-link" href={catalog.pdfUrl} download target="_blank" rel="noopener noreferrer">Baixar catálogo em PDF <Icon name="arrow" /></a>
      </div>
      <div className={styles.washes}>
        <div>
          <table className={styles.prices}>
            <caption>Lavagens de carros<span>Valores em R$</span></caption>
            <thead><tr><th scope="col">Lavagem</th>{catalog.vehicleSizes.map(size => <th key={size} scope="col">{size}</th>)}</tr></thead>
            <tbody>{catalog.carWashes.map(wash => <tr key={wash.name}><th scope="row">{wash.name}</th>{wash.prices.map((price, index) => <td key={catalog.vehicleSizes[index]} aria-label={money(price)}><span aria-hidden="true">{money(price).replace(/^R\$\s*/, '')}</span></td>)}</tr>)}</tbody>
          </table>
          <div className={styles.includes}>
            {catalog.carWashes.map(wash => <details key={wash.name} className={styles.details}>
              <summary><span>O que inclui a {wash.name.toLocaleLowerCase('pt-BR')}</span><Icon name="chevron" className={styles.chevron} /></summary>
              <ul>{[...catalog.commonItems, ...wash.additionalItems].map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul>
            </details>)}
          </div>
        </div>
        <div className={styles.motorcycle}>
          <h3>{catalog.motorcycle.name}</h3><strong>{money(catalog.motorcycle.price)}</strong>
          <ul>{catalog.motorcycle.items.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul>
          <WhatsAppLink className="text-link" message="Olá! Gostaria de saber mais sobre a lavagem de moto do catálogo da Veritas.">Consultar lavagem de moto</WhatsAppLink>
        </div>
      </div>
      <div className={styles.additional}>
        <div><h3>Adicionais para carros</h3><dl>{catalog.additionalCars.map(item => <div key={item.label}><dt>{item.label}{item.description && <span>{item.description}</span>}</dt><dd>{item.price === null ? 'A consultar' : money(item.price)}</dd></div>)}</dl></div>
        <div><h3>Adicionais para motos</h3><dl>{catalog.additionalMotorcycles.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.price === null ? 'A consultar' : money(item.price)}</dd></div>)}</dl></div>
      </div>
      <div className={styles.footer}><p>Valores conforme o catálogo digital Veritas. Fale com a gente para consultar o serviço para seu veículo.</p><WhatsAppLink message={catalog.message}>Consultar serviços e valores</WhatsAppLink></div>
    </div>
  </section>;
}
