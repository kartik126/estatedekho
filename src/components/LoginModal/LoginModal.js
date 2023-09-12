import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import OtpInput from 'react-otp-input';
import facebook from '../../../public/images/facebook.png';
import google from '../../../public/images/google.png';
import Image from 'next/image';
import {
  setPhone,
  requestOtp,
  setOtp,
  verifyOtp,
} from '../../redux/action/login';
import {
  setSignupName,
  setSignupEmail,
  setSignupPhone,
  setSignupOtp,
  requestSignupOtp,
  verifySignupOtp,
} from '../../redux/action/signup';
import { useEffect, useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 12,
};
function LoginModal({
  close,
  setPhone,
  requestOtp,
  phone,
  otp,
  setOtp,
  verifyOtp,
  data,
  profile,
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
  setloginModal,
}) {
  const [open, setOpen] = useState(true);
  const [otpOpen, setotpOpen] = useState(false);
  const [Signup, setSignup] = useState(false);
  const [signupOtp, setsignupOtp] = useState(false);
  const [Active, setActive] = useState(false);
  const [SignupActive, setSignupActive] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setSignupOtp(false);
    setOpen(false);
    setSignup(false);
    setloginModal;
  };
  const handleotpClose = () => {
    setSignupOtp(false);
    setotpOpen(false);
    setOpen(false);
    setSignup(false);
    setloginModal;
  };
  return (
    <>
      <div>
        {!otpOpen ? (
          <>
            {Signup ? (
              <>
                {!signupOtp ? (
                  <>
                    <Box sx={style}>
                      <h1
                        style={{
                          fontSize: '28px',
                          fontWeight: 600,
                          textAlign: 'center',
                        }}
                      >
                        Sign up
                        <CancelIcon
                          className="cancel-icon cursor-pointer"
                          onClick={() => close()}
                        />
                      </h1>

                      <form>
                        <div className="form-group">
                          <label
                            htmlFor="exampleInputEmail1"
                            style={{
                              fontSize: '12px',
                              fontWeight: ' 500',
                              padding: '10px 0',
                            }}
                          >
                            Full Name
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your Full name"
                            value={name}
                            onChange={(e) => setSignupName(e)}
                          />
                          <label
                            htmlFor="exampleInputEmail1"
                            style={{
                              fontSize: '12px',
                              fontWeight: ' 500',
                              padding: '10px 0',
                            }}
                          >
                            Email Id
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email id"
                            value={email}
                            onChange={(e) => setSignupEmail(e)}
                          />
                          <label
                            htmlFor="exampleInputEmail1"
                            style={{
                              fontSize: '12px',
                              fontWeight: ' 500',
                              padding: '10px 0',
                            }}
                          >
                            Phone Number{' '}
                          </label>
                          <input
                            type="phone"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your Phone Number"
                            value={NewPhone}
                            onChange={(e) => setSignupPhone(e)}
                            maxLength={10}
                          />
                        </div>
                      </form>

                      <div className="d-flex align-items-center  ">
                        {' '}
                        <input
                          type="checkbox"
                          onChange={() => setActive(!Active)}
                        />
                        <p
                          style={{
                            fontSize: '10px',
                            lineHeight: '1',
                            textAlign: 'center',
                            marginTop: '6px',
                            marginLeft: '9px',
                          }}
                        >
                          I agree to EstateDekho T&C,privacy policy & Cookie
                          policy
                        </p>
                      </div>

                      <div className="d-flex justify-content-center row py-2">
                        {Active ? (
                          <>
                            <button
                              className="d-flex align-items-center justify-content-between login-modal"
                              onClick={() =>
                                requestSignupOtp(function () {
                                  setsignupOtp(true);
                                })
                              }
                            >
                              Sign Up <ExpandCircleDownOutlinedIcon />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="d-flex align-items-center justify-content-between login-modal"
                              style={{
                                opacity: '0.7',
                                cursor: 'none',
                              }}
                            >
                              Sign Up <ExpandCircleDownOutlinedIcon />
                            </button>
                          </>
                        )}
                      </div>

                      <div className="row">
                        <p
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: '12px',
                            position: 'absolute',
                            bottom: '20px',
                            fontWeight: ' 500',
                            left: '0',
                          }}
                        >
                          Already registered?{' '}
                          <span>
                            {' '}
                            <p
                              className="cursor-pointer"
                              style={{
                                color: ' #386DB5',
                                fontWeight: '500',
                              }}
                              onClick={() => {
                                setotpOpen(false), setSignup(false);
                              }}
                            >
                              Login{' '}
                              <ExpandCircleDownOutlinedIcon
                                style={{
                                  transform: 'rotate(-90deg)',
                                  fontSize: '18px',
                                }}
                              />
                            </p>
                          </span>
                        </p>
                      </div>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box sx={style}>
                      <h1
                        style={{
                          fontSize: '28px',
                          fontWeight: 600,
                          textAlign: 'center',
                        }}
                      >
                        Sign Up
                        <CancelIcon
                          className="cancel-icon cursor-pointer"
                          onClick={() => close()}
                        />
                      </h1>
                      <p
                        style={{
                          lineHeight: '1.2',
                          fontSize: '12px',
                          color: '#939BA8',
                          padding: '0 40px',
                          textAlign: 'center',
                        }}
                      >
                        We have sent an OTP, enter the that to get logged in at{' '}
                        <span style={{ fontWeight: '800', color: '#212529' }}>
                          {' '}
                          +91 {NewPhone}
                        </span>
                      </p>
                      <p
                        style={{
                          color: '#386DB5',
                          textAlign: 'center',
                          fontSize: '12px',
                          fontWeight: '600',
                        }}
                        className="cursor-pointer"
                      >
                        Change Number{' '}
                        <ExpandCircleDownOutlinedIcon
                          style={{
                            transform: 'rotate(-90deg)',
                            fontSize: '18px',
                          }}
                        />
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          marginLeft: '10px',
                          fontWeight: '500',
                        }}
                      >
                        Enter OTP
                      </p>
                      <OtpInput
                        value={SignupOtp}
                        onChange={(e) => setSignupOtp(e)}
                        autoFocus
                        numInputs={4}
                        otpType="number"
                        inputStyle={{
                          width: '42px',
                          height: '42px',
                          textAlign: 'center',
                          border: '1.2px solid rgb(161 161 161)',
                          borderRadius: '5px',
                        }}
                        containerStyle={{
                          display: 'flex',
                          justifyContent: 'space-around',
                          paddingBottom: '12px',
                        }}
                      />
                      <div className="d-flex justify-content-center row py-2">
                        <button
                          className="d-flex align-items-center justify-content-between login-modal"
                          onClick={() =>
                            verifySignupOtp(function () {
                              window.location.reload(false);
                              handleClose();
                            })
                          }
                        >
                          Verify <ExpandCircleDownOutlinedIcon />
                        </button>
                      </div>

                      <div className="row">
                        <p
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: '12px',
                            position: 'absolute',
                            bottom: '20px',
                            fontWeight: ' 500',
                            left: '0',
                          }}
                        >
                          {' '}
                          <p
                            className="d-flex align-items-center "
                            style={{
                              color: ' #386DB5',
                              fontWeight: '600',
                              fontSize: '12px',
                              lineHeight: '0',
                            }}
                          >
                            Re-send OTP
                            <ExpandCircleDownOutlinedIcon
                              style={{
                                transform: 'rotate(-90deg)',
                                fontSize: '18px',
                                marginLeft: '2px',
                              }}
                            />
                          </p>
                        </p>
                      </div>
                    </Box>
                  </>
                )}
              </>
            ) : (
              <Box sx={style}>
                <h1
                  style={{
                    fontSize: '28px',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  Login{' '}
                  <CancelIcon
                    className="cancel-icon cursor-pointer"
                    onClick={() => close()}
                  />
                </h1>
                <p
                  style={{
                    lineHeight: '1.2',
                    fontSize: '11px',
                    color: '#939BA8',
                    padding: '0 40px',
                    textAlign: 'center',
                  }}
                >
                  We will send an OTP to the mobile number
                </p>
                <form>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{
                        fontSize: '12px',
                        fontWeight: ' 500',
                        padding: '10px 0',
                      }}
                    >
                      Enter your Phone Number
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email Id or Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e)}
                      required
                      maxLength={10}
                    />
                  </div>
                </form>
                <div className="d-flex justify-content-center row py-2">
                  <button
                    className="d-flex align-items-center justify-content-between login-modal"
                    onClick={() =>
                      requestOtp(function () {
                        setotpOpen(true);
                      })
                    }
                  >
                    Login <ExpandCircleDownOutlinedIcon />
                  </button>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-space-around py-3">
                  <div
                    style={{
                      borderBottom: '0.1px solid #eaeaea',
                      width: '45%',
                    }}
                  ></div>
                  <p style={{ color: '#939BA8', margin: ' 0px 9px' }}>Or</p>
                  <div
                    style={{
                      borderBottom: '0.1px solid #eaeaea',
                      width: '45%',
                    }}
                  ></div>
                </div>
                {/* <div className="row py-2">
                    <div className="d-flex flex-row align-items-center justify-content-around col-sm">
                      <Image src={facebook} width={28} height={28} alt="" />
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          paddingTop: '8px',
                          padddingLeft: '5px',
                        }}
                      >
                        Login with Facebook
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-around col-sm">
                      <Image src={google} width={28} height={28} alt="" />
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          paddingTop: '8px',
                        }}
                      >
                        Login with Google
                      </p>
                    </div>
                  </div> */}
                <div className="row">
                  <p
                    className="d-flex justify-content-center"
                    style={{
                      fontSize: '12px',
                      position: 'absolute',
                      bottom: '20px',
                      fontWeight: ' 500',
                      left: '0',
                    }}
                  >
                    New to Estate Dekho?{' '}
                    <span>
                      {' '}
                      <p
                        className="cursor-pointer"
                        style={{ color: ' #386DB5', fontWeight: '500' }}
                        onClick={() => {
                          setotpOpen(false), setSignup(true);
                        }}
                      >
                        Sign Up{' '}
                        <ExpandCircleDownOutlinedIcon
                          style={{
                            transform: 'rotate(-90deg)',
                            fontSize: '18px',
                          }}
                        />
                      </p>
                    </span>
                  </p>
                </div>
              </Box>
            )}
          </>
        ) : (
          <Box sx={style}>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Login
              <CancelIcon
                className="cancel-icon cursor-pointer"
                onClick={() => close()}
              />
            </h1>
            <p
              style={{
                lineHeight: '1.2',
                fontSize: '12px',
                color: '#939BA8',
                padding: '0 40px',
                textAlign: 'center',
              }}
            >
              We have sent an OTP, enter the that to get logged in at{' '}
              <span style={{ fontWeight: '800', color: '#212529' }}>
                {' '}
                +91{phone}
              </span>
            </p>
            <p
              style={{
                color: '#386DB5',
                textAlign: 'center',
                fontSize: '12px',
                fontWeight: '600',
              }}
              className="cursor-pointer"
            >
              Change Number{' '}
              <ExpandCircleDownOutlinedIcon
                style={{ transform: 'rotate(-90deg)', fontSize: '18px' }}
              />
            </p>
            <p
              style={{
                fontSize: '12px',
                marginLeft: '10px',
                fontWeight: '500',
              }}
            >
              Enter OTP
            </p>
            <OtpInput
              value={otp}
              onChange={(e) => setOtp(e)}
              autoFocus
              numInputs={4}
              otpType="number"
              inputStyle={{
                width: '42px',
                height: '42px',
                textAlign: 'center',
                border: '1.2px solid rgb(161 161 161)',
                borderRadius: '5px',
              }}
              containerStyle={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingBottom: '12px',
              }}
            />
            <div className="d-flex justify-content-center row py-2">
              <button
                className="d-flex align-items-center justify-content-between login-modal"
                onClick={() =>
                  verifyOtp(function () {
                    window.location.reload(false);
                    handleClose();
                  })
                }
              >
                Verify <ExpandCircleDownOutlinedIcon />
              </button>
            </div>

            <div className="row">
              <p
                className="d-flex justify-content-center"
                style={{
                  fontSize: '12px',
                  position: 'absolute',
                  bottom: '20px',
                  fontWeight: ' 500',
                  left: '0',
                }}
              >
                {' '}
                <p
                  className="d-flex align-items-center "
                  style={{
                    color: ' #386DB5',
                    fontWeight: '600',
                    fontSize: '12px',
                    lineHeight: '0',
                  }}
                >
                  Re-send OTP
                  <ExpandCircleDownOutlinedIcon
                    style={{
                      transform: 'rotate(-90deg)',
                      fontSize: '18px',
                      marginLeft: '2px',
                    }}
                  />
                </p>
              </p>
            </div>
          </Box>
        )}
      </div>
    </>
  );
}

export default connect(
  (state) => {
    return {
      phone: state.login.phone,
      otp: state.login.otp,
      profile: state.session.profile,
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
)(LoginModal);
