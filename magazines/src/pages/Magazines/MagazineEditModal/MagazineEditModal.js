import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import ModalForm from '../ModalForm';

export class MagazineEditModal extends React.Component {
  formHandleSubmit = (formData) => {
    const id = formData.uuid;
    const { editAction } = this.props;
    const data = {
      name: formData.name,
      author: formData.author,
      description: formData.description,
    };
    editAction(id, data);
  };

  render() {
    const { closeModal, isLoading, initialValues } = this.props;

    return (
      <Modal
        visible
        title="Edit magazine"
        onCancel={closeModal}
        footer={[
          <Button key="cancel" onClick={closeModal}>Cancel</Button>,
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
    );
  }
}
MagazineEditModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  editAction: PropTypes.func,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    uuid: PropTypes.string,
  }),
};

MagazineEditModal.defaultProps = {
  closeModal: () => {},
  isLoading: true,
  editAction: () => {},
  initialValues: {},
};

export default MagazineEditModal;
