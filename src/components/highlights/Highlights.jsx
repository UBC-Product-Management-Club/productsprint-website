import React from 'react';
import './highlights.css';
import Amazon from '../../assets/company_logos/amazon.png';
import Google from '../../assets/company_logos/google.png';
import Microsoft from '../../assets/company_logos/microsoft.png';
import ProductBoard from '../../assets/company_logos/productboard.png';
import Shopify from '../../assets/company_logos/shopify.png';
import Visier from '../../assets/company_logos/visier.png';
import Dapper from '../../assets/company_logos/dapper.png';
import Hootsuite from '../../assets/company_logos/hootsuite.png';
import Intuit from '../../assets/company_logos/intuit.png';
import EY from '../../assets/company_logos/ey.png';
import Grammarly from '../../assets/company_logos/grammarly.png';
import SalesForce from '../../assets/company_logos/salesforce.png';

function Highlights() {
  return (
    <div className='container'>
      <div className='highlights_container'>
        <p className='title'>CLUB HIGHLIGHTS</p>
        <div className='highlights_information_container'>
          <div>
            <p className='subtitle'>BUILDING A COMMUNITY</p>
            <p>What we’ve accomplished since our founding in 2020:</p>
          </div>
          <div className='achievements'>
            <p>
              <span className='achievement_statistics'>10+ </span> workshop
              <br />
              led by industry PM’s
            </p>
            <p>
              <span className='achievement_statistics'>70+</span> mentors from
              top companies
            </p>
            <p>
              <span className='achievement_statistics'>Largest</span>{' '}
              student-led product competition in Canada
            </p>
            <p>
              <span className='achievement_statistics'>300+ </span>
              students
              <br /> in our community
            </p>
            <p>
              <span className='achievement_statistics'>$4,500+</span>
              <br /> prizes awarded{' '}
            </p>
          </div>
          <a className='learn_more_link' href=''>
            Learn more →
          </a>
        </div>
        <div>
          <p className='subtitle'>ENGAGING WITH INDUSTRY</p>
          <p>We’ve worked with product managers from companies including:</p>
          <div className='company_logos'>
            <img src={Amazon} alt='Amazon' />
            <img src={Google} alt='Google' />
            <img src={Microsoft} alt='Microsoft' />
            <img src={ProductBoard} alt='Product Board' />
            <img src={Shopify} alt='Shopify' />
            <img src={Dapper} alt='Dapper' />
            <img src={Visier} alt='Visier' />
            <img src={Hootsuite} alt='Hootsuite' />
            <img src={EY} alt='EY' />
            <img src={Intuit} alt='Intuit' />
            <img src={Grammarly} alt='Grammarly' />
            <img src={SalesForce} alt='Sales Force' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Highlights;
