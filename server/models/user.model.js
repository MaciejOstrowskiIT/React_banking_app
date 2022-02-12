const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: { type: String, required: true },
        quote: { type: String },
        balance: { type: Number, required: true },
        currency: { type: String, required: true },
    },
    {
        collection: 'user-data',
    }
);

const model = mongoose.model('UserData', User);

module.exports = model;
