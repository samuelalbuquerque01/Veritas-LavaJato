export const categories = ['Todos', 'Carros', 'Motos', 'Detalhes'] as const;
export type Category = typeof categories[number];
export type Media = {
  id: string;
  type: 'image' | 'video';
  category: Exclude<Category, 'Todos'>;
  caption: string;
  src: string;
  width: number;
  height: number;
  poster?: string;
};
const photo = (id: string, caption: string, category: Media['category'] = 'Carros', width = 1350): Media => ({ id, caption, category, type: 'image', src: `/images/works/${id}.webp`, width, height: 1800 });
const video = (id: string, caption: string, category: Media['category'] = 'Carros'): Media => ({ id, caption, category, type: 'video', src: `/videos/${id}.mp4`, poster: `/videos/${id}.jpg`, width: 720, height: 1280 });
export const gallery: Media[] = [
  photo('img_6066', 'Polo vermelho — frente e lateral'),
  photo('img_6116', 'HB20 preto — vista dianteira'),
  photo('img_5922', 'Moto preta na área de atendimento', 'Motos'),
  photo('img_6105', 'Painel e volante em detalhe', 'Detalhes'),
  photo('img_5906', 'SUV cinza — vista lateral'),
  photo('img_6086', 'Moto amarela — vista lateral', 'Motos'),
  photo('img_6101', 'Carro branco — perfil lateral'),
  photo('img_5984', 'Bancos dianteiros do veículo', 'Detalhes'),
  photo('img_6089', 'Picape prata na Veritas'),
  photo('img_5874', 'Sedã cinza na área coberta'),
  photo('img_6097', 'Compartimento do motor', 'Detalhes'),
  photo('img_6059', 'Carro branco — vista dianteira'),
  photo('img_6118', 'HB20 preto — vista traseira'),
  photo('img_6106', 'Bancos e console central', 'Detalhes'),
  photo('img_5852', 'Hatch branco na área de lavagem'),
  photo('img_6079', 'Veículo coberto com espuma'),
  photo('img_6102', 'Roda do veículo em detalhe', 'Detalhes'),
  photo('img_5967', 'Carro branco na entrada'),
  photo('img_6081', 'SUV cinza no pátio', 'Carros', 1012),
  photo('img_6087', 'Vista frontal durante a lavagem'),
  photo('img_5919', 'Interior de um carro vermelho', 'Detalhes'),
  photo('img_5790', 'Hatch branco na área coberta'),
  photo('img_5945', 'Carro cinza — vista lateral'),
  photo('img_6107', 'Interior visto pela porta lateral', 'Detalhes'),
  video('img_5834', 'Registro em vídeo na Veritas'),
  video('img_5883', 'Veículo na área de atendimento'),
  video('img_5892', 'Registro do veículo em vídeo'),
  video('img_5911', 'Detalhes do veículo em vídeo', 'Detalhes'),
  video('img_5954', 'Registro de atendimento em vídeo'),
  video('img_6041', 'Moto vermelha registrada na Veritas', 'Motos'),
  video('img_6068', 'Registro de um hatch prata'),
  video('img_6070', 'Vista do veículo em vídeo'),
  video('img_6082', 'Registro na área da Veritas'),
  video('img_6110', 'Detalhe registrado em vídeo', 'Detalhes'),
];
