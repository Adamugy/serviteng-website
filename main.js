// Enable JS-enhanced animations only when GSAP loads and motion is allowed
(function () {
  document.documentElement.classList.remove('no-js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    document.documentElement.classList.add('js-enabled');
  }
})();

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let titleSplits = [];
let titleCleanupTriggers = [];

const copy = {
  pt: {
    title: 'Serviteng Engineering | Serviços técnicos e engenharia',
    description: 'Serviteng Engineering: serviços técnicos, manutenção e engenharia industrial em Moçambique. Peça uma cotação pelo WhatsApp.',
    skip: 'Saltar para o conteúdo', brandHome: 'Serviteng Engineering, início', navLabel: 'Navegação principal', proofLabel: 'Serviteng em resumo', processLabel: 'Processo de execução em seis etapas', menu: 'Abrir navegação', menuClose: 'Fechar navegação', menuLabel: 'Abrir navegação',
    navServices: 'Serviços', navMethod: 'Processo', navProjects: 'Projetos', navCompany: 'Empresa', navQuote: 'Consulte o Engenheiro',
    heroImage: 'Fotografia real de uma instalação industrial onde a Serviteng realizou trabalhos', teamImage: 'Equipa técnica da Serviteng em obra', brandLogo: 'Logótipo Serviteng — Serviços Técnicos de Engenharia',
    heroEyebrow: 'Serviços técnicos e engenharia em Moçambique', heroTitle: 'Engenharia que mantém <br>a indústria em movimento.',
    heroLede: 'Manutenção industrial, instalação de equipamentos e equipas técnicas especializadas para apoiar operações em Moçambique.',
    heroCta: 'Consulte o Engenheiro', heroLink: 'Conheça os serviços', heroFoot: 'Matola, Moçambique · Em campo desde 2016',
    proofIntro: 'Competência técnica. <br>Presença no terreno.', proofFounded: 'Fundada em Moçambique', proofBase: 'Base operacional', proofMember: 'Empresa membro', proofFocus: 'Qualidade, ambiente e segurança',
    servicesEyebrow: 'O que fazemos', servicesTitle: 'Manutenção e engenharia <br>para a indústria.',
    servicesIntro: 'A Serviteng trabalha em manutenção e instalação industrial, tubagens, estruturas metálicas, soldadura técnica e projectos de engenharia.',
    service1: 'Manutenção industrial', service1d: 'Serviços de manutenção industrial para equipamentos e instalações, com foco na continuidade operacional.',
    service2: 'Serralharia mecânica e soldadura', service2d: 'Montagem e desmontagem de estruturas metálicas; soldadura técnica em aço macio, alumínio e aço inox, incluindo tubagens de gás de alta pressão.',
    service3: 'Instalação de equipamentos industriais', service3d: 'Montagem de bombas, válvulas, tubagens e respectivos acessórios.',
    service4: 'Projectos de engenharia mecânica', service4d: 'Consultoria e projectos mecânicos adaptados às necessidades de cada instalação.',
    service5: 'Técnicos especializados', service5d: 'Disponibilização de técnicos de soldadura, mecânica e serralharia geral e industrial.',
    methodEyebrow: 'Como trabalhamos', methodTitle: 'Planeamento claro. <br>Execução controlada.',
    methodIntro: 'Organizamos cada intervenção em etapas definidas para manter a comunicação clara, reduzir riscos e tornar as entregas mais previsíveis.', methodLink: 'Converse sobre o seu projeto',
    step1: 'Levantamento', step1d: 'Compreender o local e o escopo.', step2: 'Diagnóstico', step2d: 'Avaliar requisitos e condições.', step3: 'Planeamento', step3d: 'Definir recursos, prazos e controlos.', step4: 'Execução', step4d: 'Realizar o trabalho no terreno.', step5: 'Controlo HSE/QC', step5d: 'Verificar segurança e qualidade.', step6: 'Entrega', step6d: 'Concluir e comunicar os resultados.',
    projectsEyebrow: 'Portfólio técnico', projectsTitle: 'Intervenções que mantêm <br>a indústria em movimento.',
    qualityEyebrow: 'Qualidade, ambiente e segurança', qualityTitle: 'Controlo técnico <br>em cada intervenção.',
    qualityIntro: 'A política integrada da Serviteng compromete-se com os requisitos do cliente, a melhoria contínua, a segurança das pessoas e a protecção do ambiente.',
    quality1: 'Prevenção de riscos', quality1d: 'Planeamento de risco, EPI, sinalização, procedimentos e controlo da zona de trabalho.',
    quality2: 'Verificação da execução', quality2d: 'Inspeção visual, controlo dimensional, acabamento e verificação técnica.',
    quality3: 'Conformidade técnica', quality3d: 'Trabalho alinhado às especificações, aos requisitos do cliente e às boas práticas.',
    quality4: 'Melhoria contínua', quality4d: 'Aprendizagem operacional e padronização de processos repetíveis.', quality5: 'Protecção do ambiente', quality5d: 'Consideração dos impactos ambientais na planificação e execução dos trabalhos.',
    projectsIntro: 'De tanques de combustível à soldadura de tubagens e montagem de estruturas, conheça trabalhos reais da equipa Serviteng.' ,
    projectShortcutsLabel: 'Explorar projectos por área', projectShortcutTanks: 'Tanques e protecção', projectShortcutPumps: 'Bombas e instalações', projectShortcutStructures: 'Estruturas metálicas', projectShortcutWelding: 'Soldadura e tubagens', projectsCtaText: 'Tem um trabalho semelhante? Vamos avaliar o seu projecto.', projectsCtaLink: 'Consulte o Engenheiro', carouselHint: 'Deslize para ver cada intervenção. Seleccione uma área para começar.', carouselPrevious: 'Projeto anterior', carouselNext: 'Próximo projeto', carouselLabel: 'Carrossel de projetos Serviteng', carouselDots: 'Selecionar projeto',
    slide1: 'Ver projeto 1', slide2: 'Ver projeto 2', slide3: 'Ver projeto 3', slide4: 'Ver projeto 4', slide5: 'Ver projeto 5', slide6: 'Ver projeto 6', slide7: 'Ver projeto 7', slide8: 'Ver projeto 8', slide9: 'Ver projeto 9', slide10: 'Ver projeto 10',
    project1tag: 'Tanques de combustível', project1: 'Substituição e reparação do vedante do teto flutuante', project1d: 'Substituição e reparação do vedante instalado no teto flutuante de um tanque de combustível.',
    project2tag: 'Tanques de combustível', project2: 'Decapagem e pintura no interior do tanque', project2d: 'Trabalhos de preparação da superfície e pintura no interior do tanque.',
    project3tag: 'Protecção anticorrosiva', project3: 'Protecção da base do tanque', project3d: 'Aplicação do sistema Denso Base Protection para proteger a zona crítica da base contra corrosão.',
    project4tag: 'Fabrico metalomecânico', project4: 'Fabrico de componente metálico', project4d: 'Componente metálico de grande porte em fase de fabrico numa oficina.',
    project5tag: 'Tanques de combustível', project5: 'Instalação de vedante de teto flutuante em tanque de combustível', project5d: 'Instalação do vedante periférico ao longo da parede interna do tanque.',
    project6tag: 'Protecção de tanques', project6: 'Aplicação de Denso e pintura no tanque', project6d: 'Aplicação do revestimento Denso e pintura na zona da base do tanque.',
    project7tag: 'Casa de bombas', project7: 'Limpeza e pintura na casa de bombas de combustíveis', project7d: 'Trabalhos de limpeza e pintura na casa de bombas e na área dos equipamentos.',
    project8tag: 'Tanques de combustível', project8: 'Instalação de vedante periférico no teto flutuante', project8d: 'Detalhe da instalação do vedante ao longo do perímetro interno do tanque.',
    project9tag: 'Estruturas metálicas', project9: 'Fabrico e instalação de estrutura metálica de cobertura', project9d: 'Estrutura de cobertura montada sobre pilares metálicos no local da obra.',
    project10tag: 'Soldadura industrial', project10: 'Soldadura de flanges e tubagens', project10d: 'Trabalho de soldadura em tubagens e componentes com flanges.',
    projectImage1: 'Vedantes instalados no perímetro do teto flutuante de um tanque', projectImage2: 'Trabalhadores a preparar e pintar o interior de um tanque', projectImage3: 'Protecção aplicada à base de um tanque', projectImage4: 'Componente metálico de grande porte em fabrico', projectImage5: 'Vedante periférico instalado na parede interna de um tanque', projectImage6: 'Aplicação de revestimento Denso e pintura na base do tanque', projectImage7: 'Bombas e tubagens na casa de bombas', projectImage8: 'Vedante periférico do teto flutuante junto à parede do tanque', projectImage9: 'Cobertura metálica apoiada em pilares', projectImage10: 'Soldador a trabalhar numa tubagem com flanges',
    carouselRole: 'carrossel',
    companyEyebrow: 'Sobre a Serviteng', companyTitle: 'Pessoas técnicas. <br>Compromisso no terreno.',
    companyCopy: 'Fundada em 2016 na área metalomecânica, a Serviteng actua na manutenção e instalação de equipamentos industriais, tubagens, estruturas metálicas, soldadura e projectos de engenharia.',
    value1: 'Qualidade técnica', value2: 'Segurança operacional', value3: 'Excelência na execução', companyLink: 'Consulte o Engenheiro',
    partnersEyebrow: 'Referências institucionais', partnersTitle: 'Experiência junto <br>a organizações de referência.', partnersIntro: 'Marcas apresentadas no perfil corporativo da Serviteng.', partnersLabel: 'Referências institucionais Serviteng',
    coverageEyebrow: 'Onde atuamos', coverageTitle: 'Presença nas principais <br>regiões de Moçambique.', coverageIntro: 'Com sede na Matola, atendemos projetos no norte, centro e sul do país.',
    licenseTitle: 'Obras públicas — 4.ª classe', licenseDetail: 'Categoria Edifícios e Monumentos · Alvará válido até 25 de janeiro de 2027.',
    regionNorth: 'Norte', regionNorthDetail: 'Nampula · Nacala Porto', regionCentral: 'Centro', regionCentralDetail: 'Sofala · Beira · Porto da Beira', regionSouth: 'Sul', regionSouthDetail: 'Maputo · Matola', headOffice: 'Sede', openMap: 'Ver localização',
    quoteEyebrow: 'Vamos conversar', quoteTitle: 'O seu próximo projeto <br>começa com uma conversa.',
    quoteIntro: 'Conte-nos do que precisa. A nossa equipa recebe o seu pedido pelo WhatsApp e dará seguimento consigo.',
    formTitle: 'Consulte o Engenheiro', nameLabel: 'Nome', namePlaceholder: 'O seu nome', contactLabel: 'Telefone ou email', contactPlaceholder: 'Como podemos contactar?',
    serviceLabel: 'Serviço pretendido', servicePlaceholder: 'Selecione uma área', otherService: 'Outro', messageLabel: 'Descrição do pedido', messagePlaceholder: 'Descreva brevemente o trabalho ou a necessidade',
    submitQuote: 'Continuar pelo WhatsApp', formError: 'Não foi possível abrir o WhatsApp. Contacte-nos pelo número +258 844 495 979.',
    whatsappIntro: 'Olá, gostaria de pedir uma cotação à Serviteng.', whatsappName: 'Nome', whatsappContact: 'Contacto', whatsappService: 'Serviço', whatsappDetail: 'Descrição',
    location: 'Av. Fany Mpfume, n.º 979 · Matola, Moçambique', footerLine: 'Qualidade, segurança e execução.', backTop: 'Voltar ao início', footerLocation: 'Matola · Moçambique'
  },
  en: {
    title: 'Serviteng Engineering | Technical services and engineering',
    description: 'Serviteng Engineering: technical services, maintenance and industrial engineering in Mozambique. Request a quote on WhatsApp.',
    skip: 'Skip to content', brandHome: 'Serviteng Engineering, home', navLabel: 'Main navigation', proofLabel: 'Serviteng at a glance', processLabel: 'Six-step delivery process', menu: 'Open navigation', menuClose: 'Close navigation', menuLabel: 'Open navigation',
    navServices: 'Services', navMethod: 'Process', navProjects: 'Projects', navCompany: 'Company', navQuote: 'Consult an engineer',
    heroImage: 'Real photograph of an industrial facility at a Serviteng project in Mozambique', teamImage: 'Serviteng technical team on site', brandLogo: 'Serviteng logo — Technical Engineering Services',
    heroEyebrow: 'Industrial services and engineering in Mozambique', heroTitle: 'Engineering that keeps <br>industry moving.',
    heroLede: 'Industrial maintenance, equipment installation and specialist technical teams to support operations across Mozambique.',
    heroCta: 'Consult an engineer', heroLink: 'Explore our services', heroFoot: 'Based in Matola · Serving Mozambique since 2016',
    proofIntro: 'Technical expertise. <br>On-site presence.', proofFounded: 'Founded in Mozambique', proofBase: 'Operating base', proofMember: 'Member company', proofFocus: 'Quality, environment and safety',
    servicesEyebrow: 'What we do', servicesTitle: 'Maintenance and engineering <br>for industry.',
    servicesIntro: 'Serviteng works in industrial maintenance and installation, piping, metal structures, technical welding and engineering projects.',
    service1: 'Industrial maintenance', service1d: 'Maintenance services for industrial equipment and facilities, focused on operational continuity.',
    service2: 'Metal fabrication and welding', service2d: 'Assembly and dismantling of metal structures, with technical welding in mild steel, aluminium and stainless steel, including high-pressure gas piping.',
    service3: 'Industrial equipment installation', service3d: 'Installation of pumps, valves, piping and related accessories.',
    service4: 'Mechanical engineering projects', service4d: 'Consulting and mechanical projects tailored to each facility.',
    service5: 'Specialist technical personnel', service5d: 'Provision of welding, mechanical and general or industrial metalwork technicians.',
    methodEyebrow: 'How we work', methodTitle: 'Clear planning. <br>Controlled delivery.',
    methodIntro: 'We organise each intervention into defined stages to keep communication clear, reduce risk and make handovers more predictable.', methodLink: 'Discuss your project',
    step1: 'Survey', step1d: 'Understand the site and scope.', step2: 'Assessment', step2d: 'Assess requirements and conditions.', step3: 'Planning', step3d: 'Define resources, timelines and controls.', step4: 'Execution', step4d: 'Carry out the work on site.', step5: 'HSE and quality control', step5d: 'Check safety and quality.', step6: 'Handover', step6d: 'Complete the work and report results.',
    projectsEyebrow: 'Technical portfolio', projectsTitle: 'Work that keeps <br>industry moving.',
    qualityEyebrow: 'Quality, environment and safety', qualityTitle: 'Technical control <br>at every intervention.',
    qualityIntro: 'Serviteng’s integrated management policy is guided by client requirements, continual improvement, worker safety and environmental protection.',
    quality1: 'Risk prevention', quality1d: 'Risk assessments, PPE, signage, safe-work procedures and control of the work area.',
    quality2: 'Workmanship checks', quality2d: 'Visual inspection, dimensional checks, finishing and technical verification.',
    quality3: 'Technical compliance', quality3d: 'Work carried out in line with technical specifications, client requirements and recognised good practice.',
    quality4: 'Continuous improvement', quality4d: 'Operational learning and standardisation of repeatable processes.', quality5: 'Environmental protection', quality5d: 'Environmental impacts are considered when planning and carrying out work.',
    projectsIntro: 'From fuel tanks to piping welds and structural installation, explore real work delivered by the Serviteng team.' ,
    projectShortcutsLabel: 'Explore projects by work area', projectShortcutTanks: 'Tanks and protection', projectShortcutPumps: 'Pumps and facilities', projectShortcutStructures: 'Metal structures', projectShortcutWelding: 'Welding and piping', projectsCtaText: 'Planning similar work? Let’s assess your project.', projectsCtaLink: 'Speak with an engineer', carouselHint: 'Scroll to explore each intervention. Choose an area to start.', carouselPrevious: 'Previous project', carouselNext: 'Next project', carouselLabel: 'Serviteng project carousel', carouselDots: 'Select a project',
    slide1: 'View project 1', slide2: 'View project 2', slide3: 'View project 3', slide4: 'View project 4', slide5: 'View project 5', slide6: 'View project 6', slide7: 'View project 7', slide8: 'View project 8', slide9: 'View project 9', slide10: 'View project 10',
    project1tag: 'Fuel tanks', project1: 'Floating-roof seal replacement and repair', project1d: 'Replacement and repair of the seal fitted to a fuel tank floating roof.',
    project2tag: 'Fuel tanks', project2: 'Tank interior blasting and painting', project2d: 'Surface preparation and painting work inside the tank.',
    project3tag: 'Corrosion protection', project3: 'Tank-base protection', project3d: 'Application of the Denso Base Protection system to protect the critical tank-base area from corrosion.',
    project4tag: 'Metal fabrication', project4: 'Fabrication of a metal component', project4d: 'A large metal component being fabricated in a workshop.',
    project5tag: 'Fuel tanks', project5: 'Floating-roof seal installation in a fuel tank', project5d: 'Installation of the peripheral seal along the inside wall of the tank.',
    project6tag: 'Tank protection', project6: 'Denso application and tank painting', project6d: 'Application of Denso coating and paint around the tank base.',
    project7tag: 'Pump house', project7: 'Cleaning and painting the fuel pump house', project7d: 'Cleaning and painting work in the pump house and around its equipment.',
    project8tag: 'Fuel tanks', project8: 'Floating-roof peripheral seal installation', project8d: 'A detail of the seal installation around the inside perimeter of the tank.',
    project9tag: 'Metal structures', project9: 'Fabrication and installation of a metal canopy', project9d: 'A canopy structure mounted on metal columns at the project site.',
    project10tag: 'Industrial welding', project10: 'Welding flanges and piping', project10d: 'Welding work on piping and flanged components.',
    projectImage1: 'Seals installed around the floating roof of a tank', projectImage2: 'Workers preparing and painting the inside of a tank', projectImage3: 'Protection applied to the base of a tank', projectImage4: 'Large metal component being fabricated', projectImage5: 'Peripheral seal installed on the inside wall of a tank', projectImage6: 'Denso coating and paint applied to the tank base', projectImage7: 'Pumps and piping in the pump house', projectImage8: 'Floating-roof peripheral seal beside the tank wall', projectImage9: 'Metal canopy supported by columns', projectImage10: 'Welder working on flanged piping',
    carouselRole: 'carousel',
    companyEyebrow: 'About Serviteng', companyTitle: 'Skilled professionals. <br>Committed on site.',
    companyCopy: 'Established in 2016, Serviteng provides industrial equipment maintenance and installation, piping, metal structures, welding and mechanical engineering services.',
    value1: 'Technical quality', value2: 'Operational safety', value3: 'Execution excellence', companyLink: 'Speak with an engineer',
    partnersEyebrow: 'Institutional references', partnersTitle: 'Experience alongside <br>leading organisations.', partnersIntro: 'Brands featured in Serviteng’s corporate profile.', partnersLabel: 'Serviteng institutional references',
    coverageEyebrow: 'Where we work', coverageTitle: 'Present across <br>Mozambique’s key regions.', coverageIntro: 'Based in Matola, we serve projects across northern, central and southern Mozambique.',
    licenseTitle: 'Public works contractor — Class 4', licenseDetail: 'Buildings and Monuments category · Licence valid until 25 January 2027.',
    regionNorth: 'North', regionNorthDetail: 'Nampula · Nacala Porto', regionCentral: 'Centre', regionCentralDetail: 'Sofala · Beira · Port of Beira', regionSouth: 'South', regionSouthDetail: 'Maputo · Matola', headOffice: 'Head office', openMap: 'View location',
    quoteEyebrow: 'Let’s talk', quoteTitle: 'Your next project <br>starts with a conversation.',
    quoteIntro: 'Tell us what you need. Our team will receive your enquiry on WhatsApp and contact you to discuss the next steps.',
    formTitle: 'Consult an engineer', nameLabel: 'Name', namePlaceholder: 'Your name', contactLabel: 'Phone or email', contactPlaceholder: 'How can we reach you?',
    serviceLabel: 'Service required', servicePlaceholder: 'Select a service area', otherService: 'Other', messageLabel: 'Request details', messagePlaceholder: 'Briefly describe the work or support you need',
    submitQuote: 'Continue on WhatsApp', formError: 'WhatsApp could not be opened. Please contact us on +258 844 495 979.',
    whatsappIntro: 'Hello, I would like to discuss a project with Serviteng.', whatsappName: 'Name', whatsappContact: 'Contact', whatsappService: 'Service', whatsappDetail: 'Details',
    location: 'Av. Fany Mpfume, No. 979 · Matola, Mozambique', footerLine: 'Quality, safety and execution.', backTop: 'Back to top', footerLocation: 'Matola · Mozambique'
  }
};

let activeLanguage = 'pt';

function setLanguage(language) {
  if (!copy[language]) return;
  clearTitleMotion();
  activeLanguage = language;
  const strings = copy[language];
  document.documentElement.lang = language;
  document.title = strings.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = strings.description;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = strings[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = strings[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = strings[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = strings[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = strings[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll('[data-i18n-roledescription]').forEach((element) => {
    const value = strings[element.dataset.i18nRoledescription];
    if (value !== undefined) element.setAttribute('aria-roledescription', value);
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  const error = document.getElementById('form-error');
  if (error) error.textContent = strings.formError;
  if (menuToggle) {
    const key = menuToggle.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menu';
    menuToggle.querySelector('.sr-only').textContent = strings[key];
  }
  // Rebuild letter animations for the updated titles
  initTitleMotion();
  // Refresh ScrollTrigger after language change (layout heights may change)
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.querySelector('.sr-only').textContent = copy[activeLanguage][open ? 'menuClose' : 'menu'];
  });
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('.sr-only').textContent = copy[activeLanguage].menu;
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const projectCarousel = document.getElementById('project-carousel');
const projectTrack = document.getElementById('project-track');
if (projectCarousel && projectTrack) {
  const projectSlides = Array.from(projectTrack.children);
  const projectDots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
  const currentCounter = document.querySelector('[data-carousel-current]');
  const totalCounter = document.querySelector('[data-carousel-total]');
  const previousButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');
  let activeSlide = 0;
  let scrollFrame = 0;
  totalCounter.textContent = String(projectSlides.length).padStart(2, '0');

  const updateCarouselState = () => {
    const railLeft = projectCarousel.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    projectSlides.forEach((slide, index) => {
      const distance = Math.abs(slide.getBoundingClientRect().left - railLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    activeSlide = nearestIndex;
    currentCounter.textContent = String(activeSlide + 1).padStart(2, '0');
    projectDots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeSlide);
      dot.setAttribute('aria-pressed', String(index === activeSlide));
    });
  };

  const goToSlide = (index) => {
    activeSlide = (index + projectSlides.length) % projectSlides.length;
    const left = projectSlides[activeSlide].getBoundingClientRect().left
      - projectCarousel.getBoundingClientRect().left + projectCarousel.scrollLeft;
    projectCarousel.scrollTo({ left, behavior: motionPreference.matches ? 'auto' : 'smooth' });
    updateCarouselState();
  };

  document.querySelectorAll('[data-carousel-jump]').forEach((button) => {
    button.addEventListener('click', () => { goToSlide(Number(button.dataset.carouselJump)); pauseAutoplay(); });
  });

  previousButton.addEventListener('click', () => { goToSlide(activeSlide - 1); pauseAutoplay(); });
  nextButton.addEventListener('click', () => { goToSlide(activeSlide + 1); pauseAutoplay(); });
  projectDots.forEach((dot) => dot.addEventListener('click', () => { goToSlide(Number(dot.dataset.carouselDot)); pauseAutoplay(); }));
  projectCarousel.addEventListener('scroll', () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateCarouselState);
  }, { passive: true });
  window.addEventListener('resize', updateCarouselState, { passive: true });

  /* Auto-scroll: advances on its own and stays out of the way of manual use. */
  const autoplayMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const AUTOPLAY_DELAY = 6000;
  const RESUME_DELAY = 5000;
  let autoplayTimer = null;
  let resumeTimer = null;
  let isHovering = false;
  let isInView = true;

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (autoplayMotion.matches || document.hidden || isHovering || !isInView) return;
    autoplayTimer = setInterval(() => goToSlide(activeSlide + 1), AUTOPLAY_DELAY);
  };

  // Pause immediately, then resume after the visitor has been idle for a moment.
  const pauseAutoplay = () => {
    stopAutoplay();
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(startAutoplay, RESUME_DELAY);
  };

  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach((eventName) => {
    projectCarousel.addEventListener(eventName, pauseAutoplay, { passive: true });
  });
  projectCarousel.addEventListener('pointerenter', () => { isHovering = true; stopAutoplay(); });
  projectCarousel.addEventListener('pointerleave', () => { isHovering = false; pauseAutoplay(); });
  projectCarousel.addEventListener('focusin', stopAutoplay);
  projectCarousel.addEventListener('focusout', pauseAutoplay);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isInView = entry.isIntersecting;
        if (isInView) startAutoplay();
        else stopAutoplay();
      });
    }, { threshold: 0.25 }).observe(projectCarousel);
  }

  if (autoplayMotion.addEventListener) {
    autoplayMotion.addEventListener('change', () => {
      if (autoplayMotion.matches) stopAutoplay();
      else startAutoplay();
    });
  }

  updateCarouselState();
  startAutoplay();
}

const quoteForm = document.getElementById('quote-form');
quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const data = new FormData(quoteForm);
  const strings = copy[activeLanguage];
  const message = [
    strings.whatsappIntro,
    '',
    `${strings.whatsappName}: ${data.get('name')}`,
    `${strings.whatsappContact}: ${data.get('contact')}`,
    `${strings.whatsappService}: ${data.get('service')}`,
    `${strings.whatsappDetail}: ${data.get('message')}`
  ].join('\n');
  const url = `https://wa.me/258844495979?text=${encodeURIComponent(message)}`;
  window.location.assign(url);
});

const backTopLink = document.querySelector('.back-top');
if (backTopLink) {
  backTopLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: motionPreference.matches ? 'auto' : 'smooth' });
  });
}

/* Letter-by-letter reveal for the hero title and the section headings. */
function clearTitleMotion() {
  titleCleanupTriggers.forEach((trigger) => trigger.kill());
  titleCleanupTriggers = [];
  titleSplits.forEach((split) => split.revert());
  titleSplits = [];
}

function initTitleMotion() {
  if (motionPreference.matches || !window.gsap || !window.ScrollTrigger || !window.SplitText) return;
  clearTitleMotion();

  // Revert only when the title is fully out of view, so the DOM swap is invisible.
  const revertWhenOffscreen = (element, split) => {
    titleCleanupTriggers.push(ScrollTrigger.create({
      trigger: element,
      start: 'bottom top',
      once: true,
      onEnter: () => split.revert()
    }));
  };

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    const heroSplit = SplitText.create(heroTitle, {
      type: 'lines,chars',
      mask: 'lines',
      linesClass: 'splitline',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.018,
          ease: 'power3.out',
          delay: 0.08
        });
      }
    });
    titleSplits.push(heroSplit);
    revertWhenOffscreen(heroTitle, heroSplit);
  }

  document.querySelectorAll('h2[data-i18n-html]').forEach((heading) => {
    const split = SplitText.create(heading, {
      type: 'lines,chars',
      mask: 'lines',
      linesClass: 'splitline',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.chars, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.015,
          ease: 'power3.out',
          delay: 0.12,
          scrollTrigger: { trigger: heading, start: 'top 85%', once: true }
        });
      }
    });
    titleSplits.push(split);
    revertWhenOffscreen(heading, split);
  });
}

if (window.gsap && window.ScrollTrigger && !motionPreference.matches) {
  gsap.registerPlugin(ScrollTrigger);
  if (window.SplitText) gsap.registerPlugin(SplitText);
  gsap.fromTo('.hero-content > *:not(#hero-title)', { autoAlpha: 0, y: 22 }, {
    autoAlpha: 1,
    y: 0,
    duration: 0.72,
    stagger: 0.09,
    ease: 'power3.out',
    delay: 0.08
  });

  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.fromTo(element, { autoAlpha: 0, y: 22 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    });
  });

  // Editorial rows: cascade their contents in, row by row.
  ['.services-section .service-row', '#method .process-step', '.quality-section .quality-item'].forEach((selector) => {
    gsap.utils.toArray(selector).forEach((row) => {
      gsap.fromTo(row.children, { autoAlpha: 0, y: 16 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: { trigger: row, start: 'top 90%', once: true }
      });
    });
  });

  // Progress rail draws down the six-step process as it scrolls.
  gsap.fromTo('.process-fill', { scaleY: 0 }, {
    scaleY: 1,
    ease: 'none',
    scrollTrigger: { trigger: '.process-list', start: 'top 82%', end: 'bottom 55%', scrub: 0.6 }
  });

  initTitleMotion();
}
