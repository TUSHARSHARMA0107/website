function playVideo(src) {
    const video = document.getElementById("exerciseVideo");
    video.src = src;
    video.play();
}

function playYoga(src) {
    const video = document.getElementById("yogaVideo");
    video.src = src;
    video.play();
}

function openTab(event, id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active-tab"));
    document.getElementById(id).classList.add("active-tab");

    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");
}