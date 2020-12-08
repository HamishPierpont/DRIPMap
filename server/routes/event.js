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
    image: req.body.image
  });

  //Save form in database
  try {
    const savedForm = await form.save();
    res.send({savedForm: user._id});
  } 
  catch(err) {
    res.status(400).send(err);
  }

});

module.exports = router;
