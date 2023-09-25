import React from 'react';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import SecondaryButton from '../shared/buttons/SecondaryButton';
import HeroImg from '../../assets/hero.png';
import ScrollDown from '../../assets/scroll_down.png';

function Hero() {
  return (
    <div className='mx-[2.19rem] xl:flex-wrap xl:flex xl:justify-center xl:items-center'>
      <div className='hero_text max-w-[19.5rem] mt-[4rem] md:max-w-full'>
        <h1 className='text-[2.75rem] font-[600] xl:text-[2.6rem]'>
          Explore Product
        </h1>
        <h1 className='text-[2.75rem] font-[600] xl:text-[2.6rem]'>
          Management with us.
        </h1>
        <div className='mt-[3.75rem] space-y-[10rem]'>
          <a href='https://tally.so/r/mODJXk'>
            <PrimaryButton className='primary'>Join the club</PrimaryButton>
          </a>
          <a href='https://tally.so/r/3qD2MG' className='md:ml-[0.75rem]'>
            <SecondaryButton className='mt-[1.94rem]'>
              Volunteer as a PM
            </SecondaryButton>
          </a>
        </div>
      </div>
      <img
        className='hidden xl:block xl:w-[30rem] xl:ml-[2rem]'
        src={HeroImg}
        alt='hero'
      />

      <div className='mt-[4.19rem] xl:ml-4rem xl:mr-[50rem]'>
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
