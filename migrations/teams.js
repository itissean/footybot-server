exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('teams', (table) => {
      table.increments();
      table.integer('compId');
      table.integer('teamId');
      table.integer('position');
      table.string('teamName');
      table.integer('playedGames');
      table.integer('points');
      table.integer('goals');
      table.integer('goalsAgainst');
      table.integer('goalDifference');
      table.integer('wins');
      table.integer('draws');
      table.integer('losses');
      table.integer('homeGoals');
      table.integer('homeGoalsAgainst');
      table.integer('homeWins');
      table.integer('homeDraws');
      table.integer('homeLosses');
      table.integer('awayGoals');
      table.integer('awayGoalsAgainst');
      table.integer('awayWins');
      table.integer('awayDraws');
      table.integer('awayLosses');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('teams')
  ]);
};
