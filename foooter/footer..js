document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <footer class="pro-footer">
            <div class="footer-glass">
                
                <div class="footer-brand">
                    <img src="../images/logo.png" class="footer-logo" />
                    <h2>Fit N Fine</h2>
                    <p>Your fitness journey starts here.</p>
                </div>

                <div class="footer-links">
                    <h3>Navigate</h3>
                    <a href="../html/home.html">Home</a>
                    <a href="../html/bmi.html">BMI Calculator</a>
                    <a href="../html/service-pro.html">Services</a>
                    <a href="../html/shopping.html">Shop</a>
                    <a href="../html/progress.html">Progress Tracker</a>
                    <a href="../html/contact.html">Contact Us</a>
                </div>

                <div class="footer-social">
                    <h3>Follow Us</h3>
                    <div class="social-row">
                        <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                        <a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
                        <a href="mailto:tushar@gmail.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

            </div>

            <div class="footer-bottom">
                © 2025 Fit N Fine — All Rights Reserved
            </div>
        </footer>
    `;
});