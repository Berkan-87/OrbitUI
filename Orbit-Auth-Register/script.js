const wormhole = document.getElementById('wormholeTrigger');
const formSide = document.getElementById('formSide');
const darkOverlay = document.getElementById('darkOverlay');

// Kara Deliğe Tıklayınca Formu Aç
wormhole.addEventListener('click', () => {
    if (!wormhole.classList.contains('engaged')) {
        wormhole.classList.add('engaged');
        setTimeout(() => {
            darkOverlay.classList.add('hidden');
            formSide.classList.add('visible');
        }, 600);
    }
});

// Şifre Göster/Gizle
function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleIcon = document.querySelector('.password-toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

// Şifre Gücü Analizi (Uzay Temalı)
function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const meter = document.getElementById('strengthMeter');
    const bars = document.querySelectorAll('.strength-bar');
    const text = document.getElementById('strengthText');

    meter.classList.add('active');
    bars.forEach(bar => bar.className = 'strength-bar');
    text.textContent = 'Access Level: N/A';
    text.style.color = 'var(--text-muted)';

    if (password.length === 0) {
        meter.classList.remove('active');
        return;
    }

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)) strength++;

    if (strength === 1) {
        bars[0].classList.add('weak');
        text.textContent = 'Access Level: Low';
        text.style.color = '#ff3366';
    } else if (strength === 2) {
        bars[0].classList.add('medium');
        bars[1].classList.add('medium');
        text.textContent = 'Access Level: Medium';
        text.style.color = '#ffbd2e';
    } else if (strength === 3) {
        bars[0].classList.add('strong');
        bars[1].classList.add('strong');
        bars[2].classList.add('strong');
        text.textContent = 'Access Level: Omega';
        text.style.color = '#00ff88';
    }
}

// Tema Değiştirici
function setTheme(themeName) {
    document.body.className = '';
    if (themeName !== '') {
        document.body.classList.add(themeName);
    }
}