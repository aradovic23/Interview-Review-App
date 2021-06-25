import React from "react";
import "./Card.scss";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import profile from "../../img/profile.jpg";

const Card = ({ candidates }) => {
  return (
    <>
      {candidates.map((e) => (
        <div className="person-container" key={e.id}>
          <Link to={`${`candidate/`}${e.id}`}>
            <img src={profile} alt="no-img" />
          </Link>
          <h4>{e.name}</h4>
          <div className="mail">
            <MdMailOutline size="22px" />

            <span>{e.email}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
