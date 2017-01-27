
exports.up = function(knex, Promise) {
  return knex.schema.createTable('original', function(table) {
    table.increments()
    table.text('title').notNullable()
    table.integer('year')
    table.text('type')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('original')
};
