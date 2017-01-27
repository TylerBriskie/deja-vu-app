exports.up = function(knex, Promise) {
    return knex.schema.createTable('remake', function(table) {
        table.increments()
        table.text('title').notNullable()
        table.integer('year')
        table.text('type')
        table.integer('orig_id').references('original.id').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('remake')
};
