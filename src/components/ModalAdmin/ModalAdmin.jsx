import React from "react";
import "./ModalAdmin.scss";
import { MdClose } from "react-icons/md";
import modal from "../../img/modal.jpg";

const ModalAdmin = ({
  show,
  isClosed,
  company,
  date,
  phase,
  status,
  note,
  name,
}) => {
  const close = () => {
    isClosed(true);
  };

  return (
    <>
      {show ? (
        <div className="modal-bg">
          <div className="modal-content">
            <div className="n-c">
              <h2>{name}</h2>
              <p>
                Company:
                <span> {company} </span>
              </p>
              <p>
                Date:
                <span> {date?.slice(4, 16)}</span>
              </p>
              <p>
                Phase:
                <span> {phase}</span>
              </p>
              <p>
                Status:
                <span> {status}</span>
              </p>
              Notes:
              <span id="textarea">{note}</span>
            </div>
            <div className="modal-image">
              <img src={modal} alt="" />
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

export default ModalAdmin;
