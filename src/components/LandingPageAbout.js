import React from 'react';
import Image from 'next/image';
import bg from '../../public/images/dotback.png';
import img from '../../public/images/jsr srivaikuntam 4.jpg';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import apiClient from 'utils/apiClient';
import { useState } from 'react';
function LandingPageAbout({ details, about, gallery, clientDetails }) {
  const [active, setActive] = useState(true);
  const [readMore, setreadMore] = useState(true);
  const [url, seturl] = useState(
    details?.featured_image?.includes('projects') ||
      details?.featured_image_path?.includes('projects')
      ? `https://seller.estatedekho.com/${
          details?.featured_image_path || details?.featured_image
        }`
      : `https://seller.estatedekho.com/images/projects/${
          details?.featured_image_path || details?.featured_image
        }`
  );
  return (
    <div
      id="aboutus"
      className=" display-col d-flex justify-content-between flex-md-row flex-sm-column  container py-5"
    >
      <div className="col-md-6 col-sm-12 ">
        <h1
          className=""
          style={{ fontSize: '30px', color: '#A5A5A5', fontWeight: 400 }}
        >
          Know About <br />
          <span
            style={{
              color: '#19469B',
              fontWeight: 600,
              textTransform: 'capitalize',
            }}
          >
            {' '}
            {clientDetails.client_name}
          </span>
        </h1>
        <div className="py-4 d-flex" style={{ whiteSpace: 'nowrap' }}>
          {active ? (
            <button
              style={{ backgroundColor: '#E37D32' }}
              onClick={() => {
                setActive(true),
                  details?.featured_image?.includes('projects') ||
                  details?.featured_image_path?.includes('projects')
                    ? seturl(
                        `https://seller.estatedekho.com/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`
                      )
                    : seturl(
                        `https://seller.estatedekho.com/images/projects/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`
                      );
              }}
              className="landing-btn px-4 py-2 "
            >
              About Project
            </button>
          ) : (
            <button
              onClick={() => {
                setActive(true),
                  details?.featured_image?.includes('projects') ||
                  details?.featured_image_path?.includes('projects')
                    ? seturl(
                        `https://seller.estatedekho.com/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`
                      )
                    : seturl(
                        `https://seller.estatedekho.com/images/projects/${
                          details?.featured_image_path ||
                          details?.featured_image
                        }`
                      );
              }}
              style={{ backgroundColor: '#d3d3d3', color: 'black' }}
              className="landing-btn px-4 py-2 "
            >
              About Project
            </button>
          )}
          {active ? (
            <button
              onClick={() => {
                setActive(false),
                  seturl(apiClient.Urls.imgUrl + about.about_image);
              }}
              style={{ backgroundColor: '#d3d3d3', color: 'black' }}
              className="landing-btn px-4 py-2"
            >
              About {clientDetails.client_name}
            </button>
          ) : (
            <button
              style={{ backgroundColor: '#E37D32' }}
              onClick={() => {
                setActive(false),
                  seturl(apiClient.Urls.imgUrl + about.about_image);
              }}
              className="landing-btn px-4 py-2"
            >
              About {clientDetails.client_name}
            </button>
          )}
        </div>
        {active ? (
          <>
            <h1 style={{ color: '#6D6D6D', fontSize: '25px' }}>
              {details.plot_type}
              {details.project_name}
            </h1>
            <p className="fs-6" style={{ color: '#A5A5A5' }}>
              {readMore
                ? details.plot_description?.slice(0, 500) ||
                  details.project_description?.slice(0, 500)
                : details.plot_description || details.project_description}
              <p
                className="cursor-pointer"
                style={{ color: '#6c6ce7', fontWeight: '500' }}
                onClick={() => {
                  setreadMore(!readMore);
                }}
              >
                {readMore ? 'Read More' : 'Read Less'}
              </p>
            </p>
          </>
        ) : (
          <>
            <h1 style={{ color: '#6D6D6D', fontSize: '25px' }}>
              {clientDetails.client_name}
            </h1>

            <p className="fs-6" style={{ color: '#A5A5A5' }}>
              {readMore
                ? about.about_description.slice(0, 500)
                : about.about_description}
              <p
                className="cursor-pointer"
                style={{ color: '#6c6ce7', fontWeight: '500' }}
                onClick={() => {
                  setreadMore(!readMore);
                }}
              >
                {readMore ? 'Read More' : 'Read Less'}
              </p>
            </p>
          </>
        )}
      </div>

      <div
        className="m-t pt-4 col-lg-5 col-sm-12 d-flex flex-row justify-content-center align-items-center"
        style={{ height: '100%' }}
      >
        <div className="display d-flex align-items-center mx-5 mt-5 p-2 rounded-5 shadow-lg ">
          {}
          <img src={url} width={480} height={350} className="rounded-5" />
        </div>
        <div
          className="display d-flex align-items-center mx-5 p-1 rounded-5 shadow-lg "
          style={{
            position: 'absolute',
            background: '#fff',
            bottom: -80,
            right: -80,
          }}
        ></div>
      </div>
    </div>
  );
}

export default LandingPageAbout;
