exports.up = function(knex, Promise) {
  return knex.schema.createTable('done', table => {
    table.increments('id').primary()
    table.text('title')
    table.text('details')
    table.text('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('done')
};