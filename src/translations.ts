export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      offers: 'Ofertas',
      cases: 'Portifólio',
      about: 'Sobre',
      contact: 'Contato',
    },
    hero: {
      headline: 'Engenheiro de software fullstack com DNA de fundador.',
      lead: 'Lidero novos produtos de impacto socioambiental do zero ao ar, e apoio times existentes em ciclos de entrega.',
      subheadline: 'Consultoria sob medida para empresas que querem construir com propósito e velocidade.',
      ctaPrimary: 'Vamos conversar',
      ctaSecondary: 'Ver cases',
    },
    offers: {
      title: 'Ofertas',
      card1: {
        name: 'Produto do zero',
        anchor: 'Para ideias em climate tech, energia, mobilidade, agrofloresta e ativismo ambiental.',
        description: 'Entro como parceiro técnico da fundação ao ar. Defino arquitetura, construo o MVP e lidero as decisões de produto até você estar rodando com usuários reais.',
        format: 'Projeto fechado · 3 a 6 meses',
        cta: 'Conversar sobre esse formato',
      },
      card2: {
        name: 'Sprint de entrega',
        anchor: 'Para times que precisam destravar uma entrega específica.',
        description: 'Somo ao seu time por um período curto e focado. Feature nova, migração, integração, redução de débito técnico. Qualquer indústria, entrega bem definida.',
        format: 'Freelance · 2 a 6 semanas',
        cta: 'Conversar sobre esse formato',
      },
      card3: {
        name: 'AI enablement',
        anchor: 'Para empresas que precisam transformar seus processos com IA.',
        description: 'Implanto a camada de IA do seu time: do primeiro agente útil ao fluxo que se mantém sozinho. Deixo o time treinado para operar com autonomia. Mentoria opcional após a entrega.',
        format: 'Consultoria · 1 a 3 meses',
        cta: 'Conversar sobre esse formato',
      },
    },
    cases: {
      title: 'Portifólio',
      case1: {
        slug: 'data360',
        title: 'Interface conversacional para dados climáticos oficiais do Banco Mundial.',
        subtitle: 'Projeto para Data360 Global Challenge',
        context: 'Contexto',
        problem: 'Problema',
        action: 'Ação',
        result: 'Resultado',
        stack: 'Stack: Chainlit, FastAPI, PostgreSQL, FastMCP e Claude API.',
      },
      case2: {
        slug: 'tupi',
        title: 'Construção da infraestrutura de IA da Tupi.',
        subtitle: 'Tupi AI Infrastructure',
        context: 'Contexto',
        problem: 'Problema',
        action: 'Ação',
        result: 'Resultado',
        stack: 'Stack: TypeScript, Python, Claude Code.',
      },
    },
    about: {
      title: 'Sobre',
      outsideTitle: 'Fora do trabalho',
    },
    testimonials: {
      title: 'Depoimentos',
    },
    contact: {
      finalTitle: 'Vamos construir algo que importa?',
      cta: 'Entrar em contato',
      pageTitle: 'Contato',
    },
    footer: {
      lastUpdate: 'Última atualização: Abril 2026',
    }
  },
  en: {
    nav: {
      offers: 'Offers',
      cases: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      headline: 'Fullstack software engineer with a founder\'s DNA.',
      lead: 'I lead new socio-environmental impact products from zero to launch, and support existing teams in delivery cycles.',
      subheadline: 'Bespoke consultancy for companies that want to build with purpose and speed.',
      ctaPrimary: 'Let\'s talk',
      ctaSecondary: 'View cases',
    },
    offers: {
      title: 'What I offer',
      card1: {
        name: 'Product from zero',
        anchor: 'For ideas in climate tech, energy, mobility, agroforestry, and environmental activism.',
        description: 'I join as a technical partner from foundation to launch. I define the architecture, build the MVP, and lead product decisions until you are running with real users.',
        format: 'Fixed project · 3 to 6 months',
        cta: 'Talk about this format',
      },
      card2: {
        name: 'Delivery sprint',
        anchor: 'For teams that need to unblock a specific delivery.',
        description: 'I join your team for a short, focused period. New feature, migration, integration, technical debt reduction. Any industry, well-defined delivery.',
        format: 'Freelance · 2 to 6 weeks',
        cta: 'Talk about this format',
      },
      card3: {
        name: 'AI enablement',
        anchor: 'For companies that need to transform their processes with AI.',
        description: 'I deploy your team\'s AI layer: from the first useful agent to the self-maintaining flow. I leave the team trained to operate with autonomy. Optional mentoring after delivery.',
        format: 'Consultancy · 1 to 3 months',
        cta: 'Talk about this format',
      },
    },
    cases: {
      title: 'Portfolio',
      case1: {
        slug: 'data360',
        title: 'Conversational interface for official World Bank climate data.',
        subtitle: 'Project for Data360 Global Challenge',
        context: 'Context',
        problem: 'Problem',
        action: 'Action',
        result: 'Result',
        stack: 'Stack: Chainlit, FastAPI, PostgreSQL, FastMCP, and Claude API.',
      },
      case2: {
        slug: 'tupi',
        title: 'Building AI infrastructure at Tupi.',
        subtitle: 'Tupi AI Infrastructure',
        context: 'Context',
        problem: 'Problem',
        action: 'Action',
        result: 'Result',
        stack: 'Stack: TypeScript, Python, Claude Code.',
      },
    },
    about: {
      title: 'About',
      outsideTitle: 'Outside of work',
    },
    testimonials: {
      title: 'Testimonials',
    },
    contact: {
      finalTitle: 'Shall we build something that matters?',
      cta: 'Get in touch',
      pageTitle: 'Contact',
    },
    footer: {
      lastUpdate: 'Last updated: April 2026',
    }
  }
};
