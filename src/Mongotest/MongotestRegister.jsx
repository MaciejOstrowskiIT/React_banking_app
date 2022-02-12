import { useState } from "react"
import React from "react";

function MongotestRegister() {

    const serverIPAddress = '192.168.1.9'

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch(`http://${serverIPAddress}:27017/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await response.json()
        console.log(data);

        if (data.status === 'ok') {
            window.location.href = "/login"
        }
    }
    return (

        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="submit" value="Register" />
            </form>
        </div >
    )

}

export default MongotestRegister