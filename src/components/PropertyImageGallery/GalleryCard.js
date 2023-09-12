import React, { Component } from 'react';
import img from '../../../public/images/AdobeStock_300087123_Preview@2x.png';
import img2 from '../../../public/images/AdobeStock_502591098_Preview@2x.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
};
function GalleryCard({ images }) {
  const [open, setOpen] = useState(false);
  const [imge, setImge] = useState(null);
  const handleOpen = (e) => {
    if (e == 'bed') {
      setImge(images.filter((j) => j.photo_type == 'bedroom'));
    } else if (e == 'living') {
      setImge(images.filter((j) => j.photo_type == 'living_room'));
    }
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: false,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: false,
    thumbWidth: 100,
    interval: 2000,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
  });
  return (
    <>
      <div
        className=" gallery-image-container cursor-pointer"
        onClick={() => {
          if (
            images.filter(
              (j) => j.photo_type == 'bedroom' && j.photo_res == 'large'
            ).length > 0
          ) {
            handleOpen('bed');
          }
        }}
        style={{height:'12rem'}}
      >
        <div className=" gallery-title">
          <h3>Bedrooms</h3>
          <FiberManualRecordIcon />
          <h3>
            {' '}
            {
              images.filter(
                (j) => j.photo_type == 'bedroom' && j.photo_res == 'large'
              ).length
            }{' '}
            Photos
          </h3>
        </div>

        <Image
          src={
            images.filter(
              (j) => j.photo_type == 'bedroom' && j.photo_res == 'large'
            )[0]?.photo_url || img
          }
          alt=""
          width={'316px'}
          height={'220px'}
        />
      </div>
      <div
        className="gallery-image-container cursor-pointer"
        onClick={() => {
          if (
            images.filter(
              (j) => j.photo_type == 'living_room' && j.photo_res == 'large'
            ).length > 0
          ) {
            handleOpen('living');
          }
        }}
        style={{height:'12rem'}}
      >
        <div className="gallery-title">
          <h3>Living Room</h3>
          <FiberManualRecordIcon />
          <h3>
            {' '}
            {
              images.filter(
                (j) => j.photo_type == 'living_room' && j.photo_res == 'large'
              ).length
            }{' '}
            Photos
          </h3>
        </div>
        <Image
          src={
            images.filter(
              (j) => j.photo_type == 'living_room' && j.photo_res == 'large'
            )[0]?.photo_url || img2
          }
          alt=""
          width={'316px'}
          height={'220px'}
        />
      </div>

      {/* carousel modal */}
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Carousel {...getConfigurableProps()}>
            {imge
              ?.filter((j) => j.photo_res == 'large')
              .map((val) => {
                return (
                  <>
                    {' '}
                    <div className="slider-main">
                      <CloseIcon
                        style={{ position: 'absolute', right: '3%', top: '4%' }}
                        onClick={handleClose}
                        className="cursor-pointer"
                      />

                      <div className="slide-image ">
                        <img
                          src={val.photo_url}
                          alt=""
                          style={{ height: '500px', position: 'relative' }}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </Carousel>
        </Box>
      </Modal>
    </>
  );
}

export default GalleryCard;
