import React, { useState } from "react";
import "./Login.scss";
import { getToken } from "../../fetch/fetch";
import { SiWebmoney } from "react-icons/si";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const [password, setPassword] = useState("");
  const [userN, setUserN] = useState("");

  const handleLogin = () => {
    getToken(userN, password).then((data) => {
      setToken(data.accessToken);
      localStorage.setItem("token", data.accessToken);
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

          <button id="login-id" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
