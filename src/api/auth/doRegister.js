import {
    middlewareServerIPAddress,
    middlewareServerPort,
} from '../apiURLandPORT';

const doRegister = async (
    firstName,
    lastName,
    email,
    password
) => {
    const response = await fetch(
        `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),
        }
    );
    const data = await response.json();
    console.log(data);
};

export default doRegister;
