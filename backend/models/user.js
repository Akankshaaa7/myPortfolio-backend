//File: myportfolio-backend\backend\models\user.js
// Name: Akanksha Gurram
// Student ID: 301453510
// Date: 2025-02-27

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);