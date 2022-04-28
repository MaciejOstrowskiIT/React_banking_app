import jsonwebtoken from 'jsonwebtoken';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';

export const Quote = (props) => {
    const userContextValue = useContext(UserContext);

    const serverIPAddress = '192.168.1.9';

    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');
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
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = jsonwebtoken.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                populateQuote();
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
    }

    return (
        <>
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
                {parseFloat(
                    userContextValue.contextBalance
                ).toFixed(2)}{' '}
                {userContextValue.contextCurrency}
            </h2>
        </>
    );
};
