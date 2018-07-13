// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
Gold = mongoose.model('Gold');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = {
  reset: (req, res) => {
    var gold = new Gold({ gold: 0 });
    gold.save((err) => {
      if (err) return handleError(err);
      console.log(gold);
      res.json({
        session: gold
      })
    })
  },

  farm: (req, res) => {
    goldFromFarm = getRandomInt(2,6);
    Gold.findById(req.params.id, (err, gold) => {
      if (err) return handleError(err);
      gold.gold += goldFromFarm;
      gold.save((err, updatedGold)=> {
        if (err) return handleError(err);
        console.log(updatedGold);
        res.json({
          updatedSession: updatedGold,
          goldFromFarm: goldFromFarm
        })
      })
    })
  },

  cave: (req, res) => {
    goldFromCave = getRandomInt(5,11);
    Gold.findById(req.params.id, (err, gold) => {
      if (err) return handleError(err);
      gold.gold += goldFromCave;
      gold.save((err, updatedGold)=> {
        if (err) return handleError(err);
        console.log(updatedGold);
        res.json({
          updatedSession: updatedGold,
          goldFromCave: goldFromCave
        })
      })
    })
  },

  house: (req, res) => {
    goldFromHouse = getRandomInt(7,16);
    Gold.findById(req.params.id, (err, gold) => {
      if (err) return handleError(err);
      gold.gold += goldFromHouse;
      gold.save((err, updatedGold)=> {
        if (err) return handleError(err);
        console.log(updatedGold);
        res.json({
          updatedSession: updatedGold,
          goldFromHouse: goldFromHouse
        })
      })
    })
  },

  casino: (req, res) => {
    goldFromCasino = getRandomInt(-100,101);
    Gold.findById(req.params.id, (err, gold) => {
      if (err) return handleError(err);
      gold.gold += goldFromCasino;
      gold.save((err, updatedGold)=> {
        if (err) return handleError(err);
        console.log(updatedGold);
        res.json({
          updatedSession: updatedGold,
          goldFromCasino: goldFromCasino
        })
      })
    })
  },
};
