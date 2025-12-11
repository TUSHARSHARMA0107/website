document.addEventListener("DOMContentLoaded", () => {

    const navbar = `
    <nav class="premium-nav">

        <div class="nav-container">

            <!-- Logo Section -->
            <div class="nav-logo" onclick="window.location.href='../html/home.html'">
                <img src="../images/logo.png" alt="Logo">
                <span>Fit N Fine</span>
            </div>

            <!-- Desktop Links -->
            <div class="nav-links">
                <a href="../html/home.html">Home</a>
                <a href="../html/bmi.html">BMI</a>
                <a href="../html/service-pro.html">Services</a>
                <a href="../html/shopping.html">Shop</a>
                <a href="../html/progress.html">Progress</a>
                <a href="../html/contact.html">Contact</a>
                <a href="../html/login.html" class="nav-login">Login</a>
            </div>

            <!-- Hamburger Icon -->
            <div class="nav-ham" onclick="toggleNav()">☰</div>

        </div>

        <!-- Mobile Dropdown -->
        <div class="nav-mobile">
            <a href="../html/home.html">Home</a>
            <a href="../html/bmi.html">BMI</a>
            <a href="../html/service-pro.html">Services</a>
            <a href="../html/shopping.html">Shop</a>
            <a href="../html/progress.html">Progress</a>
            <a href="../html/contact.html">Contact</a>
            <a href="../html/login.html" class="nav-login-mobile">Login</a>
        </div>

    </nav>
    `;

    document.getElementById("navbar").innerHTML = navbar;

});

// Mobile menu toggle
function toggleNav() {
    document.querySelector(".nav-mobile").classList.toggle("active");
}
