import React from 'react';
import AboutImg from '../../assets/about_img.png';

function About() {
  return (
    <div className='container'>
      <div className='about_container'>
        <p className='title'>WHO WE ARE</p>
        <p className='about_text'>
          A community of aspiring product managers that comes together to learn
          skills, meet with industry, and prepare for careers in product
          management. Meet the team →
        </p>
        <img className='about_img' src={AboutImg} alt='' />
      </div>
    </div>
  );
}

export default About;
