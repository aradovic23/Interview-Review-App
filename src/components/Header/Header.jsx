import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";

const Header = () => {
  return (
    <div className="nav-home">
      <div id="moneymaker">
        <Link to="/">
          <h1>Moneymaker</h1>
        </Link>
        <SiWebmoney className="icon-header" />
      </div>
      <Link to="/login">
        <button id="log-in-button">Log in</button>
      </Link>
    </div>
  );
};

export default Header;
