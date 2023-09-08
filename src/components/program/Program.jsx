import React from 'react';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import ProductSprint from '../../assets/productSprint.png';
import Fellowship from '../../assets/fellowship.png';
import { Link } from 'react-router-dom';
import WhiteBoardingSessions from './WhiteBoardingSessions';

function Program() {
  return (
    <div className='mx-0 xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-center'>
      <p className='title mt-[6.25rem] mx-[2.19rem]'>WHAT WE OFFER</p>
      <h1 className='text-[2.25rem] font-[600] item-center mt-[2.5rem] mx-[2.19rem] md:mt-0'>
        Level Up Your Skills as a PM
      </h1>
      <p className='mt-[2.5rem] xl:w-[60rem] mx-[2.19rem]'>
        At UBC PMC, we're more than just an organization – we're a community
        committed to nurturing the next generation of product management talent.{' '}
      </p>
      {/* Whiteboarding */}
      <WhiteBoardingSessions />
      <div className='mt-[3rem] mx-[2.19rem] xl:w-[80rem] xl:flex xl:flex-row xl:items-center xl:justify-center xl:mt-[4rem]'>
        <img
          src={ProductSprint}
          alt='membership'
          className='rounded-[2rem] xl:h-[25rem]'
        />
        <div className='mt-[3rem] xl:flex-col xl:text-left xl:mt-0 xl:ml-[4rem]'>
          <p className='text-[2.25rem] font-[600]'>Events</p>
          <p className='mt-[1.75rem]'>
            Direct Learning: Enhance your product management skills with us.
            <br></br>
            <br></br>
            We offer an environment conducive to understanding the role of a
            product manager, covering all aspects, from conceptualization to
            product delivery.
          </p>
          <a href='https://tally.so/r/mODJXk'>
            <PrimaryButton className='primary mt-[1.75rem]'>
              Become a Member
            </PrimaryButton>
          </a>
        </div>
      </div>

      <div className='mx-[2.19rem] mt-[3rem] xl:w-[80rem] xl:flex xl:flex-row xl:items-center xl:justify-center xl:mt-[6rem]'>
        <img
          src={Fellowship}
          alt='Fellowship'
          className='rounded-[2rem] xl:h-[25rem] xl:order-2 xl:ml-[4rem]'
        />
        <div className='mt-[3rem] xl:flex-col xl:text-left xl:mt-0 xl:order-1'>
          <p className='text-[2.25rem] font-[600]'>Network</p>
          <p className='mt-[1.75rem]'>
            Industry Connections: Expand your professional network by connecting
            with seasoned professionals in the industry.
            <br></br>
            <br></br>
            Learn from their experiences, gain insights, and benefit from their
            wisdom.
          </p>
          <Link to='fellowship'>
            <PrimaryButton className='primary mt-[1.75rem]'>
              Learn more
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Program;
