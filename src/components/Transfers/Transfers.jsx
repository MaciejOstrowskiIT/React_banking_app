import React, { useState } from 'react';
import CheckToken from '../../functions/CheckToken';
export const Transfers = () => {
    const middlewareServerIPAddress =
        process.env
            .REACT_APP_MIDDLEWARE_SERVER_IP_ADDRESS ||
        '192.168.1.9';
    const middlewareServerPort =
        process.env.REACT_APP_MIDDLEWARE_SERVER_PORT ||
        '192.168.1.9';
    let date = Date.now();
    const [sender, setSender] = useState('');
    const [amount, setAmount] = useState(1);
    const [recipient, setRecipient] = useState('');
    const [success, setSuccess] = useState(false);

    CheckToken();

    async function registerTransaction(e) {
        e.preventDefault();
        const response = await fetch(
            `http://${middlewareServerIPAddress}:${middlewareServerPort}}/api/transactionRegister`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date,
                    sender,
                    amount,
                    recipient,
                    success,
                }),
            }
        );
        const data = await response.json();
        console.log(data);

        if (data.status === 'ok') {
            console.log('created transaction log');
        }
    }

    return (
        <>
            <div>
                <p>Przelewy</p>
                <form onSubmit={registerTransaction}>
                    <input
                        type="text"
                        placeholder="sender"
                        value={sender}
                        onChange={(e) => {
                            setSender(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        value={recipient}
                        placeholder="recipient"
                        onChange={(e) => {
                            setRecipient(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="success"
                        value={success}
                        onChange={(e) => {
                            setSuccess(e.target.value);
                        }}
                    />
                    <input
                        type="submit"
                        value="Register Transaction"
                    />
                </form>
            </div>
        </>
    );
};
