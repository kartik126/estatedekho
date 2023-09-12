/* eslint-disable @typescript-eslint/no-this-alias */
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-google-places-autocomplete';
import NextStorage from './nextLocalStorage';
import CryptoJS from 'crypto-js';

const formatGooglePlaceResponseArray = (
  responseArray,
  exlude = (key) => false,
  copyParams = {}
) => {
  const address = {};
  if (responseArray?.length > 0) {
    responseArray.forEach((item) => {
      if (item.types) {
        if (item.types.includes('street_number') && !exlude('streetNumber')) {
          address.streetNumber = item.long_name;
        }
        if (item.types.includes('route') && !exlude('streetName')) {
          address.streetName = item.long_name;
        }
        if (item.types.includes('sublocality') && !exlude('locality')) {
          address.locality = item.long_name;
        }
        if (item.types.includes('locality') && !exlude('city')) {
          address.city = item.long_name;
        }
        if (
          item.types.includes('administrative_area_level_1') &&
          !exlude('province')
        ) {
          address.province = item.long_name;
        }
        if (item.types.includes('postal_code') && !exlude('postalCode')) {
          address.postalCode = item.long_name;
        }
      }
    });
  }
  return {
    ...address,
    ...copyParams,
  };
};

export const fetchAddressFromGooglePlaces = async (
  response = '',
  exlude = (key) => false,
  extra = {}
) => {
  try {
    const results = await geocodeByAddress(response.description);
    const coordinates = await getLatLng(results[0]);
    const { lat, lng } = coordinates;
    const responseArr = results[0].address_components;
    return formatGooglePlaceResponseArray(responseArr, exlude, {
      coordinates: [lat, lng],
      address: response.description,
      place: response.description,
      place_id: response.place_id,
      ...extra,
    });
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getAddressByPlaceId = async (
  placeId,
  coordinates,
  extra = {},
  exlude = (key) => false
) => {
  try {
    const results = await geocodeByPlaceId(placeId);
    const { lat, lng } = coordinates || {};
    const responseArr = results[0].address_components;
    const address = {
      coordinates: [lat, lng],
      ...extra,
    };
    return formatGooglePlaceResponseArray(responseArr, exlude, address);
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const eleminateKeys = (data, ignore) => {
  const obj = {};
  Object.keys(data).forEach((key) => {
    if (!ignore.includes(key)) {
      obj[key] = data[key];
    }
  });
  return obj;
};

export const removeEmptyKeys = (data) => {
  const obj = {};
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      obj[key] = data[key];
    }
  });
  return obj;
};

export const ensureHex = (hexValue = '') => {
  if (hexValue && hexValue.includes('#')) {
    return hexValue;
  } else {
    return `#${hexValue || ''}`;
  }
};

export const smoothScrollTo = (id, block, className = '', callBack) => {
  const node = document.getElementById(id);
  if (node && node.scrollIntoView) {
    if (className) {
      node.classList.remove(className);
      node.classList.add(className);
    }
    node.scrollIntoView({
      behavior: 'smooth',
      block: block || 'center',
    });
    if (callBack) {
      callBack(id);
    }
  }
};

export const scrollToHash = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  if (!href.includes('#')) {
    console.error("'#' not added to link");
    return;
  }
  const scrollHash = href.split('#')[1];
  console.log(scrollHash);
  smoothScrollTo(scrollHash);
};

export const overwrite = (oldObject = {}, newObject = {}, reset = {}) => {
  return removeEmptyKeys({
    ...oldObject,
    ...newObject,
    ...reset,
  });
};

export const toggleFromArray = (
  arr = [],
  ele,
  shouldReset = false,
  getUniqueId = (o) => o
) => {
  if (ele && arr && typeof getUniqueId === 'function') {
    const eleArr = arr.map(getUniqueId);
    const eleIndex = eleArr.findIndex((id) => id == getUniqueId(ele));
    if (eleIndex > -1) {
      return arr.filter((o) => getUniqueId(o) != getUniqueId(ele));
    } else {
      return [...(shouldReset ? [] : arr), ele];
    }
  }
  return [];
};

export const getArrayParamFromQuery = (data, key) => {
  const value = data[key];
  if (value && Array.isArray(value)) {
    return value;
  } else if (value && typeof value === 'string' && value.includes(',')) {
    return value.split(',');
  }
  return value ? [value] : [];
};

export const convertToTimeFormat = (values, withMeridian = false) => {
  const timeStr = `${values || '000'}`;
  if (timeStr.length === 3) {
    return `0${timeStr.charAt(0)}:${timeStr.slice(1)}${
      withMeridian ? ' am' : ''
    }`;
  } else {
    return `${timeStr.slice(0, 2)}:${timeStr.slice(2)}${
      withMeridian ? ' pm' : ''
    }`;
  }
};

export const getOrTakeDefault = (data = {}, defaultData = {}) => {
  return (key) =>
    (key in data && typeof data[key] !== 'undefined' && data[key]) ||
    defaultData[key];
  // return (key) => (key in data && typeof data[key] !== "undefined") ? data[key] : defaultData[key];
};

export const makeDispatchIf =
  (shouldDispatch, _thunk) => () => async (dispatch, getState) => {
    const state = getState();
    const shouldDispatchAction = _thunk && shouldDispatch(state);
    if (shouldDispatchAction) {
      const reduxAction = typeof _thunk === 'function' ? _thunk() : _thunk;
      await dispatch(reduxAction);
    }
  };

export const withHttp = (uri = '') => {
  if (uri.includes('http')) {
    return uri;
  }
  return 'http://' + uri;
};

export const getRating = (ratingLike, precision = 1) => {
  const rating = parseFloat(ratingLike);
  const rate = isNaN(rating) ? 0 : (5 * rating) / 100;
  return rate.toFixed(precision);
};

export const getAverateRating = (reviews = []) => {
  if (reviews && reviews.length) {
    const reviewsWithRating = reviews
      .filter((o) => o.rating)
      .map((o) => parseFloat(o.rating));
    return (
      reviewsWithRating.reduce((sum, n) => sum + n, 0) /
      reviewsWithRating.length /
      20
    );
  }
  return 0;
};

export const validateEmail = (mail = '') => {
  // return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
  return /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(
    mail
  );
};

export const validatePhoneNumber = (number = '') => {
  const trimmed = number ? number.trim() : '';
  if (!trimmed) {
    return false;
  }
  // const regex = /(\(0\d\d\)\s\d{3}[\s-]+\d{4})|(0\d\d[\s-]+\d{3}[\s-]+\d{4})|(0\d{9})|(\+\d\d\s?[\(\s]\d\d[\)\s]\s?\d{3}[\s-]?\d{4})/;
  const regex = /^(0)(\d{9})$/;
  return regex.test(trimmed) === true;
};

export const isValidBusinessRegNumber = (number) => {
  const trimmed = number.replace(/\s/g, '');
  const regex = new RegExp('((19|20)[\\d]{2}/[\\d]{6}/[\\d]{2})');
  return regex.test(trimmed) === true;
};

export const isvalidVatRegNumber = (number) => {
  const trimmed = number.replace(/\s/g, '');
  return trimmed.length === 10;
};

export const validatePostalCode = (postalCode = '') => {
  const trimmed = postalCode.replace(/\s/g, '');
  const regex = /^[1-9]\d{3}$/;
  return regex.test(trimmed) === true;
};

export const validateField = (value = '', type) => {
  if (['phoneNumber', 'secondaryContactNumber'].includes(type)) {
    return validatePhoneNumber(value);
  } else if (['email'].includes(type)) {
    return validateEmail(value);
  } else {
    return !!value;
  }
};

export const isMobile = () => {
  let check = false;
  if (typeof window !== 'undefined') {
    const windowT = window;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || windowT.opera);
  }
  return check;
};

export const getLoggedInUser = () => {
  const loginUser = NextStorage.getItem('loginUser') || '';
  const user = loginUser || { user: null };
  return {
    ...user,
    loggedIn: loginUser !== '',
  };
};

export const VENDOR = 'VENDOR';
export const CONSUMER = 'CONSUMER';

export const createLoginUser = (userData) => {
  if (userData && userData.user && userData.user._id) {
    const roles = userData.user.roles?.length ? userData.user.roles : [];
    const user = Object.assign({}, userData.user, {
      viewType:
        roles.includes('vendor') || roles.includes('corporate')
          ? VENDOR
          : CONSUMER,
    });
    const loginUser = Object.assign({}, userData, { user });
    NextStorage.setItem('loginUser', loginUser);
  }
};

export const getUserViewType = () => {
  const { user } = getLoggedInUser();
  if (user && typeof user.viewType == 'string' && user.viewType) {
    return user.viewType == VENDOR ? VENDOR : CONSUMER;
  }
  return '';
};

export const isVendorView = () => getUserViewType() == VENDOR;
export const isConsumerView = () => getUserViewType() == CONSUMER;

export const makeCoordinates = (coordinatesLike) => {
  const coordinates =
    typeof coordinatesLike == 'string'
      ? coordinatesLike.split(',')
      : Array.isArray(coordinatesLike)
      ? coordinatesLike
      : [];
  const validCoordinates =
    coordinates &&
    coordinates.length == 2 &&
    coordinates.every((n) => !isNaN(n));
  if (validCoordinates) {
    return {
      lat: parseFloat(coordinates[0]),
      lng: parseFloat(coordinates[1]),
    };
  }
  return {
    lat: 0,
    lng: 0,
  };
};

export const isProdEnv = () => process.env.MODE === 'prod';

export const encryptValue = (value) =>
  CryptoJS.AES.encrypt(
    value,
    '2TY2g?82?ufEkE@4FQT4-$7$WdU*7pTQ3DZRn?6-2mb2Vm'
  ).toString();

export const decryptValue = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    '2TY2g?82?ufEkE@4FQT4-$7$WdU*7pTQ3DZRn?6-2mb2Vm'
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const decryptSilent = (cipherText, defaultValue = null) => {
  try {
    return decryptValue(cipherText);
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
