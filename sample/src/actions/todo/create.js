import { createTypes, createActions } from '../../utils';

export const types = createTypes('TODO:CREATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  // setTimeout(() => {
    dispatch(actions.success(data));
  // }, 500);

  // dispatch(actions.errors());
  // dispatch(actions.fails());
};
