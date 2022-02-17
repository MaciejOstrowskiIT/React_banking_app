import { Link, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';

// let navigate = useNavigate();

// function logout() {
//     localStorage.removeItem('token');
// }
function App() {
    return (
        <>
            <div>
                <header className="just-header"></header>

                <h1>Apka banku</h1>
                <nav
                    className="navbar"
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}>
                    <Link to="/login">Zaloguj się</Link> |{' '}
                    <Link to="/register">
                        Zarejestruj się
                    </Link>{' '}
                    | <Link to="/main">Strona główna</Link>
                    <p className="logged-as">
                        Zalogowano jako:
                    </p>
                </nav>
                <Outlet />
                {/* do zrobienia: passport, cookies serwerowe zamiast localstorage, usecontext dla username itp itd */}
            </div>
        </>
    );
}
export default App;
