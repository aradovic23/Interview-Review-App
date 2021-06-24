import React from "react";
import "./Admin.scss";
import Header from "../../components/Header/Header";
import ReportCardAdmin from "../../components/ReportCardAdmin/ReportCardAdmin";

const Admin = ({ reports }) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <ReportCardAdmin reports={reports} />
      </div>
    </>
  );
};

export default Admin;
