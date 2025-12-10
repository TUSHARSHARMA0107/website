let progressData = JSON.parse(localStorage.getItem("progressData")) || [];
let badgesUnlocked = [];

document.getElementById("progressForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const entry = {
        date: new Date().toLocaleDateString(),
        weight: value("weight"),
        chest: value("chest"),
        arms: value("arms"),
        waist: value("waist"),
        fat: value("bodyfat"),
        steps: value("steps"),
        workout: value("workout"),
        calories: value("calories"),
        mood: document.getElementById("mood").value,
        notes: document.getElementById("notes").value
    };

    progressData.push(entry);
    localStorage.setItem("progressData", JSON.stringify(progressData));

    unlockBadges(entry);
    renderBadges();
    renderTable();
    renderChart();
});

function value(id) {
    return document.getElementById(id).value || "—";
}

/* -------------------------------
   BADGE SYSTEM 
--------------------------------*/

function unlockBadges(entry) {
    if (entry.steps > 10000 && !badgesUnlocked.includes("10k Steps")) {
        badgesUnlocked.push("10k Steps");
    }

    if (entry.workout > 60 && !badgesUnlocked.includes("1 Hour Workout")) {
        badgesUnlocked.push("1 Hour Workout");
    }

    if (entry.calories > 500 && !badgesUnlocked.includes("500+ Calories Burned")) {
        badgesUnlocked.push("500+ Calories Burned");
    }

    localStorage.setItem("badges", JSON.stringify(badgesUnlocked));
}

function renderBadges() {
    const box = document.getElementById("badgeGrid");
    badgesUnlocked = JSON.parse(localStorage.getItem("badges")) || [];
    box.innerHTML = "";

    badgesUnlocked.forEach(badge => {
        box.innerHTML += <div class="badge">${badge}</div>;
    });
}

renderBadges();

/* -------------------------------
   TABLE 
--------------------------------*/

function renderTable() {
    const table = document.getElementById("progressTable");
    table.innerHTML = "";

    progressData.forEach(entry => {
        table.innerHTML += `
            <tr>
                <td>${entry.date}</td>
                <td>${entry.weight}</td>
                <td>${entry.chest}</td>
                <td>${entry.arms}</td>
                <td>${entry.waist}</td>
                <td>${entry.fat}</td>
                <td>${entry.steps}</td>
                <td>${entry.workout}</td>
                <td>${entry.calories}</td>
                <td>${entry.mood}</td>
                <td>${entry.notes}</td>
            </tr>
        `;
    });
}

renderTable();

/* -------------------------------
   CHART
--------------------------------*/

let chart;

function renderChart() {
    const ctx = document.getElementById("weightChart");

    const labels = progressData.map(e => e.date);
    const weights = progressData.map(e => e.weight);

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [{
                label: "Weight (kg)",
                data: weights,
                borderColor: "#ff8a00",
                backgroundColor: "rgba(255,138,0,0.3)",
                tension: 0.4,
                fill: true
            }]
        },

        options: {
            responsive: true,
            plugins: {
                legend: { labels: { color: "#fff" } }
            },
            scales: {
                x: { ticks: { color: "#fff" } },
                y: { ticks: { color: "#fff" } }
            }
        }
    });
}

renderChart();