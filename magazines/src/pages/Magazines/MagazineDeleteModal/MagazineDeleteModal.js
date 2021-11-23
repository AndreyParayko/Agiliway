import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { FlexCenter } from '../styled';
import Loader from '../../../components/Loader';

const MagazineDeleteModal = ({
  closeModal,
  deleteAction,
  id,
  isLoading,
  name,
}) => (
  <Modal
    visible
    title="Delete magazine"
    onCancel={closeModal}
    footer={[
      <Button key="cancel" onClick={closeModal} type="primary">
        Cancel
      </Button>,
      <Button
        key="delete"
        disabled={isLoading}
        onClick={() => deleteAction(id)}
        type="danger"
      >
        Submit
      </Button>,
    ]}
  >
    <Loader isLoading={isLoading}>
      <FlexCenter>
        <ExclamationCircleOutlined style={{ fontSize: '25px', color: 'red' }} />
      </FlexCenter>
      <FlexCenter>
        <p>
          Are you sure you want to delete publication with name:
          {' '}
          <strong>{name}</strong>
          ?
        </p>
      </FlexCenter>
    </Loader>
  </Modal>
);
MagazineDeleteModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  deleteAction: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};
MagazineDeleteModal.defaultProps = {
  closeModal: () => {},
  isLoading: true,
  deleteAction: () => {},
  id: '',
  name: '',
};

export default MagazineDeleteModal;
