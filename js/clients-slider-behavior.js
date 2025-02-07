document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.getElementById("clients-slide-track");
    const prevButton = document.getElementById("prev-slide-btn");
    const nextButton = document.getElementById("next-slide-btn");
    const slides = document.querySelectorAll(".client-slide");
    const slideWidth = slides[0].offsetWidth + 48; 
    let isTransitioning = false;
    let autoSlideInterval;

    const moveToPrevSlide = () => {
        if (isTransitioning) return;

        isTransitioning = true;

        const lastSlide = sliderTrack.lastElementChild;
        sliderTrack.insertBefore(lastSlide, sliderTrack.firstChild);

        sliderTrack.style.transition = "none";
        sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

        requestAnimationFrame(() => {
            sliderTrack.style.transition = "transform 0.6s ease-in-out";
            sliderTrack.style.transform = "translateX(0)";
        });

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

        sliderTrack.style.transition = "transform 0.6s ease-in-out";
        sliderTrack.style.transform = `translateX(-${slideWidth}px)`;

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
        autoSlideInterval = setInterval(moveToNextSlide, 2000); 
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

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

    startAutoSlide();

    sliderTrack.addEventListener("mouseenter", stopAutoSlide);
    sliderTrack.addEventListener("mouseleave", startAutoSlide);
});
