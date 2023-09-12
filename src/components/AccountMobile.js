import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import avatar from '../../public/images/boy_avatar_icon_148455.png';
import Image from 'next/image';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useState } from 'react';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect } from 'react';
import apiClient from 'utils/apiClient';
import Link from 'next/link';
function AccountMobile({ handleAccountState }) {
  const [EditProfileActive, setEditProfileActive] = useState(false);
  const [token, setToken] = useState(null);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [profile, setProfile] = useState(null);

  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        setProfile(result.profile);
        setname(result.profile.name);
        setemail(result.profile.email);
      } else {
        setProfile(null);
      }
    });
  };
  const updateProfile = () => {
    let res = apiClient.post(
      apiClient.Urls.updateProfile,
      {
        name: name,
        email: email,
      },
      true
    );
    res.then((result) => {
      if (result.success) {
        setEditProfileActive(false);
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
  console.log(profile);
  return (
    <div className="search-filter-mobile">
      <div
        className="d-flex flex-row align-items-center"
        style={{
          background: '#F0F3F7',
          height: '60px',
        }}
      >
        {EditProfileActive ? (
          <>
            <KeyboardArrowLeftIcon
              style={{ margin: ' 11px 10px' }}
              onClick={() => setEditProfileActive(false)}
            />
            <p className=" px-1 mt-2" style={{ fontWeight: '500' }}>
              Account
            </p>
          </>
        ) : (
          <>
            <KeyboardArrowLeftIcon
              style={{ margin: ' 11px 10px' }}
              onClick={handleAccountState}
            />
            <p className=" px-1 mt-2" style={{ fontWeight: '500' }}>
              Account
            </p>
          </>
        )}
      </div>
      {EditProfileActive ? (
        <div className="py-5">
          <div className="col px-4">
            <p style={{ fontWeight: '500', fontSize: '12px', lineHeight: '1' }}>
              Full Name
            </p>

            <PersonOutlineOutlinedIcon
              style={{
                position: 'absolute',
                right: 32,
                marginTop: '13px',
                color: '#d3d3d3',
              }}
            />
            <input
              placeholder="Enter your Full Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="col px-4 py-3">
            <p style={{ fontWeight: '500', fontSize: '12px', lineHeight: '1' }}>
              Email Address
            </p>
            <MarkunreadOutlinedIcon
              style={{
                position: 'absolute',
                right: 32,
                marginTop: '13px',
                color: '#d3d3d3',
              }}
            />

            <input
              placeholder="Enter your Email Id"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="mob-search_btn"
              style={{ border: 'none', bottom: '10%', width: '90%' }}
              onClick={() => updateProfile()}
            >
              <h3 className="my-1">
                Update{' '}
                <ExpandCircleDownOutlinedIcon
                  style={{ position: 'absolute', right: 10, top: 10 }}
                />
              </h3>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div
            className="row mx-1 py-3"
            style={{ borderBottom: '0.1px solid #d3d3d3' }}
          >
            <div className="row mobile-profile">
              <div className="col py-2">
                <h1 style={{ fontSize: '13px', fontWeight: '600' }}>{name}</h1>
                <p
                  style={{
                    fontSize: '10px',
                    color: '#444655',
                    lineHeight: '0.1',
                  }}
                >
                  {email}
                </p>
              </div>
              <button
                className="my-3"
                onClick={() => setEditProfileActive(true)}
                style={{
                  border: 'none',
                  width: '50px',
                  height: '30px',
                  borderRadius: '5px',
                  fontSize: '12px',
                  background: '#F0F3F7',
                }}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="d-flex flex-column py-3">
            <Link href="RecentlyViewed">
              <div
                className="d-flex flex-row px-3 py-2"
                onClick={handleAccountState}
              >
                <LocationOnOutlinedIcon style={{ color: '#979EAA' }} />
                <p
                  className="px-3"
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#212429',
                  }}
                >
                  Recently viewed properties
                </p>
                <KeyboardArrowRightOutlinedIcon
                  style={{ position: 'absolute', right: 20 }}
                />
              </div>
            </Link>
            <Link href="SavedProperties">
              <div
                className="d-flex flex-row px-3 py-2"
                onClick={handleAccountState}
              >
                <FavoriteBorderOutlinedIcon style={{ color: '#979EAA' }} />
                <p
                  className="px-3"
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#212429',
                  }}
                >
                  Saved properties
                </p>
                <KeyboardArrowRightOutlinedIcon
                  style={{ position: 'absolute', right: 20 }}
                />
              </div>
            </Link>
            {/* <div className="d-flex flex-row px-3 py-2">
              <SmsOutlinedIcon style={{ color: '#979EAA' }} />
              <p
                className="px-3"
                style={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#212429',
                }}
              >
                Contacted properties
              </p>
              <KeyboardArrowRightOutlinedIcon
                style={{ position: 'absolute', right: 20 }}
              />
            </div> */}
            {/* <Link href="about-us">
              <div
                className="d-flex flex-row px-3 py-2"
                onClick={handleAccountState}
              >
                <InfoOutlinedIcon style={{ color: '#979EAA' }} />
                <p
                  className="px-3"
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#212429',
                  }}
                >
                  About us
                </p>
                <KeyboardArrowRightOutlinedIcon
                  style={{ position: 'absolute', right: 20 }}
                />
              </div>
            </Link> */}
            <Link href="privacypolicy">
              <div
                className="d-flex flex-row px-3 py-2"
                onClick={handleAccountState}
              >
                <InsertDriveFileOutlinedIcon style={{ color: '#979EAA' }} />
                <p
                  className="px-3"
                  style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: '#212429',
                  }}
                >
                  Privacy Policy
                </p>
                <KeyboardArrowRightOutlinedIcon
                  style={{ position: 'absolute', right: 20 }}
                />
              </div>
            </Link>
          </div>
          <div
            className="d-flex flex-row justify-content-center"
            style={{ position: 'absolute', bottom: '20%', right: 0, left: 0 }}
          >
            <LogoutOutlinedIcon style={{ color: '#212429' }} />
            <p
              style={{ fontWeight: '600', color: '#212429' }}
              onClick={() => {
                window.location.reload(false);
                localStorage.setItem('authToken', null),
                  localStorage.setItem('profile', null);
              }}
            >
              Logout
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default AccountMobile;
