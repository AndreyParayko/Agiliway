import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import {getMagazinesThunk} from '../MagazinesThunks';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  data: [],
  isLoading: true,
};
const postsList = [
  {
    uuid: 1,
    name: 'aaa',
    description:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    author: 'abc',
    publishDate: 'today',
  },
];
describe('Test Post Actions', () => {
  let store;
  beforeEach(() => {
    moxios.install();
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all posts correctly', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        data: [
          {
            uuid: 1,
            name: 'aaa',
            description:
              'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            author: 'abc',
            publishDate: 'today',
          },
        ],
      });
    });

    const expectedActions = [
      {
        type: 'GET_MAGAZINES_START',
      },
      {
        type: 'GET_MAGAZINES_SUCCESS',
        postsList,
      },
    ];
    store.dispatch(getMagazinesThunk());
    const actualAction = store.getActions();
    expect(actualAction).toEqual(expectedActions);
    return done();
  });

  it('Returns error action when no posts found', (done) => {
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
    store.dispatch(getMagazinesThunk());
    const actualAction = store.getActions();
    expect(actualAction).toEqual(expectedActions);
    return done();
  });
});
