import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Box } from '@mui/system';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import moment from 'moment';
import LandingPageForm from './LandingPageForm';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'none',
  boxShadow: 24,
  p: 2,
};
function LandingPageDetail({ details, clientDetails }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CancelRoundedIcon
            className="cursor-pointer"
            onClick={() => handleClose()}
            style={{ color: '#19469b', position: 'absolute', right: 20 }}
          />
          <LandingPageForm clientDetails={clientDetails} />
        </Box>
      </Modal>
      <div
        id="projecthighlight"
        className="px-5 py-4 border border-1 rounded-2 m-3 col-lg-8 col-sm-6"
        style={{ height: '100%' }}
      >
        <h1
          style={{
            fontWeight: '600',
            fontSize: '52px',
            color: '#333',
          }}
        >
          {details?.project_name}
        </h1>
        <p
          style={{
            fontSize: '17px',
            color: '#19469b',
          }}
        >
          {' '}
          <FmdGoodIcon className="fs-15" /> {details?.locality}, {details?.city}
        </p>
        <div
          className="px-3 my-5 col"
          style={{ borderLeft: '3.5px solid #19469b' }}
        >
          {details?.gross_cost >= 10000000 ? (
            <p
              style={{
                fontWeight: 600,
                fontSize: '19px',
                color: '#333',
                textTransform: 'capitalize',
              }}
            >
              ₹ {Math.abs(details.gross_cost / 10000000).toFixed(2)} Cr onwards
            </p>
          ) : (
            <p
              style={{
                fontWeight: 600,
                fontSize: '19px',
                color: '#333',
                textTransform: 'capitalize',
              }}
            >
              ₹ {Math.abs(details?.gross_cost / 100000).toFixed(2)} Lac onwards
            </p>
          )}
          <p
            style={{
              fontWeight: 600,
              fontSize: '18px',
              color: '#333',
              textTransform: 'capitalize',
            }}
          >
            {details?.property_type} - Starting From {details?.area} Sq. yd.
          </p>
        </div>
        <p
          style={{ fontWeight: '600', color: '#19469b', letterSpacing: '2px' }}
        >
          HIGHLIGHTS
        </p>
        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            {details?.rera_id && (
              <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
                • Rera Id.: {details.rera_id}
              </p>
            )}
          </div>
          <div className="col-lg-6 col-sm-12">
            <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
              • Total Area: {details?.area} Sq. yd.
            </p>
          </div>
        </div>
        <div className="row w-100">
          <div className="col">
            {' '}
            <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
              • Possession Status:{' '}
              {moment(details?.launch_date).isBefore(moment())
                ? 'Ready To Move'
                : moment(details?.launch_date).format('MMM yyyy')}
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            {' '}
            <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
              • {details?.bhk} BHK
            </p>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-lg-6 col-sm-12">
            {' '}
            <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
              • {details?.balcony} Balcony
            </p>
          </div>
          <div className="col-lg-6 col-sm-12">
            {' '}
            <p style={{ white: 'no-wrap', fontWeight: 500, color: '#333' }}>
              • {details?.bathroom} Bathroom
            </p>
          </div>
        </div>
        <button
          className="rounded-5 px-4 my-4 plot-lp-btn"
          onClick={() => handleOpen()}
        >
          I AM INTERESTED
        </button>
      </div>
    </>
  );
}

export default LandingPageDetail;
