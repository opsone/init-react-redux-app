import { createTypes, createActions } from '../../utils';

export const types = createTypes('TODO:FETCH');
export const actions = createActions(types);

export const dispatch = () => dispatch => {
  dispatch(actions.request());
};
