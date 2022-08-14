import jsonwebtoken from 'jsonwebtoken';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from '../../context/SettingsContextProvider';

export const Settings = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = jsonwebtoken.decode(token);
            if (!user) {
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }, []);

    const settingsContextValue =
        useContext(SettingsContext);

    const changeThemeToLight = () => {
        document.body.style.color =
            settingsContextValue.lightTheme.foreground;
        document.body.style.backgroundColor =
            settingsContextValue.lightTheme.background;
        settingsContextValue.setSettingsTheme('light');
        let element = document.querySelector('.navbar');
        element.classList.contains('dark')
            ? element.classList.replace('dark', 'light')
            : element.classList.add('light');
    };
    const changeThemeToDark = () => {
        document.body.style.color =
            settingsContextValue.darkTheme.foreground;
        document.body.style.backgroundColor =
            settingsContextValue.darkTheme.background;
        settingsContextValue.setSettingsTheme('dark');
        let element = document.querySelector('.navbar');
        element.classList.contains('light')
            ? element.classList.replace('light', 'dark')
            : element.classList.add('dark');
    };

    return (
        <>
            <div>
                <p>Strona "Ustawienia"</p>
                <button
                    onClick={() => {
                        changeThemeToDark();
                    }}>
                    Dark
                </button>
                <button
                    onClick={() => {
                        changeThemeToLight();
                    }}>
                    Light
                </button>
            </div>
        </>
    );
};
