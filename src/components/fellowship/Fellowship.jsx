import React from 'react';
import FellowshipVector from '../../assets/fellowship_vector.png';
import Build from '../../assets/build.png';
import Create from '../../assets/create.png';
import Learn from '../../assets/learn.png';
import Connect from '../../assets/connect.png';
import Google from '../../assets/fellowship_program_logos/google.png';
import Microsoft from '../../assets/fellowship_program_logos/microsoft.png';
import Amazon from '../../assets/fellowship_program_logos/amazon.png';
import Shopify from '../../assets/fellowship_program_logos/shopify.png';
import Intuit from '../../assets/fellowship_program_logos/intuit.png';
import Hootsuite from '../../assets/fellowship_program_logos/hootsuite.png';
import Grammarly from '../../assets/fellowship_program_logos/grammarly.png';
import Asana from '../../assets/fellowship_program_logos/asana.png';
import ProductBoard from '../../assets/fellowship_program_logos/productboard.png';
import Unity from '../../assets/fellowship_program_logos/unity.png';

import './fellowship.css';

function Fellowship() {
  return (
    <div className='fellowship_container'>
      <div className='container'>
        <div className='information_container'>
          <div className='fellowship_text_container'>
            <p className='fellowship_title'>Fellowship Program</p>
            <p className='fellowship_text'>
              Prepare for product internships by creating a portfolio of 3
              projects covering product design, strategy, and discovery. By
              immersing yourself in this 4-month program, you will learn the
              fundamentals of product management and do work similar to product
              managers at the tech companies all while meeting others on a
              similar path to you.
            </p>
          </div>
          <img
            className='fellowship_vector'
            src={FellowshipVector}
            alt='Fellowship img'
          />
        </div>
      </div>
      <div className='perks_container'>
        <p className='title'>PROGRAM PERKS</p>
        <div className='perks_display'>
          <div className='perks_display_subcontainer'>
            <img src={Build} alt='Build' />
            <p className='perks_subtitle'>Build Product Skills</p>
            <p className='perks_text'>
              Learn from curated resources and put new skills into practice
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Create} alt='Create' />
            <p className='perks_subtitle'>Create a Portfolio</p>
            <p className='perks_text'>
              Develop 3 projects for your profile on this website
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Learn} alt='Learn' />
            <p className='perks_subtitle'>Learn from Mentors</p>
            <p className='perks_text'>
              Receive feedback on your work from industry PMs
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Connect} alt='Connect' />
            <p className='perks_subtitle'>Meet Others</p>
            <p className='perks_text'>
              Make friends and connections for life with other fellows
            </p>
          </div>
        </div>
      </div>
      <div className='past_mentors'>
        <p className='title'>PAST MENTORS HAVE WORKED AT</p>
        <div className='fellowship_company_logos'>
          <img src={Google} alt='' />
          <img src={Microsoft} alt='' />
          <img src={Amazon} alt='' />
          <img src={Shopify} alt='' />
          <img src={Intuit} alt='' />
          <img src={Hootsuite} alt='' />
          <img src={Grammarly} alt='' />
          <img src={Asana} alt='' />
          <img src={ProductBoard} alt='' />
          <img src={Unity} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Fellowship;
