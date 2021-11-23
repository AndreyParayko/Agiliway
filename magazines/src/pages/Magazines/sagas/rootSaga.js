import { all } from 'redux-saga/effects';
import watcherGetMagazinesSaga from './magazinesSagas';

export default function* rootSaga() {
  yield all([watcherGetMagazinesSaga()]);
}
