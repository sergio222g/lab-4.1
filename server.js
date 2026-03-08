const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [
    { name: "Опанувати JavaScript", done: false },
    { name: "Опанувати Node.js", done: false },
    { name: "Опанувати HTML та CSS", done: true },
    { name: "Опанувати Git та GitHub", done: true }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push({ name: task, done: false });
    res.redirect('/');
});

app.post('/done', (req, res) => {
    const index = req.body.index;
    tasks[index].done = true;
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});