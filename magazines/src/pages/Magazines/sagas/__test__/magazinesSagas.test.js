import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { deepEqual } from 'assert';
import * as api from '../../../../api/domain';

import {
  getMagazinesInProgressAction,
  getMagazinesSuccessAction,
  getMagazinesErrorAction,
} from '../../actions/actions';

import { getMagazinesSaga } from '../magazinesSagas';

describe('Saga test', () => {
  const generator = cloneableGenerator(getMagazinesSaga)();
  test('Positive Saga call test', () => {
    const clone = generator.clone();
    // expect(clone.next().value).toEqual(put(getMagazinesInProgressAction()));
    deepEqual(
      clone.next().value,
      put(getMagazinesInProgressAction()),
      'should add inProgress action first',
    );
    deepEqual(
      clone.next().value,
      call(api.getMagazines),
      'should call getMagazines fetch',
    );
    deepEqual(
      clone.next().value,
      put(getMagazinesSuccessAction()),
      'should add Success action',
    );
    const result = clone.next().done;
    deepEqual(
      result,
      true,
      'should be done after end',
    );
  });
  test('Negative Saga call test', () => {
    const clone = generator.clone();
    deepEqual(
      clone.next().value,
      put(getMagazinesInProgressAction()),
      'should add inProgress action first',
    );
    deepEqual(
      clone.throw().value,
      put(getMagazinesErrorAction()),
      'should add Error action on error',
    );
  });
});
