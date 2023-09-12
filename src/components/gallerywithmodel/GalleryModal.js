import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import apiClient from 'utils/apiClient';
import { images } from '../../../next.config';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  overflow: 'hidden',
};
const options = {
  showThumbs: false,
  showArrows: true,
};
function GalleryModal({ image }) {
  const [open, setOpen] = useState(false);

  console.log('imagessssss', image);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="gallerymodal-main cursor-pointer" onClick={handleOpen}>
        <img src={image[0 || 1].photo_url} alt=" " height={'370px'} />
        <p>
          Overview • {image.filter((j) => j.photo_res == 'large').length} Photos
        </p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Carousel {...options}>
            {image
              .filter((j) => j.photo_res == 'large')
              .map((val) => {
                return (
                  <>
                    <div>
                      <img src={val.photo_url} alt="" />
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

export default GalleryModal;
