import React from "react";
import "./ReportCardAdmin.scss";
import { MdSearch } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

import { useState } from "react";
import Modal from "../Modal/Modal";

const ReportCardAdmin = ({ reports }) => {
  console.log(reports);
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="search-holder">
        <div className="search-admin">
          <input
            type="search"
            name="search"
            id="search-admin"
            placeholder="Search for companies and candidates"
          />
          <button id="admin-search-button">
            <MdSearch size="24px" />
          </button>
        </div>
      </section>
      <section>
        {reports.map((e) => (
          <div className="report-container" key={e.id} id={e.id}>
            <div className="report-wrapper">
              <div className="admin-card-data">
                <p>Candidate</p>
                <span>{e.candidateName}</span>
              </div>
              <div className="admin-card-data">
                <p>Company</p>
                <span> {e.companyName}</span>
              </div>
              <div className="admin-card-data">
                <p>Date</p>
                <span>{e.interviewDate.slice(4, 16)}</span>
              </div>
              <div className="admin-card-data">
                <p>Phase</p>
                <span>{e.phase}</span>
              </div>
              <div className="admin-card-data">
                <p>Status</p>
                <span>{e.status}</span>
              </div>
            </div>
            <div id="admin-modal">
              <MdInfo size="24px" onClick={onClick} className="icons-admin" />
              <Modal show={show} isClosed={(arg) => setShow(!arg)} />

              <IoTrashOutline size="24px" className="icons-admin" />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ReportCardAdmin;
