import React from 'react';
import { SettingsContextProvider } from './context/SettingsContextProvider';
// import './App.css';
import { UserContextProvider } from './context/UserContextProvider';
require('dotenv').config();

function App() {
    return (
        <>
            <UserContextProvider>
                <SettingsContextProvider></SettingsContextProvider>
            </UserContextProvider>

            {/* <Landing /> */}
        </>
    );
}
export default App;
