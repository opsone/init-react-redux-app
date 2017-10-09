import { createTypes, createActions } from '../../utils';

export const types = createTypes('##NAME##:REMOVE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());
};
