document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("success");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        msg.classList.remove("hidden");

        setTimeout(() => {
            msg.classList.add("hidden");
        }, 3000);

        form.reset();
    });

});
