# Veritas Lava Jato

Landing page institucional em Next.js App Router, TypeScript e CSS puro. O site apresenta a empresa, serviços, registros reais, delivery, promoção e contatos. Não há backend, cadastro, pagamento ou agendamento. As conversas são iniciadas pelo visitante no WhatsApp.

## Executar

Requisitos: Node.js 22.19+ e npm.

```bash
npm install
npm run dev
```

Abra a URL impressa pelo Next.js. A porta padrão é 3000. Se estiver reservada ou ocupada:

```bash
npm run dev -- --port 3100
```

No Windows com scripts do PowerShell bloqueados, use `npm.cmd` no lugar de `npm`.

## Produção local e verificações

```bash
npm run build
npm run start -- --port 3100
npm run lint
npm test
```

`npm test` valida as mensagens e destinos do WhatsApp, preços por oferta, categorias e existência das mídias. Usa o suporte experimental do Node 22 a TypeScript, que pode emitir aviso de detecção de módulo; não requer dependências adicionais.

O script opcional `scripts/browser-check.py` usa Python Playwright e Google Chrome, contra http://127.0.0.1:3100. Verifica menu, âncoras, filtros, revelação progressiva, modal, foco, Escape, setas, bloqueio de rolagem, metadados de vídeo e overflow em 1440, 768, 390 e 320 px. Salva capturas e resultados em `.impeccable/review`. As ferramentas Python de preparação e teste não são necessárias para executar o site e não são dependências de produção.

## Atualizar conteúdo

- `src/data/business.ts`: nome, slogan, contatos, endereço, horários, navegação, seis serviços, valores e itens do delivery, adicional e promoção.
- `business.whatsapp`: altere também o número de destino; `whatsapp(message)` codifica mensagens automaticamente.
- `business.address`: também alimenta a pesquisa do Google Maps, sem coordenadas inventadas.
- `promotion.enabled`: use `false` para remover toda a seção promocional sem editar componentes.
- Valores são números e recebem formatação monetária brasileira por `money()`.
- Preços dos componentes da promoção são referências da arte. Parcelamento pertence somente à promoção. Não reutilize condições do pacote no delivery.

## Fotos e vídeos

- Fotos: `public/images/works`, em WebP. Logo: `public/images/logo.png`, extraída proporcionalmente da arte fornecida. Abertura, serviços e detalhe promocional são derivados de fotos reais.
- Galeria: edite `src/data/gallery.ts`. Informe ID único, tipo, caminho existente, largura/altura, categoria (`Carros`, `Motos`, `Detalhes`) e legenda descritiva. A ordem do array define a seleção inicial. Exibe seis registros por etapa.
- Vídeos: coloque MP4 H.264/yuv420p em `public/videos`, com capa JPG. Informe `poster` na entrada. Os players usam controles nativos, playsInline e preload none, sem autoplay.
- Cartazes ficam em `public/images/posters`, separados dos trabalhos; o conteúdo comercial é HTML selecionável.
- A biblioteca preparada contém 49 fotos WebP e 10 vídeos MP4. A galeria usa uma seleção de 24 fotos e os 10 vídeos. Outros registros permanecem disponíveis para curadoria. Não foram criadas comparações antes/depois.
- Os HEIC/MOV originais permanecem intactos na pasta de anexos de origem; não são necessários para rodar o site. O manifesto de fotos em `.impeccable/media-manifest.json` relaciona as cópias aos arquivos originais.
- `scripts/prepare-media.py <pasta-origem>` documenta o processo de preparação. Requer Pillow, pillow-heif e imageio-ffmpeg, além das artes nos caminhos esperados pelo script. O script gera cópias; não altera os originais. Os MP4 foram exportados sem áudio.
- Ao trocar a abertura, confira enquadramento em celular e desktop. Atualize o texto alternativo e a mídia de compartilhamento.

## Estrutura

- `src/app/page.tsx`: composição das seções, Server Component.
- `src/app/layout.tsx`: idioma, fontes locais e Metadata API.
- `src/app/globals.css`: tokens, estilos e responsividade.
- `src/components`: menu, galeria, ofertas, contato, ícones SVG e link do WhatsApp. Apenas Header e Gallery são Client Components.
- `src/components/Hero.tsx` e `Services.tsx`: abertura com informações da visita e apresentação dos serviços, ambos no servidor.
- `src/app/icon.png`, `favicon.ico` e `opengraph-image.jpg`: marca e compartilhamento.
- `PRODUCT.md` e `DESIGN.md`: contexto e regras do projeto.

## SEO, fontes e limitações

Domínio oficial: `https://veritaslavajato.com.br`, centralizado em `siteUrl` em `src/data/business.ts`. A Metadata API utiliza esse endereço para canonical e compartilhamento. `src/app/robots.ts` e `sitemap.ts` geram os arquivos de indexação. O JSON-LD usa o tipo AutoWash, com nome, endereço, contato, imagens reais e horários; não inclui avaliações, coordenadas ou área de cobertura inventadas. Ao alterar os horários, mantenha os textos e os campos `opens`, `closes` e `daysOfWeek` consistentes.

Depois de gerar o build e iniciar o servidor, `node --experimental-strip-types scripts/seo-check.mjs` verifica o HTML e os endpoints de SEO. Usa `VERITAS_TEST_URL` quando definido; por padrão aponta para http://127.0.0.1:3400. O domínio precisa ser conectado à hospedagem; o código não modifica DNS. Após a publicação, o sitemap pode ser enviado ao Google Search Console.

Fontes Barlow Condensed e Manrope hospedadas localmente, carregadas com next/font/local, com licenças OFL em `public/fonts`. Não é necessário acessar o Google Fonts para executar ou compilar. `scripts/download-fonts.mjs` registra o download original; fontes não são baixadas no build.

A logo disponível foi recortada da arte raster fornecida. Um arquivo original vetorial ou PNG isolado de maior resolução pode melhorar a nitidez futura, sem bloquear o uso atual.

Cobertura, deslocamento, condições específicas para motos e disponibilidade de ofertas são consultados pelo WhatsApp. Não foram inventadas regras, avaliações, resultados, garantias ou horários de domingo. A revisão visual de 30/10/2026 utilizou as skills avoid-ai-design e Impeccable. O scanner avoid-ai-design terminou sem apontamentos; a paleta preta e vermelha tem exceção documentada por ser uma exigência da marca. Evidências e comparação em `.impeccable/review/avoid-ai-design-audit.md`.

O teste de navegador aceita a variável `VERITAS_TEST_URL` para apontar para outra porta local; por padrão utiliza http://127.0.0.1:3100.

## Referências e composição atual

O redesign estrutural utiliza a captura histórica do SkyPark no Land-book, o site oficial da Polestar encontrado no Siteinspire e o restaurante Under apresentado no Lapa Ninja. Links específicos, limitações de acesso e os princípios aproveitados estão em [docs/referencias-visuais.md](docs/referencias-visuais.md). Nenhuma imagem externa de referência foi usada no site.

Resultados dos checks e da revisão final: `.impeccable/review/redesign-validation.md`. Capturas nas quatro larguras: `.impeccable/review/desktop.png`, `tablet.png`, `mobile.png` e `small-mobile.png`.

A abertura prioriza a foto real e o WhatsApp, com endereço e horários logo abaixo. Serviços usam uma lista sobre prata; delivery tem tabela vertical sobre vermelho; a promoção apresenta composição e preço em uma área aberta. A galeria mantém os filtros, modal e vídeos existentes. No tablet, a imagem da abertura passa a ocupar toda a largura para preservar o enquadramento.
