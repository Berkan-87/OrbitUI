// Elements
const wormhole = document.getElementById('wormholeTrigger');
const hintText = document.querySelector('.hint-text');
const body = document.body;

// "Restore Orbit" fonksiyonu: Kara deliği canlandırır
function restoreOrbit() {
    // Eğer zaten tamir edildiyse tekrar çalışmasın
    if (wormhole.classList.contains('is-fixed')) return;

    // Kara deliğe 'is-fixed' sınıfını ekle (Işık yanar, renklenir)
    wormhole.classList.add('is-fixed');
    body.classList.add('lights-on');
    
    // "Signal Lost" yazısını gizle
    if (hintText) hintText.style.opacity = '0';
    
    // 404 yazısını "Coordinates Found" (Koordinatlar Bulundu) olarak değiştir
    setTimeout(() => {
        const h2 = document.querySelector('.error-header h2');
        const h1 = document.querySelector('.error-header h1');
        if (h2) {
            h2.textContent = "Coordinates Restored";
            h2.style.color = "var(--accent-color)";
        }
        if (h1) {
            h1.style.textShadow = "0 0 40px rgba(var(--accent-rgb), 0.8)";
        }
    }, 500);
}

// Kara deliğe tıklandığında da tamir et
wormhole.addEventListener('click', restoreOrbit);

// Tema Değiştirici
function setTheme(themeName) {
    // Eğer ışık açıksa temayı değiştirirken ışık açık kalsın
    const isLightsOn = document.body.classList.contains('lights-on');
    
    // Body sınıflarını sıfırla
    document.body.className = '';
    
    // Işık açıksa geri ekle
    if (isLightsOn) {
        document.body.classList.add('lights-on');
    }
    
    // Seçilen temayı ekle
    if (themeName !== '') {
        document.body.classList.add(themeName);
    }
}