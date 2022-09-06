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
        <Link to='/fellowship'>Fellowship Program</Link>
        <a href='https://www.ubcpm.club/productsprint/' target='_blank'>
          Product Sprint (2021-22)
        </a>
      </div>
    </div>
  );
}

export default ProgramsDropDown;
