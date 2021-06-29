import React from "react";
import "./Modal.scss";
import { MdClose } from "react-icons/md";
import profile from "../../img/profile.jpg";

const Modal = (props) => {
  const { show } = props;
  const { isClosed } = props;
  const { prospectReport } = props;
  const { id } = props;
  const { reports } = props;

  const close = () => {
    isClosed(true);
  };

  const reportsId = reports.find((e) => e.id === id);

  if (!prospectReport) {
    return null;
  }
  return (
    <>
      {show === true ? (
        <div className="modal-bg">
          <div className="modal-content">
            <div className="n-c">
              <h2>{reportsId.candidateName}</h2>
              <p>
                Company:
                <span> {reportsId.companyName} </span>
              </p>
              <p>
                Date:
                <span> {reportsId.interviewDate?.slice(4, 16)}</span>
              </p>
              <p>
                Phase:
                <span> {reportsId.phase.toUpperCase()}</span>
              </p>
              <p>
                Status:
                <span> {reportsId.status.toUpperCase()}</span>
              </p>
              Notes:
              <span id="textarea">{reportsId.note}</span>
            </div>
            <div className="modal-image">
              <img src={profile} alt="" />
            </div>
            <MdClose onClick={close} size="30px" id="x-icon"></MdClose>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
