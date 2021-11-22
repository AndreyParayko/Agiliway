import React from "react";
import { Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { FlexCenter } from "../styled";
import Loader from "../../../components/Loader";
import PropTypes from "prop-types";

export class MagazineDeleteModal extends React.Component {
  render() {
    const { closeModal, deleteAction, id, isLoading, name } = this.props;
    return (
      <>
        <Modal
          visible={true}
          title="Delete magazine"
          onCancel={closeModal}
          footer={[
            <Button onClick={closeModal} type="primary">
              Cancel
            </Button>,
            <Button
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
              <ExclamationCircleOutlined
                style={{ fontSize: "25px", color: "red" }}
              />
            </FlexCenter>
            <FlexCenter>
              <p>
                Are you sure you want to delete publication with name:{" "}
                <strong>{name}</strong>?
              </p>
            </FlexCenter>
          </Loader>
        </Modal>
      </>
    );
  }
}
MagazineDeleteModal.propTypes = {
  closeModal: PropTypes.func,
  isLoading: PropTypes.bool,
  deleteAction: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};
export default MagazineDeleteModal;
