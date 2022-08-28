import React from 'react';
import PrimaryButton from '../shared/PrimaryButton';
import './program.css';
import ProductSprint from '../../assets/productSprint.png';

function Program() {
  return (
    <div className='container'>
      <div className='program_container'>
        <div>
          <p className='title'>WHAT WE OFFER</p>
        </div>

        <div className='information_container'>
          <div className='text_container'>
            <h1>MEMBERSHIP</h1>
            <p>
              Be a part of a community of students who are passionate about all
              things tech and product. As a member, you will gain free access to
              our newsletter and admission to all future PMC events.
              <br></br>
              <br></br>
              Look forward to workshops, bi-weekly product chats with industry,
              exclusive networking opportunities and more!
            </p>
            <PrimaryButton>Become a Member</PrimaryButton>
          </div>
          <img
            className='membership_photo'
            src={ProductSprint}
            alt='membership'
          />
        </div>
      </div>
    </div>
  );
}

export default Program;
