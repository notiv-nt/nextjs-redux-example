import * as types from './types';

export const setNameAsync = (payload) => (dispatch) =>
  setTimeout(() => {
    dispatch({ type: types.SET_NAME, payload });
  }, 500);

export const setName = (payload) => ({ type: types.SET_NAME, payload });
