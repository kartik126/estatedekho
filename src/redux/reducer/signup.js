import apiClient from 'utils/apiClient';
import { setAuthData } from '../session';
const SET_SIGNUP_DATA = 'redux/signup/SET_SIGNUP_DATA';
const SET_SIGNUP_NAME = 'redux/signup/SET_SIGNUP_NAME';
const SET_EMAIL = 'redux/signup/SET_EMAIL';
const SET_SIGNUP_PHONE = 'redux/signup/SET_SIGNUP_PHONE';
const SET_OTP = 'redux/signup/SET_OTP';
const SET_ERROR_MESSAGE = 'redux/signup/SET_ERROR_MESSAGE';
import toast, { Toaster } from 'react-hot-toast';
export const initialState = {
  name: '', // kept this for otp verification
  email: '',
  NewPhone: '',
  SignupOtp: '',
  errorMessage: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_SIGNUP_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        email: action.email,
      };
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    case SET_SIGNUP_PHONE: {
      return {
        ...state,
        NewPhone: action.NewPhone,
      };
    }
    case SET_OTP: {
      return {
        ...state,
        SignupOtp: action.SignupOtp,
      };
    }
    default:
      return state;
  }
};

export default signupReducer;
