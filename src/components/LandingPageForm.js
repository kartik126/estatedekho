import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import apiClient from 'utils/apiClient';
import toast, { Toaster } from 'react-hot-toast';

import { useState } from 'react';
function LandingPageForm({ projectName }) {
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
        developer_id: 1464,
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

      // console.warn('added to favourite----->>>>>', result);
    });
  };
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setstartTime] = useState(new Date());
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4">
      <Toaster />
      <p
        className="text-center px-5"
        style={{
          color: '#A5A5A5',
          fontSize: '14px',
          fontWeight: '400',
          whiteSpace: 'nowrap',
        }}
      >
        Would Like to Know More About <br />
        <span style={{ fontWeight: '600', fontSize: '14px' }}>
          {projectName}
        </span>
      </p>
      <h1 style={{ color: '#19469B', fontSize: '14px' }}>Contact Us</h1>
      <div className="form-floating mb-4 mt-3 w-90">
        <input
          style={{ height: '45px' }}
          type="name"
          className="shadow-sm form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label className="d-flex align-items-center" htmlFor="floatingInput">
          Full Name
        </label>
      </div>
      <div className="form-floating mb-4 w-90">
        <input
          style={{ height: '45px' }}
          type="phone"
          className="shadow-sm form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          maxLength={10}
        />
        <label className="d-flex align-items-center" htmlFor="floatingInput">
          Contact Number
        </label>
      </div>
      <div className="form-floating mb-4 w-90">
        <input
          style={{ height: '45px' }}
          type="email"
          className="shadow-sm form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <label className="d-flex align-items-center" htmlFor="floatingInput">
          Email ID
        </label>
      </div>
      <div className="d-flex flex-row ">
        {/* <div className="landing-pg-picker" style={{ position: 'relative' }}>
          <CalendarMonthIcon
            style={{
              position: 'absolute',
              right: '15%',
              top: '11%',
              zIndex: '2',
              color: 'gray',
            }}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div> */}
        {/* <div
          className="landing-pg-picker text-end"
          style={{ position: 'relative' }}
        >
          <AccessTimeIcon
            style={{
              position: 'absolute',
              right: '15%',
              top: '11%',
              zIndex: '2',
              color: 'gray',
            }}
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div> */}
      </div>

      <button
        className=" w-90 py-2 rounded-2 border border-0"
        style={{
          color: '#6D6D6D',
          background: '#DADADA',
          fontSize: '12px',
        }}
        onClick={() => contact()}
      >
        Submit
      </button>
    </div>
  );
}

export default LandingPageForm;
