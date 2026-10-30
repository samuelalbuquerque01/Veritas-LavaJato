export const business = {
  name: 'Veritas Lava Jato',
  slogan: 'A verdade no cuidado. A confiança em cada detalhe.',
  support: 'Cuidado detalhado, renovação de verdade para o seu veículo.',
  phone: '(85) 99251-0180',
  whatsapp: 'https://wa.me/5585992510180',
  email: 'veritaslavajato@gmail.com',
  instagram: 'https://www.instagram.com/veritaslavajato/',
  instagramHandle: '@veritaslavajato',
  address: 'Avenida Frei Cirilo, 4201 — Messejana, Fortaleza — CE',
  complement: 'Fundos',
  reference: 'Em frente ao Supermercado Pinheiro',
  hours: [
    { days: 'Segunda a sexta', time: '8h às 17h' },
    { days: 'Sábado', time: '8h às 14h' },
  ],
};
export const whatsapp = (message = 'Olá! Gostaria de saber mais sobre os serviços da Veritas Lava Jato.') =>
  `${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;
export const money = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
export const navigation = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#contato', label: 'Contato' },
];
export const services = [
  { title: 'Lavagem completa de carros', description: 'Cuidado para o seu carro, por dentro e por fora.', icon: 'car' },
  { title: 'Lavagem completa de motos', description: 'Sua moto também tem lugar na Veritas.', icon: 'motorcycle' },
  { title: 'Lavagem detalhada', description: 'Atenção às partes que fazem a diferença no conjunto.', icon: 'spark' },
  { title: 'Limpeza de motor', description: 'Um cuidado dedicado ao compartimento do motor.', icon: 'engine' },
  { title: 'Higienização interna completa', description: 'Cuidado com o interior do seu veículo.', icon: 'seat' },
  { title: 'Restauração de plásticos', description: 'Atenção aos acabamentos e às peças plásticas.', icon: 'layers' },
] as const;
export const delivery = {
  prices: [
    { label: 'Carro pequeno', price: 59.99 },
    { label: 'Carro médio', price: 69.99 },
    { label: 'Carro grande', price: 79.99 },
    { label: 'Moto', price: 34.99 },
  ],
  included: ['Lavagem externa', 'Aspiração interna', 'Limpeza básica do painel', 'Enceramento', 'Pretinho nos pneus', 'Aromatização'],
  additional: { label: 'Restauração de plásticos externos e painel', price: 20 },
  message: 'Olá! Gostaria de consultar a disponibilidade da lavagem delivery para meu endereço.',
};
export const promotion = {
  enabled: true,
  pix: 349.99,
  card: 380,
  installments: 5,
  components: [
    { label: 'Lavagem + aspiração + higienização dos painéis', reference: 50, gift: false },
    { label: 'Bancos + teto + colunas', reference: 300, gift: false },
    { label: 'Revitalização dos plásticos', reference: 80, gift: true },
    { label: 'Proteção de pintura com Carnaúba Express Ultra', reference: 60, gift: true },
  ],
  message: 'Olá! Tenho interesse na promoção completa anunciada por R$ 349,99 no Pix. Pode me passar os detalhes?',
};
