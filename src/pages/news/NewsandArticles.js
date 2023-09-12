import React, { useState, useRef, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { SEO } from 'components/seo';
import Schema, { makeOrganizationalSchema } from 'components/schema';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import { DOMAIN, SEO_CONTENT } from 'utils/constant';
import { getLoggedInUser, isProdEnv } from 'utils/helpers';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import apiClient from 'utils/apiClient';
import { result } from 'lodash';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CustomPrevArrow from 'utils/CustomPrevArrow';
import CustomNextArrow from 'utils/CustomNextArrow';
import TopNewsCard from 'components/TopNewsCard';
import { headerLinksData } from 'utils/headerLinksData';
import Menu from './Menu';
import NewsCardHome from './NewsCardHome';

function NewsAndArticles({ news, page }) {
  const [newsList, setNewsList] = useState(news);
  const [length, setLength] = useState(100);
  const [loader, setLoader] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [headerLinks, setheaderLinks] = useState([]);
  const [pageNum, setpageNum] = useState(page);

  const getNewsList = (page) => {
    let response = apiClient.post(`${apiClient.Urls.newsList}?page=${page}`, {
      records: '15',
    });
    response.then((result) => {
      if (result.success) {
        const newData = result.data.data;
        console.log('news list ', newData);
        setNewsList((prevData) => [...prevData, ...newData]);
        setHasMore(newData.length > 0);
        setLoader(false);
      } else {
        setNewsList([]);
        setLoader(false);
        setLoadMore(false);
        setHasMore(false);
      }
    });
  };

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    interval: 9000,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
  });

  const getNewsCategory = () => {
    let response = apiClient.get(`${apiClient.Urls.newsCategory}`, {});

    response
      .then((result) => {
        if (result.success) {
          console.log('headers list ', result);
          setheaderLinks(result.data);
        } else {
          setheaderLinks();
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight;
      if (scrolledToBottom) {
        // User has reached the bottom of the page, fetch the next page
        setpageNum(pageNum + 1);
        console.log('updated page no.', pageNum);
        if (!loadMore) {
          getNewsList(pageNum);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNum, loadMore, hasMore]);

  useEffect(() => {
    getNewsCategory();
  }, []);

  return (
    <>
      <SEO
        title={'Real Estate Property Blog | Estatedekho'}
        description={
          'Find Latest Real Estate Property News and Market Insights at Property Pulse - Estatedekho.com'
        }
        keywords={
          'real estate insights, real estate industry news, real estate news, real estate market insights, About Real estate.'
        }
        canonical={DOMAIN}
        // image={iypDefaultIcon}
      />
      {isProdEnv() && (
        <>
          <SiteLinksSearchBoxJsonLd
            url={DOMAIN}
            potentialActions={[
              {
                target: `${DOMAIN}/search?searchTerm`,
                queryInput: 'search_term_string',
              },
            ]}
          />
          <Schema
            structuredData={makeOrganizationalSchema({
              name: 'EstateDekho',
              url: DOMAIN,
              logo: `${DOMAIN}/images/new/logo/dark.svg`,
              email: 'info@estatedekho.com',
              telephone: '8247269476',
              description: 'Real Estate in Hyderabad',
              contactPoint: [
                {
                  telephone: '8247269476',
                  contactType: 'technical support',
                },
              ],
            })}
          />
        </>
      )}

      <div>
        <div className="d-flex justify-content-center">
          <Header HorizontalSpace={'0 9%'} />
        </div>

        <Menu />

        {/* news and article card */}

        <div className="news-container">
          <div
            className="d-flex justify-content-center row news-topbanner"
            style={{ position: 'relative' }}
          >
            <div className="col-sm">
              <Carousel
                {...getConfigurableProps()}
                {...getConfigurableProps()}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && <CustomPrevArrow onClick={onClickHandler} />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && <CustomNextArrow onClick={onClickHandler} />
                }
              >
                {newsList.map((val, ind) => {
                  return (
                    <div key={ind} className="slider-main">
                      <div className="slide-image">
                        <div className="news-detail-card px-4 pt-4 pb-3 d-flex flex-column justify-content-center">
                          <h1 className="line-limit">{val.title}</h1>

                          <p className="pt-2">{val.seo.description}</p>

                          <div className="pt-3 d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                              <AccountCircleRoundedIcon
                                className="mb-2"
                                style={{ color: 'rgb(25, 70, 155)' }}
                              />
                              <p className="px-1 " style={{ color: '#000' }}>
                                Santosh
                              </p>
                            </div>
                            <p
                              className="py-2"
                              style={{
                                fontSize: '12px',
                                lineHeight: 0,
                                color: 'rgb(25, 70, 155)',
                                fontWeight: 600,
                              }}
                            >{`${new Date(val.created_at).toDateString()}`}</p>
                          </div>
                        </div>
                        <img src={apiClient.Urls.imgUrl + val.cover_image} />
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>

          <div
            className="d-flex flex-row justify-content-between py-5"
            style={{overflowX: 'scroll' }}
          >
            {newsList.slice(5, 8).map((newsListItem,index) => {
              return (
                <div key={index} className="d-flex flex-row justify-content-between" style={{width:"365px"}}>
                  <TopNewsCard
                    title={newsListItem.title}
                    image={newsListItem.cover_image}
                    date={newsListItem.created_at}
                  />
                </div>
              );
            })}
          </div>

          <div className="row">
            <>
              {newsList.map((val, ind) => {
                return <NewsCardHome key={ind} val={val} />;
              })}
            </>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAndArticles);

export async function getServerSideProps(context) {
  const { pageNum = 1 } = context.query; // Get the pageNumber from the query parameters
  try {
    const response = await apiClient.post(
      `${apiClient.Urls.newsList}?page=${pageNum}`,
      {
        records: '15',
      }
    );

    if (response.success) {
      const news = response.data.data.map((b) => b);
      return {
        props: {
          news,
          page: parseInt(pageNum),
        },
      };
    } else {
      return {
        props: {
          news: [],
          page: parseInt(pageNum),
        },
      };
    }
  } catch (error) {
    console.error('Error fetching news list:', error);
    return {
      props: {
        news: [],
        page: parseInt(pageNum, 10),
      },
    };
  }
}
