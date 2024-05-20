// form.js

const Form = require("./../../models/form.model");
const router = require("express").Router();
const nodemailer = require("nodemailer");

// Create a transporter using Gmail account
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "carlostiscarvilches@gmail.com",
        pass: "dwdr naat cfie xwjt",
    },
});

// POST /form
router.post("/", async (req, res) => {
    try {
        // Create a new instance of the Form model
        const form = new Form(req.body);

        // Send the email
        await transporter.sendMail({
            from: "carlostiscarvilches@gmail.com",
            to: "hola@cafeconcarlos.com",
            subject: "Website Contact Form Submission",
            text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        });


        // Call the submitForm method to handle the form submission
        await form.submitForm();

        // Return a success response
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        // Return an error response
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
