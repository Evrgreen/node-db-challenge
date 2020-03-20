const db = require('../../../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('resources');
}
async function findById(id) {
    return db('resources').where({ id });
}
async function add(data) {
    const [id] = await db('resources').insert(data);
    return await findById(id);
}
function update() {}
function remove() {}