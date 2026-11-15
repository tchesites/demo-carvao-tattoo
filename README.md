# Carvão Tattoo (demo)

- **Cliente:** Carvão — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** [`tchesites/demo-carvao-tattoo`](https://github.com/tchesites/demo-carvao-tattoo) — `git@github.com-tchesites:tchesites/demo-carvao-tattoo.git`
- **Como rodar:** `npm install` e `npm run dev` (`http://localhost:4321/demo-carvao-tattoo/`)
- **Check do build:** `npm run build && npm run check`

## Sobre

Modelo de site para **tatuador solo**, inspirado no perfil `@isaac_tattoo_`
(realismo preto e cinza + fine line, Barbacena/MG). O demo é uma marca
fictícia: nome, endereço, telefone, avaliações, depoimentos e portfólio são
inventados.

O objetivo é mostrar que a agência entende o que vende um tatuador: imagem,
desenho autoral e confiança. A página é um portfólio editorial — galeria com
filtro e lightbox, processo em quatro etapas, bio, cuidados e agendamento por
WhatsApp — sem tabela de preço e sem clichê de estúdio escuro com caveira.

## Dados fictícios

- **Endereço:** Rua dos Ipês, 214 — Sala 3 — Centro, Barbacena/MG — 36200-000
- **Horário:** segunda a sexta, 10h às 19h; sábado, 9h às 14h; domingo fechado
- **WhatsApp:** (32) 90000-0000 → `wa.me/5532900000000`
- **Instagram:** [@carvao.tattoo](https://www.instagram.com/carvao.tattoo/)
- **Google:** 4,9 · 63 avaliações (fictícias)
- **Artista:** "Carvão", 9 anos de estrada (fictício)

## Identidade visual

- **Paleta:** preto tinta `#0A0908`, carvão `#121110`, grafite `#1C1A18`,
  osso `#EDE7DD`, osso suave `#B9B1A4` e um acento vermelho de tinta `#8E2F2A`
  só em detalhes.
- **Tipografia:** Instrument Serif (títulos) + Inter (texto e interface).
- **Direção:** ateliê editorial — tipografia grande, filetes de 1px, grão
  sutil e fotografia em preto e branco como única textura da página.
- **Fotos:** banco de imagens Pexels, com tratamento monocromático no CSS.
  **Não são trabalhos do Isaac** e devem ser trocadas por fotos reais antes de
  qualquer uso comercial.

## Estrutura

```
demo-carvao-tattoo/
├── astro.config.mjs
├── package.json
├── scripts/check.mjs      # base, WhatsApp, aviso de demo e imagens
├── .github/workflows/deploy.yml
├── src/
│   ├── components/        # Header, Hero, Galeria, Lightbox, Processo,
│   │                      # Sobre, Cuidados, Depoimentos, Agenda, Footer
│   ├── data/negocio.js    # dados fictícios, trabalhos, processo, cuidados
│   ├── layouts/BaseLayout.astro
│   ├── pages/index.astro
│   ├── styles/            # tokens.css + global.css
│   └── utils/url.js
├── public/
│   ├── fotos/             # 11 imagens (hero, 8 trabalhos, artista, estúdio)
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

## Decisões

- **Marca fictícia**, mesmo com o Isaac como referência: o demo é público e não
  usa nome, fotos nem dados de terceiro.
- **Cidade:** Barbacena/MG, herdando a região da inspiração.
- **Uma página só** + lightbox: portfólio, processo e contato cabem numa
  rolagem; sem blog, loja ou agendamento automático.
- **Filtros** = Todos, Realismo, Fine line e Blackwork. "Autoral" ficou de fora
  por não sustentar um filtro com oito peças.
- **Sem preço fixo:** o orçamento é explicado no processo (tamanho, detalhe e
  número de sessões), como funciona na prática.
- **Cuidados** em acordeão, com protocolo conservador e aviso para seguir a
  orientação do tatuador.
- **Fotos:** a geração de imagem por IA estava sem saldo no provedor; o
  fallback previsto no design (banco de imagens) entrou no lugar. Trocar por
  fotos reais ou geradas é a primeira melhoria pendente.

## Deploy

**GitHub Pages**, por **GitHub Actions** (`.github/workflows/deploy.yml`):
cada push em `main` roda `npm ci` + `astro build` e publica o artefato.

- **URL:** <https://tchesites.github.io/demo-carvao-tattoo/>
- **Base:** `/demo-carvao-tattoo`; links internos via `url()`.
- **Setup:** repo público, topic `demo` e *Settings → Pages → Source =
  GitHub Actions* antes do primeiro push.

## Próximas alterações

- [ ] Trocar as fotos de banco por portfólio real ou gerado no estilo.
- [ ] Revisar a copy com o Maicon antes de usar como modelo comercial.
- [ ] Avaliar uma seção de "flash tattoos" com peças de preço fechado.
