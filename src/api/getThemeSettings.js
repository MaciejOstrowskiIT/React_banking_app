import './apiURLandPORT';
import {
    middlewareServerIPAddress,
    middlewareServerPort,
} from './apiURLandPORT';

export const getThemeSettings = async () => {
    const res = await fetch(
        `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/getThemeSettings`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':
                    localStorage.getItem('token'),
            },
        }
    );
    const data = await res.json();
    data.status === 'ok'
        ? console.log('Theme settings passed', data)
        : console.log('data error');
};
