// Modern App Entry Point
import db from '../db/db.js';
import { getCurrentLang, setLanguage, updateStaticContent } from './i18n.js';

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
    // Extract user roles from bio or hardcode for effect
    new Typed('#typing-text', {
        strings: ['Cloud Architect', 'DevOps Enthusiast', '.NET Specialist', 'Full Stack Developer'],
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
        data.skills.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.setAttribute('data-aos', 'fade-up');

            // Generate valid class or variable for color if needed, simplified here
            card.innerHTML = `
                <span class="skill-name">${skill.skillName}</span>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.percentage}%"></div>
                </div>
            `;
            skillsContainer.appendChild(card);
        });
    }

    // --- Projects ---
    const projectsContainer = document.getElementById('projects-container');
    if (data.projects) {
        // Flatten categories for modern grid
        const allProjects = [
            ...data.projects.web.map(p => ({ ...p, category: 'Web' })),
            ...data.projects.software.map(p => ({ ...p, category: 'Software' })),
            ...data.projects.app.map(p => ({ ...p, category: 'App' }))
        ];

        allProjects.forEach(project => {
            // Skip empty projects (some in db.js seemed empty)
            if (!project.summary) return;

            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-tilt', ''); // Activation for Tilt.js
            card.setAttribute('data-aos', 'fade-up');

            let techTags = '';
            if (project.techStack) {
                project.techStack.forEach(t => techTags += `<span class="tech-tag">#${t}</span>`);
            }

            // Fallback content if title missing
            const title = project.projectName || project.category + " Project";

            card.innerHTML = `
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${title}</h3>
                    <p class="project-desc">${project.summary}</p>
                    <div class="project-tech">${techTags}</div>
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

        let detailsHtml = '<ul>';
        if (item.details) {
            item.details.forEach(d => detailsHtml += `<li>${d}</li>`);
        }
        detailsHtml += '</ul>';

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
                <h4>${item.subtitle || ''}</h4>
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
            populateContent();

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

function updateLangButton(lang) {
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
