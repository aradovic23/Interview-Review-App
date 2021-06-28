import React from "react";
import "./WizardCandidates.scss";

export default function WizardCandidates({ name, email, id, getCandidates }) {
  return (
    
    <div  className="candidate-wizard-card" key={id} onClick={() => {
        getCandidates(name, id)}} >
      <span className="first-name-candidate">{name}</span>
      <span>{email.toLowerCase()}</span>
    </div>
  );
}
