
exports.seed = function(knex, Promise) {
  return knex('User_Resources').del()
  .then(function(){
  return knex('Adoptions').del();
}).then(function(){
  return knex('Resources').del();
}).then(function(){
  return knex('Resource_Rarity').del();
}).then(function(){
  return knex('Pets').del();
}).then(function(){
  return knex('Pet_Colors').del();
}).then(function(){
  return knex('Users').del();
}).then(function(){
  return knex.raw('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;');
}).then(function(){
  return knex.raw('ALTER SEQUENCE "Pets_id_seq" RESTART WITH 1;');
}).then(function(){
  return knex.raw('ALTER SEQUENCE "Resources_id_seq" RESTART WITH 1;');
}).then(function(){
    return Promise.all([
    knex('Users').insert({
      // id: 1,
      User_Name: 'JDrill',
      Email: 'JJDrill@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      // id: 2,
      User_Name: 'AshK',
      Email: 'tetrapteryxgames@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      // id: 3,
      User_Name: 'DavidS',
      Email: 'DavidS@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      // id: 4,
      User_Name: 'JonC',
      Email: 'JonC@gmail.com',
      DOB: '1995/01/01'
    }),
  ]);
}).then(function(){
  return Promise.all([
    knex('Pet_Colors').insert({Color: 'Red'}),
    knex('Pet_Colors').insert({Color: 'Gold'}),
    knex('Pet_Colors').insert({Color: 'Blue'}),
    knex('Pet_Colors').insert({Color: 'Black'}),
    knex('Pet_Colors').insert({Color: 'Yellow'})
  ]);
}).then(function(){
  return Promise.all([
    knex('Pets').insert({
      // id: 1,
      Type: 'Finchet'
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('Resource_Rarity').insert({Rarity: 'Common'}),
    knex('Resource_Rarity').insert({Rarity: 'Rare'}),
    knex('Resource_Rarity').insert({Rarity: 'Epic'})
  ]);
}).then(function(){
  return Promise.all([
    knex('Resources').insert({
      // id: 1,
      Name: 'Corn',
      Value: '2',
      Rarity: 'Common'
    }),
    knex('Resources').insert({
      // id: 2,
      Name: 'Meat',
      Value: '5',
      Rarity: 'Rare'
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('Adoptions').insert({
      User_Id: 1,
      Pet_Id: 1,
      Color: 'Red',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('Adoptions').insert({
      User_Id: 2,
      Pet_Id: 1,
      Color: 'Gold',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('Adoptions').insert({
      User_Id: 3,
      Pet_Id: 1,
      Color: 'Blue',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('Adoptions').insert({
      User_Id: 4,
      Pet_Id: 1,
      Color: 'Black',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
  ]);
}).then(function(){
  return Promise.all([
    knex('User_Resources').insert({
      User_Id: 1,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('User_Resources').insert({
      User_Id: 2,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('User_Resources').insert({
      User_Id: 3,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('User_Resources').insert({
      User_Id: 4,
      Resource_Id: 1,
      Quantity: 5
    })
  ]);
});
};
