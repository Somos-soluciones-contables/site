//Efecto blur sobre los input del formulario
function createContactForm() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.classList.remove('filled');
            } else {
                input.classList.add('filled');
            }
        });
        input.dispatchEvent(new Event('blur'));
    });
}
// aplico el efecto al cargar la página
window.onload = createContactForm;