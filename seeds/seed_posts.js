
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: "title1", body: 'rowValue1'},
        {title: "title2", body: 'rowValue2'},
      ]);
    });
};
