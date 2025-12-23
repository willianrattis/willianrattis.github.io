const translations = {
    'pt-BR': {
        nav: {
            start: "Start",
            about: "Sobre",
            skills: "Stack",
            projects: "Projetos",
            experience: "XP",
            contact: "Conectar"
        },
        hero: {
            role: "Senior Software Engineer",
            ctaProject: "Ver Projetos",
            ctaContact: "Contato"
        },
        headers: {
            about: "Sobre Mim",
            skills: "Tech Stack",
            projects: "Projetos",
            experience: "Jornada",
            contact: "Vamos Construir o Futuro?",
            contactDesc: "Estou sempre aberto a novas oportunidades e desafios.",
            emailBtn: "Mande um Hello"
        },
        footer: {
            copyright: "Designed & Built by Willian Rattis © 2025"
        }
    },
    'en-US': {
        nav: {
            start: "Start",
            about: "About",
            skills: "Stack",
            projects: "Projects",
            experience: "XP",
            contact: "Connect"
        },
        hero: {
            role: "Senior Software Engineer",
            ctaProject: "View Projects",
            ctaContact: "Contact"
        },
        headers: {
            about: "About Me",
            skills: "Tech Stack",
            projects: "Projects",
            experience: "Journey",
            contact: "Let's Build the Future?",
            contactDesc: "I am always open to new opportunities and challenges.",
            emailBtn: "Say Hello"
        },
        footer: {
            copyright: "Designed & Built by Willian Rattis © 2025"
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
    return result;
}

export function updateStaticContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = getTranslation(key);
    });
}
