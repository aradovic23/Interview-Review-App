import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/admin");
  };

  return (
    <section className="login-section">
      <div className="login-form">
        <h2>Admin Login</h2>
        <div className="login-content">
          <span>Username</span>
          <input type="text" name="" id="username" />
          <span>password</span>
          <input type="password" name="" id="password" />
          <button id="login-id" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
