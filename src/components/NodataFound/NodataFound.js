import React from 'react';
import NoData from '../../../public/images/Group 1@2x.png';
import Image from 'next/image';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import edbanner from '../../../public/images/banner2.png';
import contactBanner from '../../../public/images/contactbanner.png';
function NodataFound({ reset, locality, label }) {
  return (
    <div style={{ background: '#F7F7F7' }}>
      <div className="row px-2 nodata_top">
        <div className="p-sm-5 col-sm-7">
          <div className="d-flex flex-row reset-filter">
            <Image src={NoData} height={300} width={500} />
            <div className="py-5 px-3 d-flex flex-column">
              <p
                style={{
                  color: '#646362',
                  fontWeight: '600',
                  lineHeight: '1.4',
                  fontSize: '14px',
                }}
              >
                No project or properties found,matching to your requirements in{' '}
                {label
                  ?.filter((j) => j.isSelected)
                  .map((key) => {
                    return <>{key.name.replace('-', '')}</>;
                  })}
              </p>
              <button
                className="d-flex justify-content-center align-items-center my-3"
                style={{
                  background: '#19469b',
                  color: '#ffff',
                  width: '31%',
                  height: 'fit-content',
                  border: 'none',
                  padding: '4px',
                  borderRadius: 6,
                  fontSize: '0.8vw',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => {
                  locality();
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        <div className="col p-3">
          <div className="contact-banner">
            <Image src={contactBanner} alt="" />
            <div
              id="con-btn-1"
              style={{
                position: ' absolute',
                top: '30%',
                right: '6%',
                borderRadius: '3px',
              }}
            >
              <a href="tel:8585854850">
                <button style={{ borderRadius: '2px' }}>
                  <CallIcon
                    style={{
                      background: '#1fec1f',
                      color: '#fff',
                      borderRadius: ' 18px',
                      padding: '4px',
                      position: 'absolute',
                      left: 10,
                    }}
                  />{' '}
                  Dial - 85 85 85 4 85 0
                </button>
              </a>
            </div>
            <div
              id="con-btn-2"
              className="d-flex justify-content-between"
              style={{
                position: ' absolute',
                top: '50%',
                right: '6%',
                borderRadius: '3px',
              }}
            >
              <a
                href="https://wa.me/+918585854850"
                target={'_blank'}
                rel="noreferrer"
              >
                <button style={{ textAlign: 'end', borderRadius: '2px' }}>
                  <WhatsAppIcon
                    style={{
                      background: '#1fec1f',
                      color: '#fff',
                      borderRadius: ' 18px',
                      padding: '4px',
                      position: 'absolute',
                      left: 10,
                    }}
                  />{' '}
                  Enquire Anytime,Anywhere
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm px-4">
          <Image src={edbanner} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default NodataFound;
