import { createTypes, createActions } from '../../utils';

export const types = createTypes('##NAME##:CREATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());
};
