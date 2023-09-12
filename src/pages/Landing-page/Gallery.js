import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import { type } from 'os';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: 'fit-content',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Gallery({ images, details, type }) {
  var settings = {
    arrows: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [open, setOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Convert the images array to the required format for ImageGallery
  const prepareGalleryImages = () => {
    const formattedImages = images?.map((image) =>
      image.image_path && image.image_path.includes('projects')
        ? {
            original: `https://seller.estatedekho.com/${image.image_path}`,
            thumbnail: `https://seller.estatedekho.com/${image.image_path}`,
          }
        : {
            original: `https://seller.estatedekho.com/images/projects/${image.image_path}`,
            thumbnail: `https://seller.estatedekho.com/images/projects/${image.image_path}`,
          }
    );
    setGalleryImages(formattedImages);
  };

  useEffect(() => {
    prepareGalleryImages();
  }, [images]);

  return (
    <>
      <div className="py-5 home_gallery ">
        <div className="main-title">
          <Fade bottom>
            <h2 style={{ fontWeight: 700 }}>
              View Our <span style={{ color: '#4dc2e6' }}>gallery</span>
            </h2>
          </Fade>
        </div>{' '}
        {type == 'property' ? (
          <div id="gallery">
            <Fade bottom>
              <h1
                style={{ color: '#A5A5A5', fontWeight: '400' }}
                className="text-center fs-2 py-4"
              >
                Take A Closer Look
              </h1>
            </Fade>
            <Slider {...settings}>
              {images
                ?.filter((j) => j.photo_type == 'gallery')
                .map((key) => {
                  return (
                    <>
                      <div className="slick-carousel">
                        <>
                          {key.image_path &&
                          key.image_path.includes('projects') ? (
                            <img
                              className="rounded-1 cursor-pointer"
                              src={`https://seller.estatedekho.com/${key.image_path}`}
                              style={{
                                width: '100%',
                                height: '300px',
                                borderRadius: '5px',
                                margin: 5,
                              }}
                              alt=""
                              onClick={() => handleOpen()}
                            />
                          ) : (
                            <img
                              className="rounded-1 cursor-pointer"
                              src={`https://seller.estatedekho.com/images/projects/${key.image_path}`}
                              style={{
                                width: '100%',
                                height: '300px',
                                borderRadius: '5px',
                                margin: 5,
                              }}
                              alt=""
                              onClick={() => handleOpen()}
                            />
                          )}
                        </>
                      </div>
                    </>
                  );
                })}
            </Slider>
          </div>
        ) : (
          <div id="gallery">
            <div className="d-flex justify-content-center pt-5">
              {details?.featured_image?.includes('projects') ||
              details?.featured_image_path?.includes('projects') ? (
                <>
                  <Link
                    href={`https://seller.estatedekho.com/${
                      details?.featured_image_path || details?.featured_image
                    }`}
                  >
                    <a target="_blank">
                      <img
                        src={`https://seller.estatedekho.com/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`}
                        width={'50%'}
                        height={'50%'}
                        style={{ position: 'relative' }}
                        alt=""
                        onClick={() => handleOpen}
                      />
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={`https://seller.estatedekho.com/images/projects/${
                      details?.featured_image_path || details?.featured_image
                    }`}
                  >
                    <a target="_blank">
                      <img
                        src={`https://seller.estatedekho.com/images/projects/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`}
                        width={'50%'}
                        height={'50%'}
                        style={{ position: 'relative' }}
                        alt=""
                        onClick={() => handleOpen}
                      />
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ImageGallery items={galleryImages} sizes={200} />
        </Box>
      </Modal>
    </>
  );
}

export default Gallery;
