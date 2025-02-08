// Función para activar el toggle menú
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.toggle');
    const toggleMenu = document.querySelector('.toggle-menu');
    toggleMenu.classList.toggle('active');
    toggle.classList.toggle('active'); 
}

function deactivateMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.toggle');
    const toggleMenu = document.querySelector('.toggle-menu');
    
    toggleMenu.classList.remove('active');
    toggle.classList.remove('active');
}
// Función para mover a secciones
document.querySelectorAll('.navbar a, .footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (this.target === '_blank' || href.startsWith('http') || href === '#') {
            return; 
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            deactivateMenu();
        }
    });
});
