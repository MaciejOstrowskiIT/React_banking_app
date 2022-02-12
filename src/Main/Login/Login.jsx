import { useState } from 'react';
import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function doLogin() {
        clearLoginForm();
    }

    function clearLoginForm() {
        setLogin('');
        setPassword('');
    }

    function toRegisterPage() {}

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="login-div">
                <h3>Zaloguj się</h3>
                <label htmlFor="login">Login</label>
                <input
                    placeholder="Email lub ID"
                    type="text"
                    onChange={(event) =>
                        setLogin(event.target.value)
                    }
                    value={login}
                />
                <label htmlFor="password">Hasło</label>
                <input
                    placeholder="Hasło"
                    type="password"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                />
                {/* <input placeholder="Hasło" type="password" value={password} /> */}
                <button
                    className="login-button"
                    onClick={doLogin}>
                    Zaloguj
                </button>
                <span className="register-span">
                    Nie masz konta?{' '}
                    <Link to="/register">
                        Zarejestruj się
                    </Link>{' '}
                </span>
            </div>
        </>
    );
}

export default Login;
