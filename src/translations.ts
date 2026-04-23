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
        title: 'Interface conversacional para dados climáticos oficiais do Banco Mundial.',
        subtitle: 'Projeto para Data360 Global Challenge',
        context: 'Contexto',
        contextContent: 'Jornalistas climáticos, pesquisadores e ativistas precisam de dados oficiais citáveis em tempo real, mas acessar a API Data360 do Banco Mundial (mais de 10.000 indicadores, 200 economias, 300 milhões de pontos de dados) exige conhecimento técnico que a maioria não tem. Ao mesmo tempo, assistentes de IA genéricos alucinam números e inventam fontes, o que piora a crise de desinformação climática em vez de resolver.',
        problem: 'Problema',
        problemContent: 'Como tornar um ativo institucional gigante acessível via linguagem natural sem cair na armadilha da alucinação. A IA precisa interpretar e narrar, mas nunca fabricar dados ou atribuições.',
        action: 'Ação',
        actionContent: 'Co-criei o projeto com Gustavo Faleiros (InfoAmazonia/Pulitzer Center), que trouxe a perspectiva editorial, enquanto eu liderei a arquitetura e implementação técnica. A solução é uma interface de chat que traduz perguntas em linguagem natural em consultas à API do Banco Mundial e devolve respostas narrativas com fontes citáveis. A peça-chave é um servidor MCP open-source que encapsula a API Data360 e garante que a IA narre apenas o que veio dos dados oficiais, nunca números inventados. Toda citação é verificável por construção.',
        stack: 'Stack: Chainlit, FastAPI, PostgreSQL, FastMCP e Claude API.',
        result: 'Resultado',
        resultContent: 'Projeto submetido ao Data360 Global Challenge, aguardando resultado da avaliação. O servidor MCP foi publicado como open-source, permitindo adoção por outros agentes e projetos jornalísticos.',
      },
      case2: {
        title: 'Construção da infraestrutura de IA da Tupi.',
        subtitle: 'Tupi AI Infrastructure',
        context: 'Contexto',
        contextContent: 'Quando cheguei na Tupi como consultor, não havia infraestrutura de IA. Os desenvolvedores usavam ferramentas de IA de forma desconectada, cada um com seu fluxo, sem padronização. O pedido inicial era otimizar o atendimento ao cliente com agentes de IA.',
        problem: 'Problema',
        problemContent: 'IA tratada como feature individual não escala: cada dev reinventa prompts, respostas divergem, o contexto da empresa se perde. O problema real não era "adotar IA" (já estava acontecendo), mas estruturar IA como infraestrutura, não como atalho pessoal.',
        action: 'Ação',
        actionContent: 'Em um mês, entreguei 12 agentes cobrindo atendimento e engenharia, todos construídos sobre três pilares: Prompts como código, IA conectada ao dado real (servidores MCP próprios) e Conhecimento que se mantém sozinho (pipelines no GitHub Actions).',
        stack: 'Stack: TypeScript, Python, Claude Code.',
        result: 'Resultado',
        resultContent: 'A empresa saiu de uso disperso para infraestrutura de IA estruturada em um mês. Os princípios por trás desse trabalho viraram a base de como penso IA aplicada hoje.',
      },
    },
    trajectory: {
      title: 'De onde venho',
      p1: 'Comecei como cofundador e CTO da Grubster (2012–2019), plataforma de reservas de restaurantes que chegou a #1 na App Store brasileira (categoria Food). Liderei engenharia, produto e participei das negociações que levaram à fusão com a ChefsClub em 2018. Nesta nova fase, segui atuando como CTO integrando as duas empresas, unificando stacks distintas e consolidando modelos de dados em um ano, o que criou o maior marketplace de restaurantes do país.',
      p2: 'Depois, passei 6 anos na Tesorio (2019–2025), fintech americana YC, como senior fullstack engineer trabalhando remoto com time dos EUA. Construí a plataforma de Connected Financial Operations orientada a IA em Django/Python/PostgreSQL. Desde 2023, participei da pivotagem AI-first do produto e do workflow de engenharia.',
    },
    about: {
      title: 'Sobre',
      bioTitle: 'Bio profissional',
      unifiedNarrative: 'Sou engenheiro fullstack senior. Comecei como cofundador e CTO da Grubster (2012–2019), plataforma de reservas de restaurantes que chegou a #1 na App Store brasileira (categoria Food). Liderei engenharia, produto e participei das negociações que levaram à fusão com a ChefsClub em 2018. Nesta nova fase, segui atuando como CTO integrando as duas empresas, unificando stacks distintas e consolidando modelos de dados em um ano, o que criou o maior marketplace de restaurantes do país.\nDepois, passei 6 anos na Tesorio (2019–2025), fintech americana YC, como senior fullstack engineer trabalhando remoto com time dos EUA. Construí a plataforma de Connected Financial Operations orientada a IA em Django/Python/PostgreSQL. Desde 2023, participei da pivotagem AI-first do produto e do workflow de engenharia.\nHoje atuo como consultor independente, liderando novos produtos e apoiando times em ciclos de entrega.\nMinha escolha por focar em impacto socioambiental não veio de uma estratégia de mercado. Cresci celebrando a natureza, e minhas experiências em território, incluindo a Amazônia, me mostraram de perto como nossas decisões cotidianas afetam comunidades e espécies que só querem viver em paz. Não consigo seguir trabalhando como se nada estivesse acontecendo. Tenho privilégios, e ignorar a crise climática seria falhar com meu propósito. Quero usar o que sei fazer para apoiar quem constrói um futuro em equilíbrio, onde humanidade e toda forma de vida coexistem.\nNa prática, isso significa trabalhar com times que estão resolvendo problemas reais de clima, energia, mobilidade, agrofloresta e ativismo ambiental, trazendo execução técnica AI-native e a visão de alguém que já fundou, liderou e entregou em ambientes exigentes.\nFormação: Ciência da Computação pela USP, com bolsa de pesquisa pela FAPESP.',
      bio: 'Sou engenheiro fullstack senior. Cofundei o Grubster, fui CTO na ChefsClub e passei 6 anos como senior engineer na Tesorio, fintech americana YC. Hoje atuo como consultor independente, liderando novos produtos e apoiando times em ciclos de entrega.',
      climateReason: 'Minha escolha por focar em impacto socioambiental não veio de uma estratégia de mercado. Cresci celebrando a natureza, e minhas experiências em território, incluindo a Amazônia, me mostraram de perto como nossas decisões cotidianas afetam comunidades e espécies que só querem viver em paz. Não consigo seguir trabalhando como se nada estivesse acontecendo. Tenho privilégios, e ignorar a crise climática seria falhar com meu propósito. Quero usar o que sei fazer para apoiar quem constrói um futuro em equilíbrio, onde humanidade e toda forma de vida coexistem.',
      practice: 'Na prática, isso significa trabalhar com times que estão resolvendo problemas reais de clima, energia, mobilidade, agrofloresta e ativismo ambiental, trazendo execução técnica AI-native e a visão de alguém que já fundou, liderou e entregou em ambientes exigentes.',
      education: 'Formação: Ciência da Computação pela USP, com bolsa de pesquisa pela FAPESP.',
      outsideTitle: 'Fora do trabalho',
      outside: 'Moro em São Francisco Xavier, distrito de São José dos Campos, na Serra da Mantiqueira. Participo ativamente da comunidade local: toco no Maracatu Baque do Xico, bloco de carnaval e cultura popular da Pedra Vermelha, ajudo a organizar rodas de conversa mensais sobre consciência política, e colaboro em projetos de ativismo conectando tecnologia e causas progressistas, como o apoio à Bancada do Cocar (bancada parlamentar indígena).',
      hobbies: 'Sou percussionista e tenho fascínio por mexer com Arduino e eletrônica nas horas livres. Uso Neovim com configuração em Lua, por teimosia e por gosto.',
    },
    testimonials: {
      title: 'Depoimentos',
    },
    contact: {
      finalTitle: 'Vamos construir algo que importa?',
      cta: 'Entrar em contato',
      pageTitle: 'Contato',
      question: 'Qual tipo de trabalho você está buscando?',
      types: {
         zero: 'Produto do zero',
         sprint: 'Sprint de entrega',
         ai: 'AI enablement',
         other: 'Outro / ainda não sei'
      },
      common: {
        name: 'Nome',
        email: 'Email',
        company: 'Empresa / projeto (opcional)',
        deadline: 'Prazo desejado',
        deadlines: {
          urgent: 'urgente',
          nextMonth: 'próximo mês',
          flexible: 'flexível',
          defining: 'ainda definindo'
        },
        budget: 'Orçamento aproximado (opcional)',
        more: 'Conta um pouco mais sobre o projeto (opcional)',
        send: 'Enviar'
      },
      specifics: {
        zero: {
          q1: 'Qual problema seu produto resolve e pra quem?',
          q2: 'Em que estágio está? (ideia, validação, MVP rodando)',
          q3: 'Como o time técnico está hoje?',
          q4: 'Como o projeto é financiado? (bootstrap, captação, grant, indefinido)',
          q5: 'Qual é a janela de tempo até o MVP no ar?'
        },
        sprint: {
          q1: 'O que precisa ser entregue? (feature, migração, débito técnico, integração, outro)',
          q2: 'Qual a stack atual do time?',
          q3: 'Quantas pessoas no time técnico?',
          q4: 'Tem PM/design no time ou eu entro sozinho?',
          q5: 'Prazo esperado para a entrega?'
        },
        ai: {
          q1: 'Tamanho do time de engenharia?',
          q2: 'O time já usa ferramentas de IA? (Cursor, Copilot, Claude Code, nenhuma)',
          q3: 'Qual o objetivo principal? (velocidade, qualidade, automação de operação, outro)',
          q4: 'Tem alguma infra interna a integrar? (knowledge base, docs, Zendesk, outros)',
          q5: 'Stack predominante?'
        }
      },
      confirmation: 'Mensagem recebida, respondo em breve.'
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
        title: 'Conversational interface for official World Bank climate data.',
        subtitle: 'Project for Data360 Global Challenge',
        context: 'Context',
        contextContent: 'Climate journalists, researchers, and activists need official citable data in real-time. However, accessing the World Bank\'s Data360 API (10,000+ indicators) requires technical knowledge most lack. Generic AI assistants hallucinate numbers, worsening the misinformation crisis.',
        problem: 'Problem',
        problemContent: 'How to make a giant institutional asset accessible via natural language without falling into the hallucination trap. The AI needs to interpret and narrate, but never manufacture data.',
        action: 'Action',
        actionContent: 'Co-created the project with Gustavo Faleiros (InfoAmazonia/Pulitzer Center). I led the technical architecture and implementation. The solution is a chat interface that translates NL questions into API queries. A key piece is an open-source MCP server that ensures the AI only narrates official data.',
        stack: 'Stack: Chainlit, FastAPI, PostgreSQL, FastMCP, and Claude API.',
        result: 'Result',
        resultContent: 'Submitted to the Data360 Global Challenge. The MCP server was published as open-source, allowing adoption by other agents and journalistic projects.',
      },
      case2: {
        title: 'Building AI infrastructure at Tupi.',
        subtitle: 'Tupi AI Infrastructure',
        context: 'Context',
        contextContent: 'When I joined Tupi as a consultant, there was no AI infrastructure. Developers used tools in a disconnected way. The initial request was to optimize customer service with AI agents.',
        problem: 'Problem',
        problemContent: 'AI treated as an individual feature doesn\'t scale. The real problem wasn\'t "adopting AI", but structuring it as infrastructure rather than just a personal shortcut.',
        action: 'Action',
        actionContent: 'In one month, I delivered 12 agents covering CS and engineering, built on three pillars: Prompts as code, AI connected to real data (custom MCP servers), and Self-maintaining knowledge (GitHub Actions pipelines).',
        stack: 'Stack: TypeScript, Python, Claude Code.',
        result: 'Result',
        resultContent: 'The company went from dispersed use to structured AI infrastructure in a month. These principles became the basis of my philosophy for applied AI.',
      },
    },
    trajectory: {
      title: 'Background',
      p1: 'I started as co-founder and CTO of Grubster (2012–2019), a restaurant reservation platform that reached #1 on the Brazilian App Store. I led engineering and product, participating in the negotiations for the merger with ChefsClub in 2018. I then served as CTO integrating the two companies and unifying their stacks.',
      p2: 'I then spent 6 years at Tesorio (2019–2025), a US YC fintech, as a senior fullstack engineer working remotely. I built their AI-oriented Connected Financial Operations platform in Django/Python/PostgreSQL. Since 2023, I was part of the product\'s AI-first pivot.',
    },
    about: {
      title: 'About',
      bioTitle: 'Professional Bio',
      unifiedNarrative: 'I am a senior fullstack engineer. I started as co-founder and CTO of Grubster (2012–2019), a restaurant reservation platform that reached #1 on the Brazilian App Store (Food category). I led engineering, product, and participated in the negotiations that led to the merger with ChefsClub in 2018. In this new phase, I continued as CTO integrating the two companies, unifying distinct stacks, and consolidating data models within a year, creating the largest restaurant marketplace in the country.\nNext, I spent 6 years at Tesorio (2019–2025), a US YC fintech, as a senior fullstack engineer working remotely with a US-based team. I built their AI-oriented Connected Financial Operations platform in Django/Python/PostgreSQL. Since 2023, I participated in the product\'s AI-first pivot and engineering workflow.\nToday I work as an independent consultant, leading new products and supporting teams in delivery cycles.\nMy choice to focus on socio-environmental impact didn\'t come from a market strategy. I grew up celebrating nature, and my field experiences, including the Amazon, showed me firsthand how our daily decisions affect communities and species that just want to live in peace. I cannot continue working as if nothing is happening. I have privileges, and ignoring the climate crisis would be failing my purpose. I want to use what I know how to do to support those building a future in balance, where humanity and all forms of life coexist.\nIn practice, this means working with teams solving real problems in climate, energy, mobility, agroforestry, and environmental activism, bringing AI-native technical execution and the vision of someone who has already founded, led, and delivered in demanding environments.\nEducation: Computer Science from USP, with a research grant from FAPESP.',
      bio: 'I am a senior fullstack engineer. I co-founded Grubster, was CTO at ChefsClub, and spent 6 years as a senior engineer at Tesorio (YC). Today I work as an independent consultant, leading new products and supporting teams in delivery cycles.',
      climateReason: 'My choice to focus on socio-environmental impact didn\'t come from a market strategy. I grew up celebrating nature. My experiences in territories like the Amazon showed me how our daily decisions affect communities and species that just want to live in peace. Ignoring the climate crisis would be failing my purpose. I want to support those building a balanced future.',
      practice: 'In practice, this means working with teams solving real problems in climate, energy, mobility, and agroforestry, bringing AI-native execution and a founder\'s perspective.',
      education: 'Education: Computer Science at USP (University of São Paulo), with a FAPESP research grant.',
      outsideTitle: 'Outside of work',
      outside: 'I live in São Francisco Xavier, a district of São José dos Campos, in the Mantiqueira Mountains. I am an active member of the local community: I play in the Maracatu Baque do Xico, a popular culture group from Pedra Vermelha, help organize monthly political consciousness circles, and collaborate on activism projects connecting technology and progressive causes, such as supporting the Bancada do Cocar (indigenous parliamentary caucus).',
      hobbies: 'I am a percussionist and have a fascination with Arduino and electronics in my free time. I use Neovim with a Lua config, both out of stubbornness and genuine love.',
    },
    testimonials: {
      title: 'Testimonials',
    },
    contact: {
      finalTitle: 'Shall we build something that matters?',
      cta: 'Get in touch',
      pageTitle: 'Contact',
      question: 'What kind of work are you looking for?',
      types: {
         zero: 'Product from zero',
         sprint: 'Delivery sprint',
         ai: 'AI enablement',
         other: 'Other / not sure yet'
      },
      common: {
        name: 'Name',
        email: 'Email',
        company: 'Company / project (optional)',
        deadline: 'Desired timeline',
        deadlines: {
          urgent: 'urgent',
          nextMonth: 'next month',
          flexible: 'flexible',
          defining: 'still defining'
        },
        budget: 'Approximate budget (optional)',
        more: 'Tell me more about the project (optional)',
        send: 'Send'
      },
      specifics: {
        zero: {
          q1: 'What problem does your product solve and for whom?',
          q2: 'What stage is it at? (idea, validation, MVP running)',
          q3: 'What is the technical team like today?',
          q4: 'How is the project funded? (bootstrap, VC, grant, undefined)',
          q5: 'What is the timeframe for getting the MVP live?'
        },
        sprint: {
          q1: 'What needs to be delivered? (feature, migration, tech debt, integration, other)',
          q2: 'What is the team\'s current stack?',
          q3: 'How many people on the technical team?',
          q4: 'Is there a PM/designer or am I coming in alone?',
          q5: 'Expected deadline for delivery?'
        },
        ai: {
          q1: 'Size of the engineering team?',
          q2: 'Does the team already use AI tools? (Cursor, Copilot, Claude Code, none)',
          q3: 'What is the main goal? (speed, quality, automation, other)',
          q4: 'Any internal infra to integrate? (knowledge base, docs, Zendesk, others)',
          q5: 'Predominant stack?'
        }
      },
      confirmation: 'Message received, I\'ll respond soon.'
    },
    footer: {
      lastUpdate: 'Last updated: April 2026',
    }
  }
};
