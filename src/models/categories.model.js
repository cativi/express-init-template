// categories.model.js

const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    categoryId: Number,
    categoryTitle: String
});

// Define the static method on the schema
categorySchema.statics.getAll = async function () {
    return await this.find();
}

// Define the model and export it
const Category = model('Category', categorySchema);

module.exports = Category;

