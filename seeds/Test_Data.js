
exports.seed = function(knex, Promise) {
  return knex('user_resources').del()
  .then(function(){
  return knex('adoptions').del();
}).then(function(){
  return knex('resources').del();
}).then(function(){
  return knex('resource_rarity').del();
}).then(function(){
  return knex('pets').del();
}).then(function(){
  return knex('pet_colors').del();
}).then(function(){
  return knex('users').del();
}).then(function(){
  return knex('user_roles').del();
}).then(function(){
  return knex.raw('ALTER SEQUENCE "users_id_seq" RESTART WITH 1;');
}).then(function(){
  return knex.raw('ALTER SEQUENCE "resources_id_seq" RESTART WITH 1;');
}).then(function(){
  return Promise.all([
    knex('user_roles').insert({
      Role: 'Administrator'
    }),
    knex('user_roles').insert({
      Role: 'User'
    })
  ]);
}).then(function(){
    return Promise.all([
    knex('users').insert({
      // id: 1,
      User_Name: 'JDrill',
      Email: 'JJDrill@gmail.com',
      Role: 'Administrator',
      DOB: '1995/01/01'
    }),
    knex('users').insert({
      // id: 2,
      User_Name: 'AshK',
      Email: 'tetrapteryxgames@gmail.com',
      Role: 'Administrator',
      DOB: '1995/01/01'
    }),
    knex('users').insert({
      // id: 3,
      User_Name: 'DavidS',
      Email: 'DavidS@gmail.com',
      Role: 'Administrator',
      DOB: '1995/01/01'
    }),
    knex('users').insert({
      // id: 4,
      User_Name: 'JonC',
      Email: 'JonC@gmail.com',
      Role: 'Administrator',
      DOB: '1995/01/01'
    }),
  ]);
}).then(function(){
  return Promise.all([
    knex('pet_colors').insert({Color: 'Red'}),
    knex('pet_colors').insert({Color: 'Green'}),
    knex('pet_colors').insert({Color: 'Blue'}),
    knex('pet_colors').insert({Color: 'Yellow'})
  ]);
}).then(function(){
  return Promise.all([
    knex('pets').insert({
      Type: 'Finchet'
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('resource_rarity').insert({Rarity: 'Common'}),
    knex('resource_rarity').insert({Rarity: 'Rare'}),
    knex('resource_rarity').insert({Rarity: 'Epic'})
  ]);
}).then(function(){
  return Promise.all([
    knex('resources').insert({
      Name: 'Corn',
      Value: '2',
      Rarity: 'Common'
    }),
    knex('resources').insert({
      Name: 'Meat',
      Value: '5',
      Rarity: 'Rare'
    }),
    knex('resources').insert({
      Name: 'Pizza',
      Value: '8',
      Rarity: 'Epic'
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('adoptions').insert({
      User_Id: 1,
      Pet_Id: 'Finchet',
      Color: 'Red',
      Name: 'Piglet',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('adoptions').insert({
      User_Id: 2,
      Pet_Id: 'Finchet',
      Color: 'Green',
      Name: 'Fluffy',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('adoptions').insert({
      User_Id: 3,
      Pet_Id: 'Finchet',
      Color: 'Blue',
      Name: 'Spot',
      Experience: 0,
      Max_Health: 10,
      Max_Energy: 5,
      Current_Health: 10,
      Current_Energy: 5,
      Last_Updated: '2016/01/01'
    }),
    knex('adoptions').insert({
      User_Id: 4,
      Pet_Id: 'Finchet',
      Color: 'Yellow',
      Name: 'Larry',
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
    knex('user_resources').insert({
      User_Id: 1,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('user_resources').insert({
      User_Id: 2,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('user_resources').insert({
      User_Id: 3,
      Resource_Id: 1,
      Quantity: 5
    }),
    knex('user_resources').insert({
      User_Id: 4,
      Resource_Id: 1,
      Quantity: 5
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('experience_levels').insert({
      Level: 1,
      XP_Needed: 0
    }),
    knex('experience_levels').insert({
      Level: 2,
      XP_Needed: 10
    }),
    knex('experience_levels').insert({
      Level: 3,
      XP_Needed: 20
    }),
    knex('experience_levels').insert({
      Level: 4,
      XP_Needed: 40
    }),
    knex('experience_levels').insert({
      Level: 5,
      XP_Needed: 80
    }),
    knex('experience_levels').insert({
      Level: 6,
      XP_Needed: 160
    }),
    knex('experience_levels').insert({
      Level: 7,
      XP_Needed: 320
    }),
    knex('experience_levels').insert({
      Level: 8,
      XP_Needed: 640
    }),
    knex('experience_levels').insert({
      Level: 9,
      XP_Needed: 1280
    }),
    knex('experience_levels').insert({
      Level: 10,
      XP_Needed: 2560
    })
  ]);
})
};
