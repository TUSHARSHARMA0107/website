document.addEventListener("DOMContentLoaded", () => {
  const html = `
  <nav class="glass-navbar container">
    <div class="nav-left">
      <a href="../html/home.html" class="brand-wrap">
        <img src="../images/logo.png" class="logo" alt="logo">
        <span class="brand">Fit N Fine</span>
      </a>
    </div>
    <div class="nav-links" id="navLinks">
      <a href="../html/home.html">Home</a>
      <a href="../html/service-pro.html">Services</a>
      <a href="../html/shopping.html">Shop</a>
      <a href="../html/progress.html">Progress</a>
      <a href="../html/contact.html">Contact</a>
    </div>
    <div class="hamburger" id="hamburger">☰</div>
  </nav>
  <div id="mobileMenu" class="mobile-menu">
      <a href="../html/home.html">Home</a>
      <a href="../html/service-pro.html">Services</a>
      <a href="../html/shopping.html">Shop</a>
      <a href="../html/progress.html">Progress</a>
      <a href="../html/contact.html">Contact</a>
  </div>`;
  const container = document.getElementById('navbar');
  if(container) container.innerHTML = html;

  const ham = document.getElementById('hamburger');
  const mobile = document.getElementById('mobileMenu');
  if(ham) ham.addEventListener('click', ()=> mobile.classList.toggle('show'));
});
