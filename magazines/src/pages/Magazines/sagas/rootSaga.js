import { all } from 'redux-saga/effects';
import {
  getMagazinesWatcherSaga,
  getMagazineWatcherSaga,
  editGetDataWatcherSaga,
  editMagazineWatcherSaga,
  deleteMagazineWatcherSaga,
  addMagazineWatcherSaga,
} from './magazinesSagas';

export default function* rootSaga() {
  yield all([
    getMagazinesWatcherSaga(),
    getMagazineWatcherSaga(),
    editGetDataWatcherSaga(),
    editMagazineWatcherSaga(),
    deleteMagazineWatcherSaga(),
    addMagazineWatcherSaga(),
  ]);
}
