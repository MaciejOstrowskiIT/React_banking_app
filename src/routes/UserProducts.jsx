import jsonwebtoken from 'jsonwebtoken';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const UserProducts = () => {
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
        <div>
            <p>Numer karty:</p>
            <p>Ważność:</p>
        </div>
    );
};
