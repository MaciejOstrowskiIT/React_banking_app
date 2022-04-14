const mongoose = require('mongoose');

const Transactions = new mongoose.Schema(
    {
        transactionHistory: {
            date: {
                type: Date,
                default: Date.now,
            },
            sender: { type: String, default: 'none' },
            amount: { type: Number, default: 0 },
            recipient: {
                type: String,
                default: 'none',
            },
        },
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
