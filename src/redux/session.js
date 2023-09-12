import { type } from 'os';
import apiClient from 'utils/apiClient';
const SET_AUTH_DATA = 'redux/session/SET_AUTH_DATA';

const initialState = {
  authToken: null,
  profile: null,
};
export const setAuthData = (authToken, profile) => ({
  type: SET_AUTH_DATA,
  authToken,
  profile,
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        authToken: action.authToken,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export default sessionReducer;
