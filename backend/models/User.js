// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone: { type: String, required: true },
    name: { type: String, required: true }
    // Add other user fields as needed
});

module.exports = mongoose.model('User', userSchema);
