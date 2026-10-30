# Veritas — revisão visual de 30/10/2026

## Escopo e evidência

Página institucional existente, perfil marketing-page dentro do sistema Veritas. Código em src, capturas desktop e mobile anteriores, comparação da silhueta e revisão a 25%. A paleta e as famílias tipográficas da marca foram preservadas. Funcionalidades e dados comerciais permanecem os mesmos.

## Auditoria inicial

Scanner avoid-ai-design 0.4.0: 12 arquivos, nenhum P0, seis P1 e nenhum P2.

| Prioridade / ID | Local | Evidência e decisão |
| --- | --- | --- |
| P1 SD2 | globals.css | Código: preto e vermelho. É a paleta expressamente solicitada para Veritas; preservada e marcada como exceção específica. |
| P1 T2 | page.module.css | Código: fonte Geist do starter em CSS sem importação. Arquivo sem uso removido. |
| P1 SD5 | page.tsx | Código e render: trecho colorido na abertura e títulos divididos em duas vozes. Removidos os destaques e as quebras artificiais. |
| P1 SD5 | Contact.tsx | Código e render: repetição da fórmula de título em duas tonalidades. Título substituído por “Contato e localização”. |
| P1 SD5 | Gallery.tsx | Código e render: repetição da fórmula; substituído por “Trabalhos realizados”. |
| P1 SD5 | Offers.tsx | Código e render: palavras pintadas nas duas ofertas. Os títulos completos carregam a hierarquia. |
| P1 CP3 | WhatsAppLink.tsx | Julgamento visual: ícone de WhatsApp e seta repetidos em toda ação. Retirada a seta redundante; destinos e mensagens preservados. |
| P2 S1 / L9 | composição | Render: fotos equivalentes em grade e seções com títulos parecidos. Fotos principais passam a ocupar duas colunas, registros secundários uma, sem cards adicionais. |
| P2 T6 | textos de apoio | Render: legendas, informações comerciais e descrições pequenas. Escala e espaçamentos revistos, com textos usuais de 14–16px e notas auxiliares de 12px. |

O restante do catálogo foi revisado: sem tema de biblioteca intocado, imagens artificiais, sombras decorativas repetidas, métricas inventadas, números de seção, ícones emoji, motion obrigatório ou múltiplas identidades. As fotos e os ícones SVG existentes continuam adequados.

## Direção aplicada

Preto #0b0c0d como base; grafite #141618 para superfícies; branco-prata #f4f3ef para leitura; prata #b6b7ba para apoio; vermelho #e32632 para ações; prata frio #dedfe0 para distinguir delivery. Barlow Condensed permanece nos títulos inteiros, com peso 500; Manrope permanece na leitura. O ritmo vem da dimensão real das fotos e da informação, sem novos ornamentos automotivos.

Uma troca completa de identidade descartaria decisões da marca. Uma troca apenas de fonte manteria a repetição da composição. A revisão preserva a identidade e corrige hierarquia, tipografia, proporções e ritmo.

## Resultado

- Abertura sem frase pintada, título menos fragmentado no celular e fotografia mais cedo.
- Serviços com informações maiores; no celular a lista antecede a foto de apoio.
- Galeria com duas fotografias dominantes por grupo, filtros e modal preservados.
- Ofertas com notas e condições mais legíveis, sem alterar preços nem regras.
- Scanner final: 11 arquivos, zero P0, zero P1, zero P2. Apenas SD2 possui exceção, por exigência explícita do briefing.
- Navegador: menu, âncoras, links, filtros, revelação progressiva, modal, teclado, foco, Escape, setas, rolagem e metadados de vídeo aprovados nas quatro larguras. Sem overflow horizontal ou erros JavaScript.

## Julgamento

Justificado: as fotos reais e a informação comercial orientam as mudanças. Coerente: mesmas famílias, paleta, controles e navegação. Sem nova fórmula substituta: a hierarquia deixa de depender de palavras coloridas e de grades equivalentes. Consistente: uma única página e um único sistema, preservando os dados e as interações existentes.
