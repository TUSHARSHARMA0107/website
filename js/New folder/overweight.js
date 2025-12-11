function playVideo(src) {
    const v = document.getElementById("exerciseVideo");
    v.src = src;
    v.play();
}

function playYoga(src) {
    const v = document.getElementById("yogaVideo");
    v.src = src;
    v.play();
}

function openTab(event, id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active-tab"));
    document.getElementById(id).classList.add("active-tab");

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");
}