import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { Quote } from './components/Quote/Quote';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Landing } from './components/Landing/Landing';
import { Transfers } from './components/Transfers/Transfers';
import { CreditCards } from './components/CreditCards/CreditCards';
import { Help } from './components/Help/Help';
import { Settings } from './components/Settings/Settings';
import { UserProducts } from './components/UserProducts/UserProducts';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="login"
                        element={<Login />}></Route>
                    <Route
                        path="register"
                        element={<Register />}></Route>
                    <Route
                        path="settings"
                        element={<Settings />}></Route>
                    <Route
                        path="help"
                        element={<Help />}></Route>
                    <Route
                        path="cards"
                        element={<CreditCards />}>
                        <Route
                            path="user-products"
                            element={
                                <UserProducts />
                            }></Route>
                    </Route>
                    <Route
                        path="transfers"
                        element={<Transfers />}></Route>
                    <Route
                        path="*"
                        element={<Landing />}></Route>
                    <Route
                        path="main"
                        element={<Quote />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
