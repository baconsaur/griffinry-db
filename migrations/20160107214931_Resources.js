
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Resources', function(table){
    table.increments().primary();
    table.string('Name').notNullable().unique();
    table.integer('Value').notNullable();
    table.string('Rarity').notNullable().references('Rarity').inTable('Resource_Rarity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Resources');
};
