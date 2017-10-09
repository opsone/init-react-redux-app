import { createTypes, createActions } from '../../utils';

export const types = createTypes('TODO:UPDATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());
  dispatch(actions.success(data));
};
