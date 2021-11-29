import { message } from 'antd';
import {
  getMagazinesSuccessAction,
  getMagazinesStartAction,
  getMagazinesErrorAction,
  editModalGetDataSuccessAction,
  editModalGetDataStartAction,
  editModalGetDataErrorAction,
  functionStartAction,
  functionSuccessAction,
  functionErrorAction,
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
  return getMagazines()
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
  dispatch(functionStartAction());
  editMagazine(id, magazine)
    .then(() => {
      dispatch(functionSuccessAction());
      message.success('Magazine edited successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(functionErrorAction());
      message.error('Something went wrong. Magazine not edited.');
    });
};
export const deleteMagazineThunk = (id) => (dispatch) => {
  dispatch(functionStartAction());
  deleteMagazine(id)
    .then(() => {
      dispatch(functionSuccessAction());
      message.success('Magazine deleted successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(functionErrorAction());
      message.error('Something went wrong. Magazine not delited.');
    });
};

export const addMagazineThunk = (magazine) => (dispatch) => {
  dispatch(functionStartAction());
  addMagazine(magazine)
    .then(() => {
      dispatch(functionSuccessAction());
      message.success('Magazine added successfully');
      dispatch(getMagazinesThunk());
    })
    .catch(() => {
      dispatch(functionErrorAction());
      message.error('Something went wrong. Magazine not added.');
    });
};
