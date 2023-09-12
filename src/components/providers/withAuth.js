import { NextPage } from 'next';
import withAuthRedirect from './withAuthRedirect';

/**
 * Require the user to be authenticated in order to render the component.
 * If the user isn't authenticated, forward to the given URL.
 */
export default function withAuth(
  WrappedComponent,
  location = '/login',
  shouldRedirect = undefined
) {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: true,
    shouldRedirect,
  });
}

export function redirectAfterAuth(
  WrappedComponent,
  location = '/',
  shouldRedirect = undefined
) {
  return withAuthRedirect({
    WrappedComponent,
    location,
    expectedAuth: false,
    shouldRedirect,
  });
}
