const mongoose = require('mongoose');

const imageModel = new mongoose.Schema({
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
});

module.exports = mongoose.model('imageModel', imageModel);
