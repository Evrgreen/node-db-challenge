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
async function findByProjectId(id) {
    console.log(id);
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select(
            'p.name',
            'p.desc as Overview',
            't.id as Step',
            't.desc',
            't.notes',
            't.completed',
        )
        .where({ project_id: id })
        .orderBy('Step');
}
async function add(data) {
    const [id] = await db('tasks').insert(data);
    return await findById(id);
}
async function update(id, changes) {
    await db('tasks')
        .update(changes)
        .where({ id });
    return findById(id);
}
function remove() {}
