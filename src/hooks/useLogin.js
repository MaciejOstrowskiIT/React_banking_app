import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let navigate = useNavigate();

useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
        const user = jsonwebtoken.decode(token);
        console.log(user);
        if (!user) {
            localStorage.removeItem('token');
            navigate('/login');
        } else {
            navigate('/main');
        }
    }
}, []);
