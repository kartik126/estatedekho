import { TextField } from '@mui/material';
import React, { useState } from 'react';
import apiClient from 'utils/apiClient';
import toast, { Toaster } from 'react-hot-toast';
function LandingPageForm({ clientDetails }) {
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
    <div
      className="display shadow-lg py-3 px-4 mx-5 d-flex justify-content-around flex-column align-items-center"
      style={{
        position: 'fixed',
        height: '370px',
        width: '270px',
        borderRadius: '3px',
        top: '25%',
        right: '1%',
        border: '0.1px solid #19469b',
        background: '#ffff',
      }}
    >
      <p className="fs-6 fw-semibold">
        Interested?{' '}
        <span
          style={{
            color: '#19469b',
            fontFamily: 'playfair',
            fontSize: '18px',
          }}
        >
          Contact Us
        </span>
      </p>
      <TextField
        id="standard-basic myText"
        label="Name"
        variant="standard"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Contact Number"
        variant="standard"
        placeholder="Number"
        maxLength={10}
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <TextField
        id="standard-basic"
        label="Email Id"
        variant="standard"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <button
        onClick={() => contact()}
        className="my-2 border-rounded border border-0"
        style={{
          borderRadius: '50px',
          padding: '4px 50px',
          background: '#19469b',
          color: '#ffff',
          fontSize: '10px',
          height: '35px',
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default LandingPageForm;
