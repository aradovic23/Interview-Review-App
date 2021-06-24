import React from "react";
import "./Candidate.scss";
import Header from "../../components/Header/Header";
import ReportCard from "../../components/ReportCard/ReportCard";
import profile from "../../img/profile.jpg";
import { useParams } from "react-router-dom";

const Candidate = ({ candidates }) => {
  console.log(candidates);

  const { id } = useParams();
  const prospect = candidates.find((e) => e.id === parseInt(id));
  console.log(prospect);

  return (
    <>
      <Header />
      <div className="candidate-wrapper">
        <div className="candidate-info">
          <img src={profile} alt="no-img" />
          <div className="candidate-data">
            <p className="data-title">Name</p>
            <span>Pera Zmikic</span>
            <p className="data-title">School</p>
            <span>BIT</span>
            <p className="data-title">Email</p>
            <span>pera.zmikic@gmail.com</span>
            <p className="data-title">Birthday</p>
            <span>15.08.1997.</span>
          </div>
        </div>
      </div>
      <div>
        <ReportCard />
      </div>
    </>
  );
};

export default Candidate;
