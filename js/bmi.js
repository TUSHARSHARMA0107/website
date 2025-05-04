document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    alert('Please enter valid weight and height values.');
    return;
  }

  const heightM = heightCm / 100; // Convert height to meters
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  const resultText = `Your BMI is ${bmi}`;
  document.getElementById('result').innerText = resultText;

  let suggestion = '';
  let url = '';

  if (bmi < 18.5) {
    suggestion = 'You are underweight. Click below for a recommended workout plan.';
    url = '../html/weight gain category.html';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    suggestion = 'You have a normal weight. Great job! Click below for a maintenance workout plan.';
    url = '../html/normal weight category.html';
  } else if (bmi >= 25 && bmi < 29.9) {
    suggestion = 'You are overweight. Click below for a weight-loss workout plan.';
    url = '../html/overweight category.html';
  } else {
    suggestion = 'You are obese. Click below for an intensive workout plan.';
    url = '../html/obesity category.html';
  }

  document.getElementById('suggestion').innerHTML = `
    <p>${suggestion}</p>
    <button onclick="window.open('${url}', '_blank')">View Workout Plan</button>
  `;
});