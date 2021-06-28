import React from "react";
import "./WizardCompanies.scss";

const WizardCompanies = ({ name, email, id }) => {
  return (
    <div className="select-company">
      <input type="radio" name="companies" id={id} />
      {name}
    </div>
  );
};

export default WizardCompanies;
