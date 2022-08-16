import './apiURLandPORT';
import {
    middlewareServerIPAddress,
    middlewareServerPort,
} from './apiURLandPORT';

export const setPersonalSettings = (setting = 'dark') => {
    (async function setSettingsAPI(event) {
        const response = await fetch(
            `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/setThemeSettings`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token':
                        localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    themeSettings: setting,
                }),
            }
        );
        const data = await response.json();
        data.status === 'ok'
            ? console.log('Updated settings')
            : console.log('data error');
    })();
};
