const projects = 'projects';
const resources = 'resources';
const tasks = 'tasks';
const resourceToProjects = `${resources}_to_${projects}`;

exports.up = function(knex) {
    return knex.schema
        .createTable(projects, tbl => {
            tbl.increments('id');
            tbl.string('name')
                .notNullable()
                .unique();
            tbl.string('desc');
            tbl.boolean('completed');
        })

        .createTable(resources, tbl => {
            tbl.increments('id');
            tbl.string('name')
                .notNullable()
                .unique();
            tbl.string('desc');
        })
        .createTable(tasks, tbl => {
            tbl.increments('id');
            tbl.string('desc').notNullable();
            tbl.string('notes');
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable(projects)
                .onDelete('Restrict')
                .onUpdate('Cascade');
            tbl.boolean('completed');
        })
        .createTable(resourceToProjects, tbl => {
            tbl.primary(['project_id', 'resource_id']);
            tbl.integer('project_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable(projects)
                .onDelete('Restrict')
                .onUpdate('Cascade');
            tbl.integer('resource_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable(resources)
                .onDelete('Restrict')
                .onUpdate('Cascade');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists(resourceToProjects)
        .dropTableIfExists(tasks)
        .dropTableIfExists(resources)
        .dropTableIfExists(projects);
};
