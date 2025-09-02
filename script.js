// Este archivo puede utilizarse para funcionalidades adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Animación para las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-level');
    
    // Función para animar las barras de habilidades
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Ejecutar la animación cuando el contenido esté cargado
    animateSkillBars();
    
    // Mejorar la accesibilidad del teclado
    const focusableElements = document.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
                e.preventDefault();
            }
        });
    });
});