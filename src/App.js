import jsonwebtoken from 'jsonwebtoken';
import React, { useContext, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import './App.css';
import {
    UserContext,
    UserContextProvider,
} from './context/UserContextProvider';

function App() {
    return (
        <>
            <UserContextProvider></UserContextProvider>
            {/* <Landing /> */}
        </>
    );
}
export default App;
