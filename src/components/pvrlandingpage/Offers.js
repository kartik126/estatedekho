import React from 'react';
import Fade from 'react-reveal/Fade';
function Offers() {
  return (
    <div>
      <Fade bottom>
        <h1
          className="text-center fs-2"
          style={{ color: 'rgb(2 35 107)', fontWeight: 400 }}
        >
          We are{' '}
          <span style={{ color: '#c3a554', fontWeight: 600 }}>Offering</span>
        </h1>
      </Fade>
      <div className="d-flex flex-row align-items-center justify-content-around p-5 display-col">
        <Fade bottom delay={200}>
          <div className="m-b pvr-highlight-block pvr-landing-pg-block d-flex flex-column align-items-center justify-content-center p-3">
            <p>Pure Investment with</p>
            <h1 className="launch-day">100%</h1>
            <p className="text-center">payment option Rs.7,999/- per SFT</p>
          </div>
        </Fade>
        <Fade bottom delay={300}>
          <div className="m-b pvr-highlight-block pvr-landing-pg-block d-flex flex-column align-items-center justify-content-center p-3">
            <p>Flexible payment with</p>
            <h1>30% : 70%</h1>
            <p className="text-center">payment option Rs.8,999/- per SFT</p>
          </div>
        </Fade>
        <Fade bottom delay={400}>
          <div className=" m-b pvr-highlight-block pvr-landing-pg-block p-3 d-flex flex-column align-items-center justify-content-center">
            <p>Fixed Rental Investment</p>
            <h1>@ Rs.50/-</h1>
            <p className="text-center">
              till occupation Rate – Rs.9,999/- per SFT
            </p>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="m-b pvr-highlight-block pvr-landing-pg-block p-3 d-flex flex-column align-items-center justify-content-center">
            <p className="text-center">Own Office Occupants minimum</p>
            <h1>15,000 SFT</h1>
            <p>with all payment options</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Offers;
