import React from 'react';
import AboutImg from '../../assets/about_img.png';

function About() {
  return (
    <div className='mx-[2.19rem] mt-[7.5rem] xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-center'>
      <p className='title'>WHO WE ARE</p>
      <div className='xl:max-w-[60rem]'>
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
      <div className='hidden xl:block xl:mt-[4rem] xl:max-w-[40rem]'>
        <img className='about_img' src={AboutImg} alt='' />
      </div>
    </div>
  );
}

export default About;
