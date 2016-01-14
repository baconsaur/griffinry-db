
exports.up = function(knex, Promise) {
  return knex.schema.createTable('adoptions', function(table){
    table.increments().primary();
    table.integer('User_Id').notNullable().references('id').inTable('users');
    table.string('Pet_Id').notNullable().references('Type').inTable('pets');
    table.string('Color').notNullable().references('Color').inTable('pet_colors');
    table.string('Name').notNullable();
    table.integer('Experience').notNullable();
    table.integer('Max_Health').notNullable();
    table.integer('Max_Energy').notNullable();
    table.decimal('Current_Health').notNullable();
    table.decimal('Current_Energy').notNullable();
    table.dateTime('Last_Updated').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('adoptions');
};
