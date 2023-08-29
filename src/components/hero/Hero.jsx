import React from 'react';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import SecondaryButton from '../shared/buttons/SecondaryButton';
import HeroImg from '../../assets/hero.png';
import ScrollDown from '../../assets/scroll_down.png';

function Hero() {
  return (
    <div className='mx-[2.19rem]'>
      <div className='hero_text max-w-[19.5rem]'>
        <h1 className='text-[2.75rem] font-[600]'>Explore product</h1>
        <h1 className='text-[2.75rem] font-[600]'>management with us.</h1>
        <div className='mt-[3.75rem] space-y-[10rem]'>
          <a href='https://tally.so/r/mODJXk'>
            <PrimaryButton className='primary'>Join the club</PrimaryButton>
          </a>
          <a href='https://tally.so/r/wobY8e'>
            <SecondaryButton className='mt-[1.94rem]'>
              Volunteer as a PM
            </SecondaryButton>
          </a>
        </div>
      </div>
      <img className='hidden' src={HeroImg} alt='hero' />
      <div className='mt-[4.19rem]'>
        <p className='font-[400] color-[#FFF]'>Scroll to learn more</p>
        <img
          className='w-[2.5625rem] mt-[1.06rem]'
          src={ScrollDown}
          alt='scroll down'
        />
      </div>
    </div>
  );
}

export default Hero;
