import { useState } from 'react';
import React from 'react';
import './register.css';
import doRegister from '../../api/auth/doRegister';

function Register() {
    const [firstName, setFisrtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="login">
            <h1>Zarejestruj się</h1>
            <label>Email</label>
            <form
                onSubmit={() => {
                    doRegister(
                        firstName,
                        lastName,
                        email,
                        password
                    )
                        ? alert('user created')
                        : alert('wrong credentials');
                }}>
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

                <input type="submit" value="Zarejestruj" />
            </form>
        </div>
    );
}

export default Register;
