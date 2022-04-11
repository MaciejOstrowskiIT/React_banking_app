import jsonwebtoken from 'jsonwebtoken';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';

export const Quote = (props) => {
    const serverIPAddress = '192.168.1.9';

    const [username, setUsername] = useState('');
    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');
    const [balance, setBalance] = useState('');
    const [tempBalance, setTempBalance] = useState('0');
    const [currency, setCurrency] = useState('');
    const [tempEmail, setTempEmail] = useState('');
    const [tempTransferAmount, setTempTransferAmount] =
        useState('');
    let navigate = useNavigate();

    const { setIsLoggedIn } = useContext(UserContext);

    const handleLogin = () => setIsLoggedIn(true);

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

    async function populateUsername() {
        const req = await fetch(
            `http://${serverIPAddress}:27017/api/username`,
            {
                headers: {
                    'x-access-token':
                        localStorage.getItem('token'),
                },
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            setUsername(data.name);
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
                populateUsername();
                handleLogin();
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
        if (isNaN(parseFloat(tempBalance))) {
            setTempBalance('0');
        } else {
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
    }

    async function updateTransfer(event) {
        if (tempTransferAmount > balance) {
            alert('Zbyt niski stan konta');
        } else {
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
                        balance:
                            parseFloat(balance) -
                            parseFloat(tempTransferAmount),
                    }),
                }
            );
            const data = await req.json();
            if (data.status === 'ok') {
                setBalance(
                    parseFloat(balance) -
                        parseFloat(tempTransferAmount)
                );
                alert('ok');
                setTempTransferAmount('');
            } else {
                console.log('data error');
                navigate('/login');
            }
            console.log(data);
        }
    }

    return (
        <>
            <p>Zalogowano jako: {username}</p>
            <h2>Twój status: {quote}</h2>
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    placeholder="Status"
                    value={tempQuote}
                    onChange={(e) =>
                        setTempQuote(e.target.value)
                    }
                />
                <input
                    type="submit"
                    value="Zaktualizuj status"
                />
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
                    defaultValue={0}
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
            <h2>Wykonaj przelew</h2>
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
                <label>Adres e-mail odbiorcy</label>
                <input
                    type="email"
                    placeholder="Adres e-mail odbiorcy"
                    value={tempEmail}
                    onChange={(e) =>
                        setTempEmail(e.target.value)
                    }
                />
                <input type="submit" value="Przelej" />
            </form>
        </>
    );
};
