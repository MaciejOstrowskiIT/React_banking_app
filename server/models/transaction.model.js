const mongoose = require('mongoose');

const Transactions = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now,
        },
        sender: { type: String },
        amount: { type: Number },
        recipient: {
            type: String,
        },
        success: { type: Boolean },
    },
    {
        collection: 'transaction-data',
    }
);

const transactionsModel = mongoose.model(
    'TransacrionData',
    Transactions
);

module.exports = transactionsModel;
