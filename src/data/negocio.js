// Dados 100% fictícios do demo CARVÃO.
// Nome, endereço, telefone, avaliações e depoimentos são inventados.
// As fotos são de banco (Pexels, licença livre) e não são trabalho real.

export const negocio = {
  nome: 'Carvão',
  assinatura: 'Realismo preto e cinza · Fine line',
  cidade: 'Barbacena',
  estado: 'MG',
  bairro: 'Centro',
  endereco: 'Rua dos Ipês, 214 — Sala 3',
  enderecoCompleto: 'Rua dos Ipês, 214 — Sala 3 — Centro, Barbacena/MG — 36200-000',
  cep: '36200-000',
  horarios: [
    { dias: 'Segunda a sexta', horas: '10h às 19h' },
    { dias: 'Sábado', horas: '9h às 14h' },
    { dias: 'Domingo', horas: 'Fechado' },
  ],
  telefoneDisplay: '(32) 90000-0000',
  telefoneDigits: '5532900000000',
  instagram: '@carvao.tattoo',
  instagramUrl: 'https://www.instagram.com/carvao.tattoo/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+dos+Ip%C3%AAs,+214+-+Centro,+Barbacena+-+MG',
  notaGoogle: 4.9,
  totalAvaliacoes: 63,
  anos: 9,
  sessoes: 1200,
  desde: 2017,
};

export const categorias = [
  { id: 'realismo', label: 'Realismo' },
  { id: 'fine-line', label: 'Fine line' },
  { id: 'blackwork', label: 'Blackwork' },
];

export const trabalhos = [
  {
    id: 't2',
    titulo: 'Sleeve preto',
    local: 'Braço inteiro',
    categoria: 'blackwork',
    arquivo: '/fotos/trabalho-02.jpg',
    alt: 'Braço fechado em blackwork com desenhos de moto, caveira e flores',
    largura: 800,
    altura: 1200,
  },
  {
    id: 't6',
    titulo: 'Sleeve botânico',
    local: 'Braço',
    categoria: 'blackwork',
    arquivo: '/fotos/trabalho-06.jpg',
    alt: 'Braço fechado com tatuagem botânica de grande contraste',
    largura: 1200,
    altura: 799,
  },
  {
    id: 't3',
    titulo: 'Traço autoral',
    local: 'Antebraço',
    categoria: 'fine-line',
    arquivo: '/fotos/trabalho-03.jpg',
    alt: 'Tatuagem de linha fina no antebraço, com desenhos soltos',
    largura: 800,
    altura: 1200,
  },
  {
    id: 't4',
    titulo: 'Desenho nas costas',
    local: 'Costas',
    categoria: 'fine-line',
    arquivo: '/fotos/trabalho-04.jpg',
    alt: 'Tatuagem fine line de desenho autoral nas costas',
    largura: 1200,
    altura: 800,
  },
  {
    id: 't1',
    titulo: 'Braço fechado',
    local: 'Braço',
    categoria: 'realismo',
    arquivo: '/fotos/trabalho-01.jpg',
    alt: 'Tatuagem de caveira com mariposa em preto e cinza no braço',
    largura: 960,
    altura: 1200,
  },
  {
    id: 't5',
    titulo: 'Peito e braços',
    local: 'Peito',
    categoria: 'realismo',
    arquivo: '/fotos/trabalho-05.jpg',
    alt: 'Peito e braços tatuados em preto e cinza',
    largura: 1200,
    altura: 800,
  },
  {
    id: 't8',
    titulo: 'Linha fina',
    local: 'Braços',
    categoria: 'fine-line',
    arquivo: '/fotos/trabalho-08.jpg',
    alt: 'Tatuagens de linha fina nos braços',
    largura: 1200,
    altura: 800,
  },
  {
    id: 't7',
    titulo: 'Sessão de fechamento',
    local: 'Braços',
    categoria: 'realismo',
    arquivo: '/fotos/trabalho-07.jpg',
    alt: 'Braços tatuados apoiados na cadeira do estúdio',
    largura: 1200,
    altura: 800,
  },
];

export const processo = [
  {
    numero: '01',
    titulo: 'Conversa',
    texto:
      'Você manda a ideia, o lugar do corpo e as referências que gosta. Eu respondo com o que dá para fazer, o que não dá e por quê.',
  },
  {
    numero: '02',
    titulo: 'Desenho e orçamento',
    texto:
      'O desenho é feito para a sua anatomia, não copiado de uma pasta. O valor sai do tamanho, do nível de detalhe e do número de sessões — nunca por hora.',
  },
  {
    numero: '03',
    titulo: 'Sessão',
    texto:
      'Sessões de três a seis horas, com pausa, água e café. Você acompanha cada etapa no espelho antes de seguir.',
  },
  {
    numero: '04',
    titulo: 'Cicatrização',
    texto:
      'Saio com a orientação impressa e acompanho por mensagem nas primeiras semanas. Retoque incluso em até 90 dias.',
  },
];

export const cuidados = [
  {
    titulo: 'Antes da sessão',
    texto:
      'Durma bem, coma antes de sair de casa e evite álcool nas 24 horas anteriores. Pele hidratada e sem sol recente faz diferença na hora da agulha.',
  },
  {
    titulo: 'No dia',
    texto:
      'Venha com roupa que dê acesso ao local da tatuagem. Se estiver gripado, com febre ou usando anticoagulante sem liberação médica, remarcamos sem custo.',
  },
  {
    titulo: 'Primeiras 48 horas',
    texto:
      'Lave com sabão neutro e água morna, seque com papel-toalha e aplique uma camada fina do creme indicado. Nada de álcool, gelo ou receita caseira.',
  },
  {
    titulo: 'Primeira semana',
    texto:
      'Sem piscina, mar, sauna ou sol direto. Não puxe a casquinha, mesmo que coce — é ela que protege o traço enquanto a pele se refaz.',
  },
  {
    titulo: 'Depois de cicatrizado',
    texto:
      'Protetor solar todos os dias. É o que mantém o contraste do preto e cinza bonito por anos, e o que evita que a linha fina desbote.',
  },
];

export const depoimentos = [
  {
    texto:
      'Fechei o braço em três sessões. O desenho respeita o movimento do braço, não fica torto quando eu dobro.',
    autor: 'Rodrigo M.',
    detalhe: 'Depoimento ilustrativo',
  },
  {
    texto:
      'Cheguei com uma referência horrível e saí com uma peça que é minha. Ele refez o desenho até ficar certo.',
    autor: 'Ana P.',
    detalhe: 'Depoimento ilustrativo',
  },
  {
    texto:
      'Cicatrizou liso, sem falha. Voltei no ano seguinte para fechar as costas.',
    autor: 'Thiago L.',
    detalhe: 'Depoimento ilustrativo',
  },
];

export const whatsappLink = (
  mensagem = 'Olá, Carvão! Quero marcar uma avaliação para uma tatuagem.'
) => `https://wa.me/${negocio.telefoneDigits}?text=${encodeURIComponent(mensagem)}`;
