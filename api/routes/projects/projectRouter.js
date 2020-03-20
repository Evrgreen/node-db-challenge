const Project = require('./projectModel');
const express = require('express');
const Router = express.Router();

Router.route('/')
    .get(async (req, res) => {
        try {
            const projects = await Project.find();
            if (projects.length > 0) {
                res.status(200).json(projects);
            } else {
                res.status(200).json({
                    message: 'There are currently no projects to work on',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    })
    .post(ValidateProject, async (req, res) => {
        try {
            const createdProject = await Project.add(req.body);
            res.status(200).json(createdProject);
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    });
Router.route('/:id').get(async (req, res) => {
    const id = req.params.id;
    try {
        const [project] = await Project.findById(id);
        console.log(project);
        project
            ? res.status(200).json(project)
            : res.status(400).send('cannot find a project with that ID');
    } catch (error) {
        res.status(500).json({
            message: `an error occurred while processing that request ${error}`,
        });
    }
});
module.exports = Router;

function ValidateProject(req, res, next) {
    const { name, completed } = req.body;
    if (!name) {
        res.status(400).send('A new project requires a valid name');
    } else {
        if (!completed) {
            req.body.completed = false;
        }
        next();
    }
}
