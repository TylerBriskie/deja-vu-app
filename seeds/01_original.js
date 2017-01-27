exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw("DELETE from original; ALTER SEQUENCE original_id_seq RESTART WITH 13")
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('original').insert({
                    id: 1,
                    title: 'Annie',
                    year: 1982,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 2,
                    title: 'The Bad News Bears',
                    year: 1976,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 3,
                    title: 'Carrie',
                    year: 1976,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 4,
                    title: 'Dawn of the Dead',
                    year: 1978,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 5,
                    title: 'Freaky Friday',
                    year: 1976,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 6,
                    title: 'The Italian Job',
                    year: 1969,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 7,
                    title: 'King Kong',
                    year: 1933,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 8,
                    title: '21 Jump Street',
                    year: 1987,
                    type: 'TV'
                }),
                knex('original').insert({
                    id: 9,
                    title: 'Hercules',
                    year: 1998,
                    type: 'TV'
                }),
                knex('original').insert({
                    id: 10,
                    title: 'Dragnet',
                    year: 1951,
                    type: 'TV'
                }),
                knex('original').insert({
                    id: 11,
                    title: 'RoboCop',
                    year: 1987,
                    type: 'Film'
                }),
                knex('original').insert({
                    id: 12,
                    title: 'Point Break',
                    year: 1991,
                    type: 'Film'
                })
            ]);
        });
};
