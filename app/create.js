const Competition = require('../models/competition');

/**
 * Create module to populate tables.
 * @module create
 */
const Create = {
  /**
   * @param {Object} competitions
   * @return {Object} competitions
   */
  createCompetition(competitions) {
    return new Promise((resolve, reject) => {
      competitions.forEach((competition) => {
        new Competition({
          compId: competition.id,
          caption: competition.caption,
          league: competition.league,
          year: competition.year,
          currentMatchday: competition.currentMatchday,
          numberOfMatchdays: competition.numberOfMatchdays,
          numberOfTeams: competition.numberOfTeams,
          lastUpdated: competition.lastUpdated,
        })
        .save()
        .then(() => console.log('saved'),
      saved => console.log(saved));
      });
      if (competitions != null && competitions.length > 0) {
        resolve(competitions);
      } else {
        reject(new Error('create failed'));
      }
    });
  },
};

module.exports = Create;
