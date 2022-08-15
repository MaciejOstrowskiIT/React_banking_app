const middlewareServerIPAddress =
    process.env.REACT_APP_MIDDLEWARE_SERVER_IP_ADDRESS ||
    'localhost';
const middlewareServerPort =
    process.env.REACT_APP_MIDDLEWARE_SERVER_PORT || 27017;

export async function updateLastLogin() {
    const req = await fetch(
        `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/setLastLogin`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':
                    localStorage.getItem('token'),
            },
            body: JSON.stringify({
                lastLogin: Date.now(),
            }),
        }
    );
    const data = await req.json();

    if (data.status === 'ok') {
        console.log('Last Login updated successfully');
        // console.log('Last Login updated successfully');
    } else console.log('data error');
}
