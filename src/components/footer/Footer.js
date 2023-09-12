import React from 'react';
import logo from '../../../public/images/Group 139719@2x.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import moment from 'moment';
import googleplay from '../../../public/images/googleplaystore.png';

function Footer() {
  return (
    <div className="row footer_main">
      <div className="d-flex justify-content-center align-items-center col-md-3 ">
        <Image src={logo} alt="" width={230} height={45} />
      </div>
      <div className="col footer_content ">
        <ul>
          <h5
            style={{
              fontWeight: '700',
              fontSize: '13px',
              paddingBottom: '13px',
            }}
          >
            Company
          </h5>
          <Link href="/about-us">
            <p>About us</p>
          </Link>
          <Link href={'/contact-us'}>
            <p>Contact Us</p>
          </Link>
          <Link href="/news/NewsandArticles">
            <p>News</p>
          </Link>

          <Link href={'/privacypolicy'}>
            <p
              className="hover_item"
              style={{
                fontSize: '13px',
                fontWeight: '400',
                cursor: 'pointer',
                paddingBottom: '13px',
              }}
            >
              Privacy Policy
            </p>
          </Link>
        </ul>
      </div>
      <div className="col footer_content">
        <ul style={{ width: '100%' }}>
          <h1></h1>
          <Link href={'/Termsandcondition'}>
            <p>Terms & Conditions</p>
          </Link>

          {/* <p>Legal Disclaimer</p> */}
        </ul>
      </div>
      <div className="col footer_content display">
        {/* <ul>
          <h5
            style={{
              fontWeight: '700',
              fontSize: '13px',
              paddingBottom: '13px',
            }}
          >
            Contact us
          </h5>
          <p>Career</p>
        </ul> */}
      </div>
      <div className="col d-flex flex-col justify-content-center align-items-center footer_content display">
        <ul className="" style={{ width: '100%' }}>
          <h5 style={{ fontWeight: '600', fontSize: '12px' }}>Follow us on</h5>
          <div style={{ display: 'flex', flexDirection: 'row', width: '40%' }}>
            <Link href={'https://www.facebook.com/estatedekho/'}>
              <a target={'_blank'}>
                <p>
                  <FacebookIcon />
                </p>
              </a>
            </Link>

            <Link href={'https://in.linkedin.com/company/estatedekho'}>
              <a target={'_blank'}>
                <p>
                  <LinkedInIcon />
                </p>
              </a>
            </Link>
            <Link href={'https://www.instagram.com/estatedekho/?hl=en'}>
              <a target={'_blank'}>
                <p>
                  <InstagramIcon />
                </p>
              </a>
            </Link>
            <Link
              href={'https://www.youtube.com/channel/UCc8D-HkFc1ZUQFi-qCmaLdA'}
            >
              <a target={'_blank'}>
                <p>
                  <YouTubeIcon />
                </p>
              </a>
            </Link>
          </div>
          <div style={{ width: 150 }} className="cursor-pointer">
            <Link href="https://play.google.com/store/apps/details?id=com.estatedekho.buyer">
              <a target="_blank">
                <Image src={googleplay} />
              </a>
            </Link>
          </div>
        </ul>
      </div>

      <div className=" row" style={{ background: '#f0f3f7' }}>
        <p
          className="text-center px-4 "
          style={{ fontSize: '11px', color: 'gray' }}
        >
          Copyright © {moment().format('yyyy')} EstateDekho digi avenues PVT
          LTD. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
