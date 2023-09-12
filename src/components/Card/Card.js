import React from 'react';
import Image from 'next/image';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import img2 from '../../../public/images/Group 204290@2x.png';
import fav from '../../../public/images/Path 17843@2x.png';
import Rera from '../../../public/images/Group 204282@2x.png';
import share from '../../../public/images/Group 204284@2x.png';
import Link from 'next/link';
function Card(propertyImage, propertyName, propertyDetails, location, price) {
  return (
    <>
      {' '}
      <div className="col">
        <Link href="/PropertyDetails/PropertyId">
          <div
            className="card"
            style={{
              width: ' 24.5rem',
              border: ' 2.2px solid #eaeaea',
              padding: ' 6px 6px',
              paddingBottom: '0px',
            }}
          >
            {propertyImage && (
              <Image
                className="card-img-top"
                src={propertyImage}
                alt="Card cap"
              />
            )}
            <p className="sponsored">Sponsored</p>
            <button className="favourite-icon">
              <Image src={fav} width={20} height={20} alt="" />
            </button>
            <button className="share-icon">
              <Image src={share} width={45} height={45} alt="" />
            </button>

            <div className="row card-body">
              <div className="col">
                <h1>{propertyName}</h1>
                <div className="d-flex flex-column ">
                  <p style={{ lineHeight: '1.3' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>
                      {propertyDetails}
                    </span>
                    <br />
                    <span style={{ fontSize: '12px' }}> {location}</span>
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end col">
                <div>
                  <Image src={Rera} width={'65px'} height={'25px'} alt="" />
                  <h3>₹ {price}</h3>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center col-sm-12 property-details">
                  <div
                    className="pl-4 col"
                    style={{ borderRight: '1px solid rgb(232 232 232)' }}
                  >
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '400',
                        color: '#a8acb3',
                        height: '10px',
                      }}
                    >
                      Build Up Area
                    </p>
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '500',
                        height: '10px',
                      }}
                    >
                      2000 sq. ft.
                    </p>
                  </div>
                  <div
                    className="pl-4 col"
                    style={{ borderRight: '1px solid rgb(232 232 232)' }}
                  >
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '400',
                        color: '#a8acb3',
                        height: '10px',
                      }}
                    >
                      Avg. Price
                    </p>
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '500',
                        height: '10px',
                      }}
                    >
                      ₹ 4000/sq.ft.
                    </p>
                  </div>
                  <div className="pl-4 col">
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '400',
                        color: '#a8acb3',
                        height: '10px',
                      }}
                    >
                      EMI start
                    </p>
                    <p
                      style={{
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '500',
                        height: '10px',
                      }}
                    >
                      ₹ 1.02 lacs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="d-flex col-sm-9">
                <Image src={img2} width={35} height={20} alt="" />
                <div style={{ paddingLeft: '5px' }}>
                  <p
                    style={{
                      height: '10px',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    Emaar Developers
                  </p>
                  <p
                    style={{
                      height: '10px',
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '0.8px',
                      color: '#a8acb3',
                      textTransform: 'uppercase',
                    }}
                  >
                    Housing Expert
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end col-sm-3">
                {/* <Image src={img} alt="" width={60} height={35} /> */}
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center m-2 card-bottom">
              <h1 className="cursor-pointer">
                Contact Now <ExpandCircleDownOutlinedIcon />
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
