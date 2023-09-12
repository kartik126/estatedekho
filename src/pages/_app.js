/* eslint-disable @next/next/inline-script-id */
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import { wrapper } from '../redux/store';
import Router, { withRouter } from 'next/router';
// import Loader from 'components/Loader/loader';
import { GTMPageView } from '../utils/gtm';
import 'react-magic-slider-dots/dist/magic-dots.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/umd/popper';
import 'styles/globals.css';
import 'styles/responsive.css';
import 'styles/prophase.css';
import 'styles/prophaseResponsive.css';
import { AuthProvider } from 'components/providers/Auth';
import { originURL } from 'utils/constant';
// import { validateSession } from 'redux/login';
import { LoadingProvider, useLoading } from 'components/providers/Loader';
import LayoutProvider from 'components/Layouts/LayoutProvider';
import Head from 'next/head';
import Bottom_bar from 'components/Bottom_bar';
import favicon from '../../public/favicon.ico';
import Script from 'next/script';
import 'animate.css';
function MyApp({ Component, pageProps, router }) {
  const { preloader, setPreLoader } = useLoading();

  useEffect(() => {
    const start = () => {
      setPreLoader(true);
    };
    const end = () => {
      setPreLoader(false);
    };
    setTimeout(() => {
      end();
    }, 3000);
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  const store = useStore();

  useEffect(() => {
    // TagManager.initialize({ gtmId: 'GTM-WGKM7NF' });
    // store.dispatch(validateSession());
    if (typeof window !== 'undefined' && window.location.origin === originURL) {
      const handleRouteChange = (url) => GTMPageView(url);
      GTMPageView(window && window.location.href);
      Router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        Router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.estatedekho.com/" />
        <meta
          name="google-site-verification"
          content="ybe2qNNnI-VFUtDmBTx3FgMNC5ncPeKG8Qk--e6Exy4"
        />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/public/robots.txt" />
        <link href="/public/google76cd593442104de9.html" />
        {/* Google Tag Manager script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-428833745"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-428833745');
            `,
          }}
        />
        {/* Google Tag Manager conversion event script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            gtag('event', 'conversion', {'send_to': 'AW-428833745/SlvDCLyX9LgYENH3vcwB'});
          `,
          }}
        />
      </Head>
      {/* {preloader ? <Loader /> : null} */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NWPRV7Y34F"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NWPRV7Y34F');
    `}
      </Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WGKM7NF');`,
        }}
      ></Script>
      <Bottom_bar />
      <AuthProvider>
        <LayoutProvider state={store.getState()} setPreLoader={setPreLoader}>
          <Component
            router={router}
            {...pageProps}
            setPreLoader={setPreLoader}
          />
        </LayoutProvider>
      </AuthProvider>
    </>
  );
}

function AppWrapper(props) {
  return (
    <LoadingProvider>
      <MyApp {...props} />
    </LoadingProvider>
  );
}

export default wrapper.withRedux(withRouter(AppWrapper));
