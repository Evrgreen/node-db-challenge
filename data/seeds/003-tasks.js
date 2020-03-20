exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    project_id: 1,
                    desc: 'Step 1: Sweeping floor',
                    notes: 'Required:Broom',
                    completed: false,
                },
                {
                    project_id: 1,
                    desc: 'Step 2: Vacuum Carpet',
                    notes: 'Required: Vacuum',
                    completed: false,
                },
                {
                    project_id: 1,
                    desc: 'Step 3: Clean Windows',
                    notes: 'Required:Window Cleaner',
                    completed: false,
                },
            ]);
        });
};
