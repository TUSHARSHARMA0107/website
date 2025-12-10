document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");

    nav.innerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <img src="../images/logo.png" class="nav-logo" alt="Logo" />
                <h2 class="brand">Fit<span>N</span>Fine</h2>
            </div>

            <div class="nav-links" id="navLinks">
                <a href="../html/home.html">Home</a>
                <a href="../html/service.html">Services</a>
                <a href="../html/shopping.html">Shop</a>
                <a href="../html/contact.html">Contact</a>
                <a href="../html/login.html" class="login-btn">Login</a>
            </div>

            <div class="hamburger" onclick="toggleMenu()">☰</div>
        </nav>
    `;

    initNavbarScroll();
});

// MOBILE MENU
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("open");
}

// SCROLL EFFECT
function initNavbarScroll() {
    const bar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        bar.classList.toggle("scrolled", window.scrollY > 50);
    });
}
