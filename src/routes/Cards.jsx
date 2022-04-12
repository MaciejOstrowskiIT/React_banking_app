import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Cards = () => {
    return (
        <>
            <nav>
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
            <div>
                <p>Strona "Karty"</p>
            </div>
        </>
    );
};
