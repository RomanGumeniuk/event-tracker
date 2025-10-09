const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Say your name'], unique: true, default: "Walter" },
    message: {type: String, required: [true, 'Say something'], default: "Yo"},
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;