import apiClient from 'utils/apiClient';

const SET_PROPERTIES = 'redux/propertydetails/SET_PROPERTIES';

export const setData = (e) => {
  return {
    type: SET_PROPERTIES,
    properties: e,
  };
};
export const getPropertyDetail = (e) => async (dispatch) => {
  alert(e);
  const response = await apiClient.post(apiClient.Urls.getPropertyDetail, {
    slug: e,
    config: 'all',
  });
  console.log(
    'response======================================================>',
    response.data
  );
};
