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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="login"
                        element={<Login />}></Route>
                    <Route
                        path="*"
                        element={<Landing />}></Route>
                    <Route
                        path="register"
                        element={<Register />}></Route>
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
