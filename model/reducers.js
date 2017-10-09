import { ##NAME## } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from '../utils';

const initialState = [];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ##NAME##.fetch.types.SUCCESS:
      return Object.assign([], state, payload);
    case ##NAME##.create.types.SUCCESS:
      return stateReducerCreate(state, payload);
    case ##NAME##.update.types.SUCCESS:
      return stateReducerUpdate(state, payload);
    case ##NAME##.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
