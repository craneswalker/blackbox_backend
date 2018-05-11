exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', table => {
    table.increments('id').primary()
    table.text('title')
    table.text('details')
    table.text('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todo')
};