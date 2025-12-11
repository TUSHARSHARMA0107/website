document.addEventListener("DOMContentLoaded", loadProgress);

/* ---------------- WEIGHT ---------------- */
function updateWeight() {
    let w = document.getElementById("weightInput").value;
    if (!w) return;

    localStorage.setItem("currentWeight", w);

    let history = JSON.parse(localStorage.getItem("weightHistory") || "[]");
    history.unshift(w + " kg — " + new Date().toLocaleDateString());
    localStorage.setItem("weightHistory", JSON.stringify(history));

    loadProgress();
}

function loadWeight() {
    let w = localStorage.getItem("currentWeight") || 0;
    document.getElementById("weightCircle").textContent = w + " kg";

    let history = JSON.parse(localStorage.getItem("weightHistory") || "[]");
    document.getElementById("weightHistory").innerHTML =
        history.map(x => `<li>${x}</li>`).join("");
}

/* ---------------- STEPS ---------------- */
function updateSteps() {
    let steps = document.getElementById("stepsInput").value;
    localStorage.setItem("steps", steps);
    loadProgress();
}

function loadSteps() {
    let steps = localStorage.getItem("steps") || 0;
    let percent = Math.min((steps / 10000) * 440, 440);

    document.getElementById("stepsProgress").style.strokeDashoffset = 440 - percent;
    document.getElementById("stepsText").textContent = steps;
}

/* ---------------- CALORIES ---------------- */
function updateCalories() {
    let cal = document.getElementById("calorieInput").value;
    localStorage.setItem("calories", cal);
    loadProgress();
}

function loadCalories() {
    let cal = localStorage.getItem("calories") || 0;
    let percent = Math.min((cal / 500) * 440, 440);

    document.getElementById("calorieProgress").style.strokeDashoffset = 440 - percent;
    document.getElementById("calorieText").textContent = cal;
}

/* ---------------- LOAD ALL ---------------- */
function loadProgress() {
    loadWeight();
    loadSteps();
    loadCalories();
}
