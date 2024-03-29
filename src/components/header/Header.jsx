import React from 'react';
import Logo from '../../assets/logo.png';
import PrimaryButton from '../shared/buttons/PrimaryButton';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Header() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      document.documentElement.classList.add('overflow-hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }, [isActive]);
  return (
    <header>
      <div className='m-[2.19rem] justify-between flex'>
        <div onClick={() => setIsActive(false)}>
          <Link to='/' className='lg:flex lg:justify-center lg:items-center'>
            <img src={Logo} alt='pmc-logo' className='w-[2.5rem]' />
            <p className='hidden lg:block lg:ml-[0.75rem]'>
              {' '}
              UBC PRODUCT MANAGEMENT CLUB
            </p>
          </Link>
        </div>
        <nav
          className={`flex items-center ${
            isActive ? 'h-screen overflow-hidden' : ''
          }`}
        >
          {/* Burger menu for small screens */}
          <div
            className={`flex items-center ${
              isActive ? 'h-screen overflow-hidden' : ''
            } md:hidden`}
          >
            <div
              className={`ml-auto ${
                isActive
                  ? 'absolute top-[2.19rem] right-[2.19rem] text-center'
                  : ''
              }`}
            >
              <button
                className={`mr-2 ${isActive ? '' : 'burger'}`}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                {isActive ? (
                  <MdClose className='text-white w-10 h-10' />
                ) : (
                  <FiMenu className='text-gray-400 w-10 h-10' />
                )}
              </button>
            </div>
            <ul
              className={`${
                isActive
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  : 'hidden'
              }`}
            >
              <li onClick={() => setIsActive(false)} className='text-center'>
                <Link to='/' className='block py-2 text-[1.5rem]'>
                  HOME
                </Link>
              </li>
              <li onClick={() => setIsActive(false)} className='text-center'>
                <Link to='/execs' className='block py-2 text-[1.5rem]'>
                  TEAM
                </Link>
              </li>
              <li onClick={() => setIsActive(false)} className='text-center'>
                <a href='https://tally.so/r/mVQ4Gj' target="_blank">
                  <PrimaryButton className='header_btn mt-[1rem]'>
                    JOIN US
                  </PrimaryButton>
                </a>
              </li>
            </ul>
          </div>

          {/* Regular navbar for larger screens */}
          <div>
            <ul
              className={`hidden md:flex md:items-center md:justify-center md:gap-[2rem]`}
            >
              <li className='text-center'>
                <Link
                  to='/'
                  className='block py-2 hover:text-[#fd2a36] transition-all duration-300 ease-in-out'
                >
                  HOME
                </Link>
              </li>
              <li className='text-center'>
                <Link
                  to='/execs'
                  className='block py-2 hover:text-[#fd2a36] transition-all duration-300 ease-in-out'
                >
                  TEAM
                </Link>
              </li>
              <li className='text-center'>
                <a href='https://tally.so/r/mVQ4Gj' target="_blank">
                  <PrimaryButton className='header_btn'>JOIN US</PrimaryButton>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
