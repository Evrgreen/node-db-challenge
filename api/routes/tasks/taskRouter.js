const Task = require('./taskModel');
const express = require('express');
const Router = express.Router();

Router.route('/')
    .get(async (req, res) => {
        try {
            const tasks = await Task.find();
            if (tasks.length > 0) {
                res.status(200).json(tasks);
            } else {
                res.status(200).json({
                    message: 'There are currently no tasks to work on',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    })
    .post(ValidateTask, async (req, res) => {
        try {
            const createdTask = await Task.add(req.body);
            res.status(200).json(createdTask);
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    });
Router.route('/:id').get(async (req, res) => {
    const id = req.params.id;
    try {
        const [task] = await Task.findById(id);
        console.log(task);
        task
            ? res.status(200).json(task)
            : res.status(400).send('cannot find a task with that ID');
    } catch (error) {
        res.status(500).json({
            message: `an error occurred while processing that request ${error}`,
        });
    }
});
module.exports = Router;

function ValidateTask(req, res, next) {
    const { desc, project_id, completed } = req.body;
    if (!desc || !project_id) {
        res.status(400).send(
            'A new task requires a description and the ID of a project',
        );
    } else {
        if (!completed) {
            req.body.completed = false;
        }
        next();
    }
}
