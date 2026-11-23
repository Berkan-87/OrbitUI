// Tema Değiştirici
function setTheme(themeName) {
    // Body'nin mevcut sınıflarını sıfırla
    document.body.className = '';
    
    // Seçilen temayı ekle
    if (themeName !== '') {
        document.body.classList.add(themeName);
    }
}