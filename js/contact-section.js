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
window.onload = createContactForm;

//Validación del campos del form
document.querySelector("form").addEventListener("submit", function(event) {
    let valid = true;
    const inputs = document.querySelectorAll("input, textarea");
    
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.borderColor = "#fe0419"; 
        } else {
            input.style.borderColor = ""; 
        }
    });

    if (!valid) {
        event.preventDefault();
    }
});