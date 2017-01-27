
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw("DELETE from remake; ALTER SEQUENCE remake_id_seq RESTART WITH 13")
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('remake').insert({
            id: 1,
            title: 'Annie',
            year: 2014,
            type: 'Film',
            orig_id: 1
        }),
        knex('remake').insert({
            id: 2,
            title: 'The Bad News Bears',
            year: 2005,
            type: 'Film',
            orig_id: 2
        }),
        knex('remake').insert({
            id: 3,
            title: 'Carrie',
            year: 2013,
            type: 'Film',
            orig_id: 3
        }),
        knex('remake').insert({
            id: 4,
            title: 'Dawn of the Dead',
            year: 2004,
            type: 'Film',
            orig_id: 4
        }),
        knex('remake').insert({
            id: 5,
            title: 'Freaky Friday',
            year: 2003,
            type: 'Film',
            orig_id: 5
        }),
        knex('remake').insert({
            id: 6,
            title: 'The Italian Job',
            year: 2003,
            type: 'Film',
            orig_id: 6
        }),
        knex('remake').insert({
            id: 7,
            title: 'King Kong',
            year: 2005,
            type: 'Film',
            orig_id: 7
        }),
        knex('remake').insert({
            id: 8,
            title: '21 Jump Street',
            year: 2012,
            type: 'Film',
            orig_id: 8
        }),
        knex('remake').insert({
            id: 9,
            title: 'Hercules',
            year: 2014,
            type: 'Film',
            orig_id: 9
        }),
        knex('remake').insert({
            id: 10,
            title: 'Dragnet',
            year: 1987,
            type: 'Film',
            orig_id: 10
        }),
        knex('remake').insert({
            id: 11,
            title: 'RoboCop',
            year: 2014,
            type: 'Film',
            orig_id: 11
        }),
        knex('remake').insert({
            id: 12,
            title: 'Point Break',
            year: 2015,
            type: 'Film',
            orig_id: 12
        })
      ]);
    });
};
