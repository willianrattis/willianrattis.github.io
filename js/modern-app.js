// Modern App Entry Point
import db from '../db/db.js';
import { getCurrentLang, setLanguage, updateStaticContent, getTranslation } from './i18n.js';

let typedInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Modern Portfolio Loaded. Initializing systems...', data);

    initVisuals();
    updateStaticContent(); // Initial static text render
    populateContent();
    initInteractions();
    initAOS();
    updateLangButton(getCurrentLang());
});

function initVisuals() {
    // 1. Vanta JS - Net Effect
    try {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x66fcf1,       // --primary-neon
            backgroundColor: 0x0b0c10, // --bg-dark
            points: 8.00,
            maxDistance: 20.00,
            spacing: 24.00
        });
    } catch (e) {
        console.warn("Vanta JS failed to load", e);
    }

    // 2. Typed JS
    initTypewriter();
}

function initTypewriter() {
    if (typedInstance) {
        typedInstance.destroy();
    }
    typedInstance = new Typed('#typing-text', {
        strings: getTranslation('hero.typewriter'),
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        smartBackspace: true
    });
}

function populateContent() {
    // --- About ---
    const langKey = getCurrentLang() === 'en-US' ? 'en' : 'pt';
    const data = db[langKey];

    // Clear previous dynamic content to allow re-render
    document.querySelector('#about .about-text').innerHTML = '';
    document.getElementById('skills-container').innerHTML = '';
    document.getElementById('projects-container').innerHTML = '';
    document.getElementById('experience-timeline').innerHTML = '';

    // --- About ---
    const aboutText = document.querySelector('#about .about-text');
    if (data && data.bio && data.bio.about) {
        let html = '';
        data.bio.about.text.forEach(p => {
            html += `<p>${p}</p>`;
        });
        aboutText.innerHTML = html;
    }

    // --- Skills ---
    const skillsContainer = document.getElementById('skills-container');
    if (data.skills) {
        data.skills.forEach(group => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.setAttribute('data-aos', 'fade-up');

            card.innerHTML = `
                <span class="skill-name">${group.category}</span>
                <p class="project-desc" style="margin-bottom: 0;">${group.items.join(', ')}</p>
            `;
            skillsContainer.appendChild(card);
        });
    }

    // --- Featured Work ---
    const projectsContainer = document.getElementById('projects-container');
    if (data.featured) {
        data.featured.forEach(item => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-tilt', ''); // Activation for Tilt.js
            card.setAttribute('data-aos', 'fade-up');

            card.innerHTML = `
                <div class="project-content">
                    <span class="project-category">${item.context}</span>
                    <h3 class="project-title">${item.title}</h3>
                    <p class="project-desc">${item.description}</p>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    // --- Experience / Education Combined Timeline ---
    const timeline = document.getElementById('experience-timeline');

    // Merge experience and education, sort by date? 
    // Data structures are slightly different but similar enough.
    // For now, let's just append Experience then Education section titles within timeline

    // Helper for timeline item
    const createTimelineItem = (item, type) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.setAttribute('data-aos', 'fade-left');

        // Icon logic (simplified)
        // item.icon is like 'shopping-bag', 'code'

        let detailsHtml = '';
        if (item.details && item.details.length) {
            detailsHtml = '<ul>';
            item.details.forEach(d => detailsHtml += `<li>${d}</li>`);
            detailsHtml += '</ul>';
        }

        let tagsHtml = '';
        if (item.tags) {
            tagsHtml = '<div class="project-tech" style="margin-top: 1rem;">';
            item.tags.forEach(t => tagsHtml += `<span class="tech-tag">#${t}</span>`);
            tagsHtml += '</div>';
        }

        div.innerHTML = `
            <div class="timeline-dot"></div>
            <span class="timeline-date">${item.duration || ''}</span>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <h4>${item.institution || item.subtitle || ''}</h4>
                ${detailsHtml}
                ${tagsHtml}
            </div>
        `;
        return div;
    };

    if (data.experience) {
        data.experience.forEach(item => timeline.appendChild(createTimelineItem(item, 'exp')));
    }

    // Add Education Header in Timeline
    // (Optional: visual separation)

    if (data.education) {
        data.education.forEach(item => timeline.appendChild(createTimelineItem(item, 'edu')));
    }
}

function initInteractions() {
    // Mobile Nav Toggle
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(11, 12, 16, 0.95)';
                navLinks.style.padding = '2rem';
            }
        });
    }

    initTilt();

    // Language Toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = getCurrentLang();
            const newLang = current === 'en-US' ? 'pt-BR' : 'en-US';
            setLanguage(newLang);
            updateLangButton(newLang);
            updateMetaTags();
            populateContent();
            initTypewriter();

            // Re-init Tilt for new elements
            initTilt();

            // Re-init AOS to handle layout changes
            setTimeout(() => AOS.refresh(), 100);
        });
    }
}

function initTilt() {
    // Initialize Tilt explicitly if needed, usually auto-inits with data-tilt attribute
    if (typeof VanillaTilt !== 'undefined') {
        // Destroy previous instances if any to prevent memory leaks or double binding (though VanillaTilt usually handles init safely)
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            if (card.vanillaTilt) {
                card.vanillaTilt.destroy();
            }
        });

        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }
}

function updateMetaTags() {
    const description = getTranslation('meta.description');
    const ogLocale = getTranslation('meta.ogLocale');

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) descriptionTag.setAttribute('content', description);

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', description);

    const ogLocaleTag = document.querySelector('meta[property="og:locale"]');
    if (ogLocaleTag) ogLocaleTag.setAttribute('content', ogLocale);
}

function updateLangButton(lang) {
    document.documentElement.lang = lang;

    const btn = document.getElementById('lang-toggle');
    if (btn) {
        if (lang === 'en-US') {
            btn.innerText = '🇧🇷 PT';
        } else {
            btn.innerText = '🇺🇸 EN';
        }
    }
}

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50
        });
    }
}

function initNavigation() {
    const nav = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}
