import React from 'react';
import PrimaryButton from '../shared/buttons/PrimaryButton';
// import './/program.css';
import ProductSprint from '../../assets/productSprint.png';
import Fellowship from '../../assets/fellowship.png';
import { Link } from 'react-router-dom';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import WhiteBoardingSessions from './WhiteBoardingSessions';

function Program() {
  return (
    <div className='mx-[2.19rem]  xl:flex xl:justify-center xl:items-center xl:flex-col xl:text-center'>
      <p className='title mt-[6.25rem]'>WHAT WE OFFER</p>

      <div className='mt-[3rem] xl:w-[80rem] xl:flex xl:flex-row xl:items-center xl:justify-center'>
        <img
          src={ProductSprint}
          alt='membership'
          className='rounded-[2rem] xl:h-[25rem]'
        />
        <div className='mt-[3rem] xl:flex-col xl:text-left xl:mt-0 xl:ml-[4rem]'>
          <p className='text-[2.25rem] font-[600]'>MEMBERSHIP</p>
          <p className='mt-[1.75rem]'>
            Be part of our community, in-person or online. Members gain access
            to events, programs, newsletters, and our online community.
            <br></br>
            <br></br>
            This fall, you can look forward to bi-weekly chats with dozens of
            product managers, our fellowship program, and interview preparation
            opportunities.
          </p>
          <a href='https://tally.so/r/mODJXk'>
            <PrimaryButton className='primary mt-[1.75rem]'>
              Become a Member
            </PrimaryButton>
          </a>
        </div>
      </div>

      <div className='mt-[3rem] xl:w-[80rem] xl:flex xl:flex-row xl:items-center xl:justify-center xl:mt-[6rem]'>
        <img
          src={Fellowship}
          alt='Fellowship'
          className='rounded-[2rem] xl:h-[25rem] xl:order-2 xl:ml-[4rem]'
        />
        <div className='mt-[3rem] xl:flex-col xl:text-left xl:mt-0 xl:order-1'>
          <p className='text-[2.25rem] font-[600]'>FELLOWSHIP</p>
          <p className='mt-[1.75rem]'>
            Whether you are new to product management or you want to step up
            your game, the projects you work on over the course of the semester
            will teach you the core PM skills while preparing you for
            internships. As a bonus, you'll get insight into the industry during
            regular mentorship with product managers!
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
