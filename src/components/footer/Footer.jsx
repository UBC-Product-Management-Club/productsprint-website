import React from 'react';
import './footer.css';
import FooterLogo from '../../assets/logo.png';
import { MdEmail } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <div>
      <footer>
        <div className='logo_container'>
          <img className='logo' src={FooterLogo} alt='pmc-logo' />
          <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
        </div>
        <div className='contacts'>
          <a className='email_link' href='team@ubcpm.club'>
            <MdEmail /> team@ubcpm.club
          </a>
          <ul className='footer_links'>
            <li>
              <a target='_blank' href='https://www.facebook.com/ubcpmc'>
                <BsFacebook />
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.instagram.com/ubcpmc/'>
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/company/ubc-product-management-club/'
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.youtube.com/channel/UCkcrUv-e7GndWtFdihI9FGQ/videos'
              >
                <BsYoutube className='fa_icons' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
