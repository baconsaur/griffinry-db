
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Pet_Colors', function(table){
    table.string('Color').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Pet_Colors');
};
