// models/Crop.js
const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    name: { type: String, required: true },
    variety: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    state: { type: String, required: true },
    direct: { type: Boolean, required: true },
    type: { type: String, required: true }, // Add type field
    // Add other crop fields as needed
});

module.exports = mongoose.model('Crop', cropSchema);
