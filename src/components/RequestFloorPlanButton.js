import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import apiClient from 'utils/apiClient';
import ContactDeveloperPopup from './ContactDeveloperPopup';
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
function RequestFloorPlanButton({ client }) {
  const [open, setOpen] = React.useState(false);
  const [lead_name, setlead_name] = useState('');
  const [lead_email, setlead_email] = useState('');
  const [lead_phone, setlead_phone] = useState('');
  const [Active, setActive] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setActive(false);
  };
  const contactDeveloper = (e) => {
    let res = apiClient.post(
      apiClient.Urls.contactDeveloper,
      {
        lead_name: lead_name,
        lead_email: lead_email,
        lead_phone: lead_phone,
        developer_id: e,
      },
      true
    );
    res.then((result) => {
      if (result.success) {
        alert('sent');
      } else {
        alert('try again');
      }
    });
  };
  useEffect(() => {
    console.log('datya issss', client);
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-end mt-4 "
        style={{ marginLeft: '16px' }}
      >
        <button
          className="action-button"
          onClick={handleOpen}
          id="open-modal-button"
        >
          Request Floor Plan
        </button>
      </div>

      {/* <Button >Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactDeveloperPopup close={handleClose} client={client} />
          {/* <Typography id="modal-modal-title" variant="h4" component="h2">
            Contact seller
            <CancelIcon
              className="cancel-icon cursor-pointer"
              onClick={handleClose}
            />
          </Typography>
          <div className="line"></div>
          <div className="row">
            <div className="col-sm-7">
              <p
                style={{
                  fontStyle: '14px',
                  fontWeight: '700',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {client.client_name}
              </p>
              <p
                style={{ color: '#386DB5', fontSize: '11px', lineHeight: '0' }}
              >
                HOUSING EXPERT
              </p>
            </div>
            <div className="col-sm">
              <p style={{ color: '#969AA3', fontSize: '12px' }}>
                Contact number
              </p>
              <p
                style={{
                  fontStyle: '14px',
                  fontWeight: '600',
                  lineHeight: '0',
                }}
              >
                +91 {client.phone}
              </p>
            </div>
            <div className="line"></div>
          </div>
          <div className="row py-3">
            <p style={{ fontWeight: '600', fontSize: '12px', lineHeight: '0' }}>
              Please share your contact
            </p>
          </div>
          <div className="row px-1">
            <p style={{ fontSize: '12px', fontWeight: '500' }}>
              Enter your Name
            </p>
          </div>
          <div className=" row contact-input px-3 ">
            <input
              placeholder="Full Name"
              value={lead_name}
              onChange={(e) => setlead_name(e.target.value)}
              required
            />
          </div>
          <div className="row px-1">
            <p style={{ fontSize: '12px', fontWeight: '500' }}>
              Enter your Phone Number
            </p>
          </div>
          <div className="row contact-input  px-3">
            <input
              placeholder="Phone Number"
              value={lead_phone}
              onChange={(e) => setlead_phone(e.target.value)}
              required
              maxLength={10}
            />
          </div>
          <div className="row px-1">
            <p style={{ fontSize: '12px', fontWeight: '500' }}>
              Enter your Email ID
            </p>
          </div>
          <div className="row contact-input  px-3">
            <input
              placeholder="Email Id"
              value={lead_email}
              onChange={(e) => setlead_email(e.target.value)}
              required
            />
          </div>
          <div className="row py-3">
            <div className="d-flex">
              {' '}
              <input
                type="checkbox"
                style={{ margin: '9px' }}
                onChange={() => setActive(!Active)}
              />
              <p style={{ fontSize: '11px', lineHeight: '1' }}>
                I agree to be contacted by Estate Dekho and other agents via
                <span style={{ fontWeight: '600' }}>
                  {' '}
                  WhatsApp, SMS, phone, email etc.
                </span>
              </p>
            </div>
          </div>
          <div className="row px-4">
            {Active ? (
              <>
                <button
                  className="get-contact-details"
                  onClick={() => contactDeveloper(client.user_id)}
                >
                  Get Contact Details <ExpandCircleDownOutlinedIcon />
                </button>
              </>
            ) : (
              <>
                <button
                  className="get-contact-details"
                  style={{ opacity: '0.7', cursor: 'none' }}
                >
                  Get Contact Details <ExpandCircleDownOutlinedIcon />
                </button>
              </>
            )}
          </div> */}
        </Box>
      </Modal>
    </>
  );
}

export default RequestFloorPlanButton;
