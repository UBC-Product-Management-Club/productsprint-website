import React from 'react';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import './/program.css';
import ProductSprint from '../../assets/productSprint.png';
import Fellowship from '../../assets/fellowship.png';
import { Link } from 'react-router-dom';

function Program() {
  return (
    <div className='container'>
      <div className='program_container'>
        <div>
          <p className='title'>WHAT WE OFFER</p>
        </div>

        <div className='information_container'>
          <img
            className='membership_photo'
            id='resized_membership'
            src={ProductSprint}
            alt='membership'
          />
          <div className='text_container'>
            <p className='subtitle'>MEMBERSHIP</p>
            <p className='program_text'>
              Be part of our community, in-person or online. Members gain access
              to events, programs, newsletters, and our online community.
              <br></br>
              <br></br>
              This fall, you can look forward to bi-weekly chats with dozens of
              product managers, our fellowship program, and interview
              preparation opportunities.
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

        <div className='information_container'>
          <img className='fellowship_photo' src={Fellowship} alt='fellowship' />
          <div className='text_container'>
            <p className='subtitle'>FELLOWSHIP</p>
            <p className='program_text'>
              Whether you are new to product management or you want to step up
              your game, the projects you work on over the course of the
              semester will teach you the core PM skills while preparing you for
              internships. As a bonus, you'll get insight into the industry
              during regular mentorship with product managers!
            </p>
            <div className='button_container'>
              <Link to='fellowship'>
                <PrimaryButton className='primary'>Learn more</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
