import React, { useState } from 'react';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import apiClient from 'utils/apiClient';
import toast, { Toaster } from 'react-hot-toast';

function Form({ clientDetails }) {
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
        alert(result.message);
        setname('');
        setemail('');
        setphone('');
      } else {
        alert(result.message);
      }
    });
  };

  return (
    <div className="consultation_form float_right">
      <h3>Request For Free Consultation</h3>
      <form>
        <div className="input_wrapper">
          <div className="single_input">
            <div className="display icon d-flex justify-content-center align-item-center">
              <PermIdentityOutlinedIcon
                style={{ color: '#fff', fontSize: '40px', paddingTop: '10px' }}
              />
            </div>
            <label>Your Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="single_input">
            <div className="display icon d-flex justify-content-center align-item-center">
              <EmailOutlinedIcon
                style={{ color: '#fff', fontSize: '40px', paddingTop: '10px' }}
              />
            </div>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="single_input">
            <div className="display icon d-flex justify-content-center align-item-center">
              <LocalPhoneOutlinedIcon
                style={{ color: '#fff', fontSize: '40px', paddingTop: '10px' }}
              />
            </div>
            <label>Phone Number</label>
            <input
              placeholder="Enter Mobile no."
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              maxLength={10}
            />
          </div>
        </div>
        <button onClick={() => contact()}>Submit Now</button>
      </form>
    </div>
  );
}

export default Form;
