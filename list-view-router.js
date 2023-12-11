const express = require('express');
const listViewRouter = express.Router();

const { tasksList } = require('./app');



function validateParameters(req, res, next) {
  const { param } = req.query;
  
  if (!param || (param !== 'complete' && param !== 'incomplete')) {
    return res.status(400).json({ error: 'Invalid parameter' });
  }
  
  
  next();
}

listViewRouter.use(validateParameters);

listViewRouter.get('/list-view-complete', (req, res) => {
  try {
    const completedTasks = tasks.filter((task) => task.isCompleted);
    res.json(completedTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

listViewRouter.get('/list-view-incomplete', (req, res) => {
  try {
    const incompleteTasks = tasks.filter((task) => !task.isCompleted);
    res.json(incompleteTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = listViewRouter;