
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Pets', function(table){
    table.increments().primary();
    table.string('Type').notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Pets');
};
