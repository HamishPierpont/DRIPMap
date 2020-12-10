const mongoose = require('mongoose');

const formDataModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    typeOfDisaster: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true,
      	},
        lng: {
            type: Number,
            required: true,
      	}
    },
    date: {
        type: Date,
        required: true
    },
    imageId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('formDataModel', formDataModel);
