import React, { useContext, useEffect } from 'react';
import {
    NavLink,
    Outlet,
    useNavigate,
} from 'react-router-dom';
import './styles/menu.css';
import {
    UserContext,
    UserContextProvider,
} from '../context/UserContextProvider';
import jsonwebtoken from 'jsonwebtoken';

export const Menu = () => {
    const middlewareServerIPAddress = '192.168.1.9';
    const middlewareServerPort = '27017';

    let navigate = useNavigate();

    const {
        setContextIsLoggedIn,
        setContextBalance,
        setContextUsername,
        setContextUserLastname,
        setContextCurrency,
        setContextQuote,
        setContextLastLogin,
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
            setContextUsername(data.firstName);
            setContextUserLastname(data.lastName);
            setContextBalance(data.balance);
            setContextIsLoggedIn(true);
            setContextCurrency(data.currency);
            setContextQuote(data.quote);
            setContextLastLogin(data.lastLogin);
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
    }, []);

    const handleLogout = () => {
        UserContextProvider.clearContext();
    };

    const userContextValue = useContext(UserContext);
    return (
        <>
            <div>
                <header className="just-header">
                    <h1>React Banking App</h1>
                    <p className="logged-as-paragraph">
                        {userContextValue.contextIsLoggedIn
                            ? `Zalogowano jako: ${userContextValue.contextUsername}`
                            : 'Użytkownik niezalogowany'}
                    </p>
                </header>

                <nav
                    className="navbar"
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}>
                    {!userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/login"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Zaloguj się
                        </NavLink>
                    )}
                    {!userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/register"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Zarejestruj się
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/main"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Strona główna
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/transfers"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Przelewy
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/cards"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Karty
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/help"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Pomoc
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/settings"
                            className={(navData) =>
                                navData.isActive
                                    ? 'active-link'
                                    : ''
                            }>
                            Ustawienia
                        </NavLink>
                    )}
                    {userContextValue.contextIsLoggedIn && (
                        <NavLink
                            to="/"
                            onClick={() => {
                                localStorage.removeItem(
                                    'token'
                                );
                                handleLogout();
                            }}>
                            Wyloguj
                        </NavLink>
                    )}
                </nav>
                <Outlet />
            </div>
        </>
    );
};
