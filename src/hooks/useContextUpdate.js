import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateLastLogin } from "../api/updateLastLogin";
import { UserContext } from "../context/UserContextProvider";

import jsonwebtoken from "jsonwebtoken";

const useContextUpdate = () => {
  const middlewareServerIPAddress =
    process.env.REACT_APP_MIDDLEWARE_SERVER_IP_ADDRESS || "192.168.1.9";
  const middlewareServerPort =
    process.env.REACT_APP_MIDDLEWARE_SERVER_PORT || "27017";

  let navigate = useNavigate();

  const {
    setContextIsLoggedIn,
    setContextBalance,
    setContextUsername,
    setContextUserLastname,
    setContextCurrency,
    setContextQuote,
    setContextLastLogin,
    setContextTheme,
  } = useContext(UserContext);

  const handleLogin = () => setContextIsLoggedIn(true);

  async function updateContextFromDB() {
    const req = await fetch(
      `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/userdata`,
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
    const data = await req.json();
    if (data.status === "ok") {
      console.table(data);
      setContextUsername(data.firstName);
      setContextUserLastname(data.lastName);
      setContextBalance(data.balance);
      setContextIsLoggedIn(true);
      setContextCurrency(data.currency);
      setContextQuote(data.quote);
      setContextLastLogin(data.lastLogin);
      setContextTheme(data.theme);
    } else {
      console.log("Data error");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jsonwebtoken.decode(token);
      console.log(user);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        updateContextFromDB();
        handleLogin();
        updateLastLogin();
      }
    }
  }, []);

  return [UserContext];
};

export default useContextUpdate;
