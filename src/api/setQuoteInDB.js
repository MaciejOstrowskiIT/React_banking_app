import './apiURLandPORT';
import {
    middlewareServerIPAddress,
    middlewareServerPort,
} from './apiURLandPORT';

const setQuoteInDB = async (quote) => {
    const req = await fetch(
        `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/quote`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':
                    localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote: quote,
            }),
        }
    );
    const data = await req.json();
    if (data.status === 'ok') {
        console.log('quote passed');
    } else {
        console.log('data error');
    }

    return;
};

export default setQuoteInDB;
