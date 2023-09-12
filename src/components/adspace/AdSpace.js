import React from 'react';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import apiClient from 'utils/apiClient';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import ContactDeveloperPopup from 'components/ContactDeveloperPopup';
import { connect } from 'react-redux';
import { setSlug } from 'redux/reducer/propertyListing';
import DynamicImage from 'components/DynamicImage';
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
function AdSpace({ premiumProjectData, slug, setSlug }) {
  const [open, setOpen] = useState(false);
  const [Active, setActive] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setloginOpen(false);
    setOpen(false);
    setActive(false);
  };

  return (
    <>
      {premiumProjectData.property ? (
        <>
          {' '}
          <div className="col-md-3 d-md-none d-lg-block right_banner">
            {premiumProjectData.property.images && (
              <Link
                href={`/PropertyDetails/?${premiumProjectData.property.slug}`}
                as={`/PropertyDetails/${premiumProjectData.property.slug}`}
              >
                <a target="_blank">
                  <DynamicImage
                    src={premiumProjectData.property.images[0 || 1].photo_url}
                    alt={'Card cap'}
                    width={'100%'}
                    height={'150%'}
                  />
                </a>
              </Link>
            )}

            <div className="d-flex flex-column rightbanner_content">
              <Link
                href={`/PropertyDetails/?${premiumProjectData.property.slug}`}
                as={`/PropertyDetails/${premiumProjectData.property.slug}`}
              >
                <a target="_blank">
                  <div className=" d-flex flex-row align-items-center col-md-12 mt-3">
                    <p
                      style={{
                        fontSize: '10px',
                        letterSpacing: '2px',
                        marginTop: '8px',
                        marginLeft: '22px',
                        lineHeight: 1,
                        textAlign: 'right',
                        textTransform: 'uppercase',
                      }}
                    >
                      {premiumProjectData.property.client.client_name},{' '}
                      {premiumProjectData.city}
                    </p>

                    <h1>{premiumProjectData.property.society.prop_title}</h1>
                  </div>
                </a>
              </Link>
              <div
                className="d-flex flex-row justify-content-sm-between   "
                style={{ padding: '0px 20px', paddingBottom: '30px' }}
              >
                <h3 onClick={handleOpen}>
                  Book Appointment <ExpandCircleDownOutlinedIcon />
                </h3>
                {premiumProjectData.property.client.microsite ? (
                  <img
                    src={
                      apiClient.Urls.imgUrl +
                      premiumProjectData.property.client.microsite?.header.logo
                    }
                    alt=""
                    width={'50px'}
                    height={'50px'}
                    style={{
                      position: 'absolute',
                      bottom: '8%',
                      right: '5%',
                      borderRadius: '3px',
                      background: '#fff',
                    }}
                  />
                ) : (
                  <img
                    src={`https://ui-avatars.com/api/?background=random&name=${premiumProjectData.property.client.client_name}`}
                    alt=""
                    width={'50px'}
                    height={'50px'}
                    style={{
                      borderRadius: '3px',
                      position: 'absolute',
                      bottom: '8%',
                      right: '5%',
                    }}
                  />
                )}
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <ContactDeveloperPopup
                    close={handleClose}
                    client={premiumProjectData.property.client}
                  />
                </Box>
              </Modal>
            </div>
          </div>
        </>
      ) : (
        <>no data</>
      )}
    </>
  );
}

export default connect(
  (state) => {
    return {
      slug: state.propertyListing.slug,
    };
  },
  {
    setSlug,
  }
)(AdSpace);
