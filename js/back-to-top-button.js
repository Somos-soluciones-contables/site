const backToTop = document.getElementById('backToTop');

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
    backToTop.classList.add('show-back-to-top');
} else {
    backToTop.classList.remove('show-back-to-top');
}
});

backToTop.addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
});
