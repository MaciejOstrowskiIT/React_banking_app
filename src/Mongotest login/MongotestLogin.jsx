import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MongotestLogin() {
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

        if (data) {
            localStorage.setItem('token', data.user);
            alert('Login successful');
            setIsLogged(!isLogged);
            navigate('/main');
        } else {
            alert('Not logged in');
        }
        console.log(data);
    }
    return (
        <div>
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
}

export default MongotestLogin;
