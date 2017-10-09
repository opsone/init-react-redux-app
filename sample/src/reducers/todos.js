import { todo } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from '../utils';

const initialState = [];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case todo.fetch.types.SUCCESS:
      return Object.assign([], state, payload);
    case todo.create.types.SUCCESS:
      return stateReducerCreate(state, payload);
    case todo.update.types.SUCCESS:
      return stateReducerUpdate(state, payload);
    case todo.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
