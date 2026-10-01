export type ServiceSlug = "automacao" | "landing-pages" | "trafego-pago";

export type Service = {
  slug: ServiceSlug;
  name: string;
  index: string;
  tag: string;
  microcopy: string;
  summary: string;
  headline: [string, string];
  description: string;
  stack?: string[];
  pains: { title: string; items: string[] };
  features: { title: string; text: string }[];
  process: { title: string; text: string }[];
  before: string[];
  after: string[];
  hub: string;
  faq: { q: string; a: string }[];
};

export const SERVICES: Record<ServiceSlug, Service> = {
  automacao: {
    slug: "automacao",
    name: "Automação + IA",
    index: "01",
    tag: "AUTOMAÇÃO + IA",
    microcopy: "AUTOMATE / RESPOND / QUALIFY",
    summary:
      "Atendimento inteligente no WhatsApp que responde 24/7, qualifica leads e faz follow-ups automaticamente.",
    headline: ["Seu atendimento", "trabalhando 24 horas por dia."],
    description:
      "Criamos automações inteligentes para WhatsApp capazes de atender, qualificar e direcionar seus clientes de forma rápida e escalável — sem perder o tom da sua marca.",
    pains: {
      title: "Quando o atendimento não acompanha a demanda, oportunidades se perdem.",
      items: [
        "Leads que chegam fora do horário comercial e esfriam até a primeira resposta.",
        "Equipe ocupada com perguntas repetitivas em vez de negociações.",
        "Follow-ups esquecidos e oportunidades que somem do funil.",
      ],
    },
    features: [
      { title: "Atendimento 24/7", text: "Respostas imediatas a qualquer hora, todos os dias da semana." },
      { title: "Qualificação de leads", text: "A IA faz as perguntas certas e identifica quem está pronto para comprar." },
      { title: "Follow-ups automáticos", text: "Retomadas programadas para que nenhum contato fique sem resposta." },
      { title: "Direcionamento inteligente", text: "Cada conversa encaminhada para o time ou vendedor certo." },
      { title: "Integrações", text: "Conexão com CRM, planilhas, agendas e sistemas que você já usa." },
      { title: "Menos tarefas repetitivas", text: "Sua equipe foca no que realmente exige pessoas: fechar negócios." },
    ],
    process: [
      { title: "Diagnóstico", text: "Mapeamos seu atendimento, perguntas frequentes e gargalos comerciais." },
      { title: "Fluxos e IA", text: "Desenhamos a jornada e treinamos a IA com o contexto do seu negócio." },
      { title: "Integração", text: "Conectamos WhatsApp, CRM e as ferramentas da sua operação." },
      { title: "Otimização", text: "Acompanhamos as conversas e refinamos os fluxos continuamente." },
    ],
    before: [
      "Resposta só em horário comercial",
      "Leads misturados, sem prioridade",
      "Follow-up manual e esquecido",
      "Equipe sobrecarregada",
    ],
    after: [
      "Atendimento imediato, 24/7",
      "Leads qualificados e priorizados",
      "Follow-ups automáticos",
      "Equipe focada em vender",
    ],
    hub: "A automação rende mais quando recebe leads de campanhas bem segmentadas e de páginas que realmente convertem.",
    faq: [
      {
        q: "A automação substitui minha equipe?",
        a: "Não. Ela assume as tarefas repetitivas e a triagem inicial, para que sua equipe receba conversas mais qualificadas e foque em fechar negócios.",
      },
      {
        q: "Funciona com o WhatsApp que já uso?",
        a: "Avaliamos sua estrutura atual e indicamos a melhor forma de integração com o WhatsApp para o seu cenário.",
      },
      {
        q: "A IA responde de forma natural?",
        a: "A IA é configurada com o contexto, o tom de voz e as regras do seu negócio, e pode transferir a conversa para um atendente humano sempre que necessário.",
      },
      {
        q: "Quanto tempo leva para implementar?",
        a: "Depende da complexidade dos fluxos e integrações. Após o diagnóstico, apresentamos um cronograma claro para o seu projeto.",
      },
    ],
  },

  "landing-pages": {
    slug: "landing-pages",
    name: "Landing Pages",
    index: "02",
    tag: "DESENVOLVIMENTO",
    microcopy: "BUILD / CONVERT / SCALE",
    summary:
      "Landing Pages, sites e sistemas com React e Next.js, rápidos e pensados para converter.",
    headline: ["Transformamos ideias", "em experiências que convertem."],
    description:
      "Landing Pages, sites e sistemas desenvolvidos com tecnologia moderna, performance e foco na experiência do usuário — prontos para receber tráfego e gerar oportunidades.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    pains: {
      title: "Tráfego sem uma boa página é investimento desperdiçado.",
      items: [
        "Páginas lentas que fazem o visitante desistir antes mesmo de carregar.",
        "Layouts genéricos que não transmitem o valor da sua empresa.",
        "Sites difíceis de atualizar e sem estrutura para medir conversões.",
      ],
    },
    features: [
      { title: "Landing Pages de conversão", text: "Estrutura, copy e design pensados para uma única ação clara." },
      { title: "Sites institucionais", text: "Presença digital profissional que transmite credibilidade." },
      { title: "Sistemas web e dashboards", text: "Ferramentas sob medida para a rotina da sua operação." },
      { title: "Performance", text: "Páginas rápidas, otimizadas para mobile e para buscadores." },
      { title: "Integrações", text: "Formulários conectados a CRM, WhatsApp, automações e analytics." },
      { title: "Mensuração", text: "Pixels e eventos configurados para acompanhar cada conversão." },
    ],
    process: [
      { title: "Imersão", text: "Entendemos seu público, sua oferta e o objetivo da página." },
      { title: "Estrutura e design", text: "Arquitetura da informação, copy e interface alinhadas à marca." },
      { title: "Desenvolvimento", text: "Código moderno com React, Next.js e TypeScript." },
      { title: "Lançamento e medição", text: "Publicação, rastreamento e melhorias contínuas." },
    ],
    before: [
      "Página lenta e genérica",
      "Visitantes sem direção clara",
      "Conversões sem rastreamento",
      "Dependência para cada ajuste",
    ],
    after: [
      "Experiência rápida e profissional",
      "Jornada focada em uma ação",
      "Cada conversão medida",
      "Estrutura pronta para escalar",
    ],
    hub: "Uma página que converte precisa de pessoas chegando até ela — e de um atendimento rápido para cada lead gerado.",
    faq: [
      {
        q: "Qual a diferença entre Landing Page e site institucional?",
        a: "A Landing Page tem um único objetivo, como captar leads ou vender um produto. O site institucional apresenta a empresa como um todo, com várias páginas e conteúdos.",
      },
      {
        q: "Vocês criam os textos da página?",
        a: "Sim. Estruturamos a copy junto com você para que mensagem e design trabalhem pelo mesmo objetivo.",
      },
      {
        q: "A página fica integrada às minhas campanhas?",
        a: "Sim. Configuramos pixels e eventos para que os dados de conversão alimentem suas campanhas de Meta Ads e Google Ads.",
      },
      {
        q: "Por que React e Next.js?",
        a: "São tecnologias modernas que garantem performance, segurança e facilidade para evoluir o projeto ao longo do tempo.",
      },
    ],
  },

  "trafego-pago": {
    slug: "trafego-pago",
    name: "Tráfego Pago",
    index: "03",
    tag: "AQUISIÇÃO",
    microcopy: "TARGET / CONVERT / OPTIMIZE",
    summary:
      "Campanhas em Meta Ads e Google Ads orientadas por dados para gerar oportunidades reais.",
    headline: ["Colocamos sua empresa", "na frente das pessoas certas."],
    description:
      "Estratégias de mídia paga orientadas por dados para gerar tráfego qualificado, oportunidades e crescimento — com campanhas em Meta Ads e Google Ads.",
    pains: {
      title: "Investir em anúncios sem estratégia é pagar para ser ignorado.",
      items: [
        "Campanhas que geram cliques, mas não geram clientes.",
        "Verba distribuída sem clareza sobre o que realmente traz retorno.",
        "Falta de dados confiáveis para decidir onde investir mais.",
      ],
    },
    features: [
      { title: "Meta Ads", text: "Campanhas no Instagram e Facebook para gerar demanda e leads." },
      { title: "Google Ads", text: "Presença para quem já está buscando pelo que você oferece." },
      { title: "Geração de leads", text: "Campanhas estruturadas para captar contatos qualificados." },
      { title: "Remarketing", text: "Impactamos novamente quem já demonstrou interesse." },
      { title: "Campanhas de conversão", text: "Foco nas ações que geram receita para o negócio." },
      { title: "Análise e otimização", text: "Leitura constante dos dados para melhorar resultados." },
    ],
    process: [
      { title: "Diagnóstico", text: "Analisamos seu mercado, seu público e o histórico de campanhas." },
      { title: "Estratégia", text: "Definimos canais, públicos, ofertas e metas." },
      { title: "Execução", text: "Criamos e publicamos campanhas com rastreamento completo." },
      { title: "Otimização", text: "Ajustes contínuos com base em dados reais." },
    ],
    before: [
      "Anúncios sem objetivo claro",
      "Verba sem controle de retorno",
      "Leads desqualificados",
      "Decisões no achismo",
    ],
    after: [
      "Campanhas com metas definidas",
      "Investimento no que funciona",
      "Oportunidades qualificadas",
      "Decisões orientadas por dados",
    ],
    hub: "Tráfego gera atenção. Com uma página que converte e um atendimento automatizado, essa atenção vira venda.",
    faq: [
      {
        q: "Qual verba preciso para começar?",
        a: "Depende do seu mercado e dos seus objetivos. No diagnóstico, indicamos um investimento inicial coerente com a sua realidade.",
      },
      {
        q: "Em quanto tempo vejo resultados?",
        a: "As campanhas começam a gerar dados nos primeiros dias. A otimização é contínua: quanto mais dados, mais precisas ficam as decisões.",
      },
      {
        q: "Vocês também cuidam da página de destino?",
        a: "Sim. Esse é o diferencial do HUB: tráfego, Landing Page e automação trabalhando juntos para converter mais.",
      },
      {
        q: "Como acompanho os resultados?",
        a: "Você recebe relatórios claros com os indicadores que importam para o seu negócio.",
      },
    ],
  },
};

export const SERVICE_LIST = Object.values(SERVICES);

export const serviceHref = (slug: ServiceSlug) => `/solucoes/${slug}`;
