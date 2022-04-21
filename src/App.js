import jsonwebtoken from 'jsonwebtoken';
import React, { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import './App.css';
import {
    UserContext,
    UserContextProvider,
} from './context/UserContextProvider';

function App() {
    const middlewareServerIPAddress = '192.168.1.9';
    const middlewareServerPort = '27017';

    let navigate = useNavigate();

    const {
        setContextBalance,
        setContextCurrency,
        setContextUsername,
        setContextIsLoggedIn,
    } = useContext(UserContext);

    const handleLogin = () => setContextIsLoggedIn(true);

    async function updateContextFromDB() {
        const req = await fetch(
            `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/userdata`,
            {
                method: 'GET',
                headers: {
                    'x-access-token':
                        localStorage.getItem('token'),
                },
            }
        );
        const data = await req.json();
        if (data.status === 'ok') {
            console.log(data);
        } else {
            console.log('Data error');
        }
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
                updateContextFromDB();
                handleLogin();
            }
        }
    });

    return (
        <>
            <UserContextProvider></UserContextProvider>
            {/* <Landing /> */}
        </>
    );
}
export default App;
