const mongoose = require('mongoose');

const formDataModel = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String},
    typeOfDisaster: { type: String, required: true },
    image:
        {
            type: Buffer, required: true
        }
});

module.export = mongoose.model('formDataModel', formDataModel);
