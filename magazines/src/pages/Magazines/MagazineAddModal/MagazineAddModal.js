import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "../ModalForm";
import PropTypes from "prop-types";

export class MagazineAddModal extends React.Component {
  formHandleSubmit = (data) => {
    this.props.addAction(data);
  };
  render() {
    const { closeModal, isLoading } = this.props;

    return (
      <>
        <Modal
          visible={true}
          title="Create magazine"
          onCancel={closeModal}
          footer={[
            <Button onClick={closeModal}>Cancel</Button>,
            <Button
              disabled={isLoading}
              htmlType="submit"
              key="submit"
              form="form"
              type="primary"
            >
              Submit
            </Button>,
          ]}
        >
          <ModalForm
            isLoading={isLoading}
            handleSubmit={this.formHandleSubmit}
          />
        </Modal>
      </>
    );
  }
}
MagazineAddModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  addAction: PropTypes.func,
};

export default MagazineAddModal;
