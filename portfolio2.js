document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider1");
    const dotsContainer = document.querySelector(".slider-dots2");
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = document.querySelector(".slider-container1").clientWidth;
        slider.style.transform = `translateX(${-index * slideWidth}px)`;

        // Update active dot
        const dots = document.querySelectorAll(".dot2");
        dots.forEach((dot, i) => {
            dot.classList.toggle("activee", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        showSlide(currentIndex);
    }

    function createDots() {
        for (let i = 0; i < slider.children.length; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot2");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    createDots();
    showSlide(currentIndex);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});