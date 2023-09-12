import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DOMAIN } from 'utils/constant';
import { SEO } from 'components/seo';
import Header from 'components/header/Header';
import Image from 'next/image';
import HomeMiddlebanner from 'components/homemiddlebanner/HomeMiddlebanner';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import apiClient from 'utils/apiClient';
import AdSpace from 'components/adspace/AdSpace';
import Skeleton from '@mui/material/Skeleton';
import Footer from 'components/footer/Footer';
import Loader from '../blogDetail/Loader';
const BlogDetail = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState('');
  const [data, setData] = useState([]);
  const [premiumProject, setPremiumProject] = useState(null);
  const [seoData, setSeoData] = useState('');

  const blogDetails = (e) => {
    setLoading(true);
    let response = apiClient.get(`${apiClient.Urls.blogDetails}/${e}`, {});
    response.then((result) => {
      if (result.success) {
        console.log('blog details ', result);
        setBlogData(result.data);
        setSeoData(result.data.seo);
        setLoading(false);
      } else {
        setBlogData(null);
        setSeoData(null);
        setLoading(true);
      }
    });
  };

  const getHomeData = (e) => {
    let res = apiClient.post(
      apiClient.Urls.getHomeData,
      {
        city: e || global.city,
      },
      true
    );

    res.then((result) => {
      console.log('home data response', result);
      if (result.success) {
        setPremiumProject(result.data.home_premium_project);
      } else {
        setPremiumProject(null);
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('propssssssssssssssssssss', router.query.index?.[0]);
    if (!router.isReady) return;
    blogDetails(router.query?.index?.[0]);
    getHomeData();
  }, [router.isReady]);

  const renderSEO = () => (
    <SEO
      title={seoData?.title || 'EstateDekho'}
      description={seoData?.description || 'Real Estate in Hyderabad'}
      keywords={seoData?.keywords}
      canonical={DOMAIN + router.asPath}
    />
  );

  const modifiedHTML = blogData.description
    ?.replace(/<p/g, '<p class="my-paragraph"')
    .replace(/<span/g, '<span class="my-span"')
    .replace(/<span[^>]*>(&nbsp;|\s)*<\/span>/g,'');

  return (
    <>
      {renderSEO()}
      <Header />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="home_container">
            <>
              <div className="row">
                <div className="col-sm py-3 px-4">
                  <img
                    src={apiClient.Urls.imgUrl + blogData.cover_image}
                    alt=""
                    width={'100%'}
                    height={'90%'}
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="row">
                  <div className="col-sm-2 px-4">
                    <p style={{ fontSize: '14px', fontWeight: '500' }}>
                      {new Date(blogData.created_at).toDateString()}
                    </p>
                  </div>
                </div>
                <div className="row px-4">
                  <h1 style={{ fontSize: '32px', fontWeight: '700' }}>
                    {blogData.title}
                  </h1>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-12 px-4 py-4">
                  {/* <h3
                    style={{
                      fontSize: '18px',
                      color: '#7B8290',
                      fontWeight: '600',
                    }}
                  >
                    In my opinion, the most useful are:
                  </h3> */}
                  <p
                    style={{
                      fontSize: '16px',
                      color: '#212429',
                      fontWeight: '600',
                      fontFamily: 'poppins',
                    }}
                  >
                    <div
                      className="my-div"
                      dangerouslySetInnerHTML={{
                        __html: modifiedHTML,
                      }}
                    />
                  </p>
                </div>
                <div
                  className="d-flex flex-row w-100 col-4 px-5 mt-5"
                  style={{ height: '500px' }}
                >
                  {premiumProject == null ? (
                    <>
                      <div className="right_banner">
                        <Skeleton
                          variant="rectangular"
                          width="100%"
                          height={470}
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                    </>
                  ) : (
                    <>{/* <AdSpace premiumProjectData={premiumProject} /> */}</>
                  )}
                </div>
              </div>
            </>
          </div>
          <HomeMiddlebanner />
        </>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = {};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogDetail)
);
