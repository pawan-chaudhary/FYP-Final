const Tournament = require('../models/tournament.model');
exports.tournamentController = (req, res) => {
    const { user, tournamentName, startDate, endDate, courtType, organizer, registrationCost, playerNo} = req.body;
    const tournament = new Tournament({
        user,
        tournamentName,
        startDate,
        endDate,
        courtType,
        organizer,
        registrationCost,
        playerNo
      });

      tournament.save((err, notice) => {
        if (err) {
          console.log(err);
        //   console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: notice,
            message: 'Tournament created success'
          });
        }
      });
};
exports.getTournamentController = (req, res) => {
    Tournament.find()
    .then(tournament =>{
        res.json(tournament)
    }).catch(err =>{
        console.log(err)
    })
};