// Tema Değiştirici
function setTheme(themeName) {
    // Mevcut Light Mode durumunu koru
    const isLightMode = document.body.classList.contains('light-mode');
    
    // Body sınıflarını sıfırla
    document.body.className = '';
    
    // Eğer Light Mode açıksa geri ekle
    if (isLightMode) document.body.classList.add('light-mode');
    
    // Seçilen temayı ekle
    if (themeName !== '') {
        document.body.classList.add(themeName);
    }
}

// Gündüz/Gece Modu Değiştirici
function toggleLightMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    
    // Eğer light mode'a geçildiyse, tema renklerini sıfırla (çünkü açık temada neon renkler kötü durur)
    if (body.classList.contains('light-mode')) {
        body.classList.remove('theme-blue', 'theme-green');
    }
}