import React from "react";
import "./WizardCompanies.scss";

const WizardCompanies = ({ name, getCompanies, id }) => {
  return (
    <div className="select-company" onClick={() => {
      getCompanies(name, id)}}>
      <div>
<span> {name.toUpperCase()}</span>     
      </div>
    </div>
  );
};

export default WizardCompanies;
