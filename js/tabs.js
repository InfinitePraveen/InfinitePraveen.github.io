(function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function activateTab(tabId) {
        tabContents.forEach(content => content.classList.remove('active'));
        tabBtns.forEach(btn => btn.classList.remove('active'));
        const target = document.getElementById(tabId);
        if (target) target.classList.add('active');
        const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (btn) btn.classList.add('active');
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });

    window.activateTab = activateTab;
})();