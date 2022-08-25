import {
    middlewareServerIPAddress,
    middlewareServerPort,
} from '../apiURLandPORT';

const doLogin = async (email, password) => {
    const response = await fetch(
        `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        }
    );
    const data = await response.json();
    let dataString = JSON.stringify(data).slice(1, 14);

    if (dataString === '"status":"ok"') {
        localStorage.setItem('token', data.user);
        // setIsLogged(!isLogged);
    } else {
        alert('Not logged in');
    }
    console.log(data);
};

export default doLogin;
