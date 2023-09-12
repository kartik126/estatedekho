import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import homesize from '../../../public/images/house.png';
import buiding from '../../../public/images/Group 202306@2x.png';
import calendar from '../../../public/images/event.png';
import price from '../../../public/images/rupee.png';
import home from '../../../public/images/Group 202146@2x.png';
import rera from '../../../public/images/shield.png';
import meeting from '../../../public/images/meeting.png';
import lift from '../../../public/images/amenities-ed/Lifts.png';
import washroom from '../../../public/images/washroom.png';

function PropertyOverview({ data }) {
  return (
    <>
      <div className="overview-grid" style={{ paddingTop: '25px' }}>
        <div className="row ">
          <div className="col-sm overview-block">
            <p>
              size of{' '}
              {data?.society ? (
                <> {data?.society.prop_type || data?.society?.prop_kind}</>
              ) : (
                <></>
              )}
            </p>

            <div className="d-flex ">
              <Image
                src={homesize}
                alt=""
                width={35}
                height={35}
                position="fixed"
              />
              {data?.properties?.map((key, ind) => {
                return (
                  <>
                    <h3>
                      {key.built_up_area ||
                        key.carpet_area ||
                        key.super_builtup_area ||
                        key.plot_area}
                      {ind == data?.properties.length - 1 || ','}
                    </h3>
                  </>
                );
              })}
              <h3>{data?.pricing?.price_per_unit_type}</h3>
            </div>
          </div>

          <div className="col-sm overview-block">
            <p>Possession starts</p>
            <div className="d-flex ">
              <Image
                src={calendar}
                alt=""
                width={40}
                height={40}
                position="fixed"
              />

              {data?.society?.prop_type == 'Plot' ||
              data?.society?.prop_type == 'Farm Land' ? (
                <h3>Immediate</h3>
              ) : (
                <h3>
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
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-sm overview-block">
            <p>No. of Cabins</p>
            <div className="d-flex ">
              <Image
                src={price}
                alt=""
                width={32}
                height={30}
                position="fixed"
              />{' '}
              <h3>
                <span
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  {' '}
                  ₹
                </span>
                {data?.NoOfCabins}
              </h3>
            </div>
          </div> */}
          <div className="col-sm overview-block">
            <p>avg. price</p>
            <div className="d-flex ">
              <Image
                src={price}
                alt=""
                width={32}
                height={30}
                position="fixed"
              />{' '}
              <h3>
                <span
                  style={{
                    fontFamily: "'Noto Sans', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  {' '}
                  ₹
                </span>
                {data?.pricing?.price_per_unit}/
                {data?.pricing?.price_per_unit_type}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm overview-block">
            {data?.interaction.rera_id == null &&
            data?.interaction.lp_number == null ? (
              <p>Rera id</p>
            ) : data?.society.prop_type == 'Plot' ||
              data?.society.prop_type == 'Farm Land' ? (
              <p>Lp No.</p>
            ) : (
              <p>Rera id</p>
            )}

            <div className="d-flex ">
              <Image
                src={rera}
                alt=""
                width={35}
                height={35}
                position="fixed"
              />

              <h3>
                {data?.interaction?.rera_id ||
                  data?.interaction?.lp_number ||
                  'No Rera'}
              </h3>
            </div>
          </div>
          {data?.NoOfMeetingRooms && (
            <div className="col-sm overview-block">
              <p>No. of Meeting Rooms</p>
              <div className="d-flex ">
                <Image
                  src={meeting}
                  alt=""
                  width={32}
                  height={30}
                  position="fixed"
                />{' '}
                <h3>{data?.NoOfMeetingRooms}</h3>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          {data?.Servlifts && (
            <div className="col-sm overview-block">
              <p>No. of Service lifts</p>
              <div className="d-flex ">
                <Image
                  src={lift}
                  alt=""
                  width={32}
                  height={30}
                  position="fixed"
                />{' '}
                <h3>{data?.Servlifts}</h3>
              </div>
            </div>
          )}
          {data?.pssngrLift && (
            <div className="col-sm overview-block">
              <p>No. of Passenger lifts</p>
              <div className="d-flex ">
                <Image
                  src={lift}
                  alt=""
                  width={32}
                  height={30}
                  position="fixed"
                />{' '}
                <h3>{data?.pssngrLift}</h3>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          {data?.pubWashroom && (
            <div className="col-sm overview-block">
              <p>No. of public Washroom</p>
              <div className="d-flex ">
                <Image
                  src={washroom}
                  alt=""
                  width={35}
                  height={35}
                  position="fixed"
                />{' '}
                <h3>{data?.pubWashroom}</h3>
              </div>
            </div>
          )}
          {data?.pvtWashroom && (
            <div className="col-sm overview-block">
              <p>No. of private Washroom</p>
              <div className="d-flex ">
                <Image
                  src={washroom}
                  alt=""
                  width={35}
                  height={35}
                  position="fixed"
                />{' '}
                <h3>{data?.pvtWashroom}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PropertyOverview;
