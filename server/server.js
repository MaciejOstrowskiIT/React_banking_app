const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 27017;
// const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
const dbo = require('./db/conn');
const User = require('./models/user.model');
const Transaction = require('./models/transaction.model');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});

const uri =
    'mongodb+srv://mern:mongodb@cluster0.3jluroj.mongodb.net/test';
// const uri = "mongodb+srv://mern:mongodb@cytrynowysorbet.udove.mongodb.net/test";
// 'mongodb+srv://mern:mongodb@cluster0.f3hxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(uri);

app.get('/hello', (res) => {
    res.send('hello world');
});

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        const newPassword = await bcrypt.hash(
            req.body.password,
            10
        );
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: newPassword,
        });
        res.json({ status: 'ok' });
    } catch (err) {
        res.json({
            status: 'Something went wrong!',
            error: 'duplicated email',
        });
    }
});
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    });

    if (!user) {
        return res.json({
            status: 'error',
            error: 'invalid login',
        });
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (isPasswordValid) {
        const token = jsonwebtoken.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        );

        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'not ok', user: false });
    }
});
app.get('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({
            status: 'ok',
            quote: user.quote,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.post('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        );
        return res.json({
            status: 'ok',
            quote: user.quote,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.post('/api/setLastLogin', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            { $set: { lastLogin: req.body.lastLogin } }
        );
        return res.json({
            status: 'ok',
            quote: user.lastLogin,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.get('/api/balance', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({
            status: 'ok',
            balance: user.balance,
            currency: user.currency,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.post('/api/balance', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            { $set: { balance: req.body.balance } }
        );
        return res.json({
            status: 'ok',
            balance: user.balance,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.get('/api/username', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({
            status: 'ok',
            name: user.name,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});

app.get('/api/searchUser', async (req, res) => {
    try {
        const email = req.headers['usernameFromInput'];
        console.log(email);
        const user = await User.findOne({ email: email });

        return res.json({
            status: 'ok',
            username: user.email,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});

app.post('/api/searchUser', async (req, res) => {
    const user = await User.findOne({
        email: req.body.searchedUsernameInput,
    });

    if (!user) {
        return res.json({
            status: 'error',
            error: 'invalid login',
        });
    } else {
        return res.json({ status: 'ok', user: user.email });
    }
});

app.post('/api/transactionRegister', async (req, res) => {
    try {
        await Transaction.create({
            date: req.body.date,
            sender: req.body.sender,
            amount: req.body.amount,
            recipient: req.body.recipient,
            success: req.body.success,
        });
        res.json({
            status: 'ok',
            message: 'Created transaction log',
        });
    } catch (err) {
        res.json({
            status: 'Something went wrong!',
            error: 'duplicated transaction',
        });
    }
});

app.post('/api/setThemeSettings', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.updateOne(
            { email: email },
            {
                $set: {
                    settings: {
                        theme: req.body.themeSettings,
                    },
                },
            }
        );
        return res.json({
            status: 'ok',
            callback: user.themeSettings,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
app.get('/api/getThemeSettings', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.findOne({ email: email });
        return res.json({
            status: 'ok',
            theme: user.settings.theme,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});

app.get('/api/userdata', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jsonwebtoken.verify(
            token,
            'secret123'
        );
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({
            status: 'ok',
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            quote: user.quote,
            balance: user.balance,
            currency: user.currency,
            lastLogin: user.lastLogin,
            theme: user.settings.theme,
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 'error',
            error: 'invalid token',
        });
    }
});
