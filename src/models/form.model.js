// form.model.js

const { Schema, model } = require('mongoose');

const formSchema = new Schema({
    name: String,
    email: String,
    message: String,
    recaptcha: String
});

// TODO: Define the method on the schema for the Form Submission
formSchema.methods.submitForm = async function () {
    await this.save();
};


// Define the model and export it
const Form = model('Form', formSchema);

module.exports = Form;

