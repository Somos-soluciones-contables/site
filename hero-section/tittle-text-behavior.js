
const words = ["Asesoramiento personalizado. ", "Estrategia y planificación. ", "Crecimiento para tu empresa. ", "Soluciones Contables. "];
let index = 0;
const textElement = document.getElementById("dynamic-text");

function typeEffect(word, callback) {
    let i = 0;
    textElement.innerHTML = "";
    textElement.style.opacity = 1;

    function typeLetter() { 
        if (i === 0) { // Solo cambiar estilo antes de empezar a escribir
            if (word.trim() === "Soluciones Contables.") {
                textElement.style.color = "#2E5790";
                
                // Obtener tamaño actual de la fuente y aumentar un 5%
                let currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
                textElement.style.fontSize = (currentSize * 1.05) + "px";
    
                // Obtener peso actual de la fuente y aumentar un 5%
                let currentWeight = parseFloat(window.getComputedStyle(textElement).fontWeight) || 400; // Por defecto 400 si no tiene peso definido
                textElement.style.fontWeight = Math.min(currentWeight * 1.05, 900); // Máximo 900 para evitar excesos
    
                // Aplicar transición suave
                textElement.style.transition = "all 0.5s ease";
            } else {
                textElement.style.color = "#fab0e3";
                textElement.style.fontSize = ""; // Mantener tamaño original
                textElement.style.fontWeight = ""; // Mantener peso original
            }
        }
    
        if (i < word.length) {
            textElement.innerHTML += word[i];
            i++;
            setTimeout(typeLetter, Math.random() * (60 - 30) + 30);
        } else {
            let waitTime = (word === "Soluciones Contables. ") ? 60000 : 1000;
            setTimeout(() => {
                if (index < words.length - 1) {
                    eraseEffect(callback);
                } else {
                    setTimeout(() => {
                        index = 0;
                        cycleText();
                    }, 2500);
                }
            }, waitTime);
        }
    }
    
    
    typeLetter();
}

function eraseEffect(callback) {
    let word = textElement.innerHTML;
    let i = word.length;
    textElement.style.opacity = 0.8;

    function eraseLetter() {
        if (i > 0) {
            textElement.innerHTML = word.substring(0, --i);
            setTimeout(eraseLetter, Math.random() * (40 - 20) + 20); // Ajuste para borrar más rápido
        } else {
            textElement.style.opacity = 1;
            setTimeout(callback, 300);
        }
    }
    eraseLetter();
}

function cycleText() {
    typeEffect(words[index], () => {
        index++;
        cycleText();
    });
}

cycleText();

