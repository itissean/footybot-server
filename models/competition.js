const bookshelf = require('../bookshelf');

const Competition = bookshelf.Model.extend({
  tableName: 'competitions',
});

module.exports = Competition;
