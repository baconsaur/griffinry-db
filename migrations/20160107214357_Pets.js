
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pets', function(table){
    table.string('Type').notNullable().unique().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pets');
};
