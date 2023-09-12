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

export const setSignupData = (key, value) => ({
  type: SET_SIGNUP_DATA,
  payload: {
    [key]: value,
  },
});
export const setSignupName = (name) => {
  return {
    type: SET_SIGNUP_NAME,
    name: name.target.value,
  };
};

export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage: errorMessage.target.value,
  };
};
export const setSignupEmail = (email) => {
  return {
    type: SET_EMAIL,
    email: email.target.value,
  };
};
export const setSignupPhone = (Phone) => {
  return {
    type: SET_SIGNUP_PHONE,
    NewPhone: Phone.target.value,
  };
};
export const setSignupOtp = (otp) => {
  return {
    type: SET_OTP,
    SignupOtp: otp,
  };
};
export const requestSignupOtp = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { name, email, NewPhone } = state.signup;
  try {
    // dispatch({
    //   type: LOGIN_START,
    // });
    const response = await apiClient.post(apiClient.Urls.signUp, {
      name: name,
      email: email,
      mobile: NewPhone,
    });

    console.log('Send otp for signup---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      toast.success(response.message);
    } else {
      toast.error(response.errors);

      dispatch({
        type: SET_ERROR_MESSAGE,
        errorMessage: response.errors,
      });
      console.log('error===>', response.message);
    }
  } catch (e) {
    alert(e.message);
  }
};
export const verifySignupOtp = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { NewPhone, email, name, SignupOtp } = state.signup;
  try {
    // dispatch({
    //   type: LOGIN_START,
    // });
    const response = await apiClient.post(apiClient.Urls.verifySignupOtp, {
      mobile: NewPhone,
      otp: SignupOtp,
      name: name,
      email: email,
    });

    console.log('verify otp---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      localStorage.setItem('profile', response.profile.name);
      localStorage.setItem('authToken', response.profile.authToken);
      dispatch({
        type: SET_SIGNUP_DATA,
      });
      dispatch(setAuthData(response.profile.authToken, response.profile));
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (e) {
    alert(e.message);
  }
};
