import apiClient from 'utils/apiClient';
import { setAuthData } from '../session';
const SET_CITIES = 'redux/cities/SET_CITIES';
const SET_CITY_NAME = 'redux/cities/SET_CITY_NAME';
const SET_LOCALITIES = 'redux/cities/SET_LOCALITIES';
const SET_ERROR_MESSAGE = 'redux/cities/SET_ERROR_MESSAGE';
import toast, { Toaster } from 'react-hot-toast';

// export const initialState = {
//   cities: null,
//   errorMessage: '',
//   city_name: 'Hyderabad',
//   localities: null,
// };
export const setCities = (e) => {
  return {
    type: SET_CITIES,
    cities: e,
  };
};
export const setLocalities = (e) => {
  return {
    type: SET_LOCALITIES,
    localities: e,
  };
};
export const setCityName = (e) => {
  return {
    type: SET_CITY_NAME,
    city_name: e,
  };
};
export const setErrorMessage = (errorMessage) => {
  return {
    type: SET_ERROR_MESSAGE,
    errorMessage: errorMessage.target.value,
  };
};
export const getCities = (e) => async (dispatch, getState) => {
  const state = getState();
  try {
    const response = await apiClient.get(apiClient.Urls.getCities, {}, true);

    console.log('Cities---------->', response);

    if (response.success) {
      dispatch({
        type: SET_CITIES,
        cities: response.data,
      });
      // dispatch({
      //   type: SET_CITY_NAME,
      //   city_name: response.data[0].city_name,
      // });
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
export const getLocalities = (e) => async (dispatch, getState) => {
  const state = getState();

  const { city_name } = state.cities;
  try {
    const response = await apiClient.post(
      apiClient.Urls.getLocalities,
      { city: city_name, search: e },
      true
    );

    console.log('Localities---------->', response);

    if (response.success) {
      dispatch({
        type: SET_LOCALITIES,
        localities: response.data,
      });
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
