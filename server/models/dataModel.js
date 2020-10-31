import mongoose from "mongoose"

const formDataModel = new mongoose.schema({
    title: { type: String, required: true},
    description: { type: String},
    typeOfDisaster: { type: String, required: true },
    image:
    {
        data: Buffer, required: true
    }
});

export default mongoose.model('formDataModel', formDataModel)