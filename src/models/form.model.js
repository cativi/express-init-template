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
    // Perform the necessary actions to handle the form submission
    // For example, you can save the form data to the database
    await this.save();
    // You can also perform additional operations like sending emails, etc.
};


// Define the model and export it
const Form = model('Form', formSchema);

module.exports = Form;

