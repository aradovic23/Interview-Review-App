import React from "react";
import "./WizardCandidates.scss";

export default function WizardCandidates({
  name,
  email,
  id,
  getCandidates,
  activeCandidateId,
  setActiveCandidateId,
}) {
  return (
    <div
      className={
        activeCandidateId === id
          ? "candidate-wizard-card active-card"
          : "candidate-wizard-card"
      }
      key={id}
      onClick={() => {
        getCandidates(name, id);
        setActiveCandidateId(id);
      }}
    >
      <span className="first-name-candidate">{name}</span>
      <span>{email.toLowerCase()}</span>
    </div>
  );
}
