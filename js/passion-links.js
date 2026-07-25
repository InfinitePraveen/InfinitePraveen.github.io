(function () {
    function setupPassionLinks() {
        const grid = document.getElementById('passionGrid');
        if (!grid) return;

        grid.innerHTML = '';

        DATA.passionFields.forEach(field => {
            const a = document.createElement('a');
            a.className = `passion-item ${field.class || ''}`;
            a.href = `pages/${field.page}`;
            a.target = '_blank';
            a.innerHTML = `
                <span class="icon-big">${field.icon}</span>
                <h4>${field.name}</h4>
                <span class="sub">${field.desc}</span>
            `;
            grid.appendChild(a);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupPassionLinks);
    } else {
        setupPassionLinks();
    }
})();