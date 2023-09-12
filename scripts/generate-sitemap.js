// // const fs = require('fs');
// // const globby = require('globby');
// // const prettier = require('prettier');

// const configure = ({ dev, uat, prod, preProd }) => {
//   return process.env.MODE === 'dev' ? (dev || uat) : process.env.MODE === 'uat' ? uat
//     : process.env.MODE === 'preprod' ? preProd : prod;
// }

// const DOMAIN = configure({
//   prod: 'https://estatedekho.com/',
//   preProd: 'https://preprod.yep.co.za',
//   uat: 'https://yepuat.co.za',
//   dev: 'https://yepdev.co.za',
// });


// function renderSiteMap(route) {
//   if(route) {
//     return `
//     <url>
//       <loc>${`${DOMAIN}${route}`}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//     </url>`
//   }
//   return '';
// }

// function generateSiteMapsFromAPI(API_URL, onSuccess) {
//   return new Promise((resolve, reject) => {
//     fetch(API_URL, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       }
//     })
//     .then((res) => res.json())
//     .then((response) => {
//       if(typeof onSuccess == 'function') 
//         resolve(onSuccess(response));
//       else
//         resolve('');
//     })
//     .catch((error) => {
//      console.log("NEWS_AND_ARTICLES_BUILD_ERROR:", error);
//      return resolve("");
//     })
//   })
// }

// function getPopularKeywordsSiteMap() {
//   // eslint-disable-next-line no-undef
//   return generateSiteMapsFromAPI(POPULAR_KEYWORDS, keywords => {
//     if(keywords && keywords.length) {
//       const keywordsSiteMaps = keywords.slice(0, 10)
//         .map(keyword => keyword ? renderSiteMap(`/search?keyword=${encodeURIComponent(keyword.trim())}`) : '')
//         .join('');
//       return keywordsSiteMaps;
//     }
//     return '';
//   });
// }

// function getNewsAndArticles() {
//   // eslint-disable-next-line no-undef
//   return generateSiteMapsFromAPI(NEWSANDARTICLES, (articles) => {
//     if(articles && articles.length) {
//       return articles.map(article => renderSiteMap(`/blog/news-articles?name=${encodeURIComponent(`${article.title}&id=${article.nid}`)}`)).join('');
//     }
//     return '';
//   })
// }

// (async () => {
//   if (process.env.MODE !== 'prod') {
//     return;
//   };

//   // eslint-disable-next-line no-undef
//   const pages = await globby([
//     'src/pages/**/*{.tsx,.mdx}',
//     '!src/pages/_*.tsx',
//     '!src/pages/api'
//   ]);

//   const keywordsSiteMaps = await getPopularKeywordsSiteMap();
//   const articlesSiteMaps = await getNewsAndArticles();

//   let robotsTxt = `User-agent: *\nSitemap: ${DOMAIN}/sitemap.xml`;
  
//   const sitemap = `
//         <?xml version="1.0" encoding="UTF-8"?>
//         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//             ${pages
//               .map((page) => {
//                 const path = page
//                   .replace('src/pages', '')
//                   .replace('.tsx', '')
//                   .replace('.js', '')
//                   .replace('.mdx', '');
//                 const route = path.replace('/index', '');
//                 if (
//                   route.includes('/user') ||
//                   route.includes('/property-details') ||
//                   route.includes('/reset-password') ||
//                   route.includes('/articles') ||
//                   route.includes('/search') ||
//                   route.includes('/redirect')
//                 ) {
//                   return '';
//                 };
//                 return renderSiteMap(route);
//               }).join('')}${keywordsSiteMaps}${articlesSiteMaps}
//         </urlset>
//     `;

//   // eslint-disable-next-line no-undef
//   const formatted = prettier.format(sitemap, {
//     parser: 'html'
//   });

//   if (process.env.MODE === 'uat' || process.env.MODE === 'preprod') {
//     robotsTxt = `${robotsTxt}\nDisallow: /`;
//   };

//   // eslint-disable-next-line no-undef
//   fs.writeFileSync('public/sitemap.xml', formatted);
//   // eslint-disable-next-line no-undef
//   fs.writeFileSync('public/robots.txt', robotsTxt);
// })();
