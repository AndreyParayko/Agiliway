import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "../ModalForm";
import PropTypes from "prop-types";
export class MagazineEditModal extends React.Component {
  formHandleSubmit = (formData) => {
    const id = formData.uuid;
    const data = {
      name: formData.name,
      author: formData.author,
      description: formData.description,
    };
    this.props.editAction(id, data);
  };
  render() {
    const { closeModal, isLoading, initialValues } = this.props;

    return (
      <>
        <Modal
          visible={true}
          title="Edit magazine"
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
            initialValues={initialValues}
          />
        </Modal>
      </>
    );
  }
}
MagazineEditModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  editAction: PropTypes.func,
  initialValues: PropTypes.object,
};

export default MagazineEditModal;
