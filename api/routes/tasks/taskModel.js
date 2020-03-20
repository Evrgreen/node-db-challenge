const db = require('../../../data/db-config');

module.exports = {
    find,
    findById,
    findByProjectId,
    add,
    update,
    remove,
};

function find() {
    return db('tasks');
}
async function findById(id) {
    return db('tasks').where({ id });
}
async function findByProjectId(id){
    
}
async function add(data) {
    const [id] = await db('tasks').insert(data);
    return await findById(id);
}
function update() {}
function remove() {}
