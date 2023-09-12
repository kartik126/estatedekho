import React, { Component, useState } from 'react';
import Image from 'next/image';
import avatar from '../../../public/images/boy_avatar_icon_148455.png';
import card from '../../../public/images/Group 206129@2x.png';
import otherlinks from '../../../public/images/Path 253054.svg';
import housing from '../../../public/images/Path 19047.svg';
import services from '../../../public/images/Group 203272.svg';
import topsearch from '../../../public/images/Group 203490.svg';
import housingadvice from '../../../public/images/Group 203216.svg';
import alert from '../../../public/images/Group 203217.svg';
import helpcenter from '../../../public/images/Group 203206.svg';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import language from '../../../public/images/Group 203192.svg';
import signout from '../../../public/images/Group 203185.svg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import applestore from '../../../public/images/applestore.png';
import googleplay from '../../../public/images/googleplay.png';
import saved from '../../../public/images/savemenu.png';
import phone from '../../../public/images/phone.png';
import search from '../../../public/images/Group 206141@2x.png';
import seen from '../../../public/images/seen.png';
import { wrapper } from 'redux/store';
import apiClient from 'utils/apiClient';
import { useEffect } from 'react';
import Link from 'next/link';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { setPhone } from 'redux/reducer/login';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function SideMenu({ userData, data, profileData, close }) {
  const [token, setToken] = useState(null);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [profile, setProfile] = useState(null);
  const [Phone, setPhone] = useState('');
  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        setProfile(result.profile);
        setname(result.profile.name);
        setemail(result.profile.email);
        setPhone(result.profile.phone);
      } else {
        setProfile(null);
      }
    });
  };
  useEffect(() => {
    getProfile();
    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      setToken(token);
    }
    if (localStorage.getItem('profile') != 'null') {
      var profile = localStorage.getItem('profile');
      setProfile(profile);
    }
  }, []);
  return (
    <div>
      <CloseIcon
        className="cursor-pointer"
        style={{ position: 'absolute', right: '10px', top: '10px' }}
        onClick={() => close()}
      />
      <div style={{ overflow: 'hidden' }}>
        <div className="d-flex align-items-center row drawer-top pt-4 px-2 ">
          <div className="d-flex flex-row align-items-center col-sm">
            {/* <Image src={avatar} width={60} height={60} alt="" /> */}
            {name != null ? (
              <div className="px-2">
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{Phone}</p>
              </div>
            ) : null}
            {/* {data!="" ? */}
            {/* <div className="px-2">
              <h1>
                {data.name}
              </h1>
              <p>
                {data.email}
              </p>
              <p>
                {data.phone}
              </p>
            </div> */}
          </div>
          <div className="d-flex justify-content-end col-sm-4">
            {/* <button
              className="action-button "
              style={{
                height: '26px',
                width: '76px',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: '500',
              }}
              onClick={() => {
                window.location.reload(false);
                localStorage.setItem('authToken', null),
                  localStorage.setItem('profile', null);

                Menu();
              }}
            >
              Logout
            </button> */}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center row my-activity px-3 pt-4">
          <h1>My activity</h1>
          <div className=" d-flex justify-content-sm-between row ">
            {/* <div className=" d-flex justify-content-center align-items-center col-sm activity-block mx-2 cursor-pointer">
              <Image src={search} width={30} height={28} alt="" />
            </div> */}
            <Link href="/SavedProperties">
              <div className="d-flex justify-content-center align-items-center col-sm activity-block mx-2 cursor-pointer">
                <Image src={saved} width={30} height={28} alt="" />
              </div>
            </Link>
            <Link href="/ContactedProperties">
              <div className="d-flex justify-content-center align-items-center col-sm activity-block mx-2 cursor-pointer">
                <Image src={phone} width={30} height={28} alt="" />
              </div>
            </Link>
            <Link href="/RecentlyViewed">
              <div className="d-flex justify-content-center align-items-center col-sm activity-block mx-2 cursor-pointer">
                <Image src={phone} width={30} height={28} alt="" />
              </div>
            </Link>
          </div>
          <div className="row">
            {/* <div className="col-sm pt-2">
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  lineHeight: '1',
                  textAlign: 'center',
                }}
              >
                Recent searches
              </p>
            </div> */}

            <div className="col-sm pt-2">
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: '500',

                  lineHeight: '1',
                  textAlign: 'center',
                }}
              >
                Saved properties
              </p>
            </div>

            <div className="col-sm pt-2">
              {' '}
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: '1',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Contacted properties
              </p>
            </div>

            <div className="col-sm pt-2">
              {' '}
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: '1',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Seen properties
              </p>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center row transaction-block">
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-center col-sm-2 ">
              {' '}
              <Image src={card} width={25} height={20} />
            </div>

            <div className="col-sm drawer-links">My transactions</div>
          </div>
        </div> */}

        <div className="py-4 d-flex flex-column">
          <Link href={'/about-us'}>
            <a target={'_blank'}>
              <div className="px-3 mb-3 d-flex align-items-center cursor-pointer">
                <p
                  className="w-100 d-flex justify-content-between align-items-center"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  <span>
                    <InfoOutlinedIcon style={{ marginRight: '10px' }} />
                    About us{' '}
                  </span>
                  <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                </p>
              </div>
            </a>
          </Link>
          <Link href={'/privacypolicy'}>
            <a target={'_blank'}>
              <div className="px-3 mb-3 d-flex align-items-center cursor-pointer">
                <p
                  className="w-100 d-flex justify-content-between align-items-center"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  <span>
                    <LockOutlinedIcon style={{ marginRight: '10px' }} />
                    Privacy & Policy{' '}
                  </span>
                  <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                </p>
              </div>
            </a>
          </Link>
          <Link href={'/Termsandcondition'}>
            <a target={'_blank'}>
              <div className="px-3 d-flex align-items-center cursor-pointer">
                <p
                  className="w-100 d-flex justify-content-between align-items-center"
                  style={{ fontSize: '14px', fontWeight: '500' }}
                >
                  <span>
                    <InsertDriveFileOutlinedIcon
                      style={{ marginRight: '10px' }}
                    />
                    Terms & Conditions{' '}
                  </span>
                  <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
                </p>
              </div>
            </a>
          </Link>
        </div>
        <div
          className="row "
          style={{
            borderTop: ' 1.8px solid #e8e8e8',
            borderBottom: ' 1.8px solid #e8e8e8',
          }}
        >
          {/* <div className="d-flex align-items-center row">
            <div className="d-flex align-items-center">
              <div className="d-flex justify-content-center col-sm-2 ">
                {' '}
                <Image src={helpcenter} width={25} height={20} />
              </div>

              <div className="col-sm drawer-links">Vist help center</div>
              <ArrowForwardIosSharpIcon />
            </div>
          </div> */}
          {/* <div className="d-flex align-items-center row">
            <div className="d-flex align-items-center">
              <div className="d-flex justify-content-center col-sm-2 ">
                {' '}
                <Image src={language} width={25} height={20} />
              </div>
              <div className="col-sm drawer-links">Language</div>x
            </div>
          </div> */}
        </div>
        <div className="d-flex align-items-center row">
          <div
            className="d-flex align-items-center cursor-pointer"
            onClick={() => {
              window.location.reload(false);
              localStorage.setItem('authToken', null),
                localStorage.setItem('profile', null);
            }}
          >
            <div className="d-flex justify-content-center col-sm-2 ">
              {' '}
              <Image src={signout} width={25} height={20} alt="" />
            </div>

            <div className="col-sm drawer-links">Sign out</div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center download-links px-2">
            <div style={{ fontWeight: '500', fontSize: '12px' }}>
              Download Estate Dekho
            </div>
            <div className="d-flex col-sm justify-content-around px-2 ">
              <Image
                src={applestore}
                width={85}
                height={100}
                alt=""
                className="cursor-pointer "
                data-toggle="tooltip"
                data-placement="top"
                title="Coming soon"
                type="button"
              />
              <Link
                href={
                  'https://play.google.com/store/apps/details?id=com.estatedekho.buyer'
                }
              >
                <a target={'_blank'}>
                  <Image
                    href="https://apkgk.com/com.estatedekho"
                    src={googleplay}
                    width={85}
                    height={100}
                    alt=""
                    className="cursor-pointer"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-between col-sm p-4">
            <p style={{ fontSize: '12px', fontWeight: '600' }}>
              Follow us On :
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '40%',
                justifyContent: 'space-around',
              }}
            >
              <Link href={'https://www.facebook.com/estatedekho/'}>
                <a target={'_blank'}>
                  <p>
                    <FacebookIcon />
                  </p>
                </a>
              </Link>

              <Link href={'https://in.linkedin.com/company/estatedekho'}>
                <a target={'_blank'}>
                  <p>
                    <LinkedInIcon />
                  </p>
                </a>
              </Link>
              <Link href={'https://www.instagram.com/estatedekho/?hl=en'}>
                <a target={'_blank'}>
                  <p>
                    <InstagramIcon />
                  </p>
                </a>
              </Link>
              <Link
                href={
                  'https://www.youtube.com/channel/UCc8D-HkFc1ZUQFi-qCmaLdA'
                }
              >
                <a target={'_blank'}>
                  <p>
                    <YouTubeIcon />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
