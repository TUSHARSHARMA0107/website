const navbar = document.createElement('div');
navbar.id = 'navbar';

navbar.innerHTML = `
    <div id="logo-container">
        <div id="logo"></div>
        <div id="logo-text">FIT <span id="logo-n">N</span> Fine</div>
    </div>
    <div id="menu">
        <a href="../html/home.html "class="menu-item">Home</a>
        <a href="../html/service.html" class="menu-item">Services</a>
        <a href="../progresstracker/frontend/tracker.html" class="menu-item">Progress Tracker</a>
        <a href="../html/contact us.html" class="menu-item">Contact Us</a>
    </div>
    <div id="sign-in-box">
    <a href="../html/signin.html"
        <button id="sign-in-button">Sign In</button>
    </div>
`;

document.body.prepend(navbar);