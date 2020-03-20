const db = require('../../../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
    };

    function find() {
        return db('resources');
    }
    function findById(){}
function add(){}
function update(){}
function remove(){}