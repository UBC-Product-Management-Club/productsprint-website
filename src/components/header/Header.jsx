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
        {/* <div className='logo_container'>
          <img className='logo' src={Logo} alt='pmc-logo' />
          <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
        </div> */}
        <div className='logo_container' onClick={(e) => setIsActive(false)}>
          <Link to='/'>
            <img className='logo' src={Logo} alt='pmc-logo' />
            <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
          </Link>
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
            <li onClick={(e) => setIsActive(false)}>
              <Link to='/'>HOME</Link>
            </li>
            <li onClick={(e) => setIsActive(false)}>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li onClick={(e) => setIsActive(false)}>
              <ProgramsDropDown />
            </li>
            <li onClick={(e) => setIsActive(false)}>
              <PrimaryButton className='header_btn'>JOIN US</PrimaryButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
