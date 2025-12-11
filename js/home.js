document.addEventListener("DOMContentLoaded", () => {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let index = 0;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        slides[n].classList.add("active");
        dots[n].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    dots.forEach((dot, i) => {
        dot.onclick = () => {
            index = i;
            showSlide(index);
        };
    });

    setInterval(nextSlide, 3200);
});

