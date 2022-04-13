import { createContext, useState } from 'react';
import React from 'react';
import { DisplayUser } from '../routes/DisplayUser';
import { Menu } from '../routes/Menu';

export const UserContext = createContext({
    contextUsername: '',
    contextBalance: '',
    contextIsLoggedIn: false,
    contextCurrency: 'PLN',
    setContextIsLoggedIn: (auth) => {},
    setContextBalance: (auth) => {},
    setContextUsername: (auth) => {},
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
            <DisplayUser />
        </UserContext.Provider>
    );
};
