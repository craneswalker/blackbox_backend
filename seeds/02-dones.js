
exports.seed = function(knex, Promise) {
  return knex('done').del()
    .then(function () {
      return knex('done').insert([
        {id: 1, title: 'Wash Car', details: ''},
        {id: 2, title: 'Buy Plane Tickets', details: 'Southwest.com'},
        {id: 3, title: 'Call Mom', details: 'After 7pm'}
      ])
      .then(() => knex.raw('ALTER SEQUENCE todo_id_seq RESTART WITH 4;'))
    });
};