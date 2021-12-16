import { message } from 'antd';
import {
  getMagazineSuccessAction,
  getMagazineStartAction,
  getMagazineErrorAction,
} from '../actions/actions';
import { getMagazineById } from '../../../api/domain';

const getMagazineByIdThunk = (id) => (dispatch) => {
  dispatch(getMagazineStartAction());
  getMagazineById(id)
    .then((response) => {
      dispatch(getMagazineSuccessAction(response.data));
    })
    .catch((error) => {
      dispatch(getMagazineErrorAction(error));
      message.error('Something went wrong. Can`t get a data.');
    });
};

export default getMagazineByIdThunk;
