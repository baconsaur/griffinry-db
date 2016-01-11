
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resource_rarity', function(table){
    table.string('Rarity').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resource_rarity');
};
