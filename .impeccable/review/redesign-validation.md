# Veritas — entrega do redesign estrutural

## Resultado

Composição implementada no projeto existente. Rotas, dados comerciais, mensagens de WhatsApp, promoção configurável e interações da galeria preservados. Abertura e serviços extraídos para Server Components. CSS reescrito como um sistema único, removendo a sobreposição de regras das versões anteriores.

## Evidências executadas

- `npm.cmd run build`: exit 0, incluindo TypeScript e geração estática.
- `npm.cmd run lint`: exit 0, sem erros ou avisos.
- `npm.cmd test`: quatro testes aprovados, zero falhas. Valores, links codificados e arquivos/dimensões das mídias verificados.
- Scanner avoid-ai-design 0.4.0: 13 arquivos, zero P0, zero P1, zero P2. Exceção explícita apenas para SD2, porque preto/prata/vermelho é a identidade fornecida.
- Chrome em 1440, 768, 390 e 320 px: menu, âncoras, links externos, filtros, revelação progressiva, modal, teclado, Escape, setas, ciclo e restauração de foco, bloqueio de rolagem e metadados de vídeo aprovados. Sem overflow horizontal ou erros JavaScript.
- Revisão visual das quatro capturas. Tablet ajustado para preservar a fotografia da abertura em largura maior.
- Revisão independente de código e visual: sem problemas materiais; solicitou apenas recaptura para refletir o título final da promoção. As quatro imagens foram atualizadas; disposição final `ship`.
- `git diff --check`: exit 0; avisos de normalização LF/CRLF do Git não indicam erro de conteúdo.

As capturas longas estabilizam a posição do header e do contato flutuante apenas durante a captura; os testes de comportamento usam o CSS real. O cancelamento de requisição do vídeo ocorre quando o teste redefine a galeria depois de decodificar seus metadados, sem erro de reprodução reportado.

## Pesquisa e limitações

Links, capturas e escolhas em `docs/referencias-visuais.md`. SkyPark foi analisado pela imagem histórica do Land-book, pois o domínio original redireciona. Polestar e Under foram inspecionados nos sites oficiais. As páginas específicas do Awwwards e a entrada individual do Siteinspire falharam na ferramenta de leitura; não foram apresentadas como evidências visuais acessíveis.

Não foram inventados pares antes/depois: falta confirmação suficiente da identidade e ordem das imagens. Permanece o aviso já conhecido de metadataBase, porque nenhum domínio de produção foi informado. Nenhuma publicação, instalação de dependência de produção ou alteração de preço foi realizada.
