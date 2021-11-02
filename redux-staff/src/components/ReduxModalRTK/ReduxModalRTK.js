import React from "react";
import "./styles.scss";
import { useSelector, useDispatch } from 'react-redux'
import { showModal, hideModal } from './modalReducer'
const ReduxModalRTK = () => {
  const isActive = useSelector((state) => state.modal_status.value)
  const dispatch = useDispatch()

  return (
    <>
      <button className="button1" onClick={() => dispatch(showModal())}>Open Redux Modal</button>
      {isActive && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={() => dispatch(hideModal())}>
                &times;
              </span>
              <h2>Redux modal</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReduxModalRTK;
