const Resource = require('./resourceModel');
const express = require('express');
const Router = express.Router();

Router.route('/')
    .get(async (req, res) => {
        try {
            const resources = await Resource.find();
            if (resources.length > 0) {
                res.status(200).json(resources);
            } else {
                res.status(200).json({
                    message: 'There are currently no resources to work on',
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    })
    .post(ValidateResources, async (req, res) => {
        try {
            const createdResources = await Resource.add(req.body);
            res.status(200).json(createdResources);
        } catch (error) {
            res.status(500).json({
                message: `an error occurred while processing that request ${error}`,
            });
        }
    });
Router.route('/:id').get(async (req, res) => {
    const id = req.params.id;
    try {
        const [resource] = await Resource.findById(id);
        console.log(resource);
        resource
            ? res.status(200).json(resource)
            : res.status(400).send('cannot find a resources with that ID');
    } catch (error) {
        res.status(500).json({
            message: `an error occurred while processing that request ${error}`,
        });
    }
});
module.exports = Router;

function ValidateResources(req, res, next) {
    const { name, completed } = req.body;
    if (!name) {
        res.status(400).send('A new resource requires a valid name');
    } else {
        next();
    }
}
