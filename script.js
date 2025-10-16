// Sistema de Tradução
const translations = {
    pt: {
        // Navegação
        "nav.home": "Início",
        "nav.contact": "Contato",
        "nav.education": "Formação",
        "nav.softSkills": "Soft Skills",
        "nav.hardSkills": "Hard Skills",
        "nav.history": "Histórico",
        "nav.about": "Conheça Mais",
        
        // Hero
        "hero.title": "Analytics Engineer",
        "hero.description": "Especialista em análise de dados, machine learning e desenvolvimento de soluções focadas em indicadores e performance. Focado em qualidade dos dados apoio a gestão estratégica e plano de ações para alavancagem de indicadores.",
        "hero.contactBtn": "Entre em Contato",
        
        // Contato
        "contact.title": "Informações de Contato",
        "contact.linkedin": "LinkedIn",
        "contact.phone": "Telefone",
        "contact.address": "Endereço",
        "contact.whatsapp": "WhatsApp",
        "contact.whatsappBtn": "Enviar Mensagem",
        "contact.github": "GitHub",
        "contact.githubBtn": "Ver Perfil GitHub",
        "contact.formTitle": "Envie uma Mensagem",
        "contact.name": "Nome",
        "contact.email": "E-mail",
        "contact.subject": "Assunto",
        "contact.message": "Mensagem",
        "contact.sendBtn": "Enviar Mensagem",
        
        // Formação
        "education.title": "Formação Acadêmica",
        "education.mba": "Especialização em implantação de sistemas de Inteligência Artificial.",
        "education.mastersTitle": "Mestrado em Ciência da Computação",
        "education.mastersDesc": "Inteligência Computacional Aplicada à Internet das Coisas e Cidades Inteligentes.",
        "education.bachelorsTitle": "Graduação em Engenharia de Computação",
        "education.bachelorsDesc": "Desenvolvimento de Softwares e Hardwares.",
        "education.microelectronicsTitle": "Capacitação em Microeletrônica",
        "education.microelectronicsDesc": "Projetos relacionadas a implementação e verificação de hardware digital.",
        "education.electrotechnicalTitle": "Técnico em Eletrotécnica",
        "education.electrotechnicalDesc": "Curso técnico de nível médio em eletrotécnica.",
        
        // Soft Skills
        "softSkills.title": "Soft Skills",
        "softSkills.description": "Ao longo da minha jornada profissional, busquei aprimorar minhas habilidades pessoais, algumas delas possuem certificações e podem ser consultadas a qualquer momento.",
        "softSkills.problemSolving": "Resolução de Problemas",
        "softSkills.problemSolvingDesc": "A razão por ser engenheiro é o gosto particular por raciocinar de forma analítica para identificar raízes de problemas complexos, desenvolver soluções criativas e implementar estratégias eficazes para superar desafios.",
        "softSkills.criticalThinking": "Pensamento Crítico",
        "softSkills.criticalThinkingDesc": "Área de dados requer habilidade de analisar situações de forma lógica, questionar premissas, avaliar evidências e tomar decisões fundamentadas em dados e fatos concretos.",
        "softSkills.teamwork": "Trabalho em Equipe",
        "softSkills.teamworkDesc": "Gosto muito de trabalhar em equipe, vejo como uma oportunidade de ouvir outros pontos de vista e também avaliar minhas ideias para resolução de problemas, uma esculta humilde e falas respeitosas alcançam resultados incríveis! É nisso que acredito.",
        "softSkills.communication": "Comunicação Efetiva",
        "softSkills.communicationDesc": "Tenho a capacidade de transmitir ideias de forma clara e objetiva, adaptando a comunicação ao público-alvo, pois entendo que após o desenvolvimento e tratamento dos dados o especialista deve garantir a entrega para a área operacional da organização.",
        "softSkills.adaptability": "Adaptabilidade",
        "softSkills.adaptabilityDesc": "Flexibilidade para lidar com mudanças, não só da organização em si, mas de pessoas de objetivo e nível de entrega.",
        
        // Hard Skills
        "hardSkills.title": "Hard Skills",
        "hardSkills.description": "Competências técnicas e conhecimentos especializados:",
        "hardSkills.pythonDesc": "Domínio avançado da linguagem Python para desenvolvimento de aplicações, automação de processos, análise de dados e implementação de algoritmos complexos.",
        "hardSkills.sqlDesc": "Proficiência em consultas SQL complexas, otimização de queries, design de bancos de dados relacionais e manipulação de grandes volumes de dados.",
        "hardSkills.databricksDesc": "Experiência com plataforma Databricks para processamento de big data, notebooks colaborativos e pipelines de machine learning em escala.",
        "hardSkills.pandasDesc": "Domínio das bibliotecas Pandas e NumPy para manipulação eficiente de dados, transformação de datasets e cálculos numéricos de alto desempenho.",
        "hardSkills.gitDesc": "Controle de versão profissional com Git, incluindo branching, merging, pull requests e colaboração em equipes de desenvolvimento distribuídas.",
        "hardSkills.snowflakeDesc": "Domínio do data warehouse Snowflake, otimização de queries, gerenciamento de warehouses e integração com ferramentas de BI.",
        "hardSkills.grafanaDesc": "Criação de dashboards interativos e monitoramento em tempo real, configuração de alertas e visualização de métricas de negócio.",
        "hardSkills.daxDesc": "Criação de medidas complexas em Power BI usando DAX, desenvolvimento de modelos de dados e cálculos de business intelligence.",
        "hardSkills.dataAnalysisDesc": "Capacidade de extrair insights valiosos de datasets complexos, realizar análise exploratória, limpeza de dados e criação de visualizações informativas.",
        "hardSkills.mlDesc": "Implementação de algoritmos de aprendizado supervisionado e não supervisionado, incluindo regressão, classificação, clustering e técnicas de ensemble.",
        "hardSkills.visualizationDesc": "Criação de dashboards interativos e visualizações impactantes usando ferramentas como Matplotlib, Seaborn, Plotly e Power BI.",
        
        // Histórico
        "history.title": "Histórico Profissional",
        "history.seniorTitle": "Analista de Dados",
        "history.seniorDesc": "Desenvolvimento de pipelines focados no processo de ETL, Análise e desenvolvimento de dados para planos de ação e desenvolvimento de KPI's. Desenvolvimento de dashboard usando Power BI. Liderar fóruns técnicos e reuniões setoriais.",
        "history.analystDesc": "Aplicação prática de Estatística e teoria da informação, usando: Python e R como linguagem de programação. Uso de ferramentas de MLOps para experimentos e acompanhamento de performance de modelos de Machine Learning.",
        "history.juniorTitle": "Mentoria de Power BI",
        "history.juniorDesc": "Trabalho desenvolvido para a Usina Caeté, empresa de grande porte, com foco no amadurecimento da criação de dashboards para a sintetização dos dados.",
        "history.internTitle": "Mentoria de Projetos (Grand-Pix SENAI)",
        "history.internDesc": "Trabalho desenvolvido para concepção e desenvolvimento de projetos de nível técnico para indústria.",
        
        // Conheça Mais
        "about.title": "Conheça Mais"
    },
    en: {
        // Navegação
        "nav.home": "Home",
        "nav.contact": "Contact",
        "nav.education": "Education",
        "nav.softSkills": "Soft Skills",
        "nav.hardSkills": "Hard Skills",
        "nav.history": "Experience",
        "nav.about": "About Me",
        
        // Hero
        "hero.title": "Analytics Engineer",
        "hero.description": "Specialist in data analysis, machine learning and development of solutions focused on indicators and performance. Focused on data quality, strategic management support and action plans to leverage indicators.",
        "hero.contactBtn": "Get in Touch",
        
        // Contato
        "contact.title": "Contact Information",
        "contact.linkedin": "LinkedIn",
        "contact.phone": "Phone",
        "contact.address": "Address",
        "contact.whatsapp": "WhatsApp",
        "contact.whatsappBtn": "Send Message",
        "contact.github": "GitHub",
        "contact.githubBtn": "View GitHub Profile",
        "contact.formTitle": "Send a Message",
        "contact.name": "Name",
        "contact.email": "E-mail",
        "contact.subject": "Subject",
        "contact.message": "Message",
        "contact.sendBtn": "Send Message",
        
        // Formação
        "education.title": "Academic Background",
        "education.mba": "Specialization in implementation of Artificial Intelligence systems.",
        "education.mastersTitle": "Master's in Computer Science",
        "education.mastersDesc": "Computational Intelligence Applied to Internet of Things and Smart Cities.",
        "education.bachelorsTitle": "Bachelor's in Computer Engineering",
        "education.bachelorsDesc": "Software and Hardware Development.",
        "education.microelectronicsTitle": "Microelectronics Training",
        "education.microelectronicsDesc": "Projects related to implementation and verification of digital hardware.",
        "education.electrotechnicalTitle": "Electrotechnical Technician",
        "education.electrotechnicalDesc": "Mid-level technical course in electrotechnics.",
        
        // Soft Skills
        "softSkills.title": "Soft Skills",
        "softSkills.description": "Throughout my professional journey, I have sought to improve my personal skills, some of which have certifications and can be consulted at any time.",
        "softSkills.problemSolving": "Problem Solving",
        "softSkills.problemSolvingDesc": "The reason for being an engineer is the particular taste for reasoning analytically to identify roots of complex problems, develop creative solutions and implement effective strategies to overcome challenges.",
        "softSkills.criticalThinking": "Critical Thinking",
        "softSkills.criticalThinkingDesc": "Data area requires the ability to analyze situations logically, question assumptions, evaluate evidence and make decisions based on data and concrete facts.",
        "softSkills.teamwork": "Teamwork",
        "softSkills.teamworkDesc": "I really enjoy working in a team, I see it as an opportunity to listen to other points of view and also evaluate my ideas for problem solving, humble listening and respectful speech achieve incredible results! That's what I believe in.",
        "softSkills.communication": "Effective Communication",
        "softSkills.communicationDesc": "I have the ability to convey ideas clearly and objectively, adapting communication to the target audience, as I understand that after developing and processing data, the specialist must ensure delivery to the operational area of the organization.",
        "softSkills.adaptability": "Adaptability",
        "softSkills.adaptabilityDesc": "Flexibility to deal with changes, not only of the organization itself, but of people of objective and level of delivery.",
        
        // Hard Skills
        "hardSkills.title": "Hard Skills",
        "hardSkills.description": "Technical competencies and specialized knowledge:",
        "hardSkills.pythonDesc": "Advanced command of the Python language for application development, process automation, data analysis and implementation of complex algorithms.",
        "hardSkills.sqlDesc": "Proficiency in complex SQL queries, query optimization, relational database design and manipulation of large volumes of data.",
        "hardSkills.databricksDesc": "Experience with Databricks platform for big data processing, collaborative notebooks and machine learning pipelines at scale.",
        "hardSkills.pandasDesc": "Mastery of Pandas and NumPy libraries for efficient data manipulation, dataset transformation and high-performance numerical calculations.",
        "hardSkills.gitDesc": "Professional version control with Git, including branching, merging, pull requests and collaboration in distributed development teams.",
        "hardSkills.snowflakeDesc": "Mastery of Snowflake data warehouse, query optimization, warehouse management and integration with BI tools.",
        "hardSkills.grafanaDesc": "Creation of interactive dashboards and real-time monitoring, configuration of alerts and visualization of business metrics.",
        "hardSkills.daxDesc": "Creation of complex measures in Power BI using DAX, development of data models and business intelligence calculations.",
        "hardSkills.dataAnalysisDesc": "Ability to extract valuable insights from complex datasets, perform exploratory analysis, data cleaning and creation of informative visualizations.",
        "hardSkills.mlDesc": "Implementation of supervised and unsupervised learning algorithms, including regression, classification, clustering and ensemble techniques.",
        "hardSkills.visualizationDesc": "Creation of interactive dashboards and impactful visualizations using tools like Matplotlib, Seaborn, Plotly and Power BI.",
        
        // Histórico
        "history.title": "Professional History",
        "history.seniorTitle": "Data Analyst",
        "history.seniorDesc": "Development of pipelines focused on the ETL process, Analysis and development of data for action plans and development of KPIs. Development of dashboard using Power BI. Lead technical forums and sectoral meetings.",
        "history.analystDesc": "Practical application of Statistics and information theory, using: Python and R as programming language. Use of MLOps tools for experiments and performance monitoring of Machine Learning models.",
        "history.juniorTitle": "Power BI Mentoring",
        "history.juniorDesc": "Work developed for Usina Caeté, a large company, focusing on maturing the creation of dashboards for data synthesis.",
        "history.internTitle": "Project Mentoring (Grand-Pix SENAI)",
        "history.internDesc": "Work developed for the conception and development of technical level projects for industry.",
        
        // Conheça Mais
        "about.title": "About Me"
    }
};

// Estado da aplicação
let currentLang = 'pt';
let currentTheme = 'dark';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Configuração inicial
    initializeApp();
    
    // Event Listeners
    setupEventListeners();
    
    // Configurar altura do header
    updateHeaderHeight();
    
    // Inicializar carrossel
    initializeCarousel();
});

// Função de inicialização
function initializeApp() {
    // Verificar preferências salvas
    const savedLang = localStorage.getItem('portfolio-lang');
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    if (savedTheme) {
        currentTheme = savedTheme;
        updateTheme();
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegação
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // Atualizar link ativo
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Botão de tema
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Botão de idioma
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Auto-hide do header
    setupHeaderAutoHide();
}

// Mostrar seção específica
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Alternar tema
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme();
    localStorage.setItem('portfolio-theme', currentTheme);
}

// Atualizar tema
function updateTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    
    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeText.textContent = 'Modo Claro';
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span id="themeText">Modo Claro</span>';
    } else {
        body.classList.remove('light-mode');
        themeText.textContent = 'Modo Escuro';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span id="themeText">Modo Escuro</span>';
    }
}

// Alternar idioma
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    updateLanguage();
    localStorage.setItem('portfolio-lang', currentLang);
}

// Atualizar idioma
function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Atualizar botão de idioma
    const langText = document.getElementById('langText');
    langText.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    
    // Atualizar atributo lang do HTML
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

// Lidar com formulário de contato
function handleContactForm(e) {
    e.preventDefault();
    
    // Obter dados do formulário
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simular envio (em um projeto real, aqui seria feita uma requisição AJAX)
    console.log('Formulário enviado:', { name, email, subject, message });
    
    // Mostrar notificação
    showNotification(currentLang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!');
    
    // Limpar formulário
    e.target.reset();
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Configurar auto-hide do header
function setupHeaderAutoHide() {
    const header = document.getElementById('header');
    const headerTrigger = document.getElementById('headerTrigger');
    const main = document.getElementById('main');
    let lastScrollTop = 0;
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Verificar se o mouse está na área de detecção do header
                const mouseY = window.mouseY || 0;
                if (mouseY < 20) {
                    header.classList.remove('hidden');
                    main.classList.remove('header-hidden');
                } else if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scroll para baixo
                    header.classList.add('hidden');
                    main.classList.add('header-hidden');
                } else {
                    // Scroll para cima
                    header.classList.remove('hidden');
                    main.classList.remove('header-hidden');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    // Detectar posição do mouse
    window.addEventListener('mousemove', function(e) {
        window.mouseY = e.clientY;
        
        if (e.clientY < 20) {
            header.classList.remove('hidden');
            main.classList.remove('header-hidden');
        }
    });
    
    // Detectar quando o mouse entra na área de detecção
    headerTrigger.addEventListener('mouseenter', function() {
        header.classList.remove('hidden');
        main.classList.remove('header-hidden');
    });
}

// Atualizar altura do header
function updateHeaderHeight() {
    const header = document.getElementById('header');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

// Inicializar carrossel
function initializeCarousel() {
    const carousel = document.getElementById('aboutCarousel');
    if (!carousel) return;
    
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Função para mostrar slide específico
    function goToSlide(index) {
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        
        currentIndex = index;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualizar indicadores
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Event listeners para botões
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    
    // Event listeners para indicadores
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => goToSlide(i));
    });
    
    // Auto-play (opcional)
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Iniciar auto-play
    startAutoplay();
    
    // Pausar auto-play quando o mouse estiver sobre o carrossel
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
}