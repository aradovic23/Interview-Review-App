import React from "react";
import "./Wizard.scss";
import Header from "../../components/Header/Header";

const Wizard = () => {
  return (
    <>
      <Header />
      <section className="wizard-section">
        <div className="wizard">
          <div id="left">
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
            <h3>Lorem ipsum</h3>
          </div>
          <div id="right"></div>
        </div>
      </section>
    </>
  );
};

export default Wizard;
