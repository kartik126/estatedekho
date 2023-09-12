import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

function ImageSlider({ data }) {
  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
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
      <div className="slider-main">
        <Carousel {...getConfigurableProps()}>
          {data?.images
            ?.filter(
              (j) => j.photo_type != 'floor_plan' && j.photo_res == 'large'
            )
            .map((val) => {
              return (
                <>
                  {' '}
                  <Link href={val.photo_url}>
                    <a target={'_blank'}>
                      <div className="slider-main">
                        <div className="slide-image">
                          <img
                            src={val.photo_url}
                            alt={`${data?.society.prop_title} ${
                              data?.BHKRange || data?.bedrooms
                            } BHK ${data?.society.prop_type} by ${
                              data?.client.client_name
                            } in ${data?.society.address_locality} ${
                              data?.society.address_city
                            }`}
                          />
                        </div>
                      </div>
                    </a>
                  </Link>
                </>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}

export default ImageSlider;
