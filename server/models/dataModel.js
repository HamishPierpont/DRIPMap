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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    image: {
        buffer: {
            type: Buffer,
            required: true
        },
        size: {
            type: Number,
            required: true
	},
        mimeType: {
            type: String
	}
    }
});

module.exports = mongoose.model('formDataModel', formDataModel);
