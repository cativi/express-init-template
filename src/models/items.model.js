// items.model.js

const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    id: Number,
    categoryTitle: String,
    organization: String,
    title: String,
    stDate: String,
    endDate: String,
    description: String
});

// Define the static method on the schema
itemSchema.statics.getAll = async function () {
    return await this.find();
}

// Define the model and export it
const Item = model('Item', itemSchema);

module.exports = Item;

