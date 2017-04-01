const utils = require('./utils');
const update = require('./crud/update');

/**
 * Populates database with resources from football-data
 */
function updateFootballData() {
  utils.requestResource('competitions')
  .then(competition => update.updateCompetition(competition))
  .then(process.exitCode = 0);
}

updateFootballData();
