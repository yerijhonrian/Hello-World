const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");
const elements = document.querySelectorAll("[data-i18n]");

langBtn.onclick = (e) => {
  e.stopPropagation();

  if (langMenu.classList.contains("open")) {
    closeLangMenu();
  } else {
    openLangMenu();
  }
};

function openLangMenu() {
  langMenu.classList.add("open");

  const buttons = langMenu.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("show"));

  setTimeout(() => {
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.classList.add("show");
      }, index * 90);
    });
  }, 120);
}

function closeLangMenu() {
  const buttons = langMenu.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("show"));
  langMenu.classList.remove("open");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".language-switcher")) {
    closeLangMenu();
  }
});


const t = {
  en: {
    name: "Yerijhon Rian",
    subtitle: "Automation, systems & practical thinking.<br>I build structure so things don’t break.",
    building: "What I’m building",
    b1: "Client service systems",
    b2: "Process automation",
    b3: "Practical AI for real businesses",
    content: "Content",
    portfolio: "Framework",
    knowledge: "Knowledge",
    contact: "Work / Contact",
    cta: "Start a conversation",
    footer: "Systems > improvisation",

    link_instagram: "Instagram — short ideas",
    link_linkedin: "LinkedIn — career & systems",
    link_github: "GitHub — code & experiments",
    link_email: "E-mail — contact & negotiations",
    link_work: "View my work",
    link_consult: "Consults for your businesses",
    link_bitcoin: "Bitcoin"
  },

  pt: {
    name: "Yerijhon Rian",
    subtitle: "Automação, sistemas e pensamento prático.<br>Eu crio estrutura para evitar caos.",
    building: "O que estou construindo",
    b1: "Sistemas de atendimento",
    b2: "Automação de processos",
    b3: "IA prática para negócios reais",
    content: "Conteúdo",
    portfolio: "Framework",
    knowledge: "Conhecimento",
    contact: "Contato",
    cta: "Iniciar conversa",
    footer: "Estrutura > improviso",

    link_instagram: "Instagram — ideias curtas",
    link_linkedin: "LinkedIn — carreira & sistemas",
    link_github: "GitHub — código & experimentos",
    link_email: "E-mail — contato & negociações",
    link_work: "Ver meu trabalho",
    link_consult: "Consultoria para seu negócio",
    link_bitcoin: "Bitcoin"
  },

  ru: {
    name: "Yerijhon Rian",
    subtitle: "Автоматизация, системы и практическое мышление.<br>Я создаю структуру, чтобы избежать хаоса.",
    building: "Над чем я работаю",
    b1: "Системы обслуживания клиентов",
    b2: "Автоматизация процессов",
    b3: "Практичный ИИ для бизнеса",
    content: "Контент",
    portfolio: "Фреймворк",
    knowledge: "Знания",
    contact: "Контакт",
    cta: "Начать разговор",
    footer: "Структура > импровизация",

    link_instagram: "Instagram — короткие идеи",
    link_linkedin: "LinkedIn — карьера и системы",
    link_github: "GitHub — код и эксперименты",
    link_email: "E-mail — контакты и переговоры",
    link_work: "Посмотреть работы",
    link_consult: "Консультации для бизнеса",
    link_bitcoin: "Bitcoin"
  },

  fr: {
    name: "Yerijhon Rian",
    subtitle: "Automatisation, systèmes et pensée pratique.<br>Je crée de la structure pour éviter le chaos.",
    building: "Ce que je construis",
    b1: "Systèmes de service client",
    b2: "Automatisation des processus",
    b3: "IA pratique pour de vrais business",
    content: "Contenu",
    portfolio: "Framework",
    knowledge: "Connaissances",
    contact: "Contact",
    cta: "Démarrer une conversation",
    footer: "Structure > improvisation",

    link_instagram: "Instagram — idées courtes",
    link_linkedin: "LinkedIn — carrière et systèmes",
    link_github: "GitHub — code et expériences",
    link_email: "E-mail — contact et négociations",
    link_work: "Voir mon travail",
    link_consult: "Consulting pour votre entreprise",
    link_bitcoin: "Bitcoin"
  }
};

langMenu.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
        const lang = btn.dataset.lang;

        if (!t[lang]) return;

        elements.forEach(el => {
            const key = el.dataset.i18n;
            if (t[lang][key]) {
                el.innerHTML = t[lang][key];
            }
        });

        closeLangMenu();
    };
});

const shareBtn = document.getElementById("share-btn");

shareBtn.onclick = async () => {
  const shareData = {
    title: "Yerijhon Rian — Digital Workspace",
    text: "Automation, systems & practical thinking.",
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("Share cancelled");
    }
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard");
  }
};
