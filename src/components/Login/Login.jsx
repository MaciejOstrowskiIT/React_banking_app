import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    let navigate = useNavigate();
    const serverIPAddress = '192.168.1.9';

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch(
            `http://${serverIPAddress}:27017/api/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        const data = await response.json();
        let dataString = JSON.stringify(data).slice(1, 14);

        if (dataString === '"status":"ok"') {
            localStorage.setItem('token', data.user);
            setIsLogged(!isLogged);
            navigate('/main');
            alert('Logged in');
            window.location.reload();
        } else {
            alert('Not logged in');
        }
        console.log(data);
    }
    return (
        <div className="login">
            <h1>Zaloguj się</h1>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />
                <label>Hasło</label>
                <input
                    type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
