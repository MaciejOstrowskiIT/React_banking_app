import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonwebtoken from 'jsonwebtoken';

const useCheckToken = () => {
    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = jsonwebtoken.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
            }
        }
    }, []);
};

export default useCheckToken;
