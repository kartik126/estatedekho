// next.config.js

const nextConfig = {
  
  // swcMinify: true,
  // excludeDefaultMomentLocales: false,
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  env: {
    MODE: process.env.MODE,
    APP_SECRET: process.env.APP_SECRET,
  },
  compress: true,
  images: {
    
    domains: [
      'seller.estatedekho.com',
      'estatedekho.com',
      'beta.estatedekho.com',
      'estatedekho.s3.ap-south-1.amazonaws.com',
    ],
  },

  

  async redirects() {
    return [
      {
        source: '/property-details/:id',
        destination: '/property-details/:id',
        permanent: true,
      },
      {
        source: '/articles/:name/:id',
        destination: '/blog/articles?name=:name&id=:id',
        permanent: true,
      },
      {
        source: '/articles:path*',
        destination: '/blog/articles?:path*',
        permanent: true,
      },
    ];
  },
  
  webpack(config, { isServer }) {
    if (isServer && process.env.MODE === 'prod') {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
};


module.exports = {
  async rewrites(){
    return [
      {
        source: '/PropertyListing/slug',
        destination:'/PropertyListing/slug'
      },
      // {
      //   source: '/PropertyDetails',
      //   destination:'/PropertyDetails'
      // },
      {
        source: '/blog/blogDetails',
        destination:'/blog/blogDetails'
      },
      {
        source: '/DeveloperDetails/DeveloperDetail',
        destination:'/DeveloperDetails/DeveloperDetail'
      },
      {
        source: '/Landing-page/slug',
        destination:'/Landing-page/slug'
      }

    ]
  },
  experimental: {
    images: {
      unoptimized: false,
    },
  },
};
const optimizedImagesConfig = {};

module.exports = nextConfig;
