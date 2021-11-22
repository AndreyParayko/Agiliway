import {
  getMagazinesSuccessAction,
  getMagazinesStartAction,
  getMagazinesErrorAction,
  editModalGetDataSuccessAction,
  editModalGetDataStartAction,
  editModalGetDataErrorAction,
  modalFunctionStartAction,
  modalFunctionSuccessAction,
  modalFunctionErrorAction,

} from "../actions/actions";
import getMagazines from "../../../api/domain";
import { editMagazine } from "../../../api/domain";
import { getMagazineById } from "../../../api/domain";
import { deleteMagazine } from "../../../api/domain";
import { addMagazine } from "../../../api/domain";
import { message } from "antd";

export const getMagazinesThunk = () => {
  return (dispatch) => {
    dispatch(getMagazinesStartAction());
    getMagazines()
      .then((response) => {
        dispatch(getMagazinesSuccessAction(response.data));
      })
      .catch((error) => {
        dispatch(getMagazinesErrorAction(error));
        message.error('Something went wrong. Can`t get a data.');
      });
  };
};
export const editGetDataThunk = (id) => {
  return (dispatch) => {
    dispatch(editModalGetDataStartAction());
    getMagazineById(id).then((response) => {
      dispatch(editModalGetDataSuccessAction(response.data));
    }).catch((error) => {
      dispatch(editModalGetDataErrorAction(error));
      message.error('Something went wrong. Can`t get a data.');
    });
  };
};

export const editMagazineThunk = (id, magazine) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    editMagazine(id, magazine)
      .then(() => {
        dispatch(modalFunctionSuccessAction());
        message.success("Magazine edited successfully");
        dispatch(getMagazinesThunk());
      })
      .catch((error) => {
        dispatch(modalFunctionErrorAction());
        message.error('Something went wrong. Magazine not edited.');
      });
  };
};
export const deleteMagazineThunk = (id) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    console.log(id);
    deleteMagazine(id)
      .then(() => {
        dispatch(modalFunctionSuccessAction());
        message.success("Magazine deleted successfully");
        dispatch(getMagazinesThunk());
      })
      .catch((error) => {
        dispatch(modalFunctionErrorAction());
        message.error('Something went wrong. Magazine not delited.');
      });
  };
};
export const addMagazineThunk = (magazine) => {
  return (dispatch) => {
    dispatch(modalFunctionStartAction());
    addMagazine(magazine)
      .then(() => {
        dispatch(modalFunctionSuccessAction());
        message.success("Magazine added successfully");
        dispatch(getMagazinesThunk());
      })
      .catch((error) => {
        dispatch(modalFunctionErrorAction());
        message.error('Something went wrong. Magazine not added.');
      });
  };
};
