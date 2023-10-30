const express = require('express');
const app = express();
const PORT = 3000;
const listEditRouter = require('./list-edit-router.js');
const listViewRouter = require('./list-view-router.js');


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

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

//Esto es todo lo que he podido hacer hasta el momento, sin embargo las rutas de list-edit-router y list-view-router
//no me funcionan como deberian, en postman me sale error y en el navegador, el mensaje de CANNOT GET.
//Te pido que por favor me expliques en los comentarios del entregable, que estoy haciendo mal y como podría 
//mejorar mi código. Gracias!!!