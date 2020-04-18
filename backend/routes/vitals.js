const express = require('express');
const router = express.Router();
const Vital = require('../models/Vital');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;



router.post('/', async (req, res) => {
  const userVital = new Vital({
    userID: req.body.userID,
    weight: req.body.weight,
    pulse: req.body.pulse,
    heartrate: req.body.heartrate
  });
  try{
    console.log(userVital)
    const newVitalEntry = await userVital.save()
    res.send(200).sendStatus(newVitalEntry)

  }catch (err){
    res.json({message: err});
  }
console.log("finished Vitals entry")
res.send(200)

});

router.get('/', async (req, res) => {
  try{
    const user = await Vital.find({'userID': req.body.userID});
    res.json(user);
  }catch(err){
    res.json({message: err});
  }
});



module.exports = router;
