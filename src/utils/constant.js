export const configure = ({ dev, uat, prod, preProd }) => {
  return process.env.MODE === 'dev'
    ? dev || uat
    : process.env.MODE === 'uat'
    ? uat
    : process.env.MODE === 'preprod'
    ? preProd
    : prod;
};

console.log(
  'LOADING CONFIGS FOR ::',
  configure({
    prod: 'PROD',
    preProd: 'PRE_PROD',
    uat: 'UAT',
    dev: 'DEV',
  })
);

export const DOMAIN =
  typeof window !== 'undefined' ? window.location.origin + '' : '';

export const DOMAIN_URL = configure({
  prod: 'https://seller.growthdekho.in',
  preProd: 'https://seller.growthdekho.in',
  uat: 'https://seller.growthdekho.in',
  dev: 'https://seller.growthdekho.in',
});

export const DEFAULT_PROFILE_IMAGE = `/images/Vector.png`;
export const LOGO_VECTOR = `/images/Vector.png`;
export const LOGO_BLACK = `/images/black_logo.svg`;

export const getLocalStorageItem = (key) => {
  if (typeof localStorage !== 'undefined') {
    if (
      localStorage.getItem(key) !== '' &&
      localStorage.getItem(key) !== null
    ) {
      return localStorage.getItem(key);
    }
    return null;
  }
  return null;
};

export const originURL = 'https://seller.growthdekho.in';

export const BASEURL = configure({
  prod: 'https://seller.estatedekho.com',
  preProd: 'https://seller.estatedekho.com',
  uat: 'https://seller.estatedekho.com',
  dev: 'https://seller.estatedekho.com',
});

export const SEO_CONTENT = `${BASEURL}/seoContent`;

export const IMAGES_BASE_URL = configure({
  prod: 'https://seller.growthdekho.in',
  preProd: 'https://seller.growthdekho.in',
  uat: 'https://seller.growthdekho.in',
  dev: 'https://seller.growthdekho.in',
});

export const SIGNUPEMAILVERIFY = BASEURL + `/resendotp`;
export const SIGNUP_WITH_SM = `${BASEURL}/registrationwithsocialmedia`;
export const LOGIN_WITH_SM = `${BASEURL}/loginwithsocialmedia`;

export const appleicon = DOMAIN + '/images/apple-icon.png';
export const applesicon = DOMAIN + '/images/Image 7@3x.png';
export const playicon = DOMAIN + '/images/google-play-icon.png';
export const chatIcon = DOMAIN + '/images/chat.png';

const getWindowGlobal = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
  return {};
};
export const googleAnalytics = {
  dataLayer: [],
  ...getWindowGlobal(),
};
export const sizmekTag = {
  generateRequest: {},
  ...getWindowGlobal(),
};

export const search_icon = DOMAIN + '/images/search-icon.svg';
export const location_icon = DOMAIN + '/images/location-icon.svg';
export const tenders_icon = '/images/_tenders.svg';
export const profile_icon = DOMAIN + '/images/_profile.svg';
export const phone_icon = DOMAIN + '/images/phone-call.svg';

const cipher = (salt) => {
  const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  const byteHex = (n) => ('0' + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text) =>
    ('' + text)
      .split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
};

const decipher = (salt) => {
  const textToChars = (text) => text.split('').map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) =>
    textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join('');
};

export const encrypt = cipher('MARKETPLACE');
export const decrypt = decipher('MARKETPLACE');

export const convertqueryparamtojson = (search) => {
  const pairs = search.slice(1).split('&');

  const result = {};
  pairs.forEach(function (pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.parse(JSON.stringify(result));
};

export const jsonToQueryString = (json) => {
  return Object.keys(json)
    .map(function (key) {
      return key + '=' + json[key];
    })
    .join('&');
};

export const Authenticated = (getLocalStorageItem('currentUser') || '') !== '';

/** Regular Expressions Constants **/
// eslint-disable-next-line

export const emailregexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const lowercase1regex = /^(?=.*[a-z])/;
export const uppercase1regex = /^(?=.*[A-Z])/;
export const numberregex = /^(?=.*[0-9])/;
export const specialregex = /^(?=.*[!@#$%^&*()~?<>])/;
export const length8regex = /^(?=.{8,})/;
export const length6regex = /^(?=.{6,})/;
export const passwordregexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const numbersregexp = /^[0-9]*$/;
export const mobileSAregexp = /^\(0[0-9]{1}[0-9]{1}\)[0-9]{7}$/;
export const ZAmobileregexp =
  /^[+][2][7][\s][(][0-9]{2}[)][\s][0-9]{3}[-][0-9]{4}$/;
export const ZApostalcode = /^[1-9]\d{3}$/;
export const creditcardexp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}/;
export const nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
export const validSAMobileNumberRegex = /^0(6|7|8){1}[0-9]{1}[0-9]{7}$/;

export const domainRegex =
  /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g;
export const facebookRegex =
  /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i;
export const instagramRegex =
  /^(https?:\/\/)?((w{3}\.)?)instagram\.com\/(#!\/)?[a-z0-9_]+$/i;
export const twitterRegex =
  /^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i;

export const domainTest = (str) => {
  return domainRegex.test(str);
};

export const facebookTest = (str) => {
  return facebookRegex.test(str);
};

export const emailTest = (str) => {
  return validEmailRegex.test(str);
};

export const instagramTest = (str) => {
  return instagramRegex.test(str);
};

export const twitterTest = (str) => {
  return twitterRegex.test(str);
};

export const linkedInTest = (str) => {
  const regex = new RegExp(
    '((www|ww).)?linkedin.com/((in/[^/]+/?)|(pub/[^/]+/((w|d)+/?){3}))$'
  );
  return regex.test(str) == true;
};

export const validURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

export const facebookAppId = '3300332149986675';
export const googleClientId = '';
export const appleAppId = 'za.co.connectolabs.YeppMarketplace';
export const GOOGLE_PLACES_KEY = 'AIzaSyBBw17hDdX7_BLxRouq9zXnNePpYC-NE40';
