document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bmiForm");
    const resultBox = document.getElementById("bmiResult");

    const bmiValueText = document.getElementById("bmiValue");
    const bmiCategoryText = document.getElementById("bmiCategory");
    const bmiMessageText = document.getElementById("bmiMessage");
    const redirectBtn = document.getElementById("bmiRedirect");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let weight = parseFloat(document.getElementById("weight").value);
        let height = parseFloat(document.getElementById("height").value) / 100;

        let bmi = (weight / (height * height)).toFixed(1);

        bmiValueText.textContent = "Your BMI: " + bmi;

        let category = "";
        let message = "";
        let link = "";

        if (bmi < 18.5) {
            category = "Underweight";
            message = "You need healthy weight gain. Follow a calorie-rich diet & strength training.";
            link = "../html/underweight.html";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal Weight";
            message = "Great job! Maintain your shape with balanced workouts.";
            link = "../html/normalweight.html";
        }
        else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
            message = "You should focus on fat loss & cardio-based workouts.";
            link = "../html/overweight.html";
        }
        else {
            category = "Obese";
            message = "Health risk is higher. Start a controlled diet + low-impact exercises.";
            link = "../html/normalweight.html";
        }

        bmiCategoryText.textContent = "Category: " + category;
        bmiMessageText.textContent = message;

        redirectBtn.href = link;
        redirectBtn.classList.remove("hidden");

        resultBox.classList.remove("hidden");
    });

});
