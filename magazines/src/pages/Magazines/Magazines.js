import React from "react";
import { connect } from "react-redux";
import { Row, Empty, Button } from "antd";
import { StyledWrapper } from "./styled";
import Loader from "../../components/Loader";
import MagazinesItem from "./MagazinesItem";
import MagazineAddModal from "./MagazineAddModal";
import MagazineEditModal from "./MagazineEditModal";
import MagazineDeleteModal from "./MagazineDeleteModal";
import {
  editMagazineThunk,
  editGetDataThunk,
  getMagazinesThunk,
  deleteMagazineThunk,
  addMagazineThunk,
} from "./thunks/MagazinesThunks";
import {
  addModalOpenAction,
  deleteModalOpenAction,
  editModalOpenAction,
  modalCloseAction,
} from "./actions/actions";
import {
  ADD_MODAL_TYPE,
  EDIT_MODAL_TYPE,
  DELETE_MODAL_TYPE,
} from "./constants";
import * as selectors from "./selectors/magazines.selectors";
import PropTypes from "prop-types";

class Magazines extends React.Component {
  componentDidMount() {
    this.props.getMagazines();
  }
  render() {
    const {
      magazinesIsLoading,
      magazinesData,
      modalType,
      modalIsLoading,
      modalEditInitialValues,
      modalDeleteId,
      modalDeleteName,
      openAddModal,
      openEditModal,
      openDeleteModal,
      closeModal,
      deleteMagazine,
      addMagazine,
      editMagazine,
      editGetData,
    } = this.props;
    const currentMagazines = magazinesData;
    return (
      <Loader isLoading={magazinesIsLoading}>
        <StyledWrapper>
          {currentMagazines.length !== 0 && (
            <Row justify="end">
              <Button type="primary" onClick={openAddModal}>
                Create magazine
              </Button>
            </Row>
          )}
          {!magazinesIsLoading && (
            <Row gutter={[32, 24]}>
              {currentMagazines.map((item, index) => (
                <MagazinesItem
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                  name={item.name}
                  description={item.description}
                  key={index}
                  id={item.uuid}
                  deleteAction={deleteMagazine}
                  getData={editGetData}
                />
              ))}
            </Row>
          )}
          {currentMagazines.length === 0 && !magazinesIsLoading && (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
              description={
                <span>Magazines are absent. You can create new Magazines</span>
              }
            >
              <Button type="primary" onClick={openAddModal}>
                Create magazine
              </Button>
            </Empty>
          )}
        </StyledWrapper>
        {modalType === ADD_MODAL_TYPE && (
          <MagazineAddModal
            openModal={openAddModal}
            closeModal={closeModal}
            isLoading={modalIsLoading}
            addAction={addMagazine}
          />
        )}
        {modalType === EDIT_MODAL_TYPE && (
          <MagazineEditModal
            closeModal={closeModal}
            isLoading={modalIsLoading}
            editAction={editMagazine}
            initialValues={modalEditInitialValues}
          />
        )}
        {modalType === DELETE_MODAL_TYPE && (
          <MagazineDeleteModal
            closeModal={closeModal}
            id={modalDeleteId}
            deleteAction={deleteMagazine}
            isLoading={modalIsLoading}
            name={modalDeleteName}
          />
        )}
      </Loader>
    );
  }
}
Magazines.propTypes = {
  magazinesData: PropTypes.array,
  magazinesIsLoading: PropTypes.bool,
  modalIsLoading: PropTypes.bool,
  modalEditInitialValues: PropTypes.object,
  modalDeleteId: PropTypes.string,
  modalDeleteName: PropTypes.string,
  modalType: PropTypes.string,
  getMagazines: PropTypes.func,
  deleteMagazine: PropTypes.func,
  addMagazine: PropTypes.func,
  editMagazine: PropTypes.func,
  editGetData: PropTypes.func,
  openAddModal: PropTypes.func,
  openDeleteModal: PropTypes.func,
  openEditModal: PropTypes.func,
  closeModal: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    magazinesData: selectors.selectMagazinesData(state),
    magazinesIsLoading: selectors.selectMagazinesIsLoading(state),
    modalIsLoading: selectors.selectModalIsLoading(state),
    modalEditInitialValues: selectors.selectModalData(state),
    modalDeleteId: selectors.selectModalId(state),
    modalDeleteName: selectors.selectModalName(state),
    modalType: selectors.selectModalType(state),
  };
};

const mapDispatchToProps = {
  getMagazines: getMagazinesThunk,
  deleteMagazine: deleteMagazineThunk,
  addMagazine: addMagazineThunk,
  editMagazine: editMagazineThunk,
  editGetData: editGetDataThunk,
  openAddModal: addModalOpenAction,
  openDeleteModal: deleteModalOpenAction,
  openEditModal: editModalOpenAction,
  closeModal: modalCloseAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Magazines);
