exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    name: 'Clean Office',
                    desc: 'assignments to employees for cleaning office',
                    completed: false,
                },
                {
                    name: 'Do Taxes',
                    desc: 'instructions for completing yearly taxes',
                    completed: false,
                },
                {
                    name: 'Make Pb&J',
                    desc: 'how to make peanut butter and jelly sandwich',
                    completed: false,
                },
            ]);
        });
};
