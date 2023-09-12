/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import Document, { Script, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles'; // works with @material-ui/core/styles, if you prefer to use it.
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="sitemap"
            type="application/xml"
            href="/src/pages/sitemap.xml.js"
          />
          {/* <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WGKM7NF');`,
            }}
          ></Script> */}
          {/* Google Tag Manager */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P3THRBW');`,
            }}
          /> */}
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBw17hDdX7_BLxRouq9zXnNePpYC-NE40&libraries=places"></script> */}
          {/* End Google Tag Manager */}

          {/* Sizmek Tag Manager */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `var versaTag = {};
              versaTag.id = "1285";
              versaTag.sync = 0;
              versaTag.dispType = "js";
              versaTag.ptcl = "HTTPS";
              versaTag.bsUrl = "https://protect-za.mimecast.com/s/5QadCRgKVqt9zrBKSWrtnN?domain=bs.serving-sys.com";
              versaTag.activityParams = {"OrderID":"","Session":"","Value":"","productid":"","productinfo":"","Quantity":""};
              versaTag.retargetParams = {};
              versaTag.dynamicRetargetParams = {};
              versaTag.conditionalParams = {};`,
            }}
          /> */}
          {/* <script
            id="ebOneTagUrlId"
            src="https://protect-za.mimecast.com/s/KKeeCVm2VxfrRl94hxWBqL?domain=secure-ds.serving-sys.com"
          ></script> */}
          {/* End Sizmek Tagg Manager */}

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* <!-- JavaScript Bundle with Popper --> */}

          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossOrigin="anonymous"
          ></script>

          {/* <script src="/node_modules/readmore-js/readmore.min.js"></script> */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css"
            rel="stylesheet"
          />
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script> */}
          <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossOrigin="anonymous"
          ></script>
        </Head>

        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGKM7NF"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          {/* Google Tag Manager (noscript) */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P3THRBW" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          /> */}
          {/* End Google Tag Manager (noscript) */}

          {/* Sizmek Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://protect-za.mimecast.com/s/bSRcCWnK9yc7WjGpCzsNov?domain=bs.serving-sys.com" style="display:none;width:0px;height:0px"></iframe>`,
            }}
          />
          {/* End Sizmek Tagg Manager */}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
