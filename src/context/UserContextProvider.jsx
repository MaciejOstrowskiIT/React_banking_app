import { createContext, useState } from 'react';
import React from 'react';
import { DisplayUser } from '../routes/DisplayUser';
import { Menu } from '../routes/Menu';

export const UserContext = createContext({
    contextUsername: '',
    setIsLoggedIn: (auth) => {},
});

export const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
            }}>
            {props.children}
            <Menu />
            <DisplayUser />
        </UserContext.Provider>
    );
};
