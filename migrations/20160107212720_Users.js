
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Users', function(table) {
    table.increments().primary();
    table.string('User_Name').notNullable().unique();
    table.string('Email').notNullable().unique();
    table.date('DOB').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Users');
};
