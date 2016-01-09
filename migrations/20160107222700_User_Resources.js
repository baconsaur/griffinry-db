
exports.up = function(knex, Promise) {
  return knex.schema.createTable('User_Resources', function(table){
    table.integer('User_Id').notNullable().references('id').inTable('Users');
    table.integer('Resource_Id').notNullable().references('id').inTable('Resources');
    table.integer('Quantity').notNullable();
    table.primary(['User_Id', 'Resource_Id']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User_Resources');
};
