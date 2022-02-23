import { createContext } from 'react';
import React from 'react';

export const UserContext = createContext({
    username: '',
    isLoggedIn: Boolean,
});

export const UserContextProvider = (props) => {
    const value = {
        username: 'test',
        isLoggedIn: true,
    };
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};
