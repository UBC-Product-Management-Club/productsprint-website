import React from 'react';
import AboutImg from '../../assets/about_img.png';

function About() {
  return (
    <div className='mx-[2.19rem] mt-[7.5rem]'>
      <p className='title'>WHO WE ARE</p>
      <div>
        <p className='mt-[1.37rem]'>
          A community of aspiring product managers that comes together to learn
          skills, meet with industry, and prepare for careers in product
          management.
          <br />
          <br />
        </p>
        <a className='text-[#80BDFF]' href=''>
          Meet the team →
        </a>
      </div>
      <div className='hidden'>
        <img className='about_img' src={AboutImg} alt='' />
      </div>
    </div>
  );
}

export default About;
