import React from "react";
import "./Admin.scss";
import Header from "../../components/Header/Header";
import ReportCardAdmin from "../../components/ReportCardAdmin/ReportCardAdmin";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Admin = ({ reports, token, setToken }) => {
  return (
    <>
      <Header token={token} setToken={setToken} />
      <div className="wrapper">
        <ReportCardAdmin reports={reports} />
        <div className="add">
          <Link to="/wizard">
            <MdAddCircle className="add-report" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Admin;
