import React, { useState } from "react";
import "./Wizard.scss";
import Header from "../../components/Header/Header";
import WizardCandidates from "../../components/WizardCandidates/WizardCandidates";
import WizardCompanies from "../../components/WizardCompanies/WizardCompanies";
import WizardForm from "../../components/WizardForm/WizardForm";

const Wizard = ({ candidates, companies, token, setToken }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const goNextPage = () => {
    setPage((page) => page + 1);
  };
  const goBack = () => {
    setPage((page) => page - 1);
  };

  const getActive = (pg) => {
    return pg === page ? "active" : "";
  };

  return (
    <>
      <Header token={token} setToken={setToken} />
      <section className="wizard-section">
        <div className="wizard">
          <div id="left">
            <h3 className={getActive(1)}>1. Candidates</h3>
            <h3 className={getActive(2)}>2. Companies</h3>
            <h3 className={getActive(3)}>3. Report</h3>
          </div>

          {page === 1 && (
            <div className="page-width">
              <div className="title-wizard">
                <h2>Select a candidate</h2>
                <input
                  type="search"
                  name=""
                  id="search-candidate"
                  placeholder="Search for candidates"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              <div className="candidates-list">
                {candidates
                  // eslint-disable-next-line array-callback-return
                  .filter((value) => {
                    if (searchTerm === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((e) => (
                    <WizardCandidates
                      key={e.id}
                      name={e.name}
                      email={e.email}
                      id={e.id}
                    />
                  ))}
              </div>
            </div>
          )}
          {page === 2 && (
            <div className="page-width">
              <div className="title-wizard">
                <h2>Select a company</h2>
              </div>
              <div className="companies-list">
                {companies.map((e) => (
                  <WizardCompanies
                    key={e.id}
                    name={e.name}
                    email={e.email}
                    id={e.id}
                  />
                ))}
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="page-width">
              <div className="title-wizard">
                <h2>Write a report</h2>
              </div>
              <div className="wizard-report">{<WizardForm />}</div>
            </div>
          )}
          <div className="wizard-buttons">
            {page !== 3 && <button onClick={goNextPage}>Next</button>}
            {page !== 1 && <button onClick={goBack}>back</button>}
            {page === 3 && <button>Submit</button>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wizard;
