document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const dotsContainer = document.querySelector(".slider-dots1");
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = document.querySelector(".slider-container").clientWidth;
        slider.style.transform = `translateX(${-index * slideWidth}px)`;

        // Update active dot
        const dots = document.querySelectorAll(".dot1");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
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
            dot.classList.add("dot1");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    createDots();
    showSlide(currentIndex);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});

document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#skills"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#portfolio"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });