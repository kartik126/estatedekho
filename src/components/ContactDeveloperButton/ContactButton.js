import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import apiClient from 'utils/apiClient';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
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
function ContactButton({ client, userData, token, slug }) {
  const [open, setOpen] = React.useState(false);
  const [lead_name, setlead_name] = useState('');
  const [lead_email, setlead_email] = useState('');
  const [lead_phone, setlead_phone] = useState('');
  const [Active, setActive] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setloginOpen(false);
    setOpen(false);
    setActive(false);
  };
  const contactDeveloper = () => {
    if (token != null) {
      let res = apiClient.post(
        apiClient.Urls.contactDeveloper,
        {
          lead_name: userData?.name,
          lead_email: userData?.email,
          lead_phone: userData?.phone,
          developer_id: client?.id,
        },
        true
      );
      res.then((result) => {
        console.warn('contact property----->>>>>', result);

        if (result.success) {
          // alert('sent');
        } else {
          // alert('try again');
        }
      });
    }
  };
  const contact = (e) => {
    if (token != null) {
      let response = apiClient.post(
        apiClient.Urls.propertyContact,
        {
          name: userData?.name,
          email: userData?.email || 'xyz@gmail.com',
          phone: userData?.phone,
          slug: slug,
        },
        true
      );
      response.then((result) => {
        if (result.success) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }

        console.warn('contact property----->>>>>', result);
      });
    }
  };
  useEffect(() => {
    console.log('datya issss', client);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end contactbtn-main">
        <button
          className="ContactButton"
          onClick={() => {
            contact(), handleOpen();
          }}
          id="open-modal-button"
        >
          Contact Developer <ExpandCircleDownOutlinedIcon />
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
          <ContactDeveloperPopup
            client={client}
            close={handleClose}
            slug={slug}
          />
        </Box>
      </Modal>
    </>
  );
}

export default ContactButton;
