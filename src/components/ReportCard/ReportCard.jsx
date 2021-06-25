import React from "react";
import "./ReportCard.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { MdInfo } from "react-icons/md";

const ReportCard = ({ id, reports }) => {
  const [show, setShow] = useState(false);

  const userId = id;

  // eslint-disable-next-line eqeqeq
  const prospectReport = reports.find((e) => e.candidateId == userId);

  if (!prospectReport) {
    return null;
  }

  const onClick = () => {
    setShow(!show);
  };

  return (
    <section className="candidates-report">
      <div className="report-card">
        <div className="card-data">
          <p>Company:</p>
          <span>{prospectReport.companyName}</span>
        </div>
        <div className="card-data">
          <p>Interview Date:</p>
          <span>{prospectReport.interviewDate.slice(4, 16)}</span>
        </div>
        <div className="card-data">
          <p>Status:</p>
          <span>{prospectReport.status}</span>
        </div>
        <div className="modulo-link">
          <MdInfo onClick={onClick} className="info-button-report" />
          <Modal
            prospectReport={prospectReport}
            userId={userId}
            show={show}
            isClosed={(arg) => setShow(!arg)}
          />
        </div>
      </div>
    </section>
  );
};

export default ReportCard;
