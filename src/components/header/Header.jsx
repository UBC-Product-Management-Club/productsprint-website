import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import ProgramsDropDown from './ProgramsDropDown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='logo_container'>
        <img className='logo' src={Logo} alt='pmc-logo' />
        <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
      </div>
      <nav>
        <ul className='navbar_links'>
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
            <a href='#'>JOIN US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
