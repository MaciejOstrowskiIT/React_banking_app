import { Link, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
// import './App.css';
import { UserContextProvider } from './context/UserContextProvider';
import { Menu } from './routes/Menu';
import { Landing } from './routes/Landing';

// let navigate = useNavigate();

// function logout() {
//     localStorage.removeItem('token');
// }
function App() {
    return (
        <>
            <UserContextProvider></UserContextProvider>
            {/* <Landing /> */}
        </>
    );
}
export default App;
