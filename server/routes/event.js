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
  console.log(Object.assign(req.body, {buffer: req.file.buffer}));
  const {error} = createEventValidation(Object.assign(req.body, {buffer: req.file.buffer})); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Create new instance of mongoose formData model
  const form = new formData({
    title: req.body.title,
    description: req.body.description,
    typeOfDisaster: req.body.typeOfDisaster,
    image: req.file.buffer
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

module.exports = router;
