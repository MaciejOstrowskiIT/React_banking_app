import { useState } from 'react';
import './BeautifulRegister.css';
import React from 'react';

function BeautifulRegister() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] =
        useState('');

    function doLogin() {
        clearLoginForm();
    }

    function clearLoginForm() {
        setLogin('');
        setPassword('');
        setPasswordConfirmation('');
    }

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="login-div">
                <h3>Zarejestruj się</h3>
                <label htmlFor="login">Email</label>
                <input
                    placeholder="Email"
                    type="email"
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
                <label htmlFor="passwordConfirmation">
                    Potwierdź hasło
                </label>
                <input
                    placeholder="Potwierdź hasło"
                    type="password"
                    onChange={(event) => {
                        setPasswordConfirmation(
                            event.target.value
                        );
                    }}
                    value={passwordConfirmation}
                />
                {/* <input placeholder="Hasło" type="password" value={password} /> */}
                <button
                    className="login-button"
                    onClick={doLogin}>
                    Zarejestruj się!
                </button>
            </div>
        </>
    );
}

export default BeautifulRegister;
