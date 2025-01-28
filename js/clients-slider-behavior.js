// document.addEventListener("DOMContentLoaded", function () {
// const sliderTrack = document.getElementById("custom-slide-track");
// const prevButton = document.getElementById("prev-slide-btn");
// const nextButton = document.getElementById("next-slide-btn");
// const slideWidth = 150 + 48; 
// let isTransitioning = false;


// const moveToPrevSlide = () => {
//     if (isTransitioning) return;

//     isTransitioning = true;

   
//     const lastSlide = sliderTrack.lastElementChild;
//     sliderTrack.insertBefore(lastSlide, sliderTrack.firstChild);

    
//     sliderTrack.style.transition = "none";
//     sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

    
//     requestAnimationFrame(() => {
//         sliderTrack.style.transition = "transform 0.6s ease-in-out";
//         sliderTrack.style.transform = "translateX(0)";
//     });

//     sliderTrack.addEventListener(
//         "transitionend",
//         () => {
//             isTransitioning = false;
//         },
//         { once: true }
//     );
// };


// const moveToNextSlide = () => {
//     if (isTransitioning) return;

//     isTransitioning = true;

//     sliderTrack.style.transition = "transform 0.6s ease-in-out";
//     sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

//     sliderTrack.addEventListener(
//         "transitionend",
//         () => {
//             sliderTrack.style.transition = "none";
//             sliderTrack.style.transform = "translateX(0)";
//             const firstSlide = sliderTrack.firstElementChild;
//             sliderTrack.appendChild(firstSlide);

//             isTransitioning = false;
//         },
//         { once: true }
//     );
// };


// prevButton.addEventListener("click", moveToPrevSlide);
// nextButton.addEventListener("click", moveToNextSlide);
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const sliderTrack = document.getElementById("custom-slide-track");
//     const prevButton = document.getElementById("prev-slide-btn");
//     const nextButton = document.getElementById("next-slide-btn");
//     const slideWidth = 150 + 48; // Ancho de la imagen + gap
//     let isTransitioning = false;

//     const moveToPrevSlide = () => {
//         if (isTransitioning) return;

//         isTransitioning = true;

//         const lastSlide = sliderTrack.lastElementChild;
//         sliderTrack.insertBefore(lastSlide, sliderTrack.firstChild);

//         sliderTrack.style.transition = "none";
//         sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

//         requestAnimationFrame(() => {
//             sliderTrack.style.transition = "transform 0.6s ease-in-out";
//             sliderTrack.style.transform = "translateX(0)";
//         });

//         sliderTrack.addEventListener(
//             "transitionend",
//             () => {
//                 isTransitioning = false;
//             },
//             { once: true }
//         );
//     };

//     const moveToNextSlide = () => {
//         if (isTransitioning) return;

//         isTransitioning = true;

//         sliderTrack.style.transition = "transform 0.6s ease-in-out";
//         sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

//         sliderTrack.addEventListener(
//             "transitionend",
//             () => {
//                 sliderTrack.style.transition = "none";
//                 sliderTrack.style.transform = "translateX(0)";
//                 const firstSlide = sliderTrack.firstElementChild;
//                 sliderTrack.appendChild(firstSlide);

//                 isTransitioning = false;
//             },
//             { once: true }
//         );
//     };

//     prevButton.addEventListener("click", moveToPrevSlide);
//     nextButton.addEventListener("click", moveToNextSlide);
// });


document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.getElementById("custom-slide-track");
    const prevButton = document.getElementById("prev-slide-btn");
    const nextButton = document.getElementById("next-slide-btn");
    const slides = document.querySelectorAll(".custom-slide");
    const slideWidth = slides[0].offsetWidth + 48; // Ancho de la imagen + gap
    let isTransitioning = false;
    let autoSlideInterval;

    const moveToPrevSlide = () => {
        if (isTransitioning) return;

        isTransitioning = true;

        // Mueve el último slide al principio
        const lastSlide = sliderTrack.lastElementChild;
        sliderTrack.insertBefore(lastSlide, sliderTrack.firstChild);

        // Ajusta la posición sin animación
        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

        // Aplica la animación
        requestAnimationFrame(() => {
            sliderTrack.style.transition = "transform 0.6s ease-in-out";
            sliderTrack.style.transform = "translateX(0)";
        });

        // Restablece el estado después de la transición
        sliderTrack.addEventListener(
            "transitionend",
            () => {
                isTransitioning = false;
            },
            { once: true }
        );
    };

    const moveToNextSlide = () => {
        if (isTransitioning) return;

        isTransitioning = true;

        // Aplica la animación
        sliderTrack.style.transition = "transform 0.6s ease-in-out";
        sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

        // Restablece la posición después de la transición
        sliderTrack.addEventListener(
            "transitionend",
            () => {
                sliderTrack.style.transition = "none";
                sliderTrack.style.transform = "translateX(0)";
                const firstSlide = sliderTrack.firstElementChild;
                sliderTrack.appendChild(firstSlide);

                isTransitioning = false;
            },
            { once: true }
        );
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(moveToNextSlide, 2000); // Mueve el slider cada 3 segundos
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Eventos para los botones de navegación
    prevButton.addEventListener("click", () => {
        stopAutoSlide();
        moveToPrevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener("click", () => {
        stopAutoSlide();
        moveToNextSlide();
        startAutoSlide();
    });

    // Iniciar el movimiento automático al cargar la página
    startAutoSlide();

    // Detener el movimiento automático cuando el slider recibe focus
    sliderTrack.addEventListener("mouseenter", stopAutoSlide);
    sliderTrack.addEventListener("mouseleave", startAutoSlide);
});
