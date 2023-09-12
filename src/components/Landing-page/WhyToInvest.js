import React from 'react';
import Fade from 'react-reveal/Fade';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
function WhyToInvest() {
  return (
    <div
      id="floorplan"
      className="display-col mt-60 d-flex flex-md-row flex-sm-column  container py-5"
    >
      <div className="col-lg-12 col-xs-12">
        <Fade bottom>
          <h1 style={{ fontSize: '35px', color: '#A5A5A5', fontWeight: 400 }}>
            Why to Invest in
            <br />
            <span style={{ color: '#d20019', fontWeight: 600 }}>
              Petalz by Danube?
            </span>
          </h1>
        </Fade>
        <Fade bottom>
          <p style={{ fontWeight: 500 }}>
            The area offers more than just an adequate space, where you play,
            relax, shop, and work as well. Residences at Danube Petalz are
            targeted at young professionals, couples as well as families with
            kids
          </p>
        </Fade>
        <Fade bottom>
          <div className="display-col d-flex flex-row py-5">
            <div className="col">
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Potential 8% Rental Return
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Booming Short-Term Rental Market
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Mortgage for Non-Residents 50%
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Expecting high annual visitors in 2025
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Fast paced growing economy
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Home To Over 200 Nationalities
              </p>
            </div>
            <div className="col">
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                10 Year Golden UAE Residency Visa for Investors
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Amongst 10 Most Visited Cities in The World In 2018*
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Dubai Ranks 7th on Global Safe City Index by Numbero
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                Dubai Ranks 24th in the Global Quality of Life Index
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                UAE offering Citizenship to Foreigners
              </p>
              <p style={{ fontWeight: 500 }}>
                {' '}
                <CheckCircleIcon
                  className="mx-2"
                  style={{ color: '#d20019' }}
                />
                0% Personal Income Tax, Rental Income Tax, Capital Gain Tax
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default WhyToInvest;
