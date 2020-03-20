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
async function findById(id) {
    return db('projects').where({ id });
}
async function add(data) {
    const [id] = await db('projects').insert(data);
    return await findById(id);
}
function update() {}
function remove() {}
