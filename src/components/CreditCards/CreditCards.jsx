import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CheckToken from '../../functions/CheckToken';
import './creditcards.css';

export const CreditCards = () => {
    CheckToken();

    return (
        <>
            <nav className="cards-nav">
                <NavLink
                    to="user-products"
                    className={(navData) =>
                        navData.isActive
                            ? 'active-link'
                            : ''
                    }>
                    UserProducts
                </NavLink>
                <NavLink
                    to="/main"
                    className={(navData) =>
                        navData.isActive
                            ? 'active-link'
                            : ''
                    }>
                    Strona główna
                </NavLink>
                <NavLink
                    to="/main"
                    className={(navData) =>
                        navData.isActive
                            ? 'active-link'
                            : ''
                    }>
                    Strona główna
                </NavLink>
                <NavLink
                    to="/main"
                    className={(navData) =>
                        navData.isActive
                            ? 'active-link'
                            : ''
                    }>
                    Strona główna
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};
