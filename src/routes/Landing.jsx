import jsonwebtoken from 'jsonwebtoken';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/landing.css';

export const Landing = () => {
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
            <div className="landing-div">
                {/* <p>
                    Welcome into React Banking App. You are
                    currently on landing page!
                </p>
                <p>Pick one from menu above and continue!</p> */}
                <p>Witaj na stronie React Bankiing App.</p>
                <p>
                    Wybierz opcję z menu powyżej, aby
                    kontynuować
                </p>
            </div>
        </>
    );
};
