

function validatePhoneInput(input) {
    const phonePattern = /^[0-9+-]{1,13}$/; // Permite hasta 13 caracteres: números, + y -
    if (!phonePattern.test(input.value)) {
        input.setCustomValidity("Por favor ingresa un número de teléfono válido.");
    } else {
        input.setCustomValidity("");  // Limpiar cualquier mensaje de error
    }

}

// Función para validar el email
function validateEmail(input) {
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(input.value)) {
    input.setCustomValidity("Por favor ingresa un mail válido.");
} else {
    input.setCustomValidity("");  // Limpiar cualquier mensaje de error
}
}