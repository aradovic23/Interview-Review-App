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
  console.log('prosepect:', prospect);


  if (!prospect) {
    return null
  }

  return (
    <>
      <Header />
      <div className="candidate-wrapper">

        <div className="candidate-info">
          <img src={profile} alt="no-img" />
          <div className="candidate-data">
            <p className="data-title">Name:</p>
            <span>{prospect.name}</span>
            <p className="data-title">Education:</p>
            <span>{prospect.education}</span>
            <p className="data-title">Email:</p>
            <span>{prospect.email}</span>
            <p className="data-title">Birthday:</p>
            <span>{prospect.birthday.slice(4, 16)}</span>
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
