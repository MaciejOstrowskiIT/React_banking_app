import jsonwebtoken from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Quote = () => {
    const serverIPAddress = '192.168.1.9';

    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');
    const [balance, setBalance] = useState('');
    const [tempBalance, setTempBalance] = useState('');
    const [currency, setCurrency] = useState('');
    const [tempEmail, setTempEmail] = useState('');
    const [tempTransferAmount, setTempTransferAmount] =
        useState('');
    const [tempAfterTransfer, setTempAfterTransfer] =
        useState('');
    let navigate = useNavigate();

    async function populateQuote() {
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/quote`,
            {
                headers: {
                    'x-access-token':
                        localStorage.getItem('token'),
                },
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setQuote(data.quote);
        } else {
            console.log('data error');
        }
        console.log(data);
    }

    async function populateBalance() {
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/balance`,
            {
                headers: {
                    'x-access-token':
                        localStorage.getItem('token'),
                },
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setBalance(data.balance);
            setCurrency(data.currency);
        } else {
            console.log('data error');
        }
        console.log(data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = jsonwebtoken.decode(token);
            console.log(user);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                populateQuote();
                populateBalance();
            }
        } else {
            navigate('/login');
        }
    }, []);

    async function updateQuote(event) {
        event.preventDefault();
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/quote`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    quote: tempQuote,
                }),
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setQuote(tempQuote);
            setTempQuote('');
        } else {
            console.log('data error');
            navigate('/login');
        }
        console.log(data);
    }
    async function updateBalance(event) {
        event.preventDefault();
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/balance`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    balance: tempBalance,
                }),
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setBalance(tempBalance);
            setTempBalance('');
        } else {
            console.log('data error');
            navigate('/login');
        }
        console.log(data);
    }
    async function updateTransfer(event) {
        event.preventDefault();
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/balance`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    balance: tempBalance,
                }),
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setBalance(tempBalance);
            setTempBalance('');
        } else {
            console.log('data error');
            navigate('/login');
        }
        console.log(data);
    }

    return (
        <>
            <h1>Helloworld Banking System</h1>
            <button
                className="logout-button"
                onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/');
                }}>
                Logout
            </button>
            <h2>Your quote:{quote}</h2>
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    placeholder="Quote"
                    value={tempQuote}
                    onChange={(e) =>
                        setTempQuote(e.target.value)
                    }
                />
                <input type="submit" value="Update quote" />
            </form>
            <h2>
                Stan konta:{' '}
                {parseFloat(balance).toFixed(2) +
                    ' ' +
                    currency}
            </h2>
            <label>Kwota</label>
            <form onSubmit={updateBalance}>
                <input
                    type="text"
                    placeholder="Kwota"
                    value={tempBalance}
                    onChange={(e) =>
                        setTempBalance(e.target.value)
                    }
                />
                <input
                    type="submit"
                    value="Ustaw stan konta"
                />
            </form>
            <label>Kwota</label>
            <form onSubmit={updateTransfer}>
                <input
                    type="text"
                    placeholder="Kwota"
                    value={tempTransferAmount}
                    onChange={(e) =>
                        setTempTransferAmount(
                            e.target.value
                        )
                    }
                />
                <input type="submit" value="Przelej" />
            </form>
        </>
    );
};

export default Quote;
