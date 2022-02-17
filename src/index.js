import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Register from './Main/Register/Register';
import MongotestLogin from './Mongotest login/MongotestLogin';
import MongotestRegister from './Mongotest/MongotestRegister';
import Quote from './Quote/Quote';
import ProtectedRoutes from './ProtectedRoutes';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route
                        path="login"
                        element={
                            <MongotestLogin />
                        }></Route>
                    <Route
                        path="register"
                        element={
                            <MongotestRegister />
                        }></Route>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
