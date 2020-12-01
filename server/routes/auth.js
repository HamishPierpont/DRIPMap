const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const {registerValidation} = require('./validation');


router.post('/register', async (req, res) => {
  
  //Validate data first!
  const {error} = registerValidation(req.body); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Check if user already in database
  const emailExists = await User.findOne({email: req.body.email});
  if (emailExists) {
    return res.status(400).send('Email already exists');
  }

  //Hash passwords
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword 
  });

  try {
    const savedUser = await user.save();
    res.send({user: user._id});
  } 
  catch(err) {
    res.status(400).send(err);
  }

});

module.exports = router;
