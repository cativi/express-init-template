// items.model.js

const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    categoryId: Number,
    categoryTitle: String,
    organization: String,
    orgWebsite: String,
    title: String,
    stDate: String,
    endDate: String,
    description: String
});

// Define the static method on the schema
itemSchema.statics.getAll = async function () {
    try {
        return await this.find();
    } catch (error) {
        console.error('MongoDB query error:', error);
        throw error;
    }
}

// Define the model and export it
const Item = model('Item', itemSchema);

module.exports = Item;

