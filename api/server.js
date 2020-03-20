const express = require('express');

const server = express();
const taskRouter = require('./routes/tasks/taskRouter');
const projectRouter = require('./routes/projects/projectRouter');
server.use(express.json());
server.use('/api/projects/:id/tasks', taskRouter);
server.use('/api/projects', projectRouter);
server.get('/', (req, res) => {
    res.status(200).json('Welcome to Project Database');
});

module.exports = server;
