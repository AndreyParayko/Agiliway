import {
  getMagazineSuccessAction,
  getMagazineStartAction,
  getMagazineErrorAction,
} from "../actions/actions";
import {getMagazineById} from "../../../api/domain";
import { message } from "antd";

const getMagazineByIdThunk = (id) => {
  return (dispatch) => {
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
};

export default getMagazineByIdThunk;
