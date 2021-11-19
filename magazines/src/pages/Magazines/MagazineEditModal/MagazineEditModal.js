import React from "react";
import { Modal, Button } from "antd";
import ModalForm from "../ModalForm";
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

export default MagazineEditModal;
