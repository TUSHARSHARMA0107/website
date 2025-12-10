let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("sliderDots");

function initDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.onclick = () => goToSlide(index);
        dot.id = "dot-" + index;
        dotsContainer.appendChild(dot);
    });
}
initDots();

function updateDots() {
    document.querySelectorAll("#sliderDots span").forEach(dot => dot.classList.remove("active-dot"));
    document.getElementById("dot-" + currentSlide).classList.add("active-dot");
}

function showSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slides[currentSlide].classList.add("active");
    updateDots();
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide();
}

function goToSlide(n) {
    currentSlide = n;
    showSlide();
}

// Auto slide every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Start slider
showSlide();