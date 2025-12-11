document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("footer");

    footer.innerHTML = `
    <footer class="uni-footer">

        <div class="uf-top">

            <div class="uf-brand reveal">
                <img src="../images/logo.png" alt="Fit N Fine">
                <h2>Fit N Fine</h2>
                <p>Your fitness journey starts here.</p>
            </div>

            <nav class="uf-links reveal">
                <h4>Navigate</h4>
                <a href="../html/home.html">Home</a>
                <a href="../html/bmi.html">BMI Calculator</a>
                <a href="../html/service-pro.html">Services</a>
                <a href="../html/shopping.html">Shop</a>
                <a href="../html/progress.html">Progress Tracker</a>
                <a href="../html/contact.html">Contact Us</a>
                <a href="../html/login.html" class="uf-login">Login</a>
            </nav>

            <div class="uf-search reveal">
                <h4>Search</h4>
                <input type="text" placeholder="Search workouts, diets..." id="footerSearch">
                <button onclick="footerSearch()">Go</button>
            </div>

            <div class="uf-social reveal">
                <h4>Follow Us</h4>
                <div class="social-row">
                    <img src="../images/social/insta.png">
                    <img src="../images/social/facebook.png">
                    <img src="../images/social/twitter.png">
                </div>
            </div>

        </div>

        <div class="uf-bottom">
            © 2025 Fit N Fine — All Rights Reserved
        </div>

        <div class="mobile-mini-nav">
            <a href="../html/home.html">🏠</a>
            <a href="../html/bmi.html">📊</a>
            <a href="../html/service-pro.html">💪</a>
            <a href="../html/shopping.html">🛒</a>
            <a href="../html/contact.html">📞</a>
        </div>

    </footer>
    `;

    initReveal();
});

// Search functionality
function footerSearch(){
    let q = document.getElementById("footerSearch").value.toLowerCase();

    if(q.includes("bmi")) window.location.href="../html/bmi.html";
    else if(q.includes("weight") || q.includes("training"))
        window.location.href="../html/service-pro.html";
    else if(q.includes("shop"))
        window.location.href="../html/shopping.html";
    else alert("No results found!");
}

// scroll reveal animation
function initReveal(){
    const reveals = document.querySelectorAll(".reveal");

    function check(){
        reveals.forEach(el => {
            if(el.getBoundingClientRect().top < window.innerHeight - 60){
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", check);
    check();
}

