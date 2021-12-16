import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { getMagazinesThunk } from '../MagazinesThunks';
import client from '../../../../api/client';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  data: [],
  loading: false,
};

describe('Test getMagazinesThumk', () => {
  let store;
  beforeEach(() => {
    moxios.install(client);
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all magazines correctly', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: [
            {
              uuid: '98f89493-d557-4624-8cf6-005b0ae92895',
              name: 'string',
              author: 'string',
              description: 'string',
              createDate: '2021-11-26T09:55:07.213Z',
            },
          ],
        },
      });
    });

    const expectedActions = [
      {
        type: 'GET_MAGAZINES_START',
      },
      {
        payload: [
          {
            uuid: '98f89493-d557-4624-8cf6-005b0ae92895',
            name: 'string',
            author: 'string',
            description: 'string',
            createDate: '2021-11-26T09:55:07.213Z',
          },
        ],

        type: 'GET_MAGAZINES_SUCCESS',
      },
    ];
    store.dispatch(getMagazinesThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it('Returns error action on bad request', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
      });
    });

    const expectedActions = [
      {
        type: 'GET_MAGAZINES_START',
      },
      {
        type: 'GET_MAGAZINES_ERROR',
      },
    ];
    store.dispatch(getMagazinesThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
});
