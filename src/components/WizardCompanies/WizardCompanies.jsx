import React from "react";
import "./WizardCompanies.scss";

const WizardCompanies = ({
  name,
  getCompanies,
  id,
  setActiveCompanyId,
  activeCompanyId,
}) => {
  return (
    <div
      className={
        activeCompanyId === id ? "select-company active-card" : "select-company"
      }
      onClick={() => {
        getCompanies(name, id);
        setActiveCompanyId(id);
      }}
    >
      <div>
        <span> {name.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default WizardCompanies;
