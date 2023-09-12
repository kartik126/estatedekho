import apiClient from 'utils/apiClient';
import { getLocalStorageItem } from 'utils/constant';
import { setAuthData } from '../session';
import toast, { Toaster } from 'react-hot-toast';
const SET_LOGIN_DATA = 'redux/login/SET_LOGIN_DATA';
const SET_PHONE = 'redux/login/SET_PHONE';
const SET_OTP = 'redux/login/SET_OTP';

export const setLoginData = (key, value) => ({
  type: SET_LOGIN_DATA,
  payload: {
    [key]: value,
  },
});
export const setPhone = (phone) => {
  return {
    type: SET_PHONE,
    phone: phone.target.value,
  };
};
export const setOtp = (otp) => {
  return {
    type: SET_OTP,
    otp,
  };
};
export const requestOtp = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { phone } = state.login;
  console.warn('cll', callback);
  try {
    // dispatch({
    //   type: LOGIN_START,
    // });
    const response = await apiClient.post(apiClient.Urls.sendOtp, {
      mobile: phone,
    });

    console.log('Send otp---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      // alert(response.message);
      toast.success(response.message);
    } else {
      // alert(response.message);
      toast.error(response.message);
      // dispatch({
      //   type: ERROR,
      //   errorMessage: response.message,
      // });
    }
  } catch (e) {
    alert(e.message);
  }
};
export const verifyOtp = (callback) => async (dispatch, getState) => {
  const state = getState();
  const { phone, otp } = state.login;
  console.warn('cll', callback);
  try {
    // dispatch({
    //   type: LOGIN_START,
    // });
    const response = await apiClient.post(apiClient.Urls.verifyOtp, {
      mobile: phone,
      otp: otp,
    });

    console.log('verify otp---------->', response);

    if (response.success) {
      if (callback) {
        callback();
      }
      toast.success(response.message);
      localStorage.setItem('profile', response.profile.name);
      localStorage.setItem('authToken', response.profile.authToken);
      dispatch({
        type: SET_LOGIN_DATA,
      });
      dispatch(setAuthData(response.profile.authToken, response.profile));
      // alert(response.message);
    } else {
      toast.error(response.message);
      // dispatch({
      //   type: ERROR,
      //   errorMessage: response.message,
      // });
    }
  } catch (e) {
    alert(e.message);
  }
};
