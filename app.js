const express = require('express');
const app = express();
const PORT = 3000;

const listaDeTareas = [
    {
        id: 1,
        isCompleted: false,
        description: 'Study HTML',
    },
    {
        id: 2,
        isCompleted: false,
        description: 'Study CSS',
    },
    {
        id: 3,
        isCompleted: false,
        description: 'Study Javascript',
    },
    {
        id: 4,
        isCompleted: false,
        description: 'Study Javascript functions',
    },
    {
        id: 5,
        isCompleted: false,
        description: 'Practice Javascript',
    },
    {
        id: 6,
        isCompleted: false,
        description: 'Play Mimo to practice HTML and CSS',
    },
    {
        id: 7,
        isCompleted: false,
        description: 'Study NodeJs',
    },
    {
        id: 8,
        isCompleted: false,
        description: 'Study Servers with Express',
    },
];

app.get('/tasks', (req, res) => {
    res.json(listaDeTareas);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });