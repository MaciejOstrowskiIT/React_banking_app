import { Navigate, Outlet } from 'react-router-dom';
import MongotestLogin from './Mongotest login/MongotestLogin';
import React from 'react';

const useAuth = () => {
    const user = { loggedIn: false };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
