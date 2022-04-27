const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: { type: String, required: true },
        quote: { type: String },
        balance: {
            type: Number,
            required: true,
            default: 0,
        },
        currency: {
            type: String,
            required: true,
            default: 'PLN',
        },
        lastLogin: { type: Date, default: Date.now },
    },
    {
        collection: 'user-data',
    }
);

const model = mongoose.model('UserData', User);

module.exports = model;
