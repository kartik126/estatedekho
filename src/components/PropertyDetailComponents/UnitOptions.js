import React from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from 'next/link';
import Image from 'next/image';
import RequestFloorPlanButton from 'components/RequestFloorPlanButton';
import dummyfloor from '../../../public/images/dummyfloorplan.png';
import area from '../../../public/images/area.png';
import { useState } from 'react';
import DynamicImage from 'components/DynamicImage';
function UnitOptions({ data, basePriceConvert }) {
  const [index, setindex] = useState(0);
  return (
    <>
      <div className="col-sm-12 ">
        <h1 className="property-details-heading">
          Unit Options <span style={{ fontWeight: '600' }}>& Pricing</span>
        </h1>
        <div className="unit_options">
          <div className="row">
            {data?.society?.prop_kind == 'Commercial' ? null : (
              <div className="row pt-4">
                <div
                  className=" d-flex flex-row align-items-center px-2"
                  style={{
                    height: '50px',
                    whiteSpace: 'nowrap',
                    overflowX: 'auto',
                  }}
                >
                  {data?.properties.map((key, ind) => {
                    return (
                      <>
                        <div className="col-sm-2">
                          <button
                            className="action-button"
                            style={{
                              width: 'fit-content',
                              borderRadius: '35px',
                              height: '32px',
                              whiteSpace: 'nowrap',
                            }}
                            onClick={() => setindex(ind)}
                          >
                            {key.bedrooms}BHK {key.society.prop_type}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            <div className="row px-3 py-5 floormap-ovreflow">
              <>
                <div className="col-sm-2">
                  <p
                    style={{
                      lineHeight: 0.1,
                      fontSize: '12px',
                      color: 'gray',
                    }}
                  >
                    Builder Price
                  </p>

                  <div
                    className="py-1"
                    style={{
                      fontWeight: '600',
                      fontSize: '16px',
                      borderRight: ' 0.1px solid #c7c7c7',
                      display: 'flex',
                    }}
                  >
                    <LocalOfferIcon style={{ color: '#fba944' }} />{' '}
                    {data?.properties[index].prop_cost ? (
                      <>
                        <h1
                          style={{
                            fontWeight: 600,
                            fontSize: '16px',
                            margin: '5px',
                          }}
                        >
                          ₹{' '}
                          {basePriceConvert(data?.properties[index].prop_cost)}
                        </h1>
                      </>
                    ) : (
                      <>
                        <h1
                          style={{
                            fontWeight: 600,
                            fontSize: '16px',
                            margin: '5px',
                          }}
                        >
                          ₹{' '}
                          {basePriceConvert(
                            data?.pricing.price_per_unit *
                              (data?.properties[index].built_up_area ||
                                data?.properties[index].carpet_area ||
                                data?.properties[index].super_builtup_area)
                          )}
                        </h1>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-sm-2 mb-5">
                  <p
                    style={{
                      lineHeight: 0.1,
                      fontSize: '12px',
                      color: 'gray',
                    }}
                  >
                    {(data?.built_up_area && 'Builtup area . size') ||
                      (data?.carpet_area && 'Carpet area . size') ||
                      (data?.super_builtup_area &&
                        'Super Builtup area . size') ||
                      (data?.plot_area && 'Plot area')}
                  </p>
                  <div className="d-flex flex-row align-items-center">
                    {' '}
                    <Image src={area} width={20} height={20} />
                    <h1
                      style={{
                        fontWeight: '600',
                        fontSize: '16px',
                        margin: '5px',
                      }}
                    >
                      {data?.properties[index].built_up_area ||
                        data?.properties[index].carpet_area ||
                        data?.properties[index].super_builtup_area ||
                        data?.properties[index].plot_area}{' '}
                      {data?.pricing.price_per_unit_type}
                    </h1>
                  </div>
                </div>
                <div className="display-col d-flex flex-row justify-content-center align-items-center">
                  {data?.images.filter((j) => j.photo_type == 'floor_plan')
                    .length > 0 ? (
                    <>
                      {data?.images
                        .filter(
                          (j) =>
                            j.photo_type == 'floor_plan' &&
                            j.photo_res == 'large'
                        )
                        .map((val) => {
                          return (
                            <>
                              <div
                                className="mx-4 floorplan-card "
                                style={{ width: '330' }}
                              >
                                <Link href={val.photo_url}>
                                  <a target="_blank">
                                    <img
                                      src={val.photo_url}
                                      className="floor-plan-image cursor-pointer"
                                      alt=""
                                    />
                                  </a>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    <div className="d-flex flex-column col-sm justify-content-center align-items-center dummy-floor">
                      <Image
                        src={dummyfloor}
                        width={250}
                        height={250}
                        style={{ marginBottom: '30px' }}
                      />

                      <RequestFloorPlanButton client={data?.client} />
                    </div>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitOptions;
