
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
      return knex('todo').insert([
        {id: 1, title: 'Give Spot A Bath', details: 'Wag-N-Wash Wed @ Noon'},
        {id: 2, title: 'Get Groceries', details: 'Milk & Eggs'},
        {id: 3, title: 'Pay Phone Bill', details: '$30'}
      ])
      .then(() => knex.raw('ALTER SEQUENCE todo_id_seq RESTART WITH 4;'))
    });
};
