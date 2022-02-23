import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';
import React from 'react';

export const DisplayUser = () => {
    const userContextValue = useContext(UserContext);

    return (
        <div>
            <p>{userContextValue.username}</p>
        </div>
    );
};
