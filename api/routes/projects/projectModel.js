const db = require('../../../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('projects');
}
function findById(id) {
    return db('projects').where({ id });
}
function add() {}
function update() {}
function remove() {}
