import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/login.css';

function Register() {
    const serverIPAddress = '192.168.1.9';

    let navigate = useNavigate();

    const [firstName, setFisrtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(
            `http://${serverIPAddress}:27017/api/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
            }
        );
        const data = await response.json();
        console.log(data);

        if (data.status === 'ok') {
            // window.location.href = '/login';
            alert('User created');
            navigate('/login');
        }
    }
    return (
        <div className="login">
            <h1>Zarejestruj się</h1>
            <label>Email</label>
            <form onSubmit={registerUser}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />
                <label>Imię</label>
                <input
                    type="text"
                    placeholder="Imię"
                    value={firstName}
                    onChange={(e) =>
                        setFisrtName(e.target.value)
                    }
                />
                <label>Nazwisko</label>
                <input
                    type="text"
                    placeholder="Nazwisko"
                    value={lastName}
                    onChange={(e) =>
                        setLastName(e.target.value)
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

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;
