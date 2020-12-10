const router = require('express').Router();
const multer = require('multer');
const image = require('../models/image');
const {createImageValidation} = require('./validation');
const verify = require('./verifyToken');

// Add this function as middleware to routes that handle images
const upload = multer();

//Create new image in database if logged in
router.post('/create', upload.single('image'), async (req, res) => {
  
  //Validate data first!
  let {buffer, size, mimeType, ...unused} = req.file;
  const data = {buffer, size, mimeType};
  console.log(data);
  const {error} = createImageValidation(data); 
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  
  //Create new instance of mongoose image model
  const _image = new image(data);

  //Save image in database
  try {
    const savedImage = await _image.save();
    res.send({imageId: savedImage._id});
  } 
  catch(err) {
    res.status(400).send(err);
  }
});

//Read all events from the database
router.get('/read', async (req, res) => {
  const _image = await image.find({_id: req.body.imageId});
  console.log(_image);
  res.send(_image);
});

module.exports = router;
