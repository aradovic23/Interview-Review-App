import React, { useState } from "react";
import "./Login.scss";
import { getToken } from "../../fetch/fetch";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = ({ setToken, token }) => {
  const [password, setPassword] = useState("");
  const [userN, setUserN] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    getToken(userN, password).then((data) => {
      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);
      setError(true);
    });
  };

  return (
    <section className="login-section">
      <div className="login-form">
        <div className="logo-section">
          <Link to="/">
            <SiWebmoney className="logo-admin" />
          </Link>
        </div>
        <h2>Admin Login</h2>
        <div className="login-content">
          <span>Email</span>
          <input
            type="text"
            name=""
            id="username"
            onChange={(e) => setUserN(e.target.value)}
          />
          <span>Password</span>
          <input
            type="password"
            name=""
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p id="error-msg">Wrong email or password</p>}

          <button id="login-id" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
