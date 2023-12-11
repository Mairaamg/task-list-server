const express = require('express');
const taskRouter = express.Router();
const uuid = require('uuid');

const { tasksList } = require('./app');

taskRouter.get('/', (req, res) => {
  res.json(tasksList);
});

taskRouter.get('/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const task = tasksList.find((task) => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

taskRouter.post('/', (req, res) => {
  const { description } = req.body;
  const newTask = {
    id: uuid.v4(),
    isCompleted: false,
    description,
  };
  tasksList.push(newTask);
  res.status(201).json(newTask);
});

taskRouter.put('/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const { description, isCompleted } = req.body;
  const taskToUpdate = tasksList.find((task) => task.id === taskId);

  if (taskToUpdate) {
    taskToUpdate.description = description || taskToUpdate.description;
    taskToUpdate.isCompleted = isCompleted || taskToUpdate.isCompleted;
    res.json(taskToUpdate);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

taskRouter.delete('/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const index = tasksList.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    tasksList.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

module.exports = taskRouter;