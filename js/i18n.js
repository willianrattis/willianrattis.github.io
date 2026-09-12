const translations = {
    'pt-BR': {
        meta: {
            description: "Willian Rattis — Tech Lead e engenheiro de software com 13 anos de experiência em microsserviços .NET, Kubernetes e IA generativa. Disponível para trabalho remoto.",
            ogLocale: "pt_BR"
        },
        nav: {
            start: "Start",
            about: "Sobre",
            skills: "Stack",
            projects: "Destaques",
            experience: "XP",
            contact: "Conectar"
        },
        hero: {
            role: "Tech Lead · Engenheiro de Software Sênior · Arquitetura de Soluções",
            location: "Presidente Venceslau, São Paulo, Brasil · Trabalho remoto",
            typewriter: ["Tech Lead", "Arquitetura de Soluções", "Microsserviços em .NET", "IA Generativa"],
            ctaProject: "Ver Projetos",
            ctaContact: "Contato"
        },
        headers: {
            about: "Sobre Mim",
            skills: "Tech Stack",
            projects: "Trabalhos em destaque",
            experience: "Jornada",
            contact: "Vamos Construir o Futuro?",
            contactDesc: "Estou sempre aberto a novas oportunidades e desafios.",
            emailBtn: "Mande um Hello"
        },
        footer: {
            copyright: "Designed & Built by Willian Rattis © {year}"
        }
    },
    'en-US': {
        meta: {
            description: "Willian Rattis — Tech Lead and software engineer with 13 years of experience in .NET microservices, Kubernetes and generative AI. Available for remote work.",
            ogLocale: "en_US"
        },
        nav: {
            start: "Start",
            about: "About",
            skills: "Stack",
            projects: "Featured",
            experience: "XP",
            contact: "Connect"
        },
        hero: {
            role: "Tech Lead · Senior Software Engineer · Solutions Architecture",
            location: "Presidente Venceslau, São Paulo, Brazil · Remote",
            typewriter: ["Tech Lead", "Solutions Architecture", ".NET Microservices", "Generative AI"],
            ctaProject: "View Projects",
            ctaContact: "Contact"
        },
        headers: {
            about: "About Me",
            skills: "Tech Stack",
            projects: "Featured work",
            experience: "Journey",
            contact: "Let's Build the Future?",
            contactDesc: "I am always open to new opportunities and challenges.",
            emailBtn: "Say Hello"
        },
        footer: {
            copyright: "Designed & Built by Willian Rattis © {year}"
        }
    }
};

let currentLang = localStorage.getItem('site-lang') || 'pt-BR';
// Fallback if browser language is English and no preference saved
if (!localStorage.getItem('site-lang') && navigator.language.startsWith('en')) {
    currentLang = 'en-US';
}

export function getCurrentLang() {
    return currentLang;
}

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('site-lang', lang);
        // Dispatch event for other components to react
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        updateStaticContent();
    }
}

export function getTranslation(key) {
    const keys = key.split('.');
    let result = translations[currentLang];
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            return key;
        }
    }
    if (typeof result === 'string') {
        result = result.replace('{year}', new Date().getFullYear());
    }
    return result;
}

export function updateStaticContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = getTranslation(key);
    });
}
