import apiClient from '../../utils/apiClient';
import Swal from 'sweetalert2';

const SET_PROP_TYPE = 'redux/home/SET_PROP_TYPE';
const SET_HOME_EXPLORE = 'redux/home/SET_HOME_EXPLORE';
const SET_HOME_DATA = 'redux/home/SET_HOME_DATA';

export const setPropertyType = (pType) => {
  // alert(propertyType)
  return {
    type: SET_PROP_TYPE,
    pType: pType,
  };
};

export const setHomeExplore = (HomeExplore) => {
  return {
    type: SET_HOME_EXPLORE,
    HomeExplore: HomeExplore,
  };
};

export const setHomeData = (HomeData) => {
  return {
    type: SET_HOME_DATA,
    HomeData: HomeData,
  };
};

export const getHomeExplore = (e) => async (dispatch, getState) => {
  const state = getState();
  // const { HomeExplore } = state.home;
  const { city_name } = state.cities;
  const { pType } = state.home;
  let res = apiClient.get(
    `${apiClient.Urls.getHomeExplore}/${city_name}/${e}`,
    {},
    true
  );
  res.then((result) => {
    console.log('ptype data response======>>>>', result);
    if (result.success) {
      dispatch({
        type: SET_HOME_EXPLORE,
        HomeExplore: result.data,
      });
    }
  });
};

export const getHomeData = (e) => async (dispatch, getState) => {
  // this.popularLocality();
  const state = getState();
  const { city_name } = state.cities;

  let res = apiClient.post(
    apiClient.Urls.getHomeData,
    {
      city: city_name,
    },
    true
  );

  res.then((result) => {
    console.log('home data response', result);
    if (result.success) {
      dispatch({
        type: SET_HOME_DATA,
        HomeData: result.data,
      });
    }
  });
};
