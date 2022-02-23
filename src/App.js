import { Link, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import './App.css';
import { UserContextProvider } from './context/UserContextProvider';
import { Menu } from './routes/Menu';

// let navigate = useNavigate();

// function logout() {
//     localStorage.removeItem('token');
// }
function App() {
    return (
        <>
            <UserContextProvider></UserContextProvider>
        </>
    );
}
export default App;
