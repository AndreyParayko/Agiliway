import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { showModalAction, hideModalAction} from "../../app/store";
const ReduxModal = (props) => {

  return (
    <>
      <button onClick={props.openModal} className="button1" >Open Redux Modal</button>
      {props.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span onClick={props.closeModal} className="close" >
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
const mapStateToProps = (state) => {
  return {
    isOpen: state.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => {
      dispatch(showModalAction(true));
    },
    closeModal: () => {
      dispatch(hideModalAction(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxModal);
