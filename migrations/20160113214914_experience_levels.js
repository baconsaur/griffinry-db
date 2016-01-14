
exports.up = function(knex, Promise) {
  return knex.schema.createTable('experience_levels', function(table){
    table.integer('Level').primary().notNullable().unique();
    table.integer('XP_Needed').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('experience_levels');
};
