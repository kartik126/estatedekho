import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { relative } from 'path';
import img from '../../../public/images/carousel.png';
import img1 from '../../../public/images/appartment.jpg';
import img2 from '../../../public/images/AdobeStock_233594258_Preview@2x.png';
import logo from '../../../public/images/jsr logo.png';
import jsr from '../../../public/images/jsr1.png';
import jsr2 from '../../../public/images/jsr2.png';
import jsr3 from '../../../public/images/jsr3.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import Link from 'next/link';
import greenspace from '../../../public/images/greenspace.jpg';
const options = {
  showIndicators: false,
  autoPlay: true,
  infiniteLoop: true,
  showArrows: false,
  showStatus: false,
  showThumbs: true,
  swipeable: true,
  interval: 6000,
};
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

export default function HomepageVideo() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="row d-flex justify-content-center home_video">
        <div
          className="col-12 carousel-main p-5"
          style={{ position: 'relative' }}
        >
          <Carousel {...options}>
            <Link href="/Landing-page/greenspace-housing/greenspace-marvel-puppalaguda-manikonda-hyderabad-gitxo">
              <a target={'_blank'}>
                <div
                  className="d-flex flex-row align-items-center "
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={greenspace}
                    height={500}
                    width={1400}
                    style={{ animation: 'zoom-in-zoom-out 30s ease infinite' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,

                      lineHeight: 1,
                    }}
                    className="d-flex flex-row align-items-sm-end lineUp py-2"
                  >
                    <div className="px-4">
                      {' '}
                      <div
                        className="px-4"
                        style={{ borderRight: '0.1px solid #fff' }}
                      >
                        <h1
                          style={{
                            fontSize: '24px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          Greenspace Housing
                        </h1>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          Puppalguda
                        </p>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <h1
                        style={{
                          fontSize: '24px',
                          color: '#fff',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        1.27 Crore{' '}
                      </h1>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/Landing-page/jsr-group-suncityy/yadagirigutta-hyderabad-3v82k">
              <a target={'_blank'}>
                <div
                  className="d-flex flex-row align-items-center "
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={jsr}
                    height={500}
                    width={1400}
                    style={{ animation: 'zoom-in-zoom-out 30s ease infinite' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,

                      lineHeight: 1,
                    }}
                    className="d-flex flex-row align-items-sm-end lineUp py-2"
                  >
                    <div className="px-4">
                      {' '}
                      <div
                        className="px-4"
                        style={{ borderRight: '0.1px solid #fff' }}
                      >
                        <h1
                          style={{
                            fontSize: '24px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          JSR Group Suncity
                        </h1>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          Hyderabad
                        </p>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <h1
                        style={{
                          fontSize: '24px',
                          color: '#fff',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        18.3L -{' '}
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        27.75L
                      </h1>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
            </Link>
            {/* <Link href="/Landing-page/jsr-group-suncityy/yadagirigutta-hyderabad-3v82k">
              <a target={'_blank'}>
                <div>
                  <Image src={jsr2} height={500} layout="fill" />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,

                      lineHeight: 1,
                    }}
                    className="d-flex flex-row align-items-sm-end lineUp py-2"
                  >
                    <div className="px-4">
                      {' '}
                      <div
                        className="px-4"
                        style={{ borderRight: '0.1px solid #fff' }}
                      >
                        <h1
                          style={{
                            fontSize: '24px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          JSR Group Suncity
                        </h1>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          Hyderabad
                        </p>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <h1
                        style={{
                          fontSize: '24px',
                          color: '#fff',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        11.7L -{' '}
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        27.75L
                      </h1>
                    </div>
                    <div></div>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/Landing-page/jsr-group-suncityy/yadagirigutta-hyderabad-3v82k">
              <a target={'_blank'}>
                <div>
                  <Image src={jsr3} height={500} layout="fill" />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,

                      lineHeight: 1,
                    }}
                    className="d-flex flex-row align-items-sm-end lineUp py-2"
                  >
                    <div className="px-4">
                      {' '}
                      <div
                        className="px-4"
                        style={{ borderRight: '0.1px solid #fff' }}
                      >
                        <h1
                          style={{
                            fontSize: '24px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          JSR Group Suncity
                        </h1>
                        <p
                          style={{
                            fontSize: '14px',
                            color: '#fff',
                            fontWeight: '500',
                          }}
                        >
                          Hyderabad
                        </p>
                      </div>
                    </div>
                    <div>
                      {' '}
                      <h1
                        style={{
                          fontSize: '24px',
                          color: '#fff',
                          fontWeight: '500',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        11.7L -{' '}
                        <span
                          style={{
                            fontFamily: "'Noto Sans', sans-serif",
                            fontWeight: '500',
                          }}
                        >
                          {' '}
                          ₹
                        </span>{' '}
                        27.75L
                      </h1>
                    </div>
                    <div>
               
                    </div>
                  </div>
                </div>
              </a>
            </Link> */}
          </Carousel>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactDeveloperPopup />
        </Box>
      </Modal>
    </>
  );
}
