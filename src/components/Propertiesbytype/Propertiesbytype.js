import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image';
import Router from 'next/router';
import plot from '../../../public/images/plot1.png';
import villa from '../../../public/images/villa.jpg';
import appartment from '../../../public/images/appartment.jpg';
import premium from '../../../public/images/premium.jpg';
import independent from '../../../public/images/independent.png';
import farmlamnd from '../../../public/images/farmland.jpg';
import hmda from '../../../public/images/hmda.webp';
import Link from 'next/link';
import openplot from '../../../public/images/openplot.png';
import dtcp from '../../../public/images/dtcp.jpg';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';

function Propertiesbytype({ HomeExplore, propertyType, PropType ,city_name}) {
  // const [Type, setType] = useState(type);
  const goToSearch = (e, ptype) => {
    Router.replace({
      pathname: `/PropertyListing/${e.replace(/\s+/g, '-')}-for-sale-in-${city_name}`,
      query: {
        propertyType: e,
        type: ptype,
      },
    });
  };
  console.warn('Hyyyyyy============>>>>', PropType);
  return (
    <>
      <div className="row property_type_main">
        <div className="row type_heading">
          <div className="col-md-3">
            <h1>
              Explore {propertyType == 'project' ? <>Properties</> : <>Plots</>}{' '}
              by type
            </h1>
          </div>
          <div className="col-md-9 heading_border"></div>
        </div>
        {propertyType == 'project' ? (
          <div className="product-all-contents" style={{ overflowX: 'auto' }}>
            <div className="row main_slider">
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => {
                    if (HomeExplore?.apartments?.count == 0) {
                      toast.error('No Appartments available in ' + city_name);
                    } else {
                      // let objIndex = PropType.findIndex((e) => e.value == 'Apartment')
                      // PropType[objIndex].isSelected = true
                      goToSearch('Apartment', 'property');
                    }
                  }}
                >
                  <Image src={appartment} alt="" />
                  <div>
                    <h3>
                      Apartments
                      <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.apartments?.count} properties</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => {
                    HomeExplore.villas?.count == 0
                      ? toast.error('No Villas available in ' + city_name)
                      : goToSearch('Villa', 'property');
                  }}
                >
                  <Image src={villa} alt="" />
                  <div>
                    <h3>
                      Villas <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.villas?.count} properties</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => {
                    HomeExplore.independent_houses?.count == 0
                      ? toast.error(
                          'No Independent Houses available in ' + city_name
                        )
                      : goToSearch('Independent house', 'property');
                  }}
                >
                  <Image src={independent} alt="" />
                  <div>
                    <h3>
                      Independent Houses <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.independent_houses?.count} properties</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => {
                    HomeExplore.premium_houses?.count == 0
                      ? toast.error(
                          'No Premium Houses available in ' + city_name
                        )
                      : goToSearch('Premium house', 'property');
                  }}
                >
                  <Image src={premium} alt="" />
                  <div>
                    <h3>
                      Premium Houses <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.premium_houses?.count} properties</p>
                  </div>
                </div>
              </div>
              {/* <div className="col">
              <div className="property_card">
                <Image src={img} alt="" />
                <div>
                  <h3>
                    {HomeExplore.data.trending_projects.type}{' '}
                    <ExpandCircleDownOutlinedIcon />
                  </h3>
                  <p>{HomeExplore.data.trending_projects.count} properties</p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        ) : (
          <div className="product-all-contents" style={{ overflowX: 'auto' }}>
            <div className="row main_slider">
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => {
                    goToSearch('HMDA Plot', 'plots');
                  }}
                >
                  <Image src={hmda} alt="" />
                  <div>
                    <h3>
                      {HomeExplore.hmda?.type}
                      <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.hmda?.count} plots</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => goToSearch('DTCP Plot', 'plots')}
                >
                  <Image src={dtcp} alt="" />
                  <div>
                    <h3>
                      {HomeExplore.dtcp?.type}
                      <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.dtcp?.count} plots</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => goToSearch('Open Plot', 'plots')}
                >
                  <Image src={openplot} alt="" />
                  <div>
                    <h3>
                      {HomeExplore.open?.type} <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.open?.count} plots</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div
                  className="property_card"
                  onClick={() => goToSearch('Farm Land', 'plots')}
                >
                  <Image src={plot} alt="" />
                  <div>
                    <h3>
                      {HomeExplore.farm?.type} <ExpandCircleDownOutlinedIcon />
                    </h3>
                    <p>{HomeExplore.farm?.count} plots</p>
                  </div>
                </div>
              </div>
              {/* <div className="col">
              <div className="property_card">
                <Image src={img} alt="" />
                <div>
                  <h3>
                    {HomeExplore.data.trending_projects.type}{' '}
                    <ExpandCircleDownOutlinedIcon />
                  </h3>
                  <p>{HomeExplore.data.trending_projects.count} properties</p>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default connect((state) => {
  return {
    city_name: state.cities.city_name,
    PropType: state.propertyListing.propType,
  };
}, {})(Propertiesbytype);
