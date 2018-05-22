
exports.seed = function(knex, Promise) {
  return knex('done').del()
    .then(function () {
      return knex('done').insert([
        {id: 1, title: 'Wash Car', details: '', date: 'Tuesday, May 15th'},
        {id: 2, title: 'Buy Plane Tickets', details: 'Southwest.com', date: 'Wednesday, May 16th'},
        {id: 3, title: 'Call Mom', details: 'After 7pm', date: 'Thursday, May 17th'}
      ])
      .then(() => knex.raw('ALTER SEQUENCE todo_id_seq RESTART WITH 4;'))
    });
};