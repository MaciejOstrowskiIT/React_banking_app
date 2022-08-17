import { createContext, useState } from 'react';
import React from 'react';
import { Menu } from '../components/Menu/Menu';

export const UserContext = createContext({
    contextUsername: '',
    contextUserLastname: '',
    contextBalance: '',
    contextIsLoggedIn: false,
    contextCurrency: 'PLN',
    contextQuote: '',
    contextLastLogin: '',
    contextTheme: '',
    setContextIsLoggedIn: () => {},
    setContextBalance: () => {},
    setContextUsername: () => {},
    setContextUserLastname: () => {},
    setContextCurrency: () => {},
    setContextQuote: () => {},
    setContextLastLogin: () => {},
    setContextTheme: () => {},
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
    const [contextTheme, setContextTheme] = useState('');

    const clearContext = () => {
        setContextIsLoggedIn(false);
        setContextBalance('');
        setContextUsername('');
        setContextCurrency('');
        setContextUserLastname('');
        setContextQuote('');
        setContextLastLogin('');
        setContextTheme('');
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
                contextTheme,
                setContextIsLoggedIn,
                setContextBalance,
                setContextUsername,
                setContextCurrency,
                setContextUserLastname,
                setContextQuote,
                setContextLastLogin,
                setContextTheme,
            }}>
            {props.children}
            <Menu />
        </UserContext.Provider>
    );
};
