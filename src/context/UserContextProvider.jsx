import { createContext, useState } from 'react';
import React from 'react';
import { Menu } from '../routes/Menu';

export const UserContext = createContext({
    contextUsername: '',
    contextBalance: '',
    contextIsLoggedIn: false,
    contextCurrency: 'PLN',
    setContextIsLoggedIn: () => {},
    setContextBalance: () => {},
    setContextUsername: () => {},
    setContextCurrency: () => {},
});

export const UserContextProvider = (props) => {
    const [contextIsLoggedIn, setContextIsLoggedIn] =
        useState(false);
    const [contextBalance, setContextBalance] =
        useState('');
    const [contextUsername, setContextUsername] =
        useState('');
    const [contextCurrency, setContextCurrency] =
        useState('');

    const clearContext = () => {
        setContextIsLoggedIn(false);
        setContextBalance('');
        setContextUsername('');
        setContextCurrency('');
    };

    return (
        <UserContext.Provider
            value={{
                contextUsername,
                contextBalance,
                contextIsLoggedIn,
                contextCurrency,
                setContextIsLoggedIn,
                setContextBalance,
                setContextUsername,
                setContextCurrency,
            }}>
            {props.children}
            <Menu />
        </UserContext.Provider>
    );
};
