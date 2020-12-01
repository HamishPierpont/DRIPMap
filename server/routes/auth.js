const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const {registerValidation, loginValidation} = require('./validation');

//Register
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

//Login
router.post('/login', async (req, res) => {
  
  //Validate data first!
  const {error} = loginValidation(req.body); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Check if email is associated with user in database
  const user = await User.findOne({email: req.body.email});
  if (!user) {
    return res.status(400).send('Email or password is wrong');
  }
  
  //Check validity of submitted password
  const validPass = await bcryptjs.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Invalid password');
  }

  res.send('Logged in!')
});

module.exports = router;
