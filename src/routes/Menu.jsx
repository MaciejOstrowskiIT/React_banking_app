import React, { useContext, useState } from 'react';
import {
    Link,
    Outlet,
    useNavigate,
} from 'react-router-dom';
import './styles/menu.css';
import { UserContext } from '../context/UserContextProvider';

export const Menu = () => {
    const { setIsLoggedIn } = useContext(UserContext);

    const handleLogout = () => setIsLoggedIn(false);
    const userContextValue = useContext(UserContext);
    return (
        <>
            <div>
                <header className="just-header"></header>

                <h1>React Banking App</h1>
                <nav
                    className="navbar"
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}>
                    {!userContextValue.isLoggedIn && (
                        <Link to="/login">Zaloguj się</Link>
                    )}
                    {!userContextValue.isLoggedIn && (
                        <Link to="/register">
                            Zarejestruj się
                        </Link>
                    )}
                    {userContextValue.isLoggedIn && (
                        <Link to="/main">
                            Strona główna
                        </Link>
                    )}
                    {userContextValue.isLoggedIn && (
                        <Link
                            to="/"
                            onClick={() => {
                                localStorage.removeItem(
                                    'token'
                                );
                                handleLogout();
                            }}>
                            Wyloguj
                        </Link>
                    )}
                </nav>
                <p></p>
                {/* <button
                className="logout-button"
                onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/');
                    handleLogout();
                }}>
                Wyloguj
            </button> */}
                <Outlet />
                {/* do zrobienia: passport, cookies serwerowe zamiast localstorage, usecontext dla username itp itd */}
            </div>
        </>
    );
};
