exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('leagueTables', (table) => {
      table.increments();
      table.integer('compId');
      table.string('caption');
      table.integer('currentMatchday');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('leagueTables'),
  ]);
};
