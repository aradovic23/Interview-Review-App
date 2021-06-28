import React, { useState } from "react";
import { MdInfo } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import ModalAdmin from "../ModalAdmin/ModalAdmin";

const TableRow = ({ name, company, date, phase, status, note }) => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="report-container">
        <div className="report-wrapper">
          <div className="admin-card-data">
            <p>Candidate</p>
            <span>{name}</span>
          </div>
          <div className="admin-card-data">
            <p>Company</p>
            <span> {company}</span>
          </div>
          <div className="admin-card-data">
            <p>Date</p>
            <span>{date}</span>
          </div>
          <div className="admin-card-data">
            <p>Phase</p>
            <span>{phase}</span>
          </div>
          <div className="admin-card-data">
            <p>Status</p>
            <span>{status}</span>
          </div>
        </div>
        <div id="admin-modal">
          <MdInfo size="24px" onClick={onClick} className="icons-admin" />
          <ModalAdmin
            company={company}
            name={name}
            date={date}
            phase={phase}
            status={status}
            note={note}
            show={show}
            isClosed={(arg) => setShow(!arg)}
          />

          <IoTrashOutline size="24px" className="icons-admin" />
        </div>
      </div>
    </div>
  );
};

export default TableRow;
