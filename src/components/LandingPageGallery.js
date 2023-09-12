import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LandingPageForm from './LandingPageForm';
import img1 from '../../public/images/jsr/4.jpg';
import img2 from '../../public/images/jsr/6.jpg';
import img3 from '../../public/images/jsr/7.jpg';
import img4 from '../../public/images/jsr/x4.jpg';
import img5 from '../../public/images/jsr/x6.jpg';
import img6 from '../../public/images/jsr/4.jpg';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import apiClient from 'utils/apiClient';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: '90%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: '55%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  overflow: 'hidden',
};
const options = {
  showThumbs: false,
  showArrows: true,
};
function LandingPageGallery({ gallery, data, projectDetails }) {
  const [open, setOpen] = useState(false);
  const [path, setpath] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      id="section5"
      className="display-col d-flex flex-row align-items-center container p-5 "
      style={{ height: '100%' }}
    >
      {gallery ? (
        <div className="col text-center">
          <h1
            className="fs-3"
            style={{ color: '#A5A5A5', fontWeight: '500', bottom: '21rem' }}
          >
            Take A Closer Look
          </h1>
          {/* <h1 className="fs-3" style={{ color: '#19469B', fontWeight: '500' }}>
          Explore Neighbourhood
        </h1> */}

          {/* <div className="py-4">
          <button className="landing-btn px-4 py-2 ">Project Images</button>
          <button className="landing-btn px-4 py-2">Current Progress </button>
        </div> */}
          <div className="row">
            {gallery
              ?.filter((j) => j.photo_type == 'gallery')
              .map((key, index) => {
                return (
                  <>
                    <div
                      className="col-4"
                      onClick={() => {
                        setOpen(true), setpath(index);
                      }}
                    >
                      {key.image_path.includes('projects') ? (
                        <img
                          className="rounded-1 cursor-pointer"
                          src={`https://seller.estatedekho.com/${key.image_path}`}
                          style={{
                            width: '100%',
                            height: '150px',
                            borderRadius: '5px',
                            margin: 5,
                          }}
                          alt=""
                        />
                      ) : (
                        <img
                          className="rounded-1 cursor-pointer"
                          src={`https://seller.estatedekho.com/images/projects/${key.image_path}`}
                          style={{
                            width: '100%',
                            height: '150px',
                            borderRadius: '5px',
                            margin: 5,
                          }}
                          alt=""
                        />
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      ) : null}

      <div className="col d-flex align-items-center justify-content-center col">
        <div
          className="landing-page-form shadow border-1 border rounded-5"
          style={{ width: '60%', background: '#ffff' }}
        >
          <LandingPageForm
            projectName={
              projectDetails?.project_name || projectDetails?.plot_name
            }
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Carousel selectedItem={path} {...options}>
            {gallery
              ?.filter((j) => j.photo_type == 'gallery')
              .map((key) => {
                return (
                  <>
                    {key.image_path && key.image_path.includes('projects') ? (
                      <img
                        className="rounded-1 cursor-pointer"
                        src={`https://seller.estatedekho.com/${key.image_path}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '5px',
                          margin: 5,
                          objectFit: 'contain',
                        }}
                        alt=""
                      />
                    ) : (
                      <img
                        className="rounded-1 cursor-pointer"
                        src={`https://seller.estatedekho.com/images/projects/${key.image_path}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '5px',
                          margin: 5,
                          objectFit: 'contain',
                        }}
                        alt=""
                      />
                    )}
                  </>
                );
              })}
            {/* {path && path.includes('projects') ? (
              <img
                className="rounded-1 cursor-pointer"
                src={`https://seller.estatedekho.com/${path}`}
                style={{
                  width: '100%',
                  height: 'fit-content',
                  borderRadius: '5px',
                  margin: 5,
                }}
                alt=""
              />
            ) : (
              <img
                className="rounded-1 cursor-pointer"
                src={`https://seller.estatedekho.com/images/projects/${path}`}
                style={{
                  width: '100%',
                  height: 'fit-content',
                  borderRadius: '5px',
                  margin: 5,
                }}
                alt=""
              />
            )} */}
          </Carousel>
        </Box>
      </Modal>
    </div>
  );
}

export default LandingPageGallery;
