
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
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDYxOTI4MzNeQTJeQWpwZ15BbWU4MDQ3MDU3NjIx._V1_SX300.jpg",
            orig_id: 1

        }),
        knex('remake').insert({
            id: 2,
            title: 'The Bad News Bears',
            year: 2005,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzMzZDU1MTEtMDMzYy00MDhkLTg5MGMtYjFkNzYyMTc3YmU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            orig_id: 2
        }),
        knex('remake').insert({
            id: 3,
            title: 'Carrie',
            year: 2013,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BODg2MDU2MjYxNl5BMl5BanBnXkFtZTcwMDQ5MzU0OQ@@._V1_.jpg",
            orig_id: 3
        }),
        knex('remake').insert({
            id: 4,
            title: 'Dawn of the Dead',
            year: 2004,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4OTU2NjY5OF5BMl5BanBnXkFtZTYwOTQ2Mzg3._V1_.jpg",
            orig_id: 4
        }),
        knex('remake').insert({
            id: 5,
            title: 'Freaky Friday',
            year: 2003,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
            orig_id: 5
        }),
        knex('remake').insert({
            id: 6,
            title: 'The Italian Job',
            year: 2003,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDYyNzYxNjYtNmYzMC00MTE0LWIwMmYtNTAyZDBjYTIxMTRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
            orig_id: 6
        }),
        knex('remake').insert({
            id: 7,
            title: 'King Kong',
            year: 2005,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
            orig_id: 7
        }),
        knex('remake').insert({
            id: 8,
            title: '21 Jump Street',
            year: 2012,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3NzQ3OTg3NF5BMl5BanBnXkFtZTcwMjk5OTcxNw@@._V1_.jpg",
            orig_id: 8
        }),
        knex('remake').insert({
            id: 9,
            title: 'Hercules',
            year: 2014,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4ODA5MTA4OF5BMl5BanBnXkFtZTgwNjMyODM5MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            orig_id: 9
        }),
        knex('remake').insert({
            id: 10,
            title: 'Dragnet',
            year: 1987,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyOTMzNjk0M15BMl5BanBnXkFtZTcwNzc5MjUyMQ@@._V1_.jpg",
            orig_id: 10
        }),
        knex('remake').insert({
            id: 11,
            title: 'RoboCop',
            year: 2014,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            orig_id: 11
        }),
        knex('remake').insert({
            id: 12,
            title: 'Point Break',
            year: 2015,
            type: 'Film',
            image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNDkzOTAyNV5BMl5BanBnXkFtZTgwNjEyOTY3NjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            orig_id: 12
        })
      ]);
    });
};
