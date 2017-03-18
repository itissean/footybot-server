const bookshelf = require('../bookshelf');

/**
 * Schema defined in migrations/LeagueTable
 * @type {Object}
 */
const LeagueTable = bookshelf.Model.extend({
  tableName: 'leagueTables',
});

module.exports = LeagueTable;
