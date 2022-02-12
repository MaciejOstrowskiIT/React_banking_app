import {
    BrowserRouter,
    Link,
    Outlet,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom';
import MongotestLogin from './Mongotest login/MongotestLogin';
import MongotestRegister from './Mongotest/MongotestRegister';
import Quote from './Quote/Quote';
import React from 'react';

// let navigate = useNavigate();

// function logout() {
//     localStorage.removeItem('token');
// }

function App(props) {
    let navigate = useNavigate();
    return (
        <>
            <div>
                <h1>test</h1>
                <nav
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}>
                    <Link to="/login">Login</Link> |{' '}
                    <Link to="/register">Register</Link>
                </nav>
                <Outlet />
            </div>
        </>
    );
}
export default App;
