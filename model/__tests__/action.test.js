import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../../actions/##NAME##';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  it('to toggle ##NAME##', () => {

    const store = mockStore({
      //...
    });

  });
});
