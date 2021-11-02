import {React, useState} from "react";
import "./styles.scss";
const Modal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button className="button2" onClick={() => setModalShow(true)}>Open Modal</button>
      {modalShow && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header2">
              <span className="close" onClick={() => setModalShow(false)}>
                &times;
              </span>
              <h2>Default React modal</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
