import React from "react";
import "./Modal.scss";
import { MdClose } from "react-icons/md";
import profile from "../../img/profile.jpg";

const Modal = (props) => {
  const { show } = props;
  const { isClosed } = props;
  const { prospectReport } = props;

  console.log(prospectReport);

  const close = () => {
    isClosed(true);
  };

  if (!prospectReport) {
    return null;
  }
  return (
    <>
      {show === true ? (
        <div className="modal-bg">
          <div className="modal-content">
            <div className="n-c">
              <h2>{prospectReport.candidateName}</h2>
              <p>
                Company:
                <span> {prospectReport.companyName} </span>
              </p>
              <p>
                Date:
                <span> {prospectReport.interviewDate}</span>
              </p>
              <p>
                Phase:
                <span> {prospectReport.phase.toUpperCase()}</span>
              </p>
              <p>
                Status:
                <span> {prospectReport.status.toUpperCase()}</span>
              </p>
              <p id="textarea">{prospectReport.note}</p>
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
