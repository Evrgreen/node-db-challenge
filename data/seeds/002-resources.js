exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { name: 'Broom' },
                { name: 'Glass Cleaner' },
                { name: 'Vacuum' },
                { name: 'Computer', desc: 'Office loaner device #42' },
                {
                    name: 'Accounting Database',
                    desc: 'Request copy from Angela in Accounting',
                },
                { name: 'Peanut Butter', desc: 'Stored in upper shelf' },
                { name: 'Knife' },
                {
                    name: 'Jelly',
                    desc: 'Available options: Strawberry,Apricot,BoisonBerry',
                },
                {
                    name: 'Bread',
                    desc:
                        'Available options: White,Wheat,Sourdough,12 grain Whole Wheat',
                },
            ]);
        });
};
