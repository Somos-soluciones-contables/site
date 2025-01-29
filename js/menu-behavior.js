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
    
    // Remover la clase 'active' si está presente
    toggleMenu.classList.remove('active');
    toggle.classList.remove('active');
}

// Smooth scroll al clickear opciones del menú
// document.querySelectorAll('.navbar a, .footer a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//         deactivateMenu()
//     });
// });

document.querySelectorAll('.navbar a, .footer a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Permitir enlaces externos o aquellos con target="_blank"
        if (this.target === '_blank' || href.startsWith('http') || href === '#') {
            return; // Salir sin bloquear el comportamiento predeterminado
        }

        // Evitar el comportamiento predeterminado solo para anclas internas
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            deactivateMenu();
        }
    });
});
