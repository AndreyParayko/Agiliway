import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import {
  getMagazines,
  getMagazineById,
  editMagazine,
  deleteMagazine,
  addMagazine,
} from '../../../api/domain';
import {
  getMagazinesSuccessAction,
  getMagazinesInProgressAction,
  getMagazinesErrorAction,
  getMagazineSuccessAction,
  getMagazineInProgressAction,
  getMagazineErrorAction,
  editModalGetDataSuccessAction,
  editModalGetDataErrorAction,
  editModalGetDataInProgressAction,
  functionSuccessAction,
  functionErrorAction,
  functionInProgressAction,
} from '../actions/actions';

import {
  GET_MAGAZINES_START,
  GET_MAGAZINE_START,
  EDIT_MODAL_GET_DATA_START,
  EDIT_FUNCTION_START,
  DELETE_FUNCTION_START,
  ADD_FUNCTION_START,
} from '../action-types/magazines.action-types';

function* getMagazinesSaga() {
  try {
    yield put(getMagazinesInProgressAction());
    const data = yield call(getMagazines);
    yield put(getMagazinesSuccessAction(data));
  } catch (error) {
    yield put(getMagazinesErrorAction());
    yield call(message.error, 'Something went wrong. Can`t get a data.');
  }
}

export function* getMagazinesWatcherSaga() {
  yield takeLatest(GET_MAGAZINES_START, getMagazinesSaga);
}

function* getMagazineSaga(action) {
  try {
    yield put(getMagazineInProgressAction());
    const data = yield call(getMagazineById, action.payload);
    yield put(getMagazineSuccessAction(data));
  } catch (error) {
    yield put(getMagazineErrorAction());
    yield call(message.error, 'Something went wrong. Can`t get a data.');
  }
}

export function* getMagazineWatcherSaga() {
  yield takeLatest(GET_MAGAZINE_START, getMagazineSaga);
}

function* editGetDataSaga(action) {
  try {
    yield put(editModalGetDataInProgressAction());
    const data = yield call(getMagazineById, action.payload);
    yield put(editModalGetDataSuccessAction(data));
  } catch (error) {
    yield put(editModalGetDataErrorAction());
    yield call(message.error, 'Something went wrong. Can`t get a data.');
  }
}

export function* editGetDataWatcherSaga() {
  yield takeLatest(EDIT_MODAL_GET_DATA_START, editGetDataSaga);
}

function* editMagazineSaga(action) {
  try {
    yield put(functionInProgressAction());
    yield call(editMagazine, action.payload.id, action.payload.data);
    yield put(functionSuccessAction());
    yield put({ type: GET_MAGAZINES_START });
    yield call(message.success, 'Magazine edited successfully');
  } catch (error) {
    yield put(functionErrorAction());
    yield call(message.error, 'Something went wrong. Magazine not edited.');
  }
}

export function* editMagazineWatcherSaga() {
  yield takeLatest(EDIT_FUNCTION_START, editMagazineSaga);
}

function* deleteMagazineSaga(action) {
  try {
    yield put(functionInProgressAction());
    yield call(deleteMagazine, action.payload);
    yield put(functionSuccessAction());
    yield put({ type: GET_MAGAZINES_START });
    yield call(message.success, 'Magazine deleted successfully');
  } catch (error) {
    yield put(functionErrorAction());
    yield call(message.error, 'Something went wrong. Magazine not delited.');
  }
}

export function* deleteMagazineWatcherSaga() {
  yield takeLatest(DELETE_FUNCTION_START, deleteMagazineSaga);
}

function* addMagazineSaga(action) {
  try {
    yield put(functionInProgressAction());
    yield call(addMagazine, action.payload);
    yield put(functionSuccessAction());
    yield put({ type: GET_MAGAZINES_START });
    yield call(message.success, 'Magazine added successfully');
  } catch (error) {
    yield put(functionErrorAction());
    yield call(message.error, 'Something went wrong. Magazine not added.');
  }
}

export function* addMagazineWatcherSaga() {
  yield takeLatest(ADD_FUNCTION_START, addMagazineSaga);
}
