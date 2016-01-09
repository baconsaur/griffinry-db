
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Adoptions', function(table){
    table.increments().primary();
    table.integer('User_Id').notNullable().references('id').inTable('Users');
    table.integer('Pet_Id').notNullable().references('id').inTable('Pets');
    table.string('Color').notNullable().references('Color').inTable('Pet_Colors');
    table.integer('Experience').notNullable();
    table.integer('Max_Health').notNullable();
    table.integer('Max_Energy').notNullable();
    table.integer('Current_Health').notNullable();
    table.integer('Current_Energy').notNullable();
    table.dateTime('Last_Updated').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Adoptions');
};
