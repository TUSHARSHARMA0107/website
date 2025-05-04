const { error } = require("console");
const { response } = require("express");

const API_URL = 'http://localhost:5000';

// Load goal
async function loadGoal() {
    const response = await fetch(`${API_URL}`/goal);
    const goal = await response.json();
    document.getElementById('goal-display').innerText =` Goal:` `${goal.goal_weight}` `kg` - `${goal.motivation}`;
}

// Set goal
async function setGoal() {
    const goalWeight = document.getElementById('goal-weight').value;
    const motivation = document.getElementById('motivation').value;
    await fetch(`${API_URL}`/goal, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal_weight: goalWeight, motivation })
    });
    loadGoal();
}

// Add progress
async function addProgress() {
    const data = {
        date: document.getElementById("date").value,
        weight: document.getElementById("weight").value,
        calories_eaten: document.getElementById("calories-eaten").value,
        calories_burned: document.getElementById("calories-burned").value
    };
   fetch(`${API_URL}`/progress, 
    { method: 'POST',
         headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data) 
        })
  .then(response=>response.json())
  .then(data=>{
    alert("Entry added successfully!");
  })
  .catch(error=>{
    console.error('Error:',error);
  });
}

// Reset progress
async function resetProgress() {
    await fetch(`${API_URL}`/progress, { method: 'DELETE' });
    location.reload();
}

loadGoal();