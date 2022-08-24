import jsonwebtoken from 'jsonwebtoken';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from '../../context/SettingsContextProvider';
import '../../api/setThemeSettings';
import { setThemeSettings } from '../../api/setThemeSettings';
import { getThemeSettings } from '../../api/getThemeSettings';
import useCheckToken from '../../hooks/useCheckToken';

export const Settings = () => {
    useCheckToken();
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (token) {
    //         const user = jsonwebtoken.decode(token);
    //         if (!user) {
    //             navigate('/login');
    //         }
    //     } else {
    //         navigate('/login');
    //     }
    // }, []);

    const settingsContextValue =
        useContext(SettingsContext);

    const changeTheme = (value) => {
        switch (value) {
            case 'dark':
                document.body.style.color =
                    settingsContextValue.darkTheme.foreground;
                document.body.style.backgroundColor =
                    settingsContextValue.darkTheme.background;
                break;
            case 'light':
                document.body.style.color =
                    settingsContextValue.lightTheme.foreground;
                document.body.style.backgroundColor =
                    settingsContextValue.lightTheme.background;
                break;
            default:
                break;
        }
        let element = document.querySelector('.navbar');

        element.classList.contains('light') ||
        element.classList.contains('dark')
            ? element.classList.contains('light') &&
              value === 'dark'
                ? element.classList.replace('light', 'dark')
                : element.classList.contains('dark') &&
                  value === 'light'
                ? element.classList.replace('dark', 'light')
                : element.classList.add(`${value}`)
            : element.classList.add(`${value}`);
        setThemeSettings(`${value}`);
    };

    return (
        <>
            <div>
                <p>Strona "Ustawienia"</p>
                <button
                    onClick={() => {
                        changeTheme('dark');
                    }}>
                    Dark
                </button>
                <button
                    onClick={() => {
                        changeTheme('light');
                    }}>
                    Light
                </button>
                <button
                    onClick={() => {
                        getThemeSettings();
                    }}>
                    Get theme
                </button>
            </div>
        </>
    );
};
