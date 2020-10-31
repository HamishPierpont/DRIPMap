const mongoose = require('mongoose');

const formDataModel = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String},
    typeOfDisaster: { type: String, required: true }
});

module.exports = mongoose.model('formDataModel', formDataModel);
