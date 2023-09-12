import fetch from 'isomorphic-unfetch';
import { getLocalStorageItem, BASEURL } from './constant';
import { eleminateKeys } from './helpers';

const baseUrl = 'https://seller.estatedekho.com';
const imgUrl = 'https://seller.estatedekho.com/';

function encodeQueryData(data = null) {
  if (data) {
    const ret = [];
    for (const d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return '?' + ret.join('&');
  }
  return '';
}

const getLocalToken = () => {
  //const publicToken = getLocalStorageItem("Public_OAuth2_Token");
  if (typeof window !== 'undefined') {
    const authToken = getLocalStorageItem('authToken');

    //const authorized = user?.accessToken;
    console.log('AuthToken ---', authToken);
    if (authToken !== null && authToken !== '') {
      return 'Bearer ' + authToken;
    } else {
      // return "Bearer " + publicToken;
      return '';
    }
  }
};

const apiClient = {
  Urls: {
    baseUrl,
    imgUrl,
    usersignup: BASEURL + `/users/signup`,
    sendOtp: BASEURL + `/api/web/sendOtp`,
    verifyOtp: BASEURL + `/api/web/verifyOtp`,
    getProfile: BASEURL + `/api/web/profile`,
    getCities: BASEURL + `/api/list/cities`,
    getHomeExplore: BASEURL + `/api/web/home/explore`,
    searchListing: BASEURL + `/api/web/home/search`,
    getHomeData: BASEURL + `/api/web/home/content`,
    getPropertyDetail: BASEURL + `/api/web/property/details`,
    addToFavourite: BASEURL + `/api/web/property/favourite`,
    getFavourite: BASEURL + `/api/web/properties/favourite`,
    newsList: BASEURL + `/api/web/blog/posts`,
    projectNews: BASEURL + `/api/news/new-projects`,
    newsPlots: BASEURL + `/api/news/new-plots`,
    newsCategory: BASEURL + `/api/web/blog/categories`,
    blogDetails: BASEURL + `/api/web/blog/post`,
    contactDeveloper: BASEURL + `/api/web/contact/developer`,
    propertyContact: BASEURL + `/api/web/contact/property`,
    developersList: BASEURL + `/api/list/developers`,
    developerDetail: BASEURL + `/api/web/developer/`,
    signUp: BASEURL + `/api/web/signup/sendOtp`,
    verifySignupOtp: BASEURL + `/api/web/signup/verifyOtp`,
    getLocalities: BASEURL + `/api/web/localities`,
    getHistory: BASEURL + `/api/web/property/history`,
    updateProfile: BASEURL + `/api/web/profile/update`,
    contactedProperties: BASEURL + `/api/web/property/contacted`,
    landingPage: BASEURL + `/api/web/project`,
  },

  make: function (url, method, params, Auth) {
    console.warn('apiclient params------->', url, params, Auth);
    let config = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (params) {
      config = Object.assign({}, config, params.headers || {});
      params = Object.assign({}, eleminateKeys(params, ['headers']));
    }
    if (Auth === true) {
      config['Authorization'] = getLocalToken();
    }
    const options = {
      method,
      headers: config,
    };
    if (method == 'POST' || method == 'PATCH' || method == 'DELETE') {
      options['body'] = JSON.stringify(params);
    } else if (method == 'GET') {
      let queryParams = '';
      if (Object.keys(params || {}).length) {
        queryParams = encodeQueryData(params);
      }
      url = url + queryParams;
    }
    return fetch(url, options)
      .then((response) => response.json())
      .catch((e) => e);
  },

  post: function (url, params, Auth) {
    return this.make(url, 'POST', params, Auth);
  },

  get: function (url, params, Auth) {
    return this.make(url, 'GET', params, Auth);
  },

  patch: function (url, params, Auth) {
    return this.make(url, 'PATCH', params, Auth);
  },

  delete: function (url, params, Auth) {
    return this.make(url, 'DELETE', params, Auth);
  },
};

export default apiClient;
