document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <footer class="footer-light">
            <div class="footer-container">

                <div class="footer-brand">
                    <img src="../foooter/logo.jpg" class="footer-logo" />
                    <h2>Fit N Fine</h2>
                    <p>Your fitness journey starts here.</p>
                </div>

                <div class="footer-links">
                    <h3>Navigate</h3>
                    <a href="../html/home.html">Home</a>
                    <a href="../html/bmi.html">BMI Calculator</a>
                    <a href="../html/service.html">Services</a>
                    <a href="../html/shopping.html">Shop</a>
                    <a href="../html/progresstracker.html">Progress Tracker</a>
                    <a href="../html/contact us.html">Contact Us</a>
                </div>

                <div class="footer-social">
                    <h3>Follow Us</h3>
                    <div class="social-row">
                        <a href="../images/footer image/service/i1.jpg"><i class="fab fa-instagram"></i></a>
                        <a href="../images/footer image/service/i2.jpg"><i class="fab fa-twitter"></i></a>
                        <a href="../images/footer image/service/i3.jpg"><i class="fab fa-facebook"></i></a>
                        <a href="mailto:fitnfine@gmail.com"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

            </div>

            <div class="footer-bottom">
                © 2025 Fit N Fine — All Rights Reserved
            </div>
        </footer>
    `;
});
