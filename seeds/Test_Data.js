
exports.seed = function(knex, Promise) {
  return Promise.join(

    // Users Table
    knex('Users').del(),
    knex('Users').insert({
      User_Name: 'JDrill',
      Email: 'JJDrill@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      User_Name: 'AshK',
      Email: 'tetrapteryxgames@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      User_Name: 'DavidS',
      Email: 'DavidS@gmail.com',
      DOB: '1995/01/01'
    }),
    knex('Users').insert({
      User_Name: 'JonC',
      Email: 'JonC@gmail.com',
      DOB: '1995/01/01'
    }),

    // Pets Table
    knex('Pets').del(),
    knex('Pets').insert({
      Type: 'Finchet'
    }),

    // Resources Table
    knex('Resources').del(),
    knex('Resources').insert({
      Name: 'Corn',
      Value: '2',
      Rarity: 'Common'
    }),
    knex('Resources').insert({
      Name: 'Meat',
      Value: '5',
      Rarity: 'Rare'
    }),

    // Adoptions Table
    knex('Adoptions').del(),
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

    // User_Resources Table
    knex('User_Resources').del(),
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
  )
};
