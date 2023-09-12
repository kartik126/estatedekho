import React from 'react';
import Fade from 'react-reveal/Fade';
function PaymentPlan() {
  return (
    <div>
      <Fade bottom>
        <h1
          className="text-center fs-2"
          style={{ color: 'rgb(165, 165, 165)' }}
        >
          Payment Plan
        </h1>
      </Fade>
      <div className="d-flex flex-row align-items-center justify-content-around p-5 display-col">
        <Fade bottom delay={200}>
          <div className=" landing-pg-block d-flex flex-column align-items-center justify-content-center">
            <h1 className="launch-day">10%</h1>
            <p>Launch Day</p>
          </div>
        </Fade>
        <Fade bottom delay={300}>
          <div className=" landing-pg-block d-flex flex-column align-items-center justify-content-center">
            <h1>10%</h1>
            <p>5th Jan 23</p>
          </div>
        </Fade>
        <Fade bottom delay={400}>
          <div className=" landing-pg-block d-flex flex-column align-items-center justify-content-center">
            <h1>1%</h1>
            <p>28 Months</p>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className=" landing-pg-block d-flex flex-column align-items-center justify-content-center">
            <h1>12%</h1>
            <p>5th Jul 25 Handover</p>
          </div>
        </Fade>
        <Fade bottom delay={600}>
          <div className=" landing-pg-block d-flex flex-column align-items-center justify-content-center">
            <h1>1%</h1>
            <p>40 months</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default PaymentPlan;
