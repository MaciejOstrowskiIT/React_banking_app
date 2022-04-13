import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { Quote } from './routes/Quote';
// import ProtectedRoutes from './ProtectedRoutes';
import Login from './routes/Login';
import Register from './routes/Register';
import { UserContextProvider } from './context/UserContextProvider';
import { Landing } from './routes/Landing';
import { Transfers } from './routes/Transfers';
import { Cards } from './routes/Cards';
import { Help } from './routes/Help';
import { Settings } from './routes/Settings';
import { UserProducts } from './routes/UserProducts';

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
                    <Route path="cards" element={<Cards />}>
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
                    {/* <Route element={<ProtectedRoutes />}>
                        <Route
                            path="main"
                            element={<Quote />}></Route> */}
                    <Route
                        path="main"
                        element={<Quote />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
