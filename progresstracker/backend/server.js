const express = require('express');
const path =require('path')
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname ,"../frontend")));
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname ,'../frontend/tracker.html'));
});


// Get all progress records
app.get('/progress', (req, res) => {
    db.query('SELECT * FROM progress', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a new progress entry
app.post('/add-progress', (req, res) => {
    const { date, weight, calories_eaten, calories_burned } = req.body;
    db.query('INSERT INTO progress (date, weight, calories_eaten, calories_burned) VALUES (?, ?, ?, ?)',
        [date, weight, calories_eaten, calories_burned], (err) => {
            if (err) throw err;
            res.send('Progress added');
        }
    );
});

// Delete a specific record
app.delete('/progress/:id', (req, res) => {
    db.query('DELETE FROM progress WHERE id = ?', [req.params.id], (err) => {
        if (err) throw err;
        res.send('Record deleted');
    });
});

// Reset all records
app.delete('/progress', (req, res) => {
    db.query('DELETE FROM progress', (err) => {
        if (err) throw err;
        res.send('All records reset');
    });
});

// Set goal weight and motivation
app.post('/goal', (req, res) => {
    const { goal_weight, motivation } = req.body;
    db.query('INSERT INTO goal (goal_weight, motivation) VALUES (?, ?)', [goal_weight, motivation], (err) => {
        if (err) throw err;
        res.send('Goal added');
    });
});

// Get goal details
app.get('/goal', (req, res) => {
    db.query('SELECT * FROM goal ORDER BY id DESC LIMIT 1', (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)
);