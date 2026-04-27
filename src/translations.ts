export type Language = 'pt' | 'en';

export interface CaseEntry {
  slug: string;
  title: string;
  subtitle: string;
  tab: string;
  stack: string;
}

const sectionLabels = {
  pt: { context: 'Contexto', problem: 'Problema', action: 'Ação', result: 'Resultado' },
  en: { context: 'Context', problem: 'Problem', action: 'Action', result: 'Result' },
};

export const translations = {
  pt: {
    nav: {
      offers: 'Ofertas',
      cases: 'Portifólio',
      about: 'Sobre',
      words: 'Depoimentos',
      contact: 'Contato',
      available: 'Disponível',
    },
    hero: {
      h1a: 'Engenheiro fullstack',
      h1b: 'com DNA de fundador,',
      h1c: 'construindo ferramentas para ',
      h1d: 'clima & IA',
      lede: 'Levo novos produtos de impacto socioambiental do zero ao ar, e apoio times existentes em ciclos de entrega. Consultoria sob medida, sem template.',
      ctaPrimary: 'Vamos conversar',
      ctaSecondary: 'Ver os cases',
    },
    trust: {
      r1: 'Co-fundador & CTO',
      r1b: 'CTO',
      r2: 'Fullstack sênior · 6 anos',
      r3: 'Consultor',
      r4: 'Fullstack sênior',
      r5: 'Consultor',
    },
    offers: {
      title: 'Ofertas',
      tag: 'três jeitos de trabalhar juntos',
      note: 'todos os formatos remote-first',
      format: 'Formato',
      cta: 'Conversar →',
      list: [
        {
          num: '01 / product',
          name: 'Produto do zero',
          tag: '3–6 meses',
          anchor: 'Para ideias em climate tech, energia, mobilidade, agrofloresta e ativismo ambiental.',
          description: 'Entro como parceiro técnico da fundação ao ar. Defino arquitetura, construo o MVP e lidero as decisões de produto até você estar rodando com usuários reais.',
          format: 'Projeto fechado',
          featured: true,
        },
        {
          num: '02 / sprint',
          name: 'Sprint de entrega',
          tag: '2–6 semanas',
          anchor: 'Para times que precisam destravar uma entrega específica.',
          description: 'Somo ao seu time por um período curto e focado. Feature nova, migração, integração, redução de débito técnico. Qualquer indústria, entrega bem definida.',
          format: 'Freelance',
        },
        {
          num: '03 / ai',
          name: 'AI enablement',
          tag: '1–3 meses',
          anchor: 'Para empresas que precisam transformar seus processos com IA.',
          description: 'Implanto a camada de IA do seu time: do primeiro agente útil ao fluxo que se mantém sozinho. Deixo o time treinado para operar com autonomia. Mentoria opcional após a entrega.',
          format: 'Consultoria',
        },
      ],
    },
    cases: {
      title: 'Cases selecionados',
      tag: 'trabalhos recentes, em detalhe',
      note: '2 de N · mais sob demanda',
      caseLabel: 'caso',
      sectionLabels: sectionLabels.pt,
      list: [
        {
          slug: 'data360',
          title: 'Interface conversacional para dados climáticos oficiais do Banco Mundial.',
          subtitle: 'Data360 Global Challenge',
          tab: 'Dados climáticos, em linguagem comum',
          stack: 'Chainlit,FastAPI,PostgreSQL,FastMCP,Claude API',
        },
        {
          slug: 'tupi',
          title: 'Construção da infraestrutura de IA da Tupi.',
          subtitle: 'Tupi · infraestrutura de IA',
          tab: 'De ferramentas de IA a infraestrutura de IA',
          stack: 'TypeScript,Python,Claude Code,MCP,GitHub Actions',
        },
      ],
    },
    about: {
      title: 'Sobre',
      tag: 'a versão longa',
      facts: 'Fatos rápidos',
      outsideTitle: 'Fora do trabalho',
      factList: [
        { k: 'edu', v: 'USP', s: 'Bolsa FAPESP' },
        { k: '2012—19', v: 'Co-fundador & CTO', s: 'Fundação Grubster' },
        { k: '2018', v: 'Integração de M&A', s: 'Fusão com ChefsClub' },
        { k: '2019—25', v: 'Fullstack sênior', s: 'Tesorio · YC' },
        { k: '2026—', v: 'Independente', s: 'Consultoria clima & IA' },
      ],
    },
    words: {
      title: 'Nas palavras deles',
      tag: 'de quem já trabalhou comigo',
    },
    contact: {
      pageTitle: 'Contato',
      h2a: 'Tem um problema que vale a pena ',
      h2b: 'resolver?',
      lede: 'Me conte onde você está e o que precisa. Leio toda mensagem e respondo em até dois dias úteis.',
      cta: 'Entrar em contato',
      copy: 'copiado ✓',
    },
    footer: {
      tagline: 'felipe vieira · consultoria clima & IA',
      lastUpdate: 'Última atualização: abril 2026',
    },
    terminal: {
      cta: 'vamos trabalhar juntos',
      whoami: 'felipe vieira',
      whoamiNote: '// engenheiro sênior, ex-co-fundador',
      focusLabel: 'focus/',
    },
    cover: {
      placeholder: 'placeholder · screenshot do produto',
    },
  },
  en: {
    nav: {
      offers: 'Offers',
      cases: 'Portfolio',
      about: 'About',
      words: 'Words',
      contact: 'Contact',
      available: 'Available',
    },
    hero: {
      h1a: 'Fullstack engineer',
      h1b: "with a founder's DNA,",
      h1c: 'building tools for ',
      h1d: 'climate & AI',
      lede: 'I take new socio-environmental products from zero to launch, and I help existing teams ship the deliveries that matter. Bespoke consultancy, no template.',
      ctaPrimary: "Let's talk",
      ctaSecondary: 'See the work',
    },
    trust: {
      r1: 'Co-founder & CTO',
      r1b: 'CTO',
      r2: 'Sr. Fullstack · 6 yrs',
      r3: 'Consultant',
      r4: 'Sr. Fullstack',
      r5: 'Consultant',
    },
    offers: {
      title: 'What I offer',
      tag: 'three ways to work together',
      note: 'all engagements remote-first',
      format: 'Format',
      cta: 'Talk →',
      list: [
        {
          num: '01 / product',
          name: 'Product from zero',
          tag: '3–6 months',
          anchor: 'For ideas in climate tech, energy, mobility, agroforestry & environmental activism.',
          description: 'I join as a technical partner from foundation to launch. I define the architecture, build the MVP, and lead product decisions until you are running with real users.',
          format: 'Fixed project',
          featured: true,
        },
        {
          num: '02 / sprint',
          name: 'Delivery sprint',
          tag: '2–6 weeks',
          anchor: 'For teams that need to unblock a specific delivery.',
          description: 'I join your team for a short, focused period. New feature, migration, integration, technical debt reduction. Any industry, well-defined delivery.',
          format: 'Freelance',
        },
        {
          num: '03 / ai',
          name: 'AI enablement',
          tag: '1–3 months',
          anchor: 'For companies that need to transform their processes with AI.',
          description: "I deploy your team's AI layer: from the first useful agent to the self-maintaining flow. I leave the team trained to operate with autonomy. Optional mentoring after delivery.",
          format: 'Consultancy',
        },
      ],
    },
    cases: {
      title: 'Selected cases',
      tag: 'recent work, in detail',
      note: '2 of N · more on request',
      caseLabel: 'case',
      sectionLabels: sectionLabels.en,
      list: [
        {
          slug: 'data360',
          title: 'Conversational interface for official World Bank climate data.',
          subtitle: 'Data360 Global Challenge',
          tab: 'Climate data, in plain language',
          stack: 'Chainlit,FastAPI,PostgreSQL,FastMCP,Claude API',
        },
        {
          slug: 'tupi',
          title: 'Building AI infrastructure at Tupi.',
          subtitle: 'Tupi · AI infrastructure',
          tab: 'From AI tools to AI infrastructure',
          stack: 'TypeScript,Python,Claude Code,MCP,GitHub Actions',
        },
      ],
    },
    about: {
      title: 'About',
      tag: 'the long version',
      facts: 'Quick facts',
      outsideTitle: 'Outside of work',
      factList: [
        { k: 'edu', v: 'USP', s: 'FAPESP research grant' },
        { k: '2012—19', v: 'Co-founder & CTO', s: 'Grubster Foundation' },
        { k: '2018', v: 'M&A integration', s: 'Merger with ChefsClub' },
        { k: '2019—25', v: 'Senior fullstack', s: 'Tesorio · YC' },
        { k: '2026—', v: 'Independent', s: 'Climate & AI consultancy' },
      ],
    },
    words: {
      title: 'In their words',
      tag: 'from people I worked with',
    },
    contact: {
      pageTitle: 'Contact',
      h2a: 'Have a problem worth ',
      h2b: 'solving?',
      lede: 'Tell me where you are and what you need. I read every message and reply within two business days.',
      cta: 'Get in touch',
      copy: 'copied ✓',
    },
    footer: {
      tagline: 'felipe vieira · climate & AI consultancy',
      lastUpdate: 'Last updated: April 2026',
    },
    terminal: {
      cta: "lets work together",
      whoami: 'felipe vieira',
      whoamiNote: '// senior engineer, ex-co-founder',
      focusLabel: 'focus/',
    },
    cover: {
      placeholder: 'placeholder · product screenshot',
    },
  },
};
