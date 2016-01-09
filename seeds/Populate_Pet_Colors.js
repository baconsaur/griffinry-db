
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('Pet_Colors').del(),

    // Inserts seed entries
    knex('Pet_Colors').insert({Color: 'Red'}),
    knex('Pet_Colors').insert({Color: 'Gold'}),
    knex('Pet_Colors').insert({Color: 'Blue'}),
    knex('Pet_Colors').insert({Color: 'Black'}),
    knex('Pet_Colors').insert({Color: 'Yellow'})
  );
};
