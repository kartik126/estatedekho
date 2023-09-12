import apiClient from 'utils/apiClient';
import { getLocalStorageItem } from 'utils/constant';
import { setAuthData } from '../session';
import toast, { Toaster } from 'react-hot-toast';
const SET_LOGIN_DATA = 'redux/login/SET_LOGIN_DATA';
const SET_PHONE = 'redux/login/SET_PHONE';
const SET_OTP = 'redux/login/SET_OTP';

const initialState = {
  isLoggedIn: false,
  userName: '',
  phone: '',
  otp: '',
  loginPayload: {
    strategy: 'local',
    username: '',
    password: '',
  },
  loginErrorPopup: false,
  noPassword: false,
  loginValidationError: {},
  viewTypeCount: 0,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA: {
      return {
        ...state,
        loginPayload: {
          ...state.loginPayload,
          ...action.payload,
        },
        loginValidationError: {},
        isLoggedIn: true,
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case SET_OTP: {
      return {
        ...state,
        otp: action.otp,
      };
    }

    default:
      return state;
  }
};

export default loginReducer;
