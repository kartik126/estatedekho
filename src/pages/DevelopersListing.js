import Header from 'components/header/Header';
import HomepageVideo from 'components/homepagevideo/HomepageVideo';
import ListingFilter from 'components/ListingFilter/ListingFilter';
import React, { Component, useCallback, useEffect, useRef } from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image';
import HomeMiddlebanner from 'components/homemiddlebanner/HomeMiddlebanner';
import NewsArticles from 'components/NewsArticles/NewsArticles';
import Footer from 'components/footer/Footer';
import apiClient from 'utils/apiClient';
import { SEO } from 'components/seo';
import { DOMAIN, jsonToQueryString, SEO_CONTENT } from 'utils/constant';
import Schema, { makeOrganizationalSchema } from 'components/schema';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getLoggedInUser, isProdEnv } from 'utils/helpers';
import Link from 'next/link';
import Router from 'next/router';
import { withRouter } from 'next/router';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import estd from '../../public/images/estd.jpeg';
import loading from '../../public/images/loading.svg';
import { useState } from 'react';
function DevelopersListing() {
  const goToDeveloper = (e, x) => {
    console.log(e);
    localStorage.setItem('developerSlug', e);
    Router.push({
      pathname: `/DeveloperDetails/${x.replace(/\s/g, '-')}-Properties`,
    });
  };
  const [list, setlist] = useState([]);

  const [newsData, setNewsData] = useState([]);
  const [about, setabout] = useState('');
  const [hasMore, setHasMore] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [pageNumber, setpageNumber] = useState(1);

  useEffect(() => {
    const cards = document.querySelectorAll('.developer-card');
    cards.forEach((card, index) => {
      if (index % 3 === 0) {
        card.style.backgroundColor = 'red';
      } else if (index % 3 === 1) {
        card.style.backgroundColor = 'blue';
      } else {
        card.style.backgroundColor = 'green';
      }
    });
    getDeveloperList();
    getNewsList();
  }, []);

  const getDeveloperList = () => {
    setLoadMore(true);
    if (!loadMore) {
      setpageNumber(pageNumber + 1);
    }
    let res = apiClient.get(
      `${apiClient.Urls.developersList}?page=${pageNumber}`,
      {}
    );
    res.then((result) => {
      if (result.success) {
        console.log('developer list', result.data);
        // setlist(result.data.data);
        setlist((prevData) => {
          return [...new Set([...prevData, ...result.data.data.map((b) => b)])];
        });
        setHasMore(result.data.data.length > 0);
        setLoadMore(false);
      } else {
        setlist([]);
      }
    });
  };

  const getNewsList = () => {
    let response = apiClient.post(apiClient.Urls.newsList, {});
    response.then((result) => {
      if (result.success) {
        console.log('news list ', result.data);
        setNewsData(result.data);
      } else {
        setNewsData([]);
      }
    });
  };

  const observer = useRef();
  const lastDeveloperRef = useCallback(
    (node) => {
      console.warn('last node is', node);
      if (loadMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((data) => {
        if (data[0].isIntersecting && hasMore) {
          setLoadMore(true);
          getDeveloperList();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMore, hasMore]
  );
  return (
    <>
      <SEO
        title={
          ' Developer Listing | List of All Developers Details – estatedekho'
        }
        description={
          'Estatedekho has a developers list page which has a list of all active projects of developers’ details page. Each page provides details of individual developers.'
        }
        keywords={
          'Developers Listing, Developers Details, Active Projects, Active Properties, Active Developers, Property listing, Real Estate listing, Real Estate Details.'
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
          {/* <Schema
            structuredData={makeOrganizationalSchema({
              name: (seoData && seoData.title) || 'EstateDekho',
              url: DOMAIN,
              logo: `${DOMAIN}/images/new/logo/dark.svg`,
              email: 'info@estatedekho.com',
              telephone: '8247269476',
              description:
                (seoData && seoData.description) || 'Real Estate in Hyderabad',
              contactPoint: [
                {
                  telephone: '8247269476',
                  contactType: 'technical support',
                },
              ],
            })}
          /> */}
        </>
      )}

      <Header />
      <div className="home_container">
        <HomepageVideo />

        <div className="row ">
          {list.map((val, ind) => {
            if (list.length === ind + 1) {
              return (
                <>
                  <div
                    ref={lastDeveloperRef}
                    key={val.id}
                    className="col-md-4 py-3"
                    onClick={() =>
                      goToDeveloper(val.microsite_slug, val.client.client_name)
                    }
                  >
                    <div
                      className="card"
                      style={{
                        width: '100%',
                        backgroundColor:
                          ind % 3 === 0
                            ? 'rgb(21, 49, 95)'
                            : ind % 3 === 1
                            ? '#402F1B'
                            : '#265339',
                        borderStyle: 'none',
                        color: 'rgb(233 233 233)',
                        height: '25rem',
                        position: 'relative',
                      }}
                    >
                      {val.banner ? (
                        <>
                          {' '}
                          <img
                            className="card-img-top"
                            src={
                              apiClient.Urls.imgUrl + val.banner.banner_image
                            }
                            alt="Card image cap"
                            style={{ height: '200px' }}
                          />
                        </>
                      ) : (
                        <>
                          <Image
                            className="card-img-top"
                            src={estd}
                            alt="Card image cap"
                            style={{ height: '200px' }}
                          />
                        </>
                      )}

                      <div className="row trusted-card-body">
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between">
                            <h1
                              style={{
                                fontSize: '31px',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                              }}
                            >
                              {val.client.client_name}
                            </h1>
                            {val.header ? (
                              <>
                                {' '}
                                <img
                                  src={apiClient.Urls.imgUrl + val.header.logo}
                                  width={'45px'}
                                  height={'45px'}
                                  alt=""
                                />
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ position: 'absolute', bottom: 15 }}>
                            <p
                              style={{ paddingRight: '51px', height: '76px' }}
                              className="card-text"
                            >
                              {val.about ? (
                                <> {val.about.about_description}</>
                              ) : (
                                <>
                                  {val.client.client_name} is a leading player
                                  in Hyderabad real estate industry. Everyone
                                  dreams to have the own home and they help many
                                  of them to make their dreams come true. they
                                  build each home painstakingly, with focus on
                                  Quality, Useful detailing and ensure Value for
                                  money. they desire to earn people trust and
                                  confidence while they create whenever they
                                  launch their new product and services. company
                                  name as its first ever venture, with the
                                  mission of creating excellence and delivering
                                  the best in the field of real-estate.Company
                                  Name management has been attainting rich
                                  experience in diversified fields by producing
                                  and marketing electronics consumer.
                                </>
                              )}
                            </p>

                            <h5
                              style={{
                                fontSize: '13px',
                                textAlign: 'center',
                                paddingTop: '17px',
                                borderTop: '0.1px solid rgb(103 103 103)',
                                cursor: 'pointer',
                              }}
                            >
                              View All{' '}
                              <ExpandCircleDownOutlinedIcon
                                style={{
                                  fontSize: 18,
                                  transform: 'rotate(-90deg)',
                                }}
                              />
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-2">
                          {/* <img src={img} width={"100%"}></img> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div
                    key={val.id}
                    className="col-md-4 py-3"
                    onClick={() =>
                      goToDeveloper(val.microsite_slug, val.client.client_name)
                    }
                  >
                    <div
                      className="developer-card card"
                      style={{
                        width: '100%',
                        borderStyle: 'none',
                        color: 'rgb(233 233 233)',
                        height: '25rem',
                        position: 'relative',
                        backgroundColor:
                          ind % 3 === 0
                            ? 'rgb(21, 49, 95)'
                            : ind % 3 === 1
                            ? '#402F1B'
                            : '#265339',

                        // backgroundColor: val.CardColor,
                      }}
                    >
                      {val.banner ? (
                        <>
                          {' '}
                          <img
                            className="card-img-top"
                            src={
                              apiClient.Urls.imgUrl + val.banner.banner_image
                            }
                            alt="Card image cap"
                            style={{ height: '200px' }}
                          />
                        </>
                      ) : (
                        <>
                          <Image
                            className="card-img-top"
                            src={estd}
                            alt="Card image cap"
                            style={{ height: '200px' }}
                          />
                        </>
                      )}

                      <div className="row trusted-card-body">
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between">
                            <h1
                              style={{
                                fontSize: '23px',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'break-spaces',
                                overflow: 'hidden',
                              }}
                            >
                              {val.client.client_name}
                            </h1>
                            {val.header ? (
                              <>
                                {' '}
                                <img
                                  src={apiClient.Urls.imgUrl + val.header.logo}
                                  width={'45px'}
                                  height={'45px'}
                                  style={{ background: '#ffff' }}
                                  alt=""
                                />
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div style={{ position: 'absolute', bottom: 15 }}>
                            <p
                              style={{ paddingRight: '51px', height: '76px' }}
                              className="card-text"
                            >
                              {val.about ? (
                                <> {val.about.about_description}</>
                              ) : (
                                <>
                                  {val.client.client_name} is a leading player
                                  in Hyderabad real estate industry. Everyone
                                  dreams to have the own home and they help many
                                  of them to make their dreams come true. they
                                  build each home painstakingly, with focus on
                                  Quality, Useful detailing and ensure Value for
                                  money. they desire to earn people trust and
                                  confidence while they create whenever they
                                  launch their new product and services. company
                                  name as its first ever venture, with the
                                  mission of creating excellence and delivering
                                  the best in the field of real-estate.Company
                                  Name management has been attainting rich
                                  experience in diversified fields by producing
                                  and marketing electronics consumer.
                                </>
                              )}
                            </p>

                            <h5
                              style={{
                                fontSize: '13px',
                                textAlign: 'center',
                                paddingTop: '8px',
                                borderTop: '0.1px solid rgb(103 103 103)',
                                cursor: 'pointer',
                              }}
                            >
                              View All{' '}
                              <ExpandCircleDownOutlinedIcon
                                style={{
                                  fontSize: 18,
                                  transform: 'rotate(-90deg)',
                                }}
                              />
                            </h5>
                          </div>
                        </div>
                        <div className="col-md-2">
                          {/* <img src={img} width={"100%"}></img> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
          <div style={{ height: '50px' }}>
            {hasMore && (
              <>
                <div className="d-flex justify-content-center align-items-center">
                  {' '}
                  <Image src={loading} />
                </div>
              </>
            )}
          </div>
        </div>

        {/* <NewsArticles data={newsData} /> */}
        <Footer />
      </div>
    </>
  );
}

export default DevelopersListing;
