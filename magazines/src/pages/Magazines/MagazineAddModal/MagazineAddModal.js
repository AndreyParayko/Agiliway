import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import ModalForm from '../ModalForm';

export class MagazineAddModal extends React.Component {
  formHandleSubmit = (data) => {
    const { addAction } = this.props;
    addAction(data);
  };

  render() {
    const { closeModal, isLoading } = this.props;

    return (
      <Modal
        visible
        title="Create magazine"
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
        <ModalForm isLoading={isLoading} handleSubmit={this.formHandleSubmit} />
      </Modal>
    );
  }
}
MagazineAddModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  addAction: PropTypes.func,
};
MagazineAddModal.defaultProps = {
  closeModal: () => {},
  isLoading: true,
  addAction: () => {},
};

export default MagazineAddModal;
