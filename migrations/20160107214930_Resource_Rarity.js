
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Resource_Rarity', function(table){
    table.string('Rarity').notNullable().primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Resource_Rarity');
};
