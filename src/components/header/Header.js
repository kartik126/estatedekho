import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import flag from '../../../public/images/flag.png';
import logo from '../../../public/images/edlogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SideMenu from 'components/sidemenu/SideMenu';
import { connect } from 'react-redux';
import {
  setPhone,
  requestOtp,
  setOtp,
  verifyOtp,
} from '../../redux/reducer/login';
import toast, { Toaster } from 'react-hot-toast';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import bg from '../../../public/images/newyear.gif';
import republicday from '../../../public/images/republicday.png';
import callicon from '../../../public/images/telephone.png';
import {
  setSignupName,
  setSignupEmail,
  setSignupPhone,
  setSignupOtp,
  requestSignupOtp,
  verifySignupOtp,
} from '../../redux/reducer/signup';
import { useEffect } from 'react';
import LoginModal from 'components/LoginModal/LoginModal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '50%',
  bgcolor: 'none',
  border: 'none',
  borderRadius: '10px',
};

function Header({
  setPhone,
  requestOtp,
  phone,
  otp,
  setOtp,
  verifyOtp,
  data,
  authToken,
  name,
  email,
  NewPhone,
  SignupOtp,
  setSignupName,
  setSignupEmail,
  setSignupPhone,
  requestSignupOtp,
  verifySignupOtp,
  setSignupOtp,
  HorizontalSpace,
}) {
  console.warn('header props', data);
  const [Menu, setMenu] = useState(false);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [otpOpen, setotpOpen] = useState(false);
  const [Signup, setSignup] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const [openDrawer, setopenDrawer] = useState(false);
  const [signupOtp, setsignupOtp] = useState(false);
  const [Active, setActive] = useState(false);
  const [SignupActive, setSignupActive] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setloginOpen(false);
    setSignupOtp(false);
    setOpen(false);
    setSignup(false);
  };
  const handleotpOpen = () => {
    setotpOpen(true);
  };
  const handleotpClose = () => {
    setSignupOtp(false);
    setotpOpen(false);
    setOpen(false);
    setSignup(false);
  };
  const onTouchEnd = () => {
    setopenDrawer(false);
  };
  const onSwitch = () => {
    setopenDrawer((c) => !c);
  };
  const handleMenuClose = () => {
    setopenDrawer(false);
  };
  useEffect(() => {
    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      setToken(token);
    }
    if (localStorage.getItem('profile') != 'null') {
      var profile = localStorage.getItem('profile');
      setProfile(profile);
    }
  });
  return (
    <nav
      className={
        HorizontalSpace
          ? 'news-header-space navbar navbar-expand-lg navbar-light'
          : 'navbar navbar-expand-lg navbar-light'
      }
      // style={{ padding: HorizontalSpace ? HorizontalSpace : '0' }}
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <Link href="/">
        <a className="navbar-brand" href="#">
          <Image src={logo} alt="" />
        </a>
      </Link>

      {/* <div style={{ position: 'relative', top: -10 }}>
        <Image className="display" src={republicday} height={50} width={200} alt="" />
      </div> */}

      <div className=" nav_right">
        <div className="d-flex flex-row align-items-center px-4 cursor-pointer">
          <Image src={callicon} width={30} height={30} />
          <a href="tel:8585854850">
            <div style={{ lineHeight: '0.5', marginTop: 6 }}>
              <p
                style={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginLeft: 10,
                }}
              >
                get in touch
              </p>
              <p
                className="get-in-touch"
                style={{
                  fontWeight: 600,

                  marginLeft: 10,
                  marginTop: 6,
                  color: '#19469b',
                }}
              >
                {' '}
                85 85 85 4 85 0
              </p>
            </div>
          </a>
        </div>

        <Link href={'https://seller.estatedekho.com'}>
          <a target={'_blank'}>
            <button className="postad-btn">
              <Image src={flag} alt="" width={'37%'} height={'23%'} /> Post ad
              for{' '}
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '4px',
                  fontFamily: 'Poppins',
                }}
              >
                Free <ExpandCircleDownOutlinedIcon />
              </span>{' '}
            </button>
          </a>
        </Link>
        {token == null ? (
          <>
            <button
              className="d-flex align-items-center login-btn"
              onClick={() => {
                handleOpen, setloginOpen(!loginOpen);
                console.warn('token is', token);
              }}
              style={{
                background: '#19469b',
                color: '#fff',
                width: 'fit-content',
              }}
            >
              {' '}
              <AccountCircleOutlinedIcon />
              Log in
            </button>
          </>
        ) : (
          <>
            {/* {profile == 'null' ? null : ( */}
            <button
              className="d-flex align-items-center login-btn"
              style={{
                background: '#19469b',
                color: '#fff',
                width: 'fit-content',
              }}
              onClick={() => {
                setopenDrawer(true), handleOpen, setMenu(!Menu);
              }}
            >
              {' '}
              <AccountCircleOutlinedIcon />
              {profile != null ? <>{profile.split(' ', [1])}</> : <></>}
              {/* Aman */}
            </button>
            {/* )} */}
          </>
        )}
        {token == null ? (
          <button
            className="navbar-account"
            onClick={() => setloginOpen(!loginOpen)}
          >
            {' '}
            <AccountCircleOutlinedIcon />
          </button>
        ) : null}
      </div>
      {/* SideMenu modal */}
      {/* {authToken != null ? ( */}
      <>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setopenDrawer(false)}
        >
          <Box width="400px">
            <SideMenu profileData={profile} close={handleMenuClose} />
          </Box>
        </Drawer>
        {/* <SideMenu profileData={profile} Menu={handleMenuClose} /> */}
      </>
      {/* ) : ( */}
      <>
        <Modal
          open={loginOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginModal close={handleClose} />
          </Box>
        </Modal>
      </>

      {/* )} */}

      {/* enter OTP modal  */}
    </nav>
  );
}

export default connect(
  (state) => {
    return {
      phone: state.login.phone,
      otp: state.login.otp,
      authToken: state.session.authToken,
      name: state.signup.name,
      email: state.signup.email,
      NewPhone: state.signup.NewPhone,
      SignupOtp: state.signup.SignupOtp,
    };
  },
  {
    setPhone,
    setOtp,
    requestOtp,
    verifyOtp,
    setSignupName,
    setSignupEmail,
    setSignupPhone,
    setSignupOtp,
    requestSignupOtp,
    verifySignupOtp,
  }
)(Header);
