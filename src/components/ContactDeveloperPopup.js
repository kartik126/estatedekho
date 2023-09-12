import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { connect } from 'react-redux';
import { setOtp } from 'redux/reducer/login';
import { useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import toast, { Toaster } from 'react-hot-toast';
import verify from '../../public/images/verify.gif';
import Image from 'next/image.js';
import {
  setSignupName,
  setSignupEmail,
  setSignupPhone,
  setSignupOtp,
  requestSignupOtp,
  verifySignupOtp,
} from '../redux/reducer/signup.js';
import LoginModal from './LoginModal/LoginModal.js';
import apiClient from 'utils/apiClient.js';
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
function ContactDeveloperPopup({
  close,
  open,
  slug,
  name,
  client,
  NewPhone,
  SignupOtp,
  setSignupName,
  setSignupEmail,
  setSignupPhone,
  requestSignupOtp,
  verifySignupOtp,
  setSignupOtp,
  errorMessage,
  setloginModal,
}) {
  const [otp, setotp] = useState(false);
  const [developer, setdeveloper] = useState(false);
  const [token, settoken] = useState('null');
  const [loginOpen, setloginOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [cname, setcname] = useState('');
  const [cnumber, setcnumber] = useState('');
  useEffect(() => {
    if (localStorage.getItem('authToken') !== null) {
      var token = localStorage.getItem('authToken');
      settoken(token);
    }
  }, []);
  const handleClose = () => {
    setloginOpen(false);
  };

  const contact = () => {
    // var x = localStorage.getItem('authToken');
    // console.warn(x)
    if (token != null) {
      let response = apiClient.post(
        apiClient.Urls.propertyContact,
        {
          name: cname,
          email: 'xyz@gmail.com',
          phone: cnumber,
          slug: slug,
        },
        true
      );
      response.then((result) => {
        if (result.success) {
          setdeveloper(true);
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }

        console.warn('contact property----->>>>>', result);
      });
    }
  };

  const getProfile = () => {
    let res = apiClient.get(apiClient.Urls.getProfile, {}, true);
    res.then((result) => {
      if (result.success) {
        setProfile(result.profile);
        contact();
      } else {
        setProfile(null);
      }
    });
  };
  return (
    <>
      {token == 'null' ? (
        !developer ? (
          <>
            <div className="col-sm">
              <CancelIcon
                onClick={() => close()}
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  color: '#fff',
                }}
                className="cursor-pointer"
              />
              <div
                className="col py-3"
                style={{ height: '140px', background: '#19469b' }}
              >
                <p
                  className="d-flex justify-content-center align-items-end"
                  style={{
                    color: '#ffff',
                    fontSize: '15px',
                    textAlign: 'center',
                  }}
                >
                  Search no more!
                  <br />
                  Get exactly what you need in a property!
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    color: '#ffff',
                    fontSize: '10px',
                    lineHeight: 0.6,
                  }}
                >
                  Get free consultation for your dream property today
                </p>
                <div className="row d-flex justify-content-around px-5 py-2">
                  <a href="tel:8585854850">
                    <button className="contact-poppup-btn">
                      <CallIcon style={{ fontSize: '19px', margin: '0 5px' }} />
                      Call Now
                    </button>
                  </a>
                  <a href="https://wa.me/+91-8585854850">
                    <button className="contact-poppup-btn">
                      <WhatsAppIcon
                        style={{ fontSize: '19px', margin: '0 5px' }}
                      />
                      Whatsapp
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center py-4"
                style={{ height: 'fit-content', background: '#ffff' }}
              >
                <div className="d-flex flex-column ">
                  <p style={{ lineHeight: 0, fontWeight: '500' }}>Full Name</p>
                  <input
                    className="my-3 contact-popup-btn-input"
                    placeholder="Enter your name"
                    value={cname}
                    onChange={(e) => setcname(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column">
                  <p style={{ lineHeight: 0, fontWeight: '500' }}>
                    Phone Number
                  </p>
                  <input
                    className="my-3 contact-popup-btn-input"
                    placeholder="Enter your number"
                    maxLength={10}
                    value={cnumber}
                    onChange={(e) => setcnumber(e.target.value)}
                    style={{ border: '1px solid #d3d3d3' }}
                  />
                </div>
                {/* <p>You're already registered.Please Login</p> */}
                {errorMessage && (
                  <p style={{ fontSize: 'smaller', textAlign: 'center' }}>
                    <span
                      style={{
                        color: '#077b07',
                      }}
                    >
                      {errorMessage}
                    </span>
                    <span
                      className="cursor-pointer"
                      style={{ color: 'rgb(25 70 155)', fontWeight: '600' }}
                      onClick={() => {
                        setloginOpen(true);
                      }}
                    >
                      Please Login
                    </span>
                  </p>
                )}
                {cname.length > 0 && cnumber.length == 10 ? (
                  <button
                    className="d-flex align-items-center justify-content-around"
                    style={{
                      width: '120px',
                      border: 'none',
                      height: '36px',
                      borderRadius: '5px',
                      fontWeight: '500',
                      fontSize: '13px',
                      color: '#fff',
                      backgroundColor: '#e37d32',
                    }}
                    onClick={() =>
                      // requestSignupOtp(function () {
                      //   setotp(true);
                      //   setdeveloper(false);
                      // })
                      contact(function () {
                        setdeveloper(false);
                      })
                    }
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="d-flex align-items-center justify-content-around"
                    style={{
                      width: '120px',
                      border: 'none',
                      height: '36px',
                      borderRadius: '5px',
                      fontWeight: '500',
                      fontSize: '13px',
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
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
            </div>
          </>
        ) : (
          <>
            <div className="col-sm">
              <CancelIcon
                onClick={() => close()}
                style={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  color: '#fff',
                }}
                className="cursor-pointer"
              />
              <div
                className="col "
                style={{ height: '100px', background: '#19469b' }}
              >
                <p
                  className="d-flex justify-content-center align-items-end"
                  style={{
                    color: '#ffff',
                    fontSize: '15px',
                    textAlign: 'center',
                    paddingTop: '10px',
                  }}
                >
                  Tired of looking for the right property?
                  <br />
                  Let us put your mind at ease.
                </p>
                <p
                  style={{
                    textAlign: 'center',
                    color: '#ffff',
                    fontSize: '10px',
                    lineHeight: 1,
                  }}
                >
                  Get free consultation for your dream property today
                </p>
              </div>
              <div
                className="d-flex flex-column align-items-center py-2"
                style={{ height: '230px', background: '#fdfdfd' }}
              >
                <Image src={verify} width={100} height={100} />
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: '12px',
                    textAlign: 'center',
                  }}
                >
                  We Have Got Your Query,
                  <br />
                  Our Consultation Team Will Contact You Shortly
                </p>
                <div className="px-5 pt-2">
                  <a href={`tel:8585854850`}>
                    <button className="mx-1 contact-poppup-btn">
                      <CallIcon style={{ fontSize: '19px', margin: '0 5px' }} />
                      Call Now
                    </button>
                  </a>
                  <a
                    href={`https://wa.me/8585854850`}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <button className="mx-1 contact-poppup-btn">
                      <WhatsAppIcon
                        style={{ fontSize: '19px', margin: '0 5px' }}
                      />
                      Whatsapp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <div className="col-sm">
            <CancelIcon
              onClick={() => close()}
              style={{
                position: 'absolute',
                right: 5,
                top: 5,
                color: '#fff',
              }}
              className="cursor-pointer"
            />
            <div
              className="col "
              style={{ height: '100px', background: '#19469b' }}
            >
              <p
                className="d-flex justify-content-center align-items-end"
                style={{
                  color: '#ffff',
                  fontSize: '15px',
                  textAlign: 'center',
                  paddingTop: '10px',
                }}
              >
                Tired of looking for the right property?
                <br />
                Let us put your mind at ease.
              </p>
              <p
                style={{
                  textAlign: 'center',
                  color: '#ffff',
                  fontSize: '10px',
                  lineHeight: 1,
                }}
              >
                Get free consultation for your dream property today
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center py-2"
              style={{ height: '230px', background: '#fdfdfd' }}
            >
              <Image src={verify} width={100} height={100} />
              <p
                style={{
                  fontWeight: 600,
                  fontSize: '12px',
                  textAlign: 'center',
                }}
              >
                We Have Got Your Query,
                <br /> Our Consultation Team Will Contact You Shortly!
              </p>
              <div className="px-5 pt-2 d-flex flex-row">
                <a href={`tel:8585854850`}>
                  <button className="mx-1 contact-poppup-btn">
                    <CallIcon style={{ fontSize: '19px', margin: '0 5px' }} />
                    Call Now
                  </button>
                </a>
                <a
                  href={`https://wa.me/8585854850`}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <button className="mx-1 contact-poppup-btn">
                    <WhatsAppIcon
                      style={{ fontSize: '19px', margin: '0 5px' }}
                    />
                    Whatsapp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default connect(
  (state) => {
    return {
      authToken: state.session.authToken,
      NewPhone: state.signup.NewPhone,
      SignupOtp: state.signup.SignupOtp,
      name: state.signup.name,
      errorMessage: state.signup.errorMessage,
    };
  },
  {
    setSignupName,
    setSignupEmail,
    setSignupPhone,
    setSignupOtp,
    requestSignupOtp,
    verifySignupOtp,
  }
)(ContactDeveloperPopup);
