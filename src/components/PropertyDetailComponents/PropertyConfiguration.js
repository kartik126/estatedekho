import Image from 'next/image';
import React from 'react';
import home2 from '../../../public/images/propertyconfig/size.png';
import calendar2 from '../../../public/images/propertyconfig/calendar.png';
import moment from 'moment';
import rupee from '../../../public/images/propertyconfig/rupee-symbol.png';
import homesize2 from '../../../public/images/propertyconfig/area.png';
import location from '../../../public/images/propertyconfig/placeholder.png';

function PropertyConfiguration({ data }) {
  return (
    <>
      <div className="row property-configurations">
        <div className="col details-block">
          <div className="details-block-icon">
            <Image
              src={home2}
              width={25}
              height={25}
              alt=""
              // style={{ right: '0' }}
              className="details-block-img"
            />
          </div>
          <div
            className="col"
            style={{
              lineHeight: '0.5',
              paddingLeft: '12px',
            }}
          >
            <p>Configuration</p>
            <h5>
              {data ? (
                <>
                  {' '}
                  {(data?.BHKRange && <> {data?.BHKRange} BHK </>) ||
                    (data?.bedrooms && <>{data?.bedrooms} BHK </>)}
                  {data?.society?.prop_type || data?.society?.prop_kind}
                </>
              ) : (
                <></>
              )}
            </h5>
          </div>
        </div>
        <div className="col details-block">
          <div className="details-block-icon">
            <Image
              src={location}
              width={22}
              height={22}
              alt=""
              style={{ right: '0' }}
            />
          </div>
          <div
            style={{
              lineHeight: '0.5',
              paddingLeft: '12px',
            }}
          >
            <p>Location</p>
            {data?.society ? (
              <>
                {' '}
                <h5
                  style={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'break-spaces',
                    width: '100%',
                    fontSize: 'inherit',
                  }}
                >
                  {data?.society.address_locality}
                </h5>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col details-block">
          <div className="details-block-icon">
            <Image
              src={calendar2}
              width={25}
              height={25}
              alt=""
              style={{ right: '0' }}
            />
          </div>
          <div
            style={{
              lineHeight: '0.5',
              paddingLeft: '12px',
            }}
          >
            <p>Possession</p>
            {data ? (
              <>
                {' '}
                {data?.society?.prop_type == 'Plot' ||
                data?.society?.prop_type == 'Farm Land' ? (
                  <h5>Immediate</h5>
                ) : (
                  <h5>
                    {data?.uc_date ? (
                      <>
                        {moment(data?.uc_date, 'DD/MM/YYYY').isBefore(moment())
                          ? 'Ready to Move'
                          : moment(data?.uc_date, 'DD/MM/YYYY').format(
                              'MMM YYYY'
                            )}
                      </>
                    ) : (
                      'Ready to Move'
                    )}
                  </h5>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col details-block">
          <div className="details-block-icon">
            <Image
              src={rupee}
              width={25}
              height={25}
              alt=""
              style={{ right: '0' }}
            />
          </div>
          <div
            style={{
              lineHeight: '0.5',
              paddingLeft: '12px',
            }}
          >
            <p>Avg. price</p>
            <h5>
              {data?.pricing ? (
                <>
                  {' '}
                  <span
                    style={{
                      fontFamily: "'Noto Sans', sans-serif",
                      fontWeight: '600',
                    }}
                  >
                    {' '}
                    ₹
                  </span>{' '}
                  {data?.pricing.price_per_unit}/
                  {data?.pricing.price_per_unit_type}
                </>
              ) : (
                <></>
              )}
            </h5>
          </div>
        </div>
        <div className="col  details-block " style={{ marginRight: 0 }}>
          <div className="details-block-icon">
            <Image
              src={homesize2}
              width={25}
              height={25}
              alt=""
              style={{ right: '0' }}
            />
          </div>
          <div
            style={{
              lineHeight: '0.5',
              paddingLeft: '12px',
            }}
          >
            <p>
              {' '}
              {(data?.built_up_area && 'Builtup area') ||
                (data?.carpet_area && 'Carpet area') ||
                (data?.super_builtup_area && 'Super Builtup area') ||
                (data?.plot_area && 'Plot area')}{' '}
            </p>
            {data ? (
              <>
                {' '}
                <h5>
                  {' '}
                  {data?.properties?.[0].built_up_area ||
                    data?.properties?.[0].carpet_area ||
                    data?.properties?.[0].super_builtup_area ||
                    data?.properties?.[0].plot_area}{' '}
                  {data?.pricing?.price_per_unit_type}
                </h5>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyConfiguration;
