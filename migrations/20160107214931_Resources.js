
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', function(table){
    table.increments().primary();
    table.string('Name').notNullable().unique();
    table.integer('Value').notNullable();
    table.string('Rarity').notNullable().references('Rarity').inTable('resource_rarity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
