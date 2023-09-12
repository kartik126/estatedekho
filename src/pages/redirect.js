import { TsetPreLoader } from 'components/providers/Loader';
import { NextRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectPage = (props) => {
  const { router } = props;
  const { redirect, defaultPath, ...restQuery } = router.query;
  const redirectTo = redirect || defaultPath;

  useEffect(() => {
    router.replace({
      pathname: typeof redirectTo == 'string' && redirectTo ? redirectTo : '/',
      query: restQuery,
    });
  }, [redirectTo]);

  return (
    <div>
      <p>Redirecting, Pleas wait...</p>
    </div>
  );
};

export default RedirectPage;
