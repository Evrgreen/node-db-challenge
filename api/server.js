const express = require('express');

const server = express();
const taskRouter = require('./routes/tasks/taskRouter');
const projectRouter = require('./routes/projects/projectRouter');
const resourceRouter = require('./routes/resources/resourceRouter');
server.use(express.json());
server.use(
    '/api/projects/:id/tasks',
    (req, res, next) => {
        req.projectId = req.params.id;
        next();
    },
    taskRouter,
);
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.get('/', (req, res) => {
    res.status(200).json('Welcome to Project Database');
});

module.exports = server;
