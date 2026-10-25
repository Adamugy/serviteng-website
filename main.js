// Enable JS-enhanced animations only when GSAP loads
(function () {
  document.documentElement.classList.remove('no-js');
  if (window.gsap && window.ScrollTrigger) {
    document.documentElement.classList.add('js-enabled');
  } else {
    // Fallback: if GSAP doesn't load within 3s, show content anyway
    setTimeout(() => {
      document.documentElement.classList.add('js-enabled');
    }, 3000);
  }
})();

const copy = {
  pt: {
    title: 'Serviteng Engineering | Serviços técnicos e engenharia',
    description: 'Serviteng Engineering: serviços técnicos, manutenção e engenharia industrial em Moçambique. Peça uma cotação pelo WhatsApp.',
    skip: 'Saltar para o conteúdo', menu: 'Abrir navegação', menuClose: 'Fechar navegação', menuLabel: 'Abrir navegação',
    navServices: 'Serviços', navMethod: 'Processo', navProjects: 'Projetos', navCompany: 'Empresa', navQuote: 'Consulte o Engenheiro',
    heroImage: 'Fotografia real de uma instalação industrial onde a Serviteng realizou trabalhos', teamImage: 'Equipa técnica da Serviteng em obra', brandLogo: 'Logótipo Serviteng — Serviços Técnicos de Engenharia',
    heroEyebrow: 'Serviços técnicos e engenharia em Moçambique', heroTitle: 'Engenharia que mantém<br>as operações em movimento.',
    heroLede: 'Apoio técnico, manutenção e execução no terreno para ambientes industriais e infraestruturas.',
    heroCta: 'Consulte o Engenheiro', heroLink: 'Conheça os serviços', heroFoot: 'Matola, Moçambique · Em campo desde 2016',
    proofIntro: 'Competência técnica.<br>Presença no terreno.', proofFounded: 'Fundada em Moçambique', proofBase: 'Base operacional', proofMember: 'Empresa membro', proofFocus: 'Segurança e qualidade',
    servicesEyebrow: 'O que fazemos', servicesTitle: 'Soluções técnicas<br>para trabalho exigente.',
    servicesIntro: 'Apoiamos clientes de indústria, energia e infraestruturas com equipas multidisciplinares e execução orientada a requisitos, prazos e segurança.',
    service1: 'Engenharia industrial', service1d: 'Soluções técnicas para ambientes industriais e infraestruturas críticas.',
    service2: 'Manutenção técnica', service2d: 'Inspeção, intervenção e suporte à continuidade operacional.',
    service3: 'Construção civil e obras públicas', service3d: 'Execução de obras civis, estruturas e melhorias de instalações.',
    service4: 'Instalações elétricas', service4d: 'Montagem, apoio e integração de sistemas elétricos.',
    service5: 'Consultoria técnica', service5d: 'Análise, recomendações e acompanhamento técnico especializado.',
    service6: 'Gestão de projetos', service6d: 'Planeamento, controlo, coordenação e entrega de projetos.',
    methodEyebrow: 'Como trabalhamos', methodTitle: 'Planeamento claro.<br>Execução controlada.',
    methodIntro: 'Organizamos cada intervenção em etapas definidas para manter a comunicação clara, reduzir riscos e tornar as entregas mais previsíveis.', methodLink: 'Converse sobre o seu projeto',
    step1: 'Levantamento', step1d: 'Compreender o local e o escopo.', step2: 'Diagnóstico', step2d: 'Avaliar requisitos e condições.', step3: 'Planeamento', step3d: 'Definir recursos, prazos e controlos.', step4: 'Execução', step4d: 'Realizar o trabalho no terreno.', step5: 'Controlo HSE/QC', step5d: 'Verificar segurança e qualidade.', step6: 'Entrega', step6d: 'Concluir e comunicar os resultados.',
    projectsEyebrow: 'Experiência no terreno', projectsTitle: 'Trabalho real.<br>Resultados que contam.',
    qualityEyebrow: 'Qualidade e segurança', qualityTitle: 'Controlo técnico<br>em cada intervenção.',
    qualityIntro: 'O trabalho é orientado por especificações, requisitos do cliente e boas práticas, com atenção aos riscos e à verificação da execução.',
    quality1: 'Prevenção de riscos', quality1d: 'Planeamento de risco, EPI, sinalização, procedimentos e controlo da zona de trabalho.',
    quality2: 'Verificação da execução', quality2d: 'Inspeção visual, controlo dimensional, acabamento e verificação técnica.',
    quality3: 'Conformidade técnica', quality3d: 'Trabalho alinhado às especificações, aos requisitos do cliente e às boas práticas.',
    quality4: 'Melhoria contínua', quality4d: 'Aprendizagem operacional e padronização de processos repetíveis.',
    projectsIntro: 'Exemplos de trabalhos em tanques, tubagens e instalações industriais apresentados no perfil corporativo.',
    carouselHint: 'Explore alguns dos trabalhos e projetos da Serviteng.', carouselPrevious: 'Projeto anterior', carouselNext: 'Próximo projeto', carouselLabel: 'Carrossel de projetos Serviteng', carouselDots: 'Selecionar projeto',
    slide1: 'Ver projeto 1', slide2: 'Ver projeto 2', slide3: 'Ver projeto 3', slide4: 'Ver projeto 4',
    project1tag: 'Tanques de combustível', project1: 'Reforço da vedação de tanques', project1d: 'Fornecimento e montagem de vedantes para tetos flutuantes, reforçando a vedação e a segurança operacional.',
    project2tag: 'Tanques e tubagens', project2: 'Limpeza de tanques e preparação de tubagens', project2d: 'Desgaseificação e limpeza de tanques verticais, com decapagem e pintura de tubos.',
    project3tag: 'Proteção anticorrosiva', project3: 'Proteção da base de tanque', project3d: 'Aplicação do sistema Denso Base Protection para proteger a zona crítica da base contra corrosão.',
    project4tag: 'Reparação industrial', project4: 'Reparação e pintura de tanque', project4d: 'Reparação interna e pintura para renovar o acabamento técnico e a proteção da superfície.',
    projectImage1: 'Interior de tanque industrial', projectImage2: 'Tubagem numa instalação industrial', projectImage3: 'Superfície industrial com proteção aplicada', projectImage4: 'Tanque industrial em reparação',
    project5tag: 'Instalação de tubagem', project5: 'Tubagem em área industrial', project5d: 'Registo de uma linha instalada no terreno e do seu alinhamento junto à estrutura.',
    project6tag: 'Válvulas e componentes', project6: 'Preparação de válvulas industriais', project6d: 'Componentes organizados para apoiar trabalhos técnicos em instalações industriais.',
    project7tag: 'Fabrico e montagem', project7: 'Preparação de componente industrial', project7d: 'Componente metálico em fase de preparação numa oficina industrial.',
    project8tag: 'Instalação industrial', project8: 'Montagem de tubagens no local', project8d: 'Registo de uma estrutura de tubagens e elementos de instalação no local de obra.',
    project9tag: 'Obra civil', project9: 'Infraestrutura e drenagem industrial', project9d: 'Vista exterior de uma canaleta e do pavimento junto a uma instalação industrial.',
    project10tag: 'Bombas e operação', project10: 'Equipamentos de bombagem industrial', project10d: 'Conjunto de bombas e válvulas instalado numa área operacional.',
    projectImage5: 'Tubagem instalada numa vala junto a uma estrutura industrial', projectImage6: 'Conjunto de válvulas industriais', projectImage7: 'Componente metálico de grande porte em oficina', projectImage8: 'Estrutura de tubagens numa instalação industrial', projectImage9: 'Canaleta e pavimento junto a uma instalação industrial', projectImage10: 'Bombas e válvulas numa sala industrial',
    slide5: 'Ver projeto 5', slide6: 'Ver projeto 6', slide7: 'Ver projeto 7', slide8: 'Ver projeto 8', slide9: 'Ver projeto 9', slide10: 'Ver projeto 10',
    carouselRole: 'carrossel',
    companyEyebrow: 'Sobre a Serviteng', companyTitle: 'Pessoas técnicas.<br>Compromisso no terreno.',
    companyCopy: 'Fundada em 2016 e sediada na Matola, a Serviteng apoia clientes industriais com serviços técnicos, manutenção, instalações e execução de projetos.',
    value1: 'Qualidade técnica', value2: 'Segurança operacional', value3: 'Excelência na execução', companyLink: 'Consulte o Engenheiro',
    partnersEyebrow: 'Referências institucionais', partnersTitle: 'Experiência junto<br>a organizações de referência.', partnersIntro: 'Marcas apresentadas no perfil corporativo da Serviteng.', partnersLabel: 'Referências institucionais Serviteng',
    coverageEyebrow: 'Onde atuamos', coverageTitle: 'Presença nas principais<br>regiões de Moçambique.', coverageIntro: 'Com sede na Matola, atendemos projetos no norte, centro e sul do país.',
    licenseTitle: 'Obras públicas — 4.ª classe', licenseDetail: 'Categoria Edifícios e Monumentos · Alvará válido até 25 de janeiro de 2027.',
    regionNorth: 'Norte', regionNorthDetail: 'Nampula · Nacala Porto', regionCentral: 'Centro', regionCentralDetail: 'Sofala · Beira · Porto da Beira', regionSouth: 'Sul', regionSouthDetail: 'Maputo · Matola', headOffice: 'Sede', openMap: 'Ver localização',
    quoteEyebrow: 'Vamos conversar', quoteTitle: 'O seu próximo projeto<br>começa com uma conversa.',
    quoteIntro: 'Conte-nos do que precisa. A nossa equipa recebe o seu pedido pelo WhatsApp e dará seguimento consigo.',
    formTitle: 'Consulte o Engenheiro', nameLabel: 'Nome', namePlaceholder: 'O seu nome', contactLabel: 'Telefone ou email', contactPlaceholder: 'Como podemos contactar?',
    serviceLabel: 'Serviço pretendido', servicePlaceholder: 'Selecione uma área', otherService: 'Outro', messageLabel: 'Descrição do pedido', messagePlaceholder: 'Descreva brevemente o trabalho ou a necessidade',
    submitQuote: 'Continuar pelo WhatsApp', formNote: 'O WhatsApp abrirá com a mensagem preparada para enviar.', formError: 'Não foi possível abrir o WhatsApp. Contacte-nos pelo número +258 844 495 979.',
    whatsappIntro: 'Olá, gostaria de pedir uma cotação à Serviteng.', whatsappName: 'Nome', whatsappContact: 'Contacto', whatsappService: 'Serviço', whatsappDetail: 'Descrição',
    location: 'Av. Fany Mpfume, n.º 979 · Matola, Moçambique', footerLine: 'Qualidade, segurança e execução.', backTop: 'Voltar ao início', footerLocation: 'Matola · Moçambique'
  },
  en: {
    title: 'Serviteng Engineering | Technical services and engineering',
    description: 'Serviteng Engineering: technical services, maintenance and industrial engineering in Mozambique. Request a quote on WhatsApp.',
    skip: 'Skip to content', menu: 'Open navigation', menuClose: 'Close navigation', menuLabel: 'Open navigation',
    navServices: 'Services', navMethod: 'Process', navProjects: 'Projects', navCompany: 'Company', navQuote: 'Consult an engineer',
    heroImage: 'Real photograph of an industrial facility at a Serviteng project in Mozambique', teamImage: 'Serviteng technical team on site', brandLogo: 'Serviteng logo — Technical Engineering Services',
    heroEyebrow: 'Technical services and engineering in Mozambique', heroTitle: 'Engineering that keeps<br>operations moving.',
    heroLede: 'Technical support, maintenance and on-site delivery for industrial environments and infrastructure.',
    heroCta: 'Consult an engineer', heroLink: 'Explore our services', heroFoot: 'Matola, Mozambique · On the ground since 2016',
    proofIntro: 'Technical expertise.<br>On-site presence.', proofFounded: 'Founded in Mozambique', proofBase: 'Operating base', proofMember: 'Member company', proofFocus: 'Safety and quality',
    servicesEyebrow: 'What we do', servicesTitle: 'Technical solutions<br>for demanding work.',
    servicesIntro: 'We support clients in industry, energy and infrastructure with multidisciplinary teams and delivery focused on requirements, timelines and safety.',
    service1: 'Industrial engineering', service1d: 'Technical solutions for industrial environments and critical infrastructure.',
    service2: 'Technical maintenance', service2d: 'Inspection, intervention and support for operational continuity.',
    service3: 'Civil construction and public works', service3d: 'Delivery of civil works, structures and facility upgrades.',
    service4: 'Electrical installations', service4d: 'Assembly, support and integration of electrical systems.',
    service5: 'Technical consulting', service5d: 'Analysis, recommendations and specialist technical support.',
    service6: 'Project management', service6d: 'Project planning, control, coordination and delivery.',
    methodEyebrow: 'How we work', methodTitle: 'Clear planning.<br>Controlled delivery.',
    methodIntro: 'We organise each intervention into defined stages to keep communication clear, reduce risk and make handovers more predictable.', methodLink: 'Discuss your project',
    step1: 'Survey', step1d: 'Understand the site and scope.', step2: 'Diagnosis', step2d: 'Assess requirements and conditions.', step3: 'Planning', step3d: 'Define resources, timelines and controls.', step4: 'Execution', step4d: 'Carry out the work on site.', step5: 'HSE/QC control', step5d: 'Check safety and quality.', step6: 'Handover', step6d: 'Complete the work and report results.',
    projectsEyebrow: 'Field experience', projectsTitle: 'Real work.<br>Results that matter.',
    qualityEyebrow: 'Quality and safety', qualityTitle: 'Technical control<br>at every intervention.',
    qualityIntro: 'Work follows specifications, client requirements and good practice, with attention to risk and execution checks.',
    quality1: 'Risk prevention', quality1d: 'Risk planning, PPE, signage, procedures and work-zone control.',
    quality2: 'Execution checks', quality2d: 'Visual inspection, dimensional checks, finishing and technical verification.',
    quality3: 'Technical compliance', quality3d: 'Work aligned with specifications, client requirements and good practice.',
    quality4: 'Continuous improvement', quality4d: 'Operational learning and standardisation of repeatable processes.',
    projectsIntro: 'Examples of tank, piping and industrial installation work featured in the corporate profile.',
    carouselHint: 'Explore selected Serviteng work and projects.', carouselPrevious: 'Previous project', carouselNext: 'Next project', carouselLabel: 'Serviteng project carousel', carouselDots: 'Select a project',
    slide1: 'View project 1', slide2: 'View project 2', slide3: 'View project 3', slide4: 'View project 4',
    project1tag: 'Fuel tanks', project1: 'Improving tank sealing', project1d: 'Supply and installation of floating-roof seals to improve sealing and operational safety.',
    project2tag: 'Tanks and piping', project2: 'Tank cleaning and pipe preparation', project2d: 'Degassing and cleaning vertical tanks, alongside pipe blasting and painting.',
    project3tag: 'Corrosion protection', project3: 'Tank-base protection', project3d: 'Application of the Denso Base Protection system to protect the critical tank-base area from corrosion.',
    project4tag: 'Industrial repair', project4: 'Tank repair and painting', project4d: 'Internal repair and painting to renew the technical finish and surface protection.',
    projectImage1: 'Interior of an industrial tank', projectImage2: 'Piping at an industrial facility', projectImage3: 'Industrial surface with protective coating', projectImage4: 'Industrial tank under repair',
    project5tag: 'Pipe installation', project5: 'Piping in an industrial area', project5d: 'A site record of a pipeline installed alongside an industrial structure.',
    project6tag: 'Valves and components', project6: 'Industrial valve preparation', project6d: 'Components arranged to support technical work at industrial facilities.',
    project7tag: 'Fabrication and assembly', project7: 'Industrial component preparation', project7d: 'A metal component being prepared in an industrial workshop.',
    project8tag: 'Industrial installation', project8: 'On-site piping assembly', project8d: 'A record of pipework and installation elements at a project site.',
    project9tag: 'Civil works', project9: 'Industrial infrastructure and drainage', project9d: 'An exterior view of a drainage channel and pavement beside an industrial facility.',
    project10tag: 'Pumps and operations', project10: 'Industrial pumping equipment', project10d: 'A set of pumps and valves installed in an operating area.',
    projectImage5: 'Pipeline installed in a trench beside an industrial structure', projectImage6: 'Set of industrial valves', projectImage7: 'Large metal component in a workshop', projectImage8: 'Pipework at an industrial facility', projectImage9: 'Drainage channel and pavement beside an industrial facility', projectImage10: 'Pumps and valves in an industrial room',
    slide5: 'View project 5', slide6: 'View project 6', slide7: 'View project 7', slide8: 'View project 8', slide9: 'View project 9', slide10: 'View project 10',
    carouselRole: 'carousel',
    companyEyebrow: 'About Serviteng', companyTitle: 'Technical people.<br>Committed on site.',
    companyCopy: 'Founded in 2016 and based in Matola, Serviteng supports industrial clients with technical services, maintenance, installations and project delivery.',
    value1: 'Technical quality', value2: 'Operational safety', value3: 'Execution excellence', companyLink: 'Consult an engineer',
    partnersEyebrow: 'Institutional references', partnersTitle: 'Experience alongside<br>recognised organisations.', partnersIntro: 'Brands featured in Serviteng’s corporate profile.', partnersLabel: 'Serviteng institutional references',
    coverageEyebrow: 'Where we work', coverageTitle: 'Present across<br>Mozambique’s key regions.', coverageIntro: 'Based in Matola, we support projects in the north, centre and south of the country.',
    licenseTitle: 'Public works contractor — Class 4', licenseDetail: 'Buildings and Monuments category · Licence valid until 25 January 2027.',
    regionNorth: 'North', regionNorthDetail: 'Nampula · Nacala Porto', regionCentral: 'Centre', regionCentralDetail: 'Sofala · Beira · Port of Beira', regionSouth: 'South', regionSouthDetail: 'Maputo · Matola', headOffice: 'Head office', openMap: 'View location',
    quoteEyebrow: 'Let’s talk', quoteTitle: 'Your next project<br>starts with a conversation.',
    quoteIntro: 'Tell us what you need. Our team will receive your request on WhatsApp and follow up with you.',
    formTitle: 'Consult an engineer', nameLabel: 'Name', namePlaceholder: 'Your name', contactLabel: 'Phone or email', contactPlaceholder: 'How can we reach you?',
    serviceLabel: 'Service needed', servicePlaceholder: 'Select a service area', otherService: 'Other', messageLabel: 'Request details', messagePlaceholder: 'Briefly describe the work or support you need',
    submitQuote: 'Continue on WhatsApp', formNote: 'WhatsApp will open with your message ready to send.', formError: 'WhatsApp could not be opened. Contact us at +258 844 495 979.',
    whatsappIntro: 'Hello, I would like to request a quote from Serviteng.', whatsappName: 'Name', whatsappContact: 'Contact', whatsappService: 'Service', whatsappDetail: 'Details',
    location: 'Av. Fany Mpfume, No. 979 · Matola, Mozambique', footerLine: 'Quality, safety and execution.', backTop: 'Back to top', footerLocation: 'Matola · Mozambique'
  }
};

let activeLanguage = 'pt';

function setLanguage(language) {
  if (!copy[language]) return;
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

  previousButton.addEventListener('click', () => goToSlide(activeSlide - 1));
  nextButton.addEventListener('click', () => goToSlide(activeSlide + 1));
  projectDots.forEach((dot) => dot.addEventListener('click', () => goToSlide(Number(dot.dataset.carouselDot))));
  projectCarousel.addEventListener('scroll', () => {
    if (scrollFrame) cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(updateCarouselState);
  }, { passive: true });
  window.addEventListener('resize', updateCarouselState, { passive: true });
  updateCarouselState();
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

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (window.gsap && window.ScrollTrigger && !motionPreference.matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo('.hero-content > *', { autoAlpha: 0, y: 22 }, {
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

  gsap.matchMedia().add({
    mobile: '(max-width: 760px)',
    desktop: '(min-width: 761px)'
  }, (context) => {
    const isMobile = context.conditions.mobile;
    gsap.fromTo('.process-fill',
      isMobile ? { scaleY: 0 } : { scaleX: 0 },
      {
        ...(isMobile ? { scaleY: 1 } : { scaleX: 1 }),
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-list',
          start: isMobile ? 'top 70%' : 'top 75%',
          end: isMobile ? 'bottom 65%' : 'bottom 70%',
          scrub: 0.6
        }
      }
    );
  });
}
