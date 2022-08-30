import React from 'react';
import './hero.css';
import PrimaryButton from '../shared/PrimaryButton';
import SecondaryButton from '../shared/SecondaryButton';
import HeroImg from '../../assets/hero.png';
import ScrollDown from '../../assets/scroll_down.png';

function Hero() {
  return (
    <div className='container'>
      <div className='hero_container'>
        <div className='hero_text'>
          <h1>Explore product</h1>
          <h1>management with us.</h1>
          <div className='button_container'>
            <PrimaryButton>Join the club</PrimaryButton>
            <SecondaryButton>Volunteer as a PM</SecondaryButton>
          </div>
          <div className='scroll_down'>
            <p>Scroll to learn more</p>
            <img
              className='scroll_down_img'
              src={ScrollDown}
              alt='scroll down'
            />
          </div>
        </div>
        <img className='hero_img' src={HeroImg} alt='hero' />
      </div>
    </div>
  );
}

export default Hero;
