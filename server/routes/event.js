const router = require('express').Router();
const multer = require('multer');
const formData = require('../models/dataModel');
const {createEventValidation} = require('./validation');
const verify = require('./verifyToken');

// Add this function as middleware to routes that handle images
const upload = multer();

//Create new event in database if logged in
router.post('/create', verify, upload.single('image'), async (req, res) => {
  
  //Validate data first!
  console.log(req.body);
  const {buffer, size, mimeType, ...unused} = req.file;
  const image = {buffer, size, mimeType};
  console.log(Object.assign(req.body, image));
  const {error} = createEventValidation(Object.assign(req.body, image)); 
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
    image: image
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
  const events = await formData.find({userName: _userName});
  res.send(events);
});

//Update events in database owned by same user
router.post('/update/:_userName/:__id', verify, async (req, res) => {
  const result = await formData.update({userName: _userName, _id: __id});
  if (result.n > 0 && result.n == result.nModified) {
    res.send(result);
  }
  else {
    res.status(400).send(result);
  }
});

//Delete event from database owned by same user
router.post('/delete/:_userName/:_id', verify, upload.single('image'), async (req, res) => {
  const result = await formData.deleteOne({userName: _userName, _id: __id});
  res.send(result);
});

module.exports = router;
