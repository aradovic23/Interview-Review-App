import React, {useState} from "react";
import "./Wizard.scss";
import Header from "../../components/Header/Header";
import WizardCandidates from "../../components/WizardCandidates/WizardCandidates";

const Wizard = ({candidates}) => {

  const [page, setPage] = useState(1);

  const goNextPage = () => {
    setPage((page) => page + 1);
  }
  const goBack = () => {
    setPage((page) => page - 1);
  }


  return (
    <>
      <Header />
      <section className="wizard-section">
        <div className="wizard">
          <div id="left">

            {page === 1 && <h3>Candidates</h3>}
            {page === 2 && <h3>Companies</h3>}
            {page === 3 && <h3>Report</h3>}
            
            
            
          </div>
          <div id="right"></div>

          <div className="form">
          {page === 1 &&    candidates.map((e)=>(
            <WizardCandidates key={e.id} name={e.name} email={e.email} id={e.id}/> ))
          } 
          <div className="wizard-buttons">
          {page !== 1 && <button onClick={goBack}>back</button>}
          {page !== 3 && <button onClick={goNextPage}>Next</button>}
          {page === 3 && <button>Submit</button>}
          </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Wizard;
