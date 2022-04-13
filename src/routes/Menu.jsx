import React, { useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './styles/menu.css';
import {
    UserContext,
    UserContextProvider,
} from '../context/UserContextProvider';

export const Menu = () => {
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
