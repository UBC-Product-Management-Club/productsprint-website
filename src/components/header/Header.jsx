import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';

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
            <a href='#'>ABOUT</a>
          </li>
          <li>
            <a href='#'>PROGRAMS</a>
          </li>
          <li>
            <a href='#'>HIGHLIGHTS</a>
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
