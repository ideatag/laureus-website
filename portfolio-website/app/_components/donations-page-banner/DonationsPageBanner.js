import React from 'react'
import './DonationsPageBanner.css';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const DonationsPageBanner = () => (
   
        <div className='banner'>

            <div className='benner-container'>
                <div className='icon'>
                    <VolunteerActivismIcon />
                </div>
                <div className='container'>
                    <div className='number'>985+</div>
                    <div className='text'>
                        <h6>Donation Received</h6>
                    </div>
                </div>
            </div>

            <div className='benner-container'>
                <div className='icon'>
                    <VolunteerActivismIcon />
                </div>
                <div className='container'>
                    <div className='number'>$10 M</div>
                    <div className='text'>
                        <h6>Money Donated</h6>
                    </div>
                </div>            
            </div>

            <div className='benner-container'>
                <div className='icon'>
                    <VolunteerActivismIcon />
                </div>
                <div className='container'>
                    <div className='number'>12+</div>
                    <div className='text'>
                        <h6>Active Campaigns</h6>
                    </div>
                </div>
            </div>

            <div className='benner-container'>
                <div className='icon'>
                    <VolunteerActivismIcon />
                </div>
                <div className='container'>
                <div className='number'>$60 M</div>
                    <div className='text'>
                        <h6>Charity in Last Year</h6>
                    </div>
                </div>
            </div>

        </div>
  
  )

export default DonationsPageBanner