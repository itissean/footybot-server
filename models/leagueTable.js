const bookshelf = require('../bookshelf');

const LeagueTable = bookshelf.Model.extend({
  tableName: 'leagueTables',
});

module.exports = LeagueTable;
