// Background Music - Ambient/Chill
(function () {
    let audioCtx = null;
    let isPlaying = false;
    let osc1, osc2, gainNode, gain2, filter;

    function initAudio() {
        if (audioCtx) return;
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        osc1 = audioCtx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.value = 220;

        osc2 = audioCtx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.value = 330;

        gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.08;

        gain2 = audioCtx.createGain();
        gain2.gain.value = 0.06;

        filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;

        osc1.connect(gainNode);
        gainNode.connect(filter);
        filter.connect(audioCtx.destination);

        osc2.connect(gain2);
        gain2.connect(filter);

        const lfo = audioCtx.createOscillator();
        lfo.frequency.value = 2.5;
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 3;
        lfo.connect(lfoGain);
        lfoGain.connect(osc1.frequency);
        lfoGain.connect(osc2.frequency);
        lfo.start();

        osc1.start();
        osc2.start();

        setTimeout(() => {
            if (osc1 && osc2) {
                osc1.frequency.setTargetAtTime(277, audioCtx.currentTime + 0.5, 3);
                osc2.frequency.setTargetAtTime(370, audioCtx.currentTime + 0.5, 3);
            }
        }, 6000);
    }

    function toggleMusic() {
        if (!audioCtx) {
            initAudio();
            isPlaying = true;
            updateUI(true);
            return;
        }

        if (isPlaying) {
            if (gainNode) gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
            if (gain2) gain2.gain.setTargetAtTime(0, audioCtx.currentTime, 0.1);
            isPlaying = false;
            updateUI(false);
        } else {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            if (gainNode) gainNode.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.1);
            if (gain2) gain2.gain.setTargetAtTime(0.06, audioCtx.currentTime, 0.1);
            isPlaying = true;
            updateUI(true);
        }
    }

    function updateUI(playing) {
        const icon = document.getElementById('musicIcon');
        const label = document.getElementById('musicLabel');
        if (playing) {
            icon.className = 'fas fa-volume-up';
            label.textContent = '🎵 lofi · chill';
        } else {
            icon.className = 'fas fa-music';
            label.textContent = '🎵 ambient (off)';
        }
    }

    // Setup toggle
    document.getElementById('musicToggle').addEventListener('click', toggleMusic);
    updateUI(false);

    // Resume audio context on any user interaction
    document.addEventListener('click', function () {
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }, { once: false });
})();