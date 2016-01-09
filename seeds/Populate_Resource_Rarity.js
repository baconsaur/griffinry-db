
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('Resource_Rarity').del(),

    // Inserts seed entries
    knex('Resource_Rarity').insert({Rarity: 'Common'}),
    knex('Resource_Rarity').insert({Rarity: 'Rare'}),
    knex('Resource_Rarity').insert({Rarity: 'Epic'})
  );
};
