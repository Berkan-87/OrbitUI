const wormhole = document.getElementById('wormholeTrigger');
const formSide = document.getElementById('formSide');
const darkOverlay = document.getElementById('darkOverlay');

// Yıldız Geçidi Efekti (Kara Deliğe Tıklayınca)
wormhole.addEventListener('click', () => {
    // Sadece bir kez çalışması için kontrol
    if (!wormhole.classList.contains('engaged')) {
        // Kara deliği büyüt ve yut
        wormhole.classList.add('engaged');
        
        // 600ms sonra formu ortaya çıkar
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

// Tema Değiştirici (Kırmızı, Mavi, Yeşil)
function setTheme(themeName) {
    const isFormVisible = formSide.classList.contains('visible');
    document.body.className = '';
    if (themeName !== '') {
        document.body.classList.add(themeName);
    }
}