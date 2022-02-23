import { Link, Outlet } from 'react-router-dom';
import React from 'react';
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
                </nav>
                {/* <p className="logged-as">
                    Zalogowano jako:
                    {userContextValue.username}
                </p> */}
                <Outlet />
                {/* do zrobienia: passport, cookies serwerowe zamiast localstorage, usecontext dla username itp itd */}
            </div>
        </>
    );
}
export default App;
