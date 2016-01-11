
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_resources', function(table){
    table.integer('User_Id').notNullable().references('id').inTable('users');
    table.integer('Resource_Id').notNullable().references('id').inTable('resources');
    table.integer('Quantity').notNullable();
    table.primary(['User_Id', 'Resource_Id']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_resources');
};
