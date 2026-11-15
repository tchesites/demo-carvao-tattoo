// Checagem do build: pega o que quebra o demo no GitHub Pages.
//
// Roda depois de `npm run build`. Falha se um link/imagem interno não passar
// pela base, se o WhatsApp sair errado, se o aviso de demo desaparecer ou se
// alguma imagem referenciada não existir em `dist`.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BASE = '/demo-carvao-tattoo';
const dist = 'dist';
const htmlPath = join(dist, 'index.html');
const erros = [];

if (!existsSync(htmlPath)) {
  console.error('✖ dist/index.html não existe. Rode `npm run build` antes.');
  process.exit(1);
}

const html = readFileSync(htmlPath, 'utf8');

// 1. Links e imagens internos precisam da base.
const internos = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((m) => m[1]);
for (const p of internos) {
  if (!p.startsWith(`${BASE}/`) && p !== BASE) {
    erros.push(`Link interno sem base: ${p}`);
  }
}

// 2. Âncoras de seção continuam válidas.
for (const m of html.matchAll(/href="#([^"]+)"/g)) {
  if (!html.includes(`id="${m[1]}"`)) erros.push(`Âncora sem destino: #${m[1]}`);
}

// 3. WhatsApp com DDI e DDD corretos.
if (!html.includes('wa.me/5532900000000')) {
  erros.push('WhatsApp esperado wa.me/5532900000000 não encontrado');
}
if (/wa\.me\/\d{12}(?!\d)/.test(html)) {
  erros.push('WhatsApp com 12 dígitos encontrado (deve ter 13)');
}

// 4. Aviso de projeto demonstrativo.
if (!/Projeto demonstrativo/i.test(html)) {
  erros.push('Aviso "Projeto demonstrativo" ausente');
}

// 5. Toda imagem local referenciada existe em dist.
const imagens = [...html.matchAll(/src="(\/demo-carvao-tattoo\/[^"]+\.(?:jpg|jpeg|png|webp|svg))"/g)].map((m) => m[1]);
for (const src of new Set(imagens)) {
  const file = join(dist, src.replace(`${BASE}/`, ''));
  if (!existsSync(file)) erros.push(`Imagem ausente em dist: ${src}`);
}

// 6. Sem placeholder no ar.
for (const palavra of ['lorem ipsum', 'TODO', 'TBD']) {
  const re = new RegExp(`\\b${palavra}\\b`, 'i');
  if (re.test(html)) erros.push(`Placeholder encontrado: ${palavra}`);
}

if (erros.length) {
  console.error(`✖ ${erros.length} problema(s):`);
  for (const e of erros) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✔ check ok — base, WhatsApp, aviso de demo e imagens (${imagens.length} refs)`);
