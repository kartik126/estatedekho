import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SEO } from 'components/seo';
import Schema, { makeOrganizationalSchema } from 'components/schema';
import { SiteLinksSearchBoxJsonLd } from 'next-seo';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { DOMAIN, jsonToQueryString, SEO_CONTENT } from 'utils/constant';
import apiClient from 'utils/apiClient';
import NextStorage from 'utils/nextLocalStorage';
import { getLoggedInUser, isProdEnv } from 'utils/helpers';
import Header from '../components/header/Header';
import Topbanners from 'components/topbanners/Topbanners';
import Propertiesbytype from 'components/Propertiesbytype/Propertiesbytype';
import Homecardcontainer from 'components/homecardcontainer/Homecardcontainer';
import HomepageVideo from 'components/homepagevideo/HomepageVideo';
import HomeMiddlebanner from 'components/homemiddlebanner/HomeMiddlebanner';
import NewsArticles from 'components/NewsArticles/NewsArticles';
import Footer from 'components/footer/Footer';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import QuickFilter from 'components/QuickFilter';
import Image from 'next/image';
import HomePopup from 'components/HomePopup';
import CancelIcon from '@mui/icons-material/Cancel';
import homebanner from '../../public/images/homepagebanner.png';
import mobbanner from '../../public/images/mobbanner.jpeg';
import Modal from 'components/Modal';
import TrustedDeveloperCard from 'components/TrustedDeveloperCard';
import commericalweb from '../../public/images/commericialweb.png';
import commercialmob from '../../public/images/commericialmb.png';
import {
  setPropertyType,
  setHomeExplore,
  getHomeExplore,
  getHomeData,
} from 'redux/action/home';
import CommercialPropertyCard from 'components/CommercialPropertyCard';
import appBanner from '../../public/images/appbanner.png';
import mobAppBanner from '../../public/images/MobileAppBanner .png';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '70%',
  border: 'none',
  boxShadow: 10,
  background: '#ffff',
};
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     let response = "hy";
//     // try {
//     //   response = await apiClient.get(SEO_CONTENT + `/HomePage`);
//     // } catch (error) {
//     //   console.log('error-HomePage-SSR', error);
//     // }
//     // const seoData = response && response.length ? response[0] : null;
//     // console.log("seo data",seoData)

//       console.log("Test")
//       response = await apiClient.get(`${apiClient.Urls.getProfile}`, {
//         authToken:localStorage.getItem("authToken")
//       });
//     // }
//     //  catch (error) {
//       // try {
//       //    response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//       // console.log('error-getProfile-SSR', error);
//     // }
//     const data = response;
//     // const userProfile = response && response.length ? response[0] : null;
//     // console.log('user data', userProfile);
//     return {
//       props: {
//         data: { data },
//       },
//     };
//   }
// );

// global.token == localStorage.getItem("authToken");

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const [cities, HomeExplore] = await Promise.all([
//     await apiClient.get(`${apiClient.Urls.getCities}`, {}, true),
//     await apiClient.get(
//       `${apiClient.Urls.getHomeExplore}/hyderabad/project`,
//       {}
//     ),
//   ]);
//   return {
//     props: {
//       cities,
//       HomeExplore,
//     },
//   };
// }
export async function getServerSideProps({ params }) {
  const response = await apiClient.get(
    `${apiClient.Urls.getHomeExplore}/${'hyderabad'}/${'project'}}`,
    true
  );
  console.log(
    'home data response======================================>',
    response
  );
  const data = response;
  return {
    props: {
      seoData: data.meta,
    },
  };
}
class Home extends Component {
  toggleBrowseByCategoryPopup = (e) => {
    e.preventDefault();
    this.props.toggleBrowseByCategoryPopup();
  };
  state = {
    seoData: '',
    modal: false,
    popLoc: [],
    open: false,
    accountVerified: false,
    loader: true,
    commercial: null,
    rent: null,
    homeData: [],
    cities: [],
    topVilla: [],
    topPlots: [],
    developerData: [],
    topAppartment: [],
    topProject: [],
    premiumPlot: [],
    trendingPlot: [],
    topCommercial: [],
    newsData: [],
    premiumProject: null,
    activeKey: '',
    favModal: {
      open: false,
      storeId: null,
    },
    deleteFavModal: {
      open: false,
      listIds: [],
      type: 'project',
    },
  };

  handleClose = (e) => {
    this.setState({
      open: false,
    });
  };
  modalOpen() {
    this.setState({ modal: true });
  }
  modalClose() {
    this.setState({
      modal: false,
    });
  }
  popularLocality = () => {
    let response = apiClient.post(
      apiClient.Urls.getLocalities,
      { city: this.props.city_name },
      true
    );
    response.then((result) => {
      if (result.success) {
        let arr = result.data.map((key) => {
          key.isSelected = false;
          return {
            ...key,
          };
        });
        this.setState({
          popLoc: result.data,
        });
      } else {
        this.setState({
          popLoc: [],
        });
      }
    });
  };
  getNewsList = (e) => {
    let response = apiClient.post(apiClient.Urls.newsList, {});
    response.then((result) => {
      if (result.success) {
        console.log('news list ', result.data);
        this.setState({
          newsData: result.data.data,
          loader: false,
        });
      } else {
        this.setState({ newsData: [] });
      }
    });
  };
  handleCallback = (e) => {
    global.city = e.target.value;
    // this.setState({
    //   cityName: e.target.value,
    // });
  };
  onCloseAccountVerified = () => {
    this.toggleAccountVerifiedModal();
    const { query } = this.props.router;
    const { ['account-verified']: accountVerified, ...restQuery } = query || {};
    this.props.router.replace(
      {
        pathname: this.props.router.pathname,
        query: restQuery,
      },
      undefined,
      { shallow: true }
    );
  };
  pushToLogin = (queryChanges = {}) => {
    const { router } = this.props;
    const { query } = router;
    router.push({
      pathname: '/login',
      query: {
        ...query,
        ...queryChanges,
        redirect: router.pathname,
      },
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const modalShown = sessionStorage.getItem('modalShown');
    if (!modalShown) {
      setTimeout(() => {
        this.setState({
          modal: true,
        });
        sessionStorage.setItem('modalShown', true);
      }, 5000);
    }

    localStorage.setItem('type', 'property');
    console.warn('global city ', this.props);
    // this.getCities();
    this.popularLocality();
    this.getNewsList();
    this.props.getHomeExplore('project');
    this.props.getHomeData();
    console.log('user', this.props.data);
    console.log('home explore', this.props.HomeExplore);
    console.log(
      'property type=======================>',
      this.props.propertyType
    );
    console.log(
      'citty nameeeeeee =======================>',
      this.props.city_name
    );
  }

  render() {

    const { seoData } = this.props;

    return (
      <>
        <SEO
          title={this.props.seoData?.title || 'EstateDekho'}
          description={
            this.props?.seoData?.description || 'Real Estate in Hyderabad'
          }
          keywords={
            this.props.seoData?.keywords || 'Property for Sell/Buy in Hyderabad'
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
                name:
                  (this.props.seoData && this.props.seoData?.title) ||
                  'EstateDekho',
                url: DOMAIN,
                logo: `${DOMAIN}/images/new/logo/dark.svg`,
                email: 'info@estatedekho.com',
                telephone: '8247269476',
                description:
                  (this.props.seoData && this.props.seoData?.description) ||
                  'Real Estate in Hyderabad',
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
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <CancelIcon
            onClick={() => this.modalClose()}
            className="cursor-pointer"
            style={{
              color: 'rgb(25, 70, 155)',
              position: 'absolute',
              zIndex: '999',
              top: '4px',
              right: '4px',
            }}
          />
          <HomePopup />
        </Modal>
        <Header data={this.props.data} />
        <div className="home-main padding-web padding-mobile">
          {this.state.cities ? (
            <Topbanners
              premiumProjectData={this.props.HomeData?.home_premium_project}
              parentCallback={this.handleCallback}
              HomeDataCallback={this.props.getHomeData}
              developerData={this.state.developerData}
              refresh={this.getHomeData}
              HomeExploreCallback={this.props.getHomeExplore}
              PropertyType={this.props.pType}
              setPropertyType={this.props.setPropertyType}
            />
          ) : null}
          {this.props.pType == 'Commercial' || this.props.pType == 'Rent' ? (
            <>
              {this.props.pType == 'Commercial' && (
                <div className="row px-3">
                  <div className="row topvilla_heading">
                    <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
                      <h1>
                        Commercial
                        <span style={{ fontWeight: '700' }}> Spaces</span>
                      </h1>
                    </div>
                  </div>
                  {this.props.HomeData?.home_top_commercial.map(
                    (commercialData) => {
                      return (
                        <>
                          <div className="col-lg-4">
                            <CommercialPropertyCard
                              commercialData={commercialData}
                            />
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              {this.props.HomeExplore && (
                <Propertiesbytype
                  HomeExplore={this.props.HomeExplore}
                  propertyType={
                    this.props.pType == 'property' ? 'project' : 'plots'
                  }
                />
              )}

              {this.props.pType == 'property' ||
              this.props.pType == 'project' ? (
                <>
                  {this.props.HomeData?.home_top_villa?.[0] && (
                    <Homecardcontainer
                      title="Top Villas at"
                      titlebold={this.props.city_name}
                      topVillaData={this.props.HomeData?.home_top_villa}
                      refresh={this.props.getHomeData}
                      view={'Villa'}
                      type={this.state.type == 'project' ? 'property' : 'plot'}
                    />
                  )}

                  <Link href="/Petalz">
                    <a target={'_blank'}>
                      <div className="display cursor-pointer pt-5 py-4 px-2">
                        <Image className="shadow-sm" src={homebanner} alt="" />
                      </div>
                    </a>
                  </Link>
                  <Link href="/Landing-page">
                    <a target={'_blank'}>
                      <div className="mob-banner cursor-pointer pt-5 py-4 px-2">
                        <Image className="shadow-sm" src={mobbanner} alt="" />
                      </div>
                    </a>
                  </Link>

                  {this.props.HomeData?.home_trusted_developer?.[0] && (
                    <div className="row trusted_main">
                      <div className="row trusted_heading mb-3">
                        <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
                          <h1 className="">
                            Trusted
                            <span style={{ fontWeight: '700' }}>
                              {' '}
                              Developers
                            </span>
                          </h1>
                          <Link href="/DevelopersListing">
                            <p>
                              View All <ExpandCircleDownOutlinedIcon />{' '}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="row d-flex flex-row justify-content-between"
                        style={{ overflowX: 'auto' }}
                      >
                        <TrustedDeveloperCard
                          developer={
                            this.props.HomeData?.home_trusted_developer?.[0]
                          }
                          color={'rgb(21, 49, 95)'}
                        />
                        <TrustedDeveloperCard
                          developer={
                            this.props.HomeData?.home_trusted_developer?.[1]
                          }
                          color={'#402F1B'}
                        />
                        <TrustedDeveloperCard
                          developer={
                            this.props.HomeData?.home_trusted_developer?.[2]
                          }
                          color={'#265339'}
                        />
                      </div>
                      {/* <TrustedDevelopers developer={this.state.developerData} /> */}
                    </div>
                  )}

                  <QuickFilter
                    type={this.state.type}
                    data={this.state.popLoc}
                  />
                  {this.props.city_name == 'Hyderabad' && <HomepageVideo />}

                  {this.props.HomeData?.home_top_apartment?.[0] && (
                    <Homecardcontainer
                      title="Top Apartments in"
                      titlebold={this.props.city_name}
                      topVillaData={this.props.HomeData?.home_top_apartment}
                      view={'Apartment'}
                      refresh={this.props.getHomeData}
                      type={this.state.type == 'project' ? 'property' : 'plot'}
                    />
                  )}
                  {this.props.HomeData?.home_top_project?.[0] && (
                    <Homecardcontainer
                      title="Best Apartments in "
                      titlebold={this.props.city_name}
                      view={'Apartment'}
                      topVillaData={this.props.HomeData?.home_top_project}
                      refresh={this.props.getHomeData}
                      type={this.state.type == 'project' ? 'property' : 'plot'}
                    />
                  )}
                </>
              ) : (
                <>
                  {this.props.HomeData?.home_top_plot?.[0] && (
                    <Homecardcontainer
                      title="Top Plots at"
                      titlebold={this.props.city_name}
                      view="plot"
                      topVillaData={this.props.HomeData?.home_top_plot}
                      refresh={this.props.getHomeData}
                      type={this.state.type == 'project' ? 'plots' : 'property'}
                    />
                  )}

                  {this.props.HomeData?.premium_plot?.[0] && (
                    <Homecardcontainer
                      title="Premium Plots at"
                      titlebold={this.props.city_name}
                      topVillaData={this.props.HomeData?.premium_plot}
                      refresh={this.props.getHomeData}
                      view="plot"
                      type={this.state.type == 'project' ? 'plots' : 'property'}
                    />
                  )}
                  {this.props.HomeData?.trending_plot?.[0] && (
                    <Homecardcontainer
                      title="Trending Plots at"
                      titlebold={this.props.city_name}
                      topVillaData={this.props.HomeData?.trending_plot}
                      refresh={this.props.getHomeData}
                      view="plot"
                      type={this.state.type == 'project' ? 'plots' : 'property'}
                    />
                  )}
                </>
              )}
            </>
          )}
          {this.props.propertyType == 'Commercial' ? (
            <>
              <Link href="https://radhaspaces.com/kokapet-terminal.html">
                <a target={'_blank'}>
                  <div className="display cursor-pointer pt-5 py-4 px-2">
                    <Image className="shadow-sm" src={commericalweb} alt="" />
                  </div>
                </a>
              </Link>
              <Link href="https://radhaspaces.com/kokapet-terminal.html">
                <a target={'_blank'}>
                  <div className="mob-banner cursor-pointer pt-5 py-4 px-2">
                    <Image className="shadow-sm" src={commercialmob} alt="" />
                  </div>
                </a>
              </Link>
            </>
          ) : null}
          <HomeMiddlebanner />
          <Link href="https://play.google.com/store/apps/details?id=com.estatedekho.buyer">
            <a target={'_blank'}>
              <div className="display cursor-pointer pt-5 py-4 px-3">
                <Image className="shadow-sm rounded-2" src={appBanner} alt="" />
              </div>
            </a>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.estatedekho.buyer">
            <a target={'_blank'}>
              <div className="mob-banner cursor-pointer pt-5 py-4 px-2">
                <Image className="shadow-sm" src={mobAppBanner} alt="" />
              </div>
            </a>
          </Link>
          {this.state.loader ? (
            <>
              <div className="row topvilla_view">
                <div className="col">
                  {' '}
                  <Skeleton
                    variant="rectangular"
                    width={'100%'}
                    height={200}
                    style={{ borderRadius: 4 }}
                  />
                  <Skeleton />
                  <Skeleton width="60%" />
                </div>
                <div className="col">
                  {' '}
                  <Skeleton
                    variant="rectangular"
                    width={'100%'}
                    height={200}
                    style={{ borderRadius: 4 }}
                  />
                  <Skeleton />
                  <Skeleton width="60%" />
                </div>
                <div className="col">
                  {' '}
                  <Skeleton
                    variant="rectangular"
                    width={'100%'}
                    height={200}
                    style={{ borderRadius: 4 }}
                  />
                  <Skeleton />
                  <Skeleton width="60%" />
                </div>
              </div>
            </>
          ) : (
            <>
              <NewsArticles data={this.state.newsData} />
            </>
          )}
          <Footer />
        </div>
      </>
    );
  }
}

const mapState = (state, props) => {
  const { user } = NextStorage.getItem('loginUser') || { user: null };
  return {
    isLoggedIn: !!(state.login.isLoggedIn || user),
    user,
    pType: state.home.pType,
    HomeExplore: state.home.HomeExplore,
    HomeData: state.home.HomeData,
    city_name: state.cities.city_name,
    loginUser: getLoggedInUser(),
  };
};

const mapDispatch = {
  setPropertyType,
  setHomeExplore,
  getHomeExplore,
  getHomeData,
};

export default connect(mapState, mapDispatch)(Home);
