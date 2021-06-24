import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-home">
      <Link to="/">
        <h1>Moneymaker</h1>
      </Link>
      <Link to="/login">
        <button id="log-in-button">Log in</button>
      </Link>
    </div>
  );
};

export default Header;
