import React from 'react';
import './highlights.css';

function Highlights() {
  return (
    <div className='container'>
      <div className='highlights_container'>
        <p className='title'>CLUB HIGHLIGHTS</p>
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
            <span className='achievement_statistics'>70+</span>
            mentors from top companies
          </p>
          <p>
            <span className='achievement_statistics'>Largest</span> student-led
            product competition in Canada
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
    </div>
  );
}
export default Highlights;
