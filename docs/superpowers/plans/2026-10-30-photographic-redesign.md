# Veritas — reformulação da composição

## Problema observado

Mesmo sem alertas do detector, a página repete imagem e texto em duas colunas, cabeçalhos semelhantes e áreas de preço com apresentação de cartão. A função local (onde fica, quando funciona e como chamar) aparece tarde. É necessário alterar a estrutura, não apenas os tokens.

## Direção

Uma oficina de cuidado próxima do cliente: fotografia real primeiro, ficha de atendimento ao lado e informações práticas na abertura. Preto, grafite, prata e vermelho da marca. Barlow Condensed para títulos compactos e Manrope para leitura. O vermelho terá um papel comercial explícito no delivery; fotografias permanecem sem sobreposições decorativas.

## Referências analisadas

- SkyPark, captura histórica do Land-book: fotografia do trabalho, entrada por serviços e acesso direto ao contato. Domínio atual redireciona; análise visual limitada ao arquivo da galeria.
- Polestar, descoberta no Siteinspire e site oficial: precisão dos alinhamentos, enquadramento amplo e navegação contida. Não serão adotados catálogo de veículos, configurador, financiamento ou linguagem de concessionária.
- Under, encontrado no Lapa Ninja e inspecionado no site oficial: fotografia do lugar como apresentação e navegação orientada a visitar. Aproveitar o vínculo com um local físico, sem copiar tipografia ou layout.
- Awwwards: acesso às páginas específicas falhou por timeout; não foi usado como evidência visual.

## Implementação

- [x] Abertura com fotografia à esquerda, texto em escala humana e uma ação principal de WhatsApp; endereço e horários imediatamente abaixo.
- [x] Serviços em lista de duas colunas sobre superfície prata, com fotografia real e descrições preservadas.
- [x] Preservar filtros, modal, vídeos e carregamento progressivo da galeria.
- [x] Delivery em superfície vermelha, lista de preços vertical e condições explícitas.
- [x] Promoção em composição aberta, sem caixa de compra; manter todos os valores, brindes e toggle.
- [x] Contato com endereço em destaque e horários acessíveis, sem mapa fictício.
- [x] Reescrever o CSS para eliminar a sobreposição de regras das iterações anteriores.
- [x] Validar build, lint, testes e navegador em quatro larguras.

## Restrições

Manter Next.js, rotas, integrações e dados comerciais. Não adicionar dependências ou publicar. Não produzir antes/depois sem confirmação da identidade e ordem dos registros. Fotografias dos sites de referência não entram no produto.
