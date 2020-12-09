const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const {registerValidation, loginValidation} = require('./validation');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const verify = require("./verifyToken");

//Register
router.post('/register', async (req, res) => {
  
  //Validate data first!
  console.log(req.body);
  const {error} = registerValidation(req.body); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Check if user already in database
  const emailExists = await User.findOne({email: req.body.email});
  if (emailExists) {
    return res.status(400).send('Email already exists');
  }

  const usernameExists = await User.findOne({userName: req.body.userName});
  if (usernameExists) {
    return res.status(400).send('Username already exists');
  }

  //Hash passwords
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
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
    console.log("User name or passsword wrong");
    return res.status(400).send('Email or password is wrong');
  }
  
  //Check validity of submitted password
  const validPass = await bcryptjs.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Invalid password');
  }

  //Create and assign a json web token to keep user logged in
  const token = jwt.sign({user: user._id}, config.token_secret);
  //res.header('auth-token', token).send(token);

  res.header('auth-token', token);
  res.status(200).json({
    token,
    userName: user.userName
  });
});

//Update user information
router.post('/update/:_userName', verify, async (req, res) => {
  const result = await User.update({userName: _userName}, req.body);
  res.send(result);
});

//Delete user from db
router.post('/delete/:_userName', verify, async (req, res) => {
  const result = await User.deleteOne({userName: _userName});
  res.send(result);
});

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get("/me", verify, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findOne(req.user.email);
    res.json({user: user});
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});



module.exports = router;
