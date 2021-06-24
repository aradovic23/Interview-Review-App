import React from "react";
import "./Modal.scss";
import { MdClose } from "react-icons/md";
import profile from "../../img/profile.jpg";

const Modal = (props) => {
  const { show } = props;
  const { isClosed } = props;

  const close = () => {
    isClosed(true);
  };
  return (
    <>
      {show === true ? (
        <div className="modal-bg">
          <div className="modal-content">
            <div className="n-c">
              <h2>Pera Zmikic</h2>
              <p>
                Company:
                <span> Google</span>
              </p>
              <p>
                Date:
                <span> 27.03</span>
              </p>
              <p>
                Phase:
                <span> HR</span>
              </p>
              <p>
                Status:
                <span> Passed</span>
              </p>
              <p id="textarea">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus dignissimos quae nulla sapiente sint esse amet. Quia,
                ab nisi incidunt illo vitae et eligendi quibusdam fugit cum?
                Omnis, placeat vitae!
              </p>
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
