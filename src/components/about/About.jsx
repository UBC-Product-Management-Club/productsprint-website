import React from 'react';
import AboutImg from '../../assets/about_img.png';
import './about.css';

function About() {
  return (
    <div className='container about_container'>
      <div>
        <p className='title'>WHO WE ARE</p>
      </div>
      <div>
        <p className='about_text'>
          A community of aspiring product managers that comes together to learn
          skills, meet with industry, and prepare for careers in product
          management.{' '}
          <a className='about_link' href=''>
            Meet the team →
          </a>
        </p>
      </div>
      <div>
        <img className='about_img' src={AboutImg} alt='' />
      </div>
    </div>
  );
}

export default About;
