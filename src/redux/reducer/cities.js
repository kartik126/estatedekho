import apiClient from 'utils/apiClient';
import { setAuthData } from '../session';
const SET_CITIES = 'redux/cities/SET_CITIES';
const SET_CITY_NAME = 'redux/cities/SET_CITY_NAME';
const SET_LOCALITIES = 'redux/cities/SET_LOCALITIES';
const SET_ERROR_MESSAGE = 'redux/cities/SET_ERROR_MESSAGE';
import toast, { Toaster } from 'react-hot-toast';

export const initialState = {
  cities: null,
  errorMessage: '',
  city_name: 'Hyderabad',
  localities: null,
};

const CitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    case SET_CITIES: {
      return {
        ...state,
        cities: action.cities,
      };
    }
    case SET_CITY_NAME: {
      return {
        ...state,
        city_name: action.city_name,
      };
    }
    case SET_LOCALITIES: {
      return {
        ...state,
        localities: action.localities,
      };
    }
    default:
      return state;
  }
};

export default CitiesReducer;
