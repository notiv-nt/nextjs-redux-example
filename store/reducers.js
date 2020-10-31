import { combineReducers } from 'redux';
import * as types from './types';

const nameReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SET_NAME:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  name: nameReducer,
};

export default combineReducers(reducers);
