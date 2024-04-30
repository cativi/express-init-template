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

module.exports = model('item', itemSchema);