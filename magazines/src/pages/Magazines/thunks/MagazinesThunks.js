import { message } from 'antd';
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
} from '../actions/actions';

import {
  editMagazine,
  getMagazines,
  getMagazineById,
  deleteMagazine,
  addMagazine,
} from '../../../api/domain';

export const getMagazinesThunk = () => (dispatch) => {
  dispatch(getMagazinesStartAction());
  getMagazines()
    .then((response) => {
      dispatch(getMagazinesSuccessAction(response.data));
    })
    .catch((error) => {
      dispatch(getMagazinesErrorAction(error));
      // message.error('Something went wrong. Can`t get a data.');
    });
};
export const editGetDataThunk = (id) => (dispatch) => {
  dispatch(editModalGetDataStartAction());
  getMagazineById(id)
    .then((response) => {
      dispatch(editModalGetDataSuccessAction(response.data));
    })
    .catch((error) => {
      dispatch(editModalGetDataErrorAction(error));
      message.error('Something went wrong. Can`t get a data.');
    });
};

export const editMagazineThunk = (id, magazine) => (dispatch) => {
  dispatch(modalFunctionStartAction());
  editMagazine(id, magazine)
    .then(() => {
      dispatch(modalFunctionSuccessAction());
      message.success('Magazine edited successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(modalFunctionErrorAction());
      message.error('Something went wrong. Magazine not edited.');
    });
};
export const deleteMagazineThunk = (id) => (dispatch) => {
  dispatch(modalFunctionStartAction());
  deleteMagazine(id)
    .then(() => {
      dispatch(modalFunctionSuccessAction());
      message.success('Magazine deleted successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(modalFunctionErrorAction());
      message.error('Something went wrong. Magazine not delited.');
    });
};
export const addMagazineThunk = (magazine) => (dispatch) => {
  dispatch(modalFunctionStartAction());
  addMagazine(magazine)
    .then(() => {
      dispatch(modalFunctionSuccessAction());
      message.success('Magazine added successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(modalFunctionErrorAction());
      message.error('Something went wrong. Magazine not added.');
    });
};
