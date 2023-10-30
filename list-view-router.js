const express = require('express');
const listViewRouter = express.Router();
const tasksList = require('./app.js');

listViewRouter.get('/completed-tasks', (req, res) => {
  const completedTasks = tasksList.filter(task => task.isCompleted === true);
  res.json(completedTasks);
  });
  
  listViewRouter.get('/incomplete-tasks', (req, res) => {
    const incompleteTasks = tasksList.filter(task => task.isCompleted === false);
    res.json(incompleteTasks);
  });
  
  module.exports = listViewRouter;