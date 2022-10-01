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
          <p className='hero_title'>Explore product</p>
          <p className='hero_title'>management with us.</p>
          <div className='button_container'>
            <a href='https://tally.so/r/mODJXk'>
              <PrimaryButton className='primary'>Join the club</PrimaryButton>
            </a>
            <a href='https://tally.so/r/wobY8e'>
              <SecondaryButton>Volunteer as a PM</SecondaryButton>
            </a>
          </div>
        </div>
        <img className='hero_img' src={HeroImg} alt='hero' />
      </div>
      <div className='scroll_down'>
        <p>Scroll to learn more</p>
        <img className='scroll_down_img' src={ScrollDown} alt='scroll down' />
      </div>
    </div>
  );
}

export default Hero;
