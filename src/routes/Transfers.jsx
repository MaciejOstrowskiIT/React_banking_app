import jsonwebtoken from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { useNavigate } from 'react-router-dom';

export const Transfers = () => {
    const [transferAmount, setTransferAmount] =
        useState('');
    const [targerUserEmail, setTargetUserEmail] =
        useState('');

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
            <div>
                <p>Przelewy</p>
                <form onSubmit={''}>
                    <input
                        type="text"
                        placeholder="Kwota"
                        value={transferAmount}
                        onChange={(e) => {
                            setTransferAmount(
                                e.target.value
                            );
                        }}
                    />
                    <input
                        type="email"
                        placeholder="E-mail odbiorcy"
                        value={targerUserEmail}
                        onChange={(e) => {
                            setTargetUserEmail(
                                e.target.value
                            );
                        }}
                    />
                    <input type="submit" value="Przelej" />
                </form>
            </div>
        </>
    );
};
