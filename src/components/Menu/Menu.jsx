import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './menu.css';

import useContextUpdate from '../../hooks/useContextUpdate';
import { UserContext } from '../../context/UserContextProvider';

export const Menu = () => {
    const [userContextValue] = useContextUpdate();

    return (
        <>
            <div>
                <header className="just-header">
                    <h1 className="app-name-header">
                        React Banking App
                    </h1>
                    <p className="logged-as-paragraph">
                        {userContextValue.contextIsLoggedIn
                            ? `Zalogowano jako: ${userContextValue.contextUsername}`
                            : 'Użytkownik niezalogowany'}
                    </p>
                </header>

                <UserContext.Consumer>
                    {(context) => (
                        <nav
                            className="navbar"
                            style={{
                                borderBottom: 'solid 1px',
                                paddingBottom: '1rem',
                            }}>
                            {!context.contextIsLoggedIn && (
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
                            {!context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
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
                            {context.contextIsLoggedIn && (
                                <NavLink
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem(
                                            'token'
                                        );
                                        // handleLogout();
                                        context.contextIsLoggedIn = false;
                                    }}>
                                    Wyloguj
                                </NavLink>
                            )}
                        </nav>
                    )}
                </UserContext.Consumer>
                <Outlet />
            </div>
        </>
    );
};
