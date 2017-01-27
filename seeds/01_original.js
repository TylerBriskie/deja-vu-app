exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw("DELETE from original; ALTER SEQUENCE originals_id_seq RESTART WITH 13")
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('original').insert({
                    id: 1,
                    title: 'Annie',
                    year: 1982,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMjgwNTAyNV5BMl5BanBnXkFtZTcwMDU3MzMyMQ@@._V1_.jpg"
                }),
                knex('original').insert({
                    id: 2,
                    title: 'The Bad News Bears',
                    year: 1976,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTU1ZjNmNjktNjk4Yy00MzdjLTk0YzktMDRlYTllMjE0N2I0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                }),
                knex('original').insert({
                    id: 3,
                    title: 'Carrie',
                    year: 1976,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2Q3ZmVmZWItZGIzNi00NDNhLThiMTktMTU3MjIzMzRmYWI5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                }),
                knex('original').insert({
                    id: 4,
                    title: 'Dawn of the Dead',
                    year: 1978,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1YTIyNjctYzhlNy00ZmYzLWI2ZWQtMzk4MmQwYzA0NGQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                }),
                knex('original').insert({
                    id: 5,
                    title: 'Freaky Friday',
                    year: 1976,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzlmMjVjZTMtNWZmNC00ZDU3LWFkZmEtOTRkMWJhYTc3OTUyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,640,1000_AL_.jpg"
                }),
                knex('original').insert({
                    id: 6,
                    title: 'The Italian Job',
                    year: 1969,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BYzZjMWVlZGYtMmVkOC00NWY1LTg3MjEtZWRlM2RmMDE3ZmRhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
                }),
                knex('original').insert({
                    id: 7,
                    title: 'King Kong',
                    year: 1933,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BODM0MTEyMjQxOF5BMl5BanBnXkFtZTgwNzYwNTk1MjE@._V1._CR8.883331298828125,6.5333404541015625,344,488_.jpg"
                }),
                knex('original').insert({
                    id: 8,
                    title: '21 Jump Street',
                    year: 1987,
                    type: 'TV',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExODMxNzMxMl5BMl5BanBnXkFtZTcwOTYxNDQzMQ@@._V1_.jpg"
                }),
                knex('original').insert({
                    id: 9,
                    title: 'Hercules',
                    year: 1998,
                    type: 'TV',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BYmQxOTZkN2QtYjg4ZS00MWFlLWEwZDMtODMyZjZmZTI4ZTVhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUwNzU0Njk@._V1_SY1000_SX1000_AL_.jpg"
                }),
                knex('original').insert({
                    id: 10,
                    title: 'Dragnet',
                    year: 1951,
                    type: 'TV',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNzgwNTQ2Nl5BMl5BanBnXkFtZTYwMzAwNDQ2._V1_.jpg"
                }),
                knex('original').insert({
                    id: 11,
                    title: 'RoboCop',
                    year: 1987,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BZWVlYzU2ZjQtZmNkMi00OTc3LTkwZmYtZDVjNmY4OWFmZGJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,644,1000_AL_.jpg"
                }),
                knex('original').insert({
                    id: 12,
                    title: 'Point Break',
                    year: 1991,
                    type: 'Film',
                    image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNWVjZWFmYjItZGJlOC00YTllLWE4YjctMWY2ZTg5ZjE0MDIyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX675_AL_.jpg"
                })
            ]);
        });
};
