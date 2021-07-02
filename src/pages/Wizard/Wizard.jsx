import React, { useContext, useState, useEffect } from "react";
import "./Wizard.scss";
import Header from "../../components/Header/Header";
import WizardCandidates from "../../components/WizardCandidates/WizardCandidates";
import WizardCompanies from "../../components/WizardCompanies/WizardCompanies";
import WizardForm from "../../components/WizardForm/WizardForm";
import { Link } from "react-router-dom";
import { CompanyContext } from "../../App/App";

const Wizard = ({ candidates, token, setToken, setReports, reports }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermCompany, setSearchTermCompany] = useState("");
  const [report, setReport] = useState({});
  const [activeCandidateId, setActiveCandidateId] = useState(0);
  const [activeCompanyId, setActiveCompanyId] = useState(0);
  const companies = useContext(CompanyContext);
  const [filtered, setFiltered] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    setFiltered(
      candidates?.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, candidates]);

  useEffect(() => {
    setFilteredCompanies(
      companies?.filter((e) =>
        e.name.toLowerCase().includes(searchTermCompany.toLowerCase())
      )
    );
  }, [searchTermCompany, companies]);

  const getCandidates = (name, id) => {
    setReport({ ...report, candidateName: name, candidateId: id });
  };

  const getCompanies = (companyName, companyId) => {
    setReport({ ...report, companyName: companyName, companyId: companyId });
  };

  const goNextPage = () => {
    setPage((page) => page + 1);
  };
  const goBack = () => {
    setPage((page) => page - 1);
  };

  const getActive = (pg) => {
    return pg === page ? "active" : "";
  };

  const submitForm = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => setReports([...reports, data]));
  };

  return (
    <>
      <Header token={token} setToken={setToken} />
      <section className="wizard-section">
        <div className="wizard">
          <div id="left">
            <p className={getActive(1)}>1. Select a candidate</p>
            <p className={getActive(2)}>2. Select a company</p>
            <p className={getActive(3)}>3. Write a report</p>

            <div id="selected-candidate">
              {activeCandidateId ? (
                <div>
                  <p className="selected-title">Selected Candidate:</p>
                  <span className="selected-data">{report.candidateName}</span>
                </div>
              ) : (
                ""
              )}

              {activeCompanyId ? (
                <div id="select-company">
                  <p className="selected-title">Selected Company:</p>
                  <span className="selected-data">{report.companyName}</span>
                </div>
              ) : (
                ""
              )}
            </div>
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
                {filtered?.map((e) => (
                  <WizardCandidates
                    getCandidates={getCandidates}
                    key={e.id}
                    name={e.name}
                    email={e.email}
                    id={e.id}
                    activeCandidateId={activeCandidateId}
                    setActiveCandidateId={setActiveCandidateId}
                  />
                ))}
              </div>
            </div>
          )}
          {page === 2 && (
            <div className="page-width">
              <div className="title-wizard">
                <h2>Select a company</h2>
                <input
                  type="search"
                  name=""
                  id="search-candidate"
                  placeholder="Search for companies... "
                  onChange={(event) => {
                    setSearchTermCompany(event.target.value);
                  }}
                />
              </div>
              <div className="companies-list">
                {filteredCompanies.map((e) => (
                  <WizardCompanies
                    getCompanies={getCompanies}
                    key={e.id}
                    name={e.name}
                    email={e.email}
                    id={e.id}
                    activeCompanyId={activeCompanyId}
                    setActiveCompanyId={setActiveCompanyId}
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
              <div className="wizard-report">
                {<WizardForm setReport={setReport} report={report} />}
              </div>
            </div>
          )}
          <div className="wizard-buttons">
            {page !== 3 && <button onClick={goNextPage}>Next</button>}
            {page !== 1 && <button onClick={goBack}>back</button>}
            {page === 3 && (
              <>
                <Link to="/admin">
                  <button id="submit-btn" onClick={submitForm}>
                    Submit
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wizard;
