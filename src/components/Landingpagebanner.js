import React from 'react';
import Image from 'next/image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import img from '../../public/images/jsr srivaikuntam 4.jpg';
import { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import apiClient from 'utils/apiClient';
import { emailTest, phone_icon } from 'utils/constant';
import toast, { Toaster } from 'react-hot-toast';
import moment from 'moment';
import star from '../../public/images/star2.png';
import bedroom from '../../public/images/bedroom.png';
import money from '../../public/images/money.png';
import balcony from '../../public/images/balcony.png';
import bathroom from '../../public/images/bath.png';
import checked from '../../public/images/checked.png';
import possession from '../../public/images/ownership.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { width } from '@mui/system';
function Landingpagebanner({
  header,
  data,
  address,
  details,
  about,
  clientDetails,
  type,
}) {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');

  const contact = () => {
    let response = apiClient.post(
      apiClient.Urls.contactDeveloper,
      {
        lead_name: name,
        lead_email: email,
        lead_phone: phone,
        developer_id: clientDetails.id,
      },
      true
    );
    response.then((result) => {
      console.log('Contact form result', result);
      if (result.success) {
        toast.success(result.message);
        setname('');
        setemail('');
        setphone('');
      } else {
        toast.error(result.message);
      }
    });
  };

  const myFunction = () => {
    document.getElementById('myText').focus();
  };
  return (
    <div
      id="section1"
      className="row "
      style={{ paddingTop: '90px', position: 'relative' }}
    >
      <div style={{ position: 'relative', height: '100%' }}>
        <div
          className="col d-flex flex-column justify-content-center landing-pg-banner shadow-lg  px-4"
          style={{ margin: '4% 0' }}
        >
          <h1
            style={{
              fontSize: '3.5vw',
              fontWeight: '600',
              color: '#19469B',
              paddingRight: '40px',
              whiteSpace: 'initial',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '90%',
            }}
            className="lp-title"
          >
            {details?.project_name || details?.plot_name}
          </h1>
          <div className="display-col d-flex align-items-center flex-row">
            {/* <p
              style={{
                fontSize: '14px',
                whiteSpace: 'initial',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              By{' '}
              <span style={{ fontWeight: 600 }}>
                {clientDetails?.client_name}
              </span>
            </p> */}
            {/* <span className="display px-2">|</span> */}
            <p
              className="d-flex align-items-center"
              style={{
                fontWeight: 600,
                fontSize: '14px',
                whiteSpace: 'initial',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              <FmdGoodIcon className="fs-15" />
              {details?.locality},{details?.city}
            </p>
          </div>
          <div className="display-col d-flex flex-row py-3 ">
            <div className="d-flex flex-column ">
              <p
                style={{ color: '#E37D32', fontSize: '16px', fontWeight: 600 }}
              >
                Starting Price
              </p>

              {details?.gross_cost >= 10000000 ? (
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: '19px',
                    marginRight: '5px',
                  }}
                >
                  <span style={{ fontFamily: 'Roboto' }}>₹</span>{' '}
                  {Math.abs(details.gross_cost / 10000000).toFixed(2)} Cr
                  onwards
                </p>
              ) : (
                <p style={{ fontWeight: 600, fontSize: '19px' }}>
                  <span style={{ fontFamily: 'Roboto', marginRight: '5px' }}>
                    ₹
                  </span>{' '}
                  {Math.abs(details?.gross_cost / 100000).toFixed(2)} Lac
                  onwards
                </p>
              )}
            </div>
            <div
              className="d-flex flex-row align-items-center px-5"
              style={{ textAlign: 'left' }}
            >
              <ApartmentIcon
                style={{
                  color: '#19469B',
                  fontSize: '40px',
                  marginRight: '10px',
                }}
              />
              {type == 'Plot' ? (
                <p
                  style={{
                    fontWeight: 500,
                    color: '#6D6D6D',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    display: 'contents',
                  }}
                >
                  {details?.plot_type}-{details?.plot_area} Sq. yd.
                </p>
              ) : (
                <p
                  style={{
                    fontWeight: 500,
                    color: '#6D6D6D',
                    fontSize: '16px',
                    textTransform: 'capitalize',
                    display: 'contents',
                    whiteSpace: 'break-spaces',
                  }}
                >
                  {details?.property_type.replace('_', ' ')}: Starting from{' '}
                  {details?.area} Sqft.
                </p>
              )}
            </div>
          </div>
          <div className="display-col d-flex flex-row justify-content-between">
            <button
              className="display d-flex justify-content-center align-items-center border-rounded border border-0"
              style={{
                borderRadius: '12px',
                padding: '10px 50px',
                background: '#19469B',
                color: '#ffff',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                height: '55px',
              }}
              onClick={() => {
                myFunction();
              }}
            >
              I am Interested
            </button>
          </div>
        </div>
        <div
          className="display py-2 shadow px-5"
          style={{
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
            zIndex: '2',
            background: 'rgb(255,255,255,0.8)',
            width: '75%',
            height: 'fit-content',
            position: 'absolute',
            top: '27rem',
          }}
        >
          <p style={{ color: '#19469B', fontWeight: 700, textAlign: 'center' }}>
            Project Highlights
          </p>
          <div
            className="px-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto auto',
            }}
          >
            {details?.bhk && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={bedroom} width={27} height={27} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  {' '}
                  {details.bhk} BHK
                </div>
              </div>
            )}
            {details?.balcony && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={balcony} width={25} height={25} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  {details.balcony} Balcony
                </div>
              </div>
            )}
            {details?.bathroom && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={bathroom} width={25} height={25} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  {details.bathroom} Bathroom
                </div>
              </div>
            )}
            {details?.possession_status && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={possession} width={25} height={25} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  Possession Status: {details?.possession_status}
                </div>
              </div>
            )}
            <br />
            {details?.launch_date && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={possession} width={25} height={25} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  Possession Status :{' '}
                  {moment(details?.launch_date).isBefore(moment())
                    ? 'Ready To Move'
                    : moment(details?.launch_date).format('MMM yyyy')}
                </div>
              </div>
            )}
            {details?.cost_per_sqft && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={money} width={25} height={25} alt="" />
                <div
                  className=" "
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  Cost per Sqft : ₹ {details.cost_per_sqft}/Sqft
                </div>
              </div>
            )}
            {details?.price_per_sqyd && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={money} width={18} height={18} alt="" />

                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  ₹ {details.price_per_sqyd}/Sqyd
                </div>
              </div>
            )}
            {details?.plot_lp_number && (
              <div className="pb-3 d-flex flex-row align-items-center">
                <Image src={checked} width={18} height={18} alt="" />
                <div
                  style={{
                    fontWeight: 600,
                    color: 'rgb(70 70 70)',
                    fontSize: '14px',
                    marginLeft: '5px',
                  }}
                >
                  Lp no. : {details.plot_lp_number}
                </div>
              </div>
            )}
            {details?.rera_id ||
              (details?.plot_rera_id && (
                <div className="pb-3 d-flex flex-row align-items-center">
                  <Image src={checked} width={25} height={25} alt="" />

                  <div
                    style={{
                      fontWeight: 600,
                      color: 'rgb(70 70 70)',
                      fontSize: '14px',
                      marginLeft: '5px',
                    }}
                  >
                    Rera Id : {details.rera_id || details?.plot_rera_id}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="banner-bg col-sm-10 px-5 d-flex align-items-end justify-content-end"
        style={{ width: '100%', height: '100%' }}
      >
        {details?.featured_image?.includes('projects') ||
        details?.featured_image_path?.includes('projects') ? (
          <>
            <img
              className="rounded-5"
              src={`https://seller.estatedekho.com/${
                details?.featured_image_path || details?.featured_image
              }`}
              width={'80%'}
              height={'100%'}
              style={{ position: 'relative' }}
              alt=""
            />
          </>
        ) : (
          <>
            <img
              className="rounded-5"
              src={`https://seller.estatedekho.com/images/projects/${
                details?.featured_image_path || details?.featured_image
              }`}
              width={'80%'}
              height={'100%'}
              style={{ position: 'relative' }}
              alt=""
            />
          </>
        )}

        <div
          className="display shadow-lg  landing-page-form py-3 px-4 mx-5 d-flex justify-content-center flex-column align-items-center"
          style={{ position: 'absolute', top: '18%', right: '3.7%' }}
        >
          <p className="fs-6 fw-semibold">
            Interested?{' '}
            <span
              style={{
                color: '#19469B',
                fontFamily: 'playfair',
                fontSize: '18px',
              }}
            >
              Contact Us
            </span>
          </p>
          <div
            className="form-floating mb-3 mt-3 w-90"
            style={{ fontSize: '13px' }}
          >
            <input
              type="text"
              id="myText"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control shadow-sm"
              placeholder="name"
            />
            <label
              className="d-flex align-items-center"
              htmlFor="floatingInput"
            >
              Full Name
            </label>
          </div>
          <div className="form-floating mb-3 w-90" style={{ fontSize: '13px' }}>
            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="form-control shadow-sm"
              id="floatingInput"
              placeholder="Number"
              maxLength={10}
            />
            <label
              className="d-flex align-items-center"
              htmlFor="floatingInput"
            >
              Contact Number
            </label>
          </div>
          <div className="form-floating mb-3 w-90" style={{ fontSize: '13px' }}>
            <input
              type="email"
              className="form-control shadow-sm"
              id="floatingInput"
              placeholder="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label
              className="d-flex align-items-center"
              htmlFor="floatingInput"
            >
              Email ID
            </label>
          </div>
          <button
            onClick={() => contact()}
            className="my-2 border-rounded border border-0"
            style={{
              borderRadius: '5px',
              padding: '4px 50px',
              background: '#19469B',
              color: '#ffff',
              fontSize: '10px',
              height: '35px',
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Landingpagebanner;
