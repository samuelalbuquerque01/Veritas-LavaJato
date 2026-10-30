type AdditionalService = { label: string; description?: string; price: number | null };

const additionalCars: AdditionalService[] = [
  { label: 'Limpeza de motor', price: null },
  { label: 'Limpeza de teto', price: 79.99 },
  { label: 'Limpeza de bancadas', price: 99.99 },
  { label: 'Limpeza interna completa', description: 'Teto, colunas, portas, bancadas e carpete.', price: 179.99 },
  { label: 'Restauração de plásticos internos e externos', price: 24.99 },
];
const additionalMotorcycles: AdditionalService[] = [
  { label: 'Limpeza e lubrificação do kit de transmissão', price: 14.99 },
  { label: 'Restauração dos plásticos', price: 14.99 },
];

// Transcribed from the two visually inspected pages of the supplied catalogue.
// Hidden R$ 00,00 PDF template text is not a published price.
export const catalog = {
  pdfUrl: '/documents/catalogo-veritas-lava-jato.pdf',
  vehicleSizes: ['Carro pequeno', 'Carro médio', 'Carro grande'],
  commonItems: [
    'Lavagem externa', 'Aspiração interna', 'Limpeza do painel',
    'Aplicação de cera líquida', 'Selante nos pneus',
  ],
  carWashes: [
    { name: 'Lavagem simples', prices: [49.99, 59.99, 69.99], additionalItems: [] },
    { name: 'Lavagem intermediária', prices: [69.99, 79.99, 89.99], additionalItems: ['Restauração dos plásticos externos'] },
    { name: 'Lavagem completa', prices: [89.99, 99.99, 109.99], additionalItems: ['Restauração dos plásticos externos e internos', 'Lavagem de chassi'] },
  ],
  motorcycle: {
    name: 'Lavagem de moto', price: 29.99,
    items: ['Lavagem de pintura', 'Aplicação de cera líquida', 'Verniz de motor', 'Selagem nos pneus'],
  },
  additionalCars,
  additionalMotorcycles,
  message: 'Olá! Gostaria de consultar os serviços e valores do catálogo da Veritas Lava Jato.',
};
