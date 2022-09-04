import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import ProgramsDropDown from './ProgramsDropDown';
import PrimaryButton from '../shared/PrimaryButton';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <div className='header_container'>
        <div className='logo_container'>
          <img className='logo' src={Logo} alt='pmc-logo' />
          <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
        </div>
        <nav>
          <button
            className='burger'
            onClick={(e) => {
              setIsActive(!isActive);
            }}
          >
            {isActive ? (
              <MdClose
                style={{ color: '#fff', width: '40px', height: '40px' }}
              />
            ) : (
              <FiMenu
                style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
              />
            )}
          </button>
          <ul
            className={`navbar_links
          ${isActive ? ' showMenu' : ''}`}
          >
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <ProgramsDropDown />
            </li>
            <li>
              <PrimaryButton className='header_btn'>JOIN US</PrimaryButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
