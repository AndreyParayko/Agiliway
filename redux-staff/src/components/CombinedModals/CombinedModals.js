import React from "react";
import "./styles.scss";
import Modal from "../Modal"
import ReduxModalRTK from "../ReduxModalRTK"
import ReduxModal from "../ReduxModal"
const CombinedModals = () => {

  return (
    <div className="section">
      <Modal/>
      <ReduxModal />
    </div>
  );
};

export default CombinedModals;
