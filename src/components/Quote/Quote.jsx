import jsonwebtoken from 'jsonwebtoken';
import React, {
    useContext,
    useEffect,
    useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import setQuoteInDB from '../../api/setQuoteInDB';
import { UserContext } from '../../context/UserContextProvider';

export const Quote = () => {
    const userContextValue = useContext(UserContext);

    const serverIPAddress =
        process.env
            .REACT_APP_MIDDLEWARE_SERVER_IP_ADDRESS ||
        '192.168.1.9';
    const serverPort =
        process.env.REACT_APP_MIDDLEWARE_SERVER_PORT ||
        '192.168.1.9';

    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');
    let navigate = useNavigate();

    async function populateQuote() {
        const req = await fetch(
            `http://${serverIPAddress}:${serverPort}/api/quote`,
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

    return (
        <>
            <h2>Twój status: {quote}</h2>
            <form onSubmit={() => setQuoteInDB(tempQuote)}>
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
