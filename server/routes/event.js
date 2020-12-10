const router = require('express').Router();
const formData = require('../models/dataModel');
const {createEventValidation} = require('./validation');
const verify = require('./verifyToken');

//Create new event in database if logged in
router.post('/create', verify, async (req, res) => {
  
  //Validate data first!
  const {error} = createEventValidation(req.body); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Create new instance of mongoose formData model
  const form = new formData({
    title: req.body.title,
    description: req.body.description,
    typeOfDisaster: req.body.typeOfDisaster,
    location: req.body.location,
    date: req.body.date,
    userName: req.body.userName,
    imageId: req.body.imageId
  });

  //Save form in database
  try {
    const savedForm = await form.save();
    res.send({id: savedForm._id});
  } 
  catch(err) {
    res.status(400).send(err);
  }
});

//Read all events from the database
router.get('/read', async (req, res) => {
  const events = await formData.find({});
  console.log(events);
  res.send(events);
});

//Read events from database by userName
router.get('/read/:_userName', verify, async (req, res) => {
  console.log(req.params._userName);
  const events = await formData.find({userName: req.params._userName});
  res.send(events);
});

//Update events in database owned by same user
router.post('/update/:_userName/:_id', verify, async (req, res) => {
  const result = await formData.update({userName: req.params._userName, _id: req.params._id});
  if (result.n > 0 && result.n == result.nModified) {
    res.send(result);
  }
  else {
    res.status(400).send(result);
  }
});

//Delete event from database owned by same user
router.post('/delete/:_userName/:_id', verify, async (req, res) => {
  const result = await formData.deleteOne({userName: req.params._userName, _id: req.params._id});
  res.send(result);
});

module.exports = router;
