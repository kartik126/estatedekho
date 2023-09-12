import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import apiClient from 'utils/apiClient';
import { useState } from 'react';
import Router from 'next/router';
import TrustedDeveloperCard from 'components/TrustedDeveloperCard';

function TrustedDevelopers({ developer }) {
  return (
    <div className="row trusted_main">
      <div className="row trusted_heading">
        <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
          <h1>
            Trusted
            <span style={{ fontWeight: '700' }}> Developers</span>
          </h1>
          <Link href="/DevelopersListing">
            <p>
              View All <ExpandCircleDownOutlinedIcon />{' '}
            </p>
          </Link>
        </div>
      </div>

      <>
        <TrustedDeveloperCard developer={developer[0]} />
      </>
    </div>
  );
}

export default TrustedDevelopers;
