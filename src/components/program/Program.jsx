import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import './program.css';
import ProductSprint from '../../assets/productSprint.png';
import Fellowship from '../../assets/fellowship.png';

function Program() {
  return (
    <div className='container'>
      <div className='program_container'>
        <div>
          <p className='title'>WHAT WE OFFER</p>
        </div>

        <div className='information_container'>
          <div className='text_container'>
            <p className='subtitle'>MEMBERSHIP</p>
            <p className='program_text'>
              Be a part of a community of students who are passionate about all
              things tech and product. As a member, you will gain free access to
              our newsletter and admission to all future PMC events.
              <br></br>
              <br></br>
              Look forward to workshops, bi-weekly product chats with industry,
              exclusive networking opportunities and more!
            </p>
            <div className='button_container'>
              <PrimaryButton className='primary'>Become a Member</PrimaryButton>
            </div>
          </div>
          <img
            className='membership_photo'
            src={ProductSprint}
            alt='membership'
          />
        </div>

        <div className='information_container'>
          <img className='fellowship_photo' src={Fellowship} alt='fellowship' />
          <div className='text_container'>
            <p className='subtitle'>FELLOWSHIP</p>
            <p className='program_text'>
              New to product management? Looking for a product management
              internship? This is the right place to start.
              <br />
              <br />
              Over the course of two semester, you will work alongside 30
              fellows, learn the basics of product management, and create an
              end-of-term project with the help of industry mentors. Interested?
            </p>
            <div className='button_container'>
              <PrimaryButton className='primary'>Apply to Join</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
