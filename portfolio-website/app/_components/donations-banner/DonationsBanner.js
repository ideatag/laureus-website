import React from 'react';
import './DonationsBanner.css';
import Link from 'next/link';

import Button from '@mui/material/Button';

const DonationsBanner = () => (
  <div className="wrapper-container">
    <div className="donations-banner-container">
      <div className="donations-banner-data">
        <h4>Spenden</h4>
        <h3>Helfen Sie mit</h3>
        <p>
          Aus aktuellem Anlass unterstützt Laureus Sport for Good mit den
          gesammelten Spenden Organisationen, die geflüchteten Kindern und ihren
          Familien schnell und unbürokratisch Hilfe leisten.{' '}
        </p>

        {/* <Button variant="contained" className='donate-button'>
               <Link className='donate-link' href="/donate">
                  Spenden
               </Link>
            </Button> */}

        <Link className="donate-link" href="/donate">
          <Button variant="contained" className="donations-banner-button">
            Spenden
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default DonationsBanner;
