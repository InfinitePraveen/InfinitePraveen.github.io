(function () {
    function renderProjects() {
        // General Projects
        const projectsGrid = document.getElementById('projectsGrid');
        if (projectsGrid) {
            projectsGrid.innerHTML = DATA.projects.map(p => `
                <div class="project-card">
                    <h3>${p.icon} ${p.name}</h3>
                    <p>${p.desc}</p>
                    <div class="tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                    <a href="${p.link}" target="_blank"><i class="fab fa-github"></i> View Repository</a>
                </div>
            `).join('');
        }

        // Study Projects
        const studyGrid = document.getElementById('studyGrid');
        if (studyGrid) {
            studyGrid.innerHTML = DATA.study.map(p => `
                <div class="project-card">
                    <h3>${p.icon} ${p.name}</h3>
                    <p>${p.desc}</p>
                    <div class="tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                    <a href="${p.link}" target="_blank"><i class="fab fa-github"></i> View Repository</a>
                </div>
            `).join('');
        }

        // Pull Requests
        const prGrid = document.getElementById('prGrid');
        if (prGrid) {
            prGrid.innerHTML = DATA.prs.map(p => `
                <div class="project-card">
                    <h3>${p.icon} ${p.name}</h3>
                    <p>${p.desc}</p>
                    <div class="tech-stack">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
                    <a href="${p.link}" target="_blank"><i class="fab fa-github"></i> ${p.link === '#' ? 'Stay tuned' : 'View Fork / PRs'}</a>
                </div>
            `).join('');
        }

        // Research
        const researchContainer = document.getElementById('researchContainer');
        if (researchContainer) {
            researchContainer.innerHTML = DATA.research.map(r => `
                <div class="research-item">
                    <h3>${r.icon} ${r.title}</h3>
                    <p>${r.desc}</p>
                    <a href="${r.link}" target="_blank"><i class="fab fa-github"></i> View Research Repository</a>
                </div>
            `).join('');
        }

        // Certifications
        const certContainer = document.getElementById('certificationsContainer');
        if (certContainer) {
            certContainer.innerHTML = DATA.certifications.map(c => `
                <div class="cert-item">
                    <h3>${c.icon} ${c.name}</h3>
                    <div>
                        <span class="issuer"><i class="fas fa-building"></i> ${c.issuer}</span>
                        ${c.level ? `<span class="issuer"> · Level: ${c.level}</span>` : ''}
                        <span class="date"><i class="far fa-calendar-alt"></i> ${c.date}</span>
                    </div>
                    <a href="${c.link}" target="_blank"><i class="fas fa-external-link-alt"></i> View Credential</a>
                </div>
            `).join('');
        }

        // Experience
        const expContainer = document.getElementById('experienceContainer');
        if (expContainer) {
            expContainer.innerHTML = DATA.experience.map(e => `
                <div class="exp-item">
                    <h3>${e.icon} ${e.title}</h3>
                    <div>
                        <span class="company"><i class="fas fa-building"></i> ${e.company}</span>
                        <span class="date"><i class="far fa-calendar-alt"></i> ${e.date}</span>
                    </div>
                    <p>${e.desc}</p>
                    <a href="${e.link}" target="_blank"><i class="fas fa-external-link-alt"></i> Learn More</a>
                </div>
            `).join('');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderProjects);
    } else {
        renderProjects();
    }
})();