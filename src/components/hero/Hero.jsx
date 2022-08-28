import React from 'react';
import './hero.css';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import HeroImg from '../../assets/hero.png';

function Hero() {
  return (
    <div className='container'>
      <div className='hero_container'>
        <div className='hero_text'>
          <h1>Where students learn product</h1>
          <h1>management together.</h1>
          <div className='button_container'>
            <PrimaryButton>Join the club</PrimaryButton>
            <SecondaryButton>Volunteer as a PM</SecondaryButton>
          </div>
        </div>
        <img className='hero_img' src={HeroImg} alt='hero' />
      </div>
    </div>
  );
}

export default Hero;
