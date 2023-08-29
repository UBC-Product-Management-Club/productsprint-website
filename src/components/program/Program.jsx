import React from 'react';
import './/program.css';
import ProductSprint from '../../assets/productSprint.png';
import Fellowship from '../../assets/fellowship.png';
import { Link } from 'react-router-dom';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import WhiteBoardingSessions from './WhiteBoardingSessions';

function Program() {
  return (
    <div>
      <div className='container'>
        <div className='program_container'>
          <div className='justify-center flex-col text-center'>
            <h3 className='title'>WHAT WE OFFER</h3>
            {/* Whiteboard Section */}
            <WhiteBoardingSessions />
            <h1 className='text-[45px] font-[600] item-center mt-[2.5rem]'>
              Level Up Your Skills as a PM
            </h1>
            <p className='mt-[3.19rem]'>
              At UBC PMC, we're more than just an organization – we're a
              community committed to nurturing the next generation of product
              management talent.{' '}
            </p>
          </div>
          <div className='mt-[4.44rem]'>
            {/* Events */}
            <div className='information_container'>
              <img
                className='membership_photo'
                id='resized_membership'
                src={ProductSprint}
                alt='membership'
              />
              <div className='text_container'>
                <p className='subtitle'>Events</p>
                <p className='program_text'>
                  Direct Learning: Enhance your product management skills with
                  us.
                  <br></br>
                  <br></br>
                  We offer an environment conducive to understanding the role of
                  a product manager, covering all aspects, from
                  conceptualization to product delivery.
                </p>
                <div className='button_container'>
                  <a href='https://tally.so/r/mODJXk'>
                    <PrimaryButton className='primary'>
                      Become a Member
                    </PrimaryButton>
                  </a>
                </div>
              </div>

              <img
                className='membership_photo'
                id='normal_screen_membership'
                src={ProductSprint}
                alt='membership'
              />
            </div>
            {/* Network */}
            <div className='information_container'>
              <img
                className='fellowship_photo'
                src={Fellowship}
                alt='fellowship'
              />
              <div className='text_container'>
                <p className='subtitle'>Network</p>
                <p className='program_text'>
                  Industry Connections: Expand your professional network by
                  connecting with seasoned professionals in the industry.
                  <br></br>
                  <br></br>
                  Learn from their experiences, gain insights, and benefit from
                  their wisdom.
                </p>
                <div className='button_container'>
                  <Link to='fellowship'>
                    <PrimaryButton className='primary'>
                      Learn more
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
