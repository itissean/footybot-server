const Competition = require('../models/competition');

const Update = {
  updateCompetition(competitions) {
    return new Promise((resolve, reject) => {
      competitions.forEach((competition) => {
        new Competition({
          compId: competition.id,
        })
        .save({
          caption: competition.caption,
          league: competition.league,
          year: competition.year,
          currentMatchday: competition.currentMatchday,
          numberOfMatchdays: competition.numberOfMatchdays,
          numberOfTeams: competition.numberOfTeams,
          lastUpdated: competition.lastUpdated,
        }, {
          patch: true,
        })
        .then(() => console.log('saved'),
      saved => console.log(saved));
      });
      if (competitions != null && competitions.length > 0) {
        resolve(competitions);
      } else {
        reject(new Error('update failed'));
      }
    });
  },
};

module.exports = Update;
