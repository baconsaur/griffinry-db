
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet_colors', function(table){
    table.string('Color').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pet_colors');
};
