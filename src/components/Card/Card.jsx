import React from "react";
import "./Card.scss";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ name, email, id, avatar }) => {
  return (
    <>
      <div className="person-container" key={id}>
        <Link to={`${`candidate/`}${id}`}>
          <img src={avatar} alt="no-img" />
        </Link>
        <h4>{name}</h4>
        <div className="mail">
          <MdMailOutline size="22px" />

          <span>{email}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
