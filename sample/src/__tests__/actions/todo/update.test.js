import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../../actions/todo';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  it('to toggle todo', () => {

    const store = mockStore({
      //...
    });

  });
});
