import React, { createContext, useState } from 'react';

export const SettingsContext = createContext({
    lightTheme: {
        background: '#eeeeee',
        foreground: '#000000',
        links: '#000000',
    },
    darkTheme: {
        background: '#222222',
        foreground: '#ffffff',
        links: '#ffeedd',
    },
    settingsTheme: '',
    setSettingsTheme: () => {},
});

export const SettingsContextProvider = (props) => {
    const [settingsTheme, setSettingsTheme] = useState('');

    return (
        <SettingsContext.Provider
            value={{
                settingsTheme,
                setSettingsTheme,
            }}>
            {props.children}
        </SettingsContext.Provider>
    );
};
