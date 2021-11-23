import { call, put, takeEvery } from 'redux-saga/effects';
import { getMagazines } from '../../../api/domain';

function* getMagazinesSaga() {
  try {
    const data = yield call(getMagazines);
    yield put({ type: 'GET_MAGAZINES_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'GET_MAGAZINES_ERROR' });
  }
}

function* watcherGetMagazinesSaga() {
  yield takeEvery('GET_MAGAZINES_START', getMagazinesSaga);
}

export default watcherGetMagazinesSaga;
