function calculateBMI() {
    const w = parseFloat(document.getElementById("weight").value);
    const h = parseFloat(document.getElementById("height").value) / 100;

    if (!w || !h) {
        alert("Please enter correct weight & height.");
        return;
    }

    const bmi = (w / (h * h)).toFixed(1);

    document.getElementById("bmi-result").innerHTML = `<h2>Your BMI: ${bmi}</h2>`;

    let suggestion = "";
    let redirectPage = "";

    if (bmi < 18.5) {
        suggestion = `
            <h3>You are Underweight</h3>
            <p>Recommended: Weight Gain Program</p>
            <button onclick="goToPlan('${'../html/weightgain.html'}')" class="bmi-btn">View Workout Plan →</button>
        `;
        redirectPage = "../html/weightgain.html";
    }

    else if (bmi >= 18.5 && bmi < 24.9) {
        suggestion = `
            <h3>Normal Weight Range</h3>
            <p>Recommended: Balanced Fitness Program</p>
            <button onclick="goToPlan('${'../html/normal weight category.html'}')" class="bmi-btn">View Workout Plan →</button>
        `;
        redirectPage = "../html/normal weight category.html";
    }

    else if (bmi >= 25 && bmi < 29.9) {
        suggestion = `
            <h3>You are Overweight</h3>
            <p>Recommended: Weight Loss + Cardio Training Plan</p>
            <button onclick="goToPlan('${'../html/overweight category.html'}')" class="bmi-btn">View Workout Plan →</button>
        `;
        redirectPage = "../html/overweight category.html";
    }

    else {
        suggestion = `
            <h3>You fall in the Obesity Range</h3>
            <p>Recommended: Strict Obesity Management Program</p>
            <button onclick="goToPlan('${'../html/obesity.html'}')" class="bmi-btn">View Workout Plan →</button>
        `;
        redirectPage = "../html/obesity.html";
    }

    document.getElementById("bmi-suggestion").innerHTML = suggestion;
}

function goToPlan(url) {
    window.location.href = url;
}
