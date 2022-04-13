import jsonwebtoken from 'jsonwebtoken';
import React, { useEffect } from 'react';
import {
    NavLink,
    Outlet,
    useNavigate,
} from 'react-router-dom';
import './styles/cards.css';

export const Cards = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = jsonwebtoken.decode(token);
            if (!user) {
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, []);

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
