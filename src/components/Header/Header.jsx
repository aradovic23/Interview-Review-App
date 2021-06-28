import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";

const Header = ({ token, setToken }) => {
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div className="nav-home">
      <div id="moneymaker">
        <Link to="/">
          <h1>Moneymaker</h1>
        </Link>

        <SiWebmoney className="icon-header" />
      </div>
      {token ? (
        <div className="button-holder">
          <span id="hello">Hello, Developer! </span>
          <Link to="/admin">
            <button className="nav-buttons">Admin</button>
          </Link>
          <Link to="/">
            <button className="nav-buttons" onClick={logOut}>
              Log out
            </button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <button className="nav-buttons">Log in</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
