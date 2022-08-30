import React from 'react';
import './header.css';
import DropDown from '../../assets/drop_down.png';
import { Link } from 'react-router-dom';

function ProgramsDropDown() {
  return (
    <div className='dropdown'>
      <span>
        <p className='header_text'>
          PROGRAMS{' '}
          <img className='dropdown_img' src={DropDown} alt='drop down' />
        </p>
      </span>
      <div className='dropdown_content'>
        <Link to='mentorship'>Mentorship</Link>
        <Link to='fellowship'>Fellowship</Link>
      </div>
    </div>
  );
}

export default ProgramsDropDown;
