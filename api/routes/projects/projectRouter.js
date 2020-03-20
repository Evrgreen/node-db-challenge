const Project = require('./projectModel');
const express = require('express');
const Router = express.Router();

Router.route('/').get(async (req, res) => {
    const projects = await Project.find();
    console.log(projects);
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
