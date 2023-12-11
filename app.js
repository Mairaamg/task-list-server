const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 3000;

const tasksList = [
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

app.use(bodyParser.json());

const secretKey = process.env.SECRET_KEY || 'default_secret';

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token missing' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    req.user = user;
    next();
  });
}

function showTasks() {
  console.log('Tasks list:');
  tasksList.forEach((task) => {
    console.log(`${task.id}. [${task.isCompleted ? 'X' : ' '}] ${task.description}`);
  });
}

app.get('/tasks', (req, res) => {
  res.json(tasksList);
});

app.get('/show-tasks', (req, res) => {
  showTasks();
  res.send('Task list displayed in the console.');
});


const taskRouter = require('./task-router');
app.use('/api/tasks', authenticateToken, taskRouter);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = {
  tasksList,
  authenticateToken,
};