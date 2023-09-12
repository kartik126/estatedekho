import { getLocalStorageItem, STORE_DRAFTS } from 'utils/constant';
import Router from 'next/router';
import apiClient from 'utils/apiClient';
import { isEmpty } from 'lodash';

export const isLoggedIn = () => {
  const loginUser = JSON.parse(getLocalStorageItem('loginUser') || '{}') || {};
  return loginUser && loginUser.user && Object.keys(loginUser.user).length > 0;
};

export const goToOnBoardClickHandler = (
  e,
  pushToSignup = false,
  vendorSignUp = true,
  setPreLoader = (loading) => undefined
) => {
  e.preventDefault();
  if (((getLocalStorageItem('loginUser') || '') !== '') === true) {
    const currentUserDetails = JSON.parse(
      getLocalStorageItem('loginUser') || '{}'
    ).user;
    if (
      currentUserDetails &&
      currentUserDetails.roles &&
      currentUserDetails.roles.includes('vendor')
    ) {
      Router.push('/user/editstore');
    } else {
      setPreLoader(true);
      apiClient
        .get(STORE_DRAFTS, {}, true)
        .then((response) => {
          setPreLoader(false);
          if (response.success && isEmpty(response?.data)) {
            Router.push('/onboard/get-started/step-1');
          } else {
            Router.push('/user/create-store');
          }
        })
        .catch((e) => {
          console.log(e);
          setPreLoader(false);
          Router.push('/user/create-store');
        });
    }
  } else {
    if (pushToSignup) {
      Router.push({
        pathname: '/signup',
        query: {
          ...Router.query,
          redirect: Router.pathname,
          'vendor-signup': vendorSignUp,
        },
      });
    } else {
      Router.push({
        pathname: '/login',
        query: {
          ...Router.query,
          redirect: Router.pathname,
        },
      });
    }
  }
};

export const onBoardGuard = (store, location) => {
  const shouldGuardRoute = store.newOnboard.routeGuard;
  if (((getLocalStorageItem('loginUser') || '') !== '') === true) {
    const currentUserDetails = JSON.parse(
      getLocalStorageItem('loginUser') || '{}'
    ).user;
    if (
      currentUserDetails &&
      currentUserDetails.roles &&
      currentUserDetails.roles.includes('vendor') &&
      shouldGuardRoute
    ) {
      return '/user/editstore';
    }
  }
  return null;
};
