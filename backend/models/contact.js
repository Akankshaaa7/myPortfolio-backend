//File: myportfolio-backend\backend\models\contact.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-02-27

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Contact', contactSchema);
