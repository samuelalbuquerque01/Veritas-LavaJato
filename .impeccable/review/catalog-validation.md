# Catálogo de preços — validação

- Fonte: PDF de duas páginas fornecido pelo usuário, inspecionado visualmente após extração do texto.
- Valores transcritos para `src/data/catalog.ts`. Texto oculto R$ 00,00 do PDF não foi usado como preço; limpeza de motor permanece a consultar, conforme a página visível.
- Cópia pública idêntica ao original: SHA256 F1E75C2896AB9B01564053F99C01E5E14A296AD26A871FBC940E545A41D05DBF.
- Build: exit 0. Lint: exit 0. Seis testes aprovados, incluindo todos os preços do catálogo e separação dos valores de delivery.
- Verificação HTTP de SEO: canonical, compartilhamento, JSON-LD, robots e sitemap aprovados.
- Chrome: 1440, 768, 390 e 320 px; tabela com três lavagens e nove preços, abertura/fechamento dos detalhes com Enter e PDF HTTP 200 com assinatura válida. Menu, âncoras, galeria, modal, foco, Escape, setas, vídeo e ausência de overflow/erros JavaScript continuam aprovados.
- Scanner avoid-ai-design: 18 arquivos, zero apontamentos. A exceção da paleta da marca permanece documentada no CSS global.
- Revisão independente: comparou as duas páginas do PDF, todos os valores e itens e as quatro capturas. Disposição: ship, sem problemas materiais.

Capturas focadas: `.impeccable/review/catalog-desktop.png`, `catalog-tablet.png`, `catalog-mobile.png` e `catalog-small-mobile.png`. Somente a captura estabiliza elementos fixos; os testes de interação usam o CSS real. Não houve alteração de preços, condições ou mensagens das ofertas existentes.
