let currentIndex = 0;
let slideInterval;

// Function to show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll("#image-slider .slides img");
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

// Function to go to the next slide
function nextSlide() {
    const slides = document.querySelectorAll("#image-slider .slides img");
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    const slides = document.querySelectorAll("#image-slider .slides img");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Function to start the automatic sliding
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds
}

// Function to stop the automatic sliding
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Attach event listeners to the buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".next").addEventListener("click", () => {
        stopSlideShow(); // Stop automatic sliding on manual control
        nextSlide();
        startSlideShow(); // Restart automatic sliding
    });

    document.querySelector(".prev").addEventListener("click", () => {
        stopSlideShow(); // Stop automatic sliding on manual control
        prevSlide();
        startSlideShow(); // Restart automatic sliding
    });

    // Start the slideshow when the page loads
    showSlide(currentIndex);
    startSlideShow();
});