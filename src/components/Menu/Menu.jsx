import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './menu.css';
import useContextUpdate from '../../hooks/useContextUpdate';
import { UserContext } from '../../context/UserContextProvider';
import Header from '../Header/Header';

export const Menu = () => {
    useContextUpdate();

    return (
        <>
            <div>
                <Header />
                <UserContext.Consumer>
                    {(context) => (
                        <>
                            <p className="logged-as-paragraph">
                                {context.contextIsLoggedIn
                                    ? `Zalogowano jako: ${context.contextUsername}`
                                    : 'Użytkownik niezalogowany'}
                            </p>
                            <nav
                                className="navbar"
                                style={{
                                    borderBottom:
                                        'solid 1px',
                                    paddingBottom: '1rem',
                                }}>
                                {!context.contextIsLoggedIn && (
                                    <NavLink
                                        to="/login"
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                        className={(
                                            navData
                                        ) =>
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
                                            context.contextIsLoggedIn = false;
                                            window.location.reload();
                                        }}>
                                        Wyloguj
                                    </NavLink>
                                )}
                            </nav>
                        </>
                    )}
                </UserContext.Consumer>
                <Outlet />
            </div>
        </>
    );
};
