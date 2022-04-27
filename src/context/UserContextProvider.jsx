import { createContext, useState } from 'react';
import React from 'react';
import { Menu } from '../routes/Menu';

export const UserContext = createContext({
    contextUsername: '',
    contextUserLastname: '',
    contextBalance: '',
    contextIsLoggedIn: false,
    contextCurrency: 'PLN',
    contextQuote: '',
    contextLastLogin: '',
    setContextIsLoggedIn: () => {},
    setContextBalance: () => {},
    setContextUsername: () => {},
    setContextUserLastname: () => {},
    setContextCurrency: () => {},
    setContextQuote: () => {},
    setContextLastLogin: () => {},
});

export const UserContextProvider = (props) => {
    const [contextIsLoggedIn, setContextIsLoggedIn] =
        useState(false);
    const [contextBalance, setContextBalance] =
        useState('');
    const [contextUsername, setContextUsername] =
        useState('');
    const [contextUserLastname, setContextUserLastname] =
        useState('');
    const [contextCurrency, setContextCurrency] =
        useState('');
    const [contextQuote, setContextQuote] = useState('');
    const [contextLastLogin, setContextLastLogin] =
        useState('');

    const clearContext = () => {
        setContextIsLoggedIn(false);
        setContextBalance('');
        setContextUsername('');
        setContextCurrency('');
        setContextUserLastname('');
        setContextQuote('');
        setContextLastLogin('');
    };

    return (
        <UserContext.Provider
            value={{
                contextUsername,
                contextBalance,
                contextIsLoggedIn,
                contextCurrency,
                contextUserLastname,
                contextQuote,
                contextLastLogin,
                setContextIsLoggedIn,
                setContextBalance,
                setContextUsername,
                setContextCurrency,
                setContextUserLastname,
                setContextQuote,
                setContextLastLogin,
            }}>
            {props.children}
            <Menu />
        </UserContext.Provider>
    );
};
