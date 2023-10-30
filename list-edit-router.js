const express = require('express');
const listEditRouter = express.Router();
const tasksList = require('./app.js')

listEditRouter.post('/add', function (req, res) {
  const newTask = {
    id: tasksList.length + 1, 
    isCompleted: false,
    description: req.body.description, 
  };
  tasksList.push(newTask);
  res.status(201).json({ message: `Task "${description}" added.` });
});

listEditRouter.delete('/delete:1', (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const taskIndex = tasksList.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const deletedTask = tasksList.splice(taskIndex, 1)[0];
    res.json(deletedTask);
  } else {
    res.status(404).json({ error: `No task found with id "${id}".` });
    }
  });

  listEditRouter.put('/update:3', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const task = tasksList.find(task => task.id === taskId);
    if (task) {
      task.description = req.body.description;
      task.isCompleted = req.body.isCompleted;
      res.json(task);
    } else {
      res.status(404).json({ error: `No task found with id "${id}".` });
    }
  });
  
  module.exports = listEditRouter;