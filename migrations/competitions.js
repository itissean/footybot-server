exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('competitions', (table) => {
      table.increments();
      table.integer('compId');
      table.string('caption');
      table.string('league');
      table.string('year');
      table.integer('currentMatchday');
      table.integer('numberOfMatchdays');
      table.integer('numberOfTeams');
      table.string('lastUpdated');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('competitions'),
  ]);
};
