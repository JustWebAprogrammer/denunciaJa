// Dados fictícios para o app Denuncie Já

export const CATEGORIES = [
  {
    id: 'crime',
    name: 'Crime',
    colorKey: 'crime',
    count: 24,
  },
  {
    id: 'catastrofe',
    name: 'Catástrofe',
    colorKey: 'catastrofe',
    count: 3,
  },
  {
    id: 'residuos',
    name: 'Resíduos',
    colorKey: 'residuos',
    count: 11,
  },
  {
    id: 'infraestrutura',
    name: 'Infraestrutura',
    colorKey: 'infraestrutura',
    count: 5,
  },
  {
    id: 'violencia',
    name: 'Violência',
    colorKey: 'violencia',
    count: 8,
  },
  {
    id: 'outros',
    name: 'Outros',
    colorKey: 'outros',
    count: 7,
  },
];

export const RECENT_ALERTS = [
  {
    id: 1,
    title: 'Roubo a mão armada — Mutamba',
    category: 'crime',
    time: 'há 8 min',
    location: 'Luanda',
    status: 'em_analise',
  },
  {
    id: 2,
    title: 'Inundação — Bairro Rangel',
    category: 'catastrofe',
    time: 'há 22 min',
    location: 'Luanda',
    status: 'em_analise',
  },
  {
    id: 3,
    title: 'Lixo acumulado — Av. 21 de Janeiro',
    category: 'residuos',
    time: 'há 1h',
    location: 'Luanda',
    status: 'resolvido',
  },
  {
    id: 4,
    title: 'Assalto — Rua Major Kanhangulo',
    category: 'crime',
    time: 'há 1h 30min',
    location: 'Luanda',
    status: 'em_analise',
  },
  {
    id: 5,
    title: 'Falta de água — Viana',
    category: 'infraestrutura',
    time: 'há 2h',
    location: 'Luanda',
    status: 'em_analise',
  },
  {
    id: 6,
    title: 'Água parada — Cazenga',
    category: 'catastrofe',
    time: 'há 3h',
    location: 'Luanda',
    status: 'resolvido',
  },
];

export const MAP_PINS = [
  {
    id: 1,
    title: 'Roubo a mão armada',
    category: 'crime',
    location: 'Mutamba',
    time: 'há 8 min',
    position: { x: 38, y: 28 },
  },
  {
    id: 2,
    title: 'Assalto',
    category: 'crime',
    location: 'Samba',
    time: 'há 45 min',
    position: { x: 62, y: 42 },
  },
  {
    id: 3,
    title: 'Inundação',
    category: 'catastrofe',
    location: 'Bairro Rangel',
    time: 'há 22 min',
    position: { x: 22, y: 55 },
  },
  {
    id: 4,
    title: 'Lixo acumulado',
    category: 'residuos',
    location: 'Av. 21 de Janeiro',
    time: 'há 1h',
    position: { x: 75, y: 22 },
  },
  {
    id: 5,
    title: 'Buraco na via',
    category: 'infraestrutura',
    location: 'Kilamba',
    time: 'há 2h',
    position: { x: 50, y: 68 },
  },
  {
    id: 6,
    title: 'Falta de água',
    category: 'infraestrutura',
    location: 'Viana',
    time: 'há 3h',
    position: { x: 15, y: 35 },
  },
  {
    id: 7,
    title: 'Roubo de telemóvel',
    category: 'crime',
    location: 'Maianga',
    time: 'há 30 min',
    position: { x: 80, y: 55 },
  },
];

export const STATS = {
  totalAlertas: 45,
  emAnalise: 18,
  resolvidos: 27,
  comunidadesActivas: 12,
};

export const FILTER_CHIPS = [
  { id: 'all', label: 'Todos', count: 45, colorKey: null },
  { id: 'crime', label: 'Crime', count: 24, colorKey: 'crime' },
  { id: 'catastrofe', label: 'Catástrofe', count: 3, colorKey: 'catastrofe' },
  { id: 'residuos', label: 'Resíduos', count: 11, colorKey: 'residuos' },
  { id: 'infraestrutura', label: 'Infraestrutura', count: 5, colorKey: 'infraestrutura' },
];

export default {
  CATEGORIES,
  RECENT_ALERTS,
  MAP_PINS,
  STATS,
  FILTER_CHIPS,
};