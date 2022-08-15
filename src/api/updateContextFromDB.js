// import { useContext } from 'react';
// import { UserContext } from '../context/UserContextProvider';

// const middlewareServerIPAddress = '192.168.1.9';
// const middlewareServerPort = '27017';

// const {
//     setContextIsLoggedIn,
//     setContextBalance,
//     setContextUsername,
//     setContextUserLastname,
//     setContextCurrency,
//     setContextQuote,
//     setContextLastLogin,
// } = useContext(UserContext);

// export async function updateContextFromDB() {
//     const req = await fetch(
//         `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/userdata`,
//         {
//             method: 'GET',
//             headers: {
//                 'x-access-token':
//                     localStorage.getItem('token'),
//             },
//         }
//     );
//     const data = await req.json();
//     if (data.status === 'ok') {
//         console.log(data);
//         setContextUsername(data.firstName);
//         setContextUserLastname(data.lastName);
//         setContextBalance(data.balance);
//         setContextIsLoggedIn(true);
//         setContextCurrency(data.currency);
//         setContextQuote(data.quote);
//         setContextLastLogin(data.lastLogin);
//     } else {
//         console.log('Data error');
//     }
// }
