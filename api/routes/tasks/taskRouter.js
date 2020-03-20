const Tasks = require('./taskModel');
const express = require('express');
const Router = express.Router();

Router.route('/').get(async (req, res) => {
    const tasks = await Tasks.find();
    console.log(tasks);
});

module.exports = Router;
