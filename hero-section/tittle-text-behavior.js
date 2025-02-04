
const words = ["Asesoramiento personalizado.", "Estrategia y planificación.", "Crecimiento para tu empresa.", "Soluciones Contables."];
let index = 0;
const textElement = document.getElementById("dynamic-text");

function typeEffect(word, callback) {
    let i = 0;
    textElement.innerHTML = "";
    textElement.style.opacity = 1;

    if (word === "Acompañamiento.") {
        textElement.style.color = "#fab0e3";
    } else if (word === "Soluciones Contables.") {
        textElement.style.color = "#2E5790";
        
    } else {
        textElement.style.color = "#fab0e3";
    }

    function typeLetter() {
        if (i < word.length) {
            textElement.innerHTML += word[i];
            i++;
            setTimeout(typeLetter, Math.random() * (60 - 30) + 30); // Ajuste para escribir más rápido
        } else {
            let waitTime = (word === "Soluciones Contables.") ?  60000 : 1000; // Tiempo de espera tras completar la palabra

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

