import { useRouter } from 'next/router';
import { useStore } from 'react-redux';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { useAuth } from './Auth';

function isBrowser() {
  return typeof window !== 'undefined';
}

function DefaultLoadingFallback() {
  return <p>Loading...</p>;
}

/**
 * Support client-side conditional redirecting based on the user's
 * authenticated state.
 *
 * @param WrappedComponent The component that this functionality
 * will be added to.
 * @param LoadingComponent The component that will be rendered while
 * the auth state is loading.
 * @param expectedAuth Whether the user should be authenticated for
 * the component to be rendered.
 * @param location The location to redirect to.
 *
 * @param shouldRedirect is the function passed which will get redux store as its first parameter
 * and default redirect location as second, that can be used to decide the redirect to location
 * based on the path returned by this function, if nothing is returned from this function
 * no redirection takes place. everything works as normal auth guard.
 */
export default function withAuthRedirect({
  WrappedComponent,
  LoadingComponent = DefaultLoadingFallback,
  expectedAuth,
  shouldRedirect,
  location,
}) {
  const WithAuthRedirectWrapper = (props) => {
    const store = useStore();
    const router = useRouter();
    const { isLoading, isAuthenticated } = useAuth();

    if (isLoading) {
      return <LoadingComponent />;
    }

    let forceRedirectTo = undefined;
    let canRedirect = false;
    if (typeof shouldRedirect === 'function') {
      forceRedirectTo = shouldRedirect(store.getState(), location);
      canRedirect =
        typeof forceRedirectTo === 'string' && forceRedirectTo.trim() !== '';
    }

    const { query } = router;
    const { redirect } = query || {};
    if (router.pathname !== '/redirect') {
      if (isBrowser() && expectedAuth !== isAuthenticated) {
        if (redirect) {
          router.replace(
            {
              pathname: '/redirect',
              query: query,
            },
            undefined,
            { shallow: true }
          );
          return <></>;
        }
        router.replace(
          {
            pathname: location,
            query: query,
          },
          undefined,
          { shallow: true }
        );
        return <></>;
      }
      if (isBrowser() && canRedirect) {
        router.replace(forceRedirectTo, undefined, { shallow: true });
        return <></>;
      }
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
}
