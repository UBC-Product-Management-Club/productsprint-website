import React from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import ProgramsDropDown from './ProgramsDropDown';
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
          <Link to='/'>
            <img src={Logo} alt='pmc-logo' className='w-[2.5rem]' />
            <p className='hidden'> UBC PRODUCT MANAGEMENT CLUB</p>
          </Link>
        </div>
        <nav
          className={`flex items-center ${
            isActive ? 'h-screen overflow-hidden' : ''
          }`}
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
              <Link to='/' className='block py-2'>
                HOME
              </Link>
            </li>
            <li onClick={() => setIsActive(false)} className='text-center'>
              <Link to='/execs' className='block py-2'>
                TEAM
              </Link>
            </li>
            <li
              onClick={() => setIsActive(false)}
              className={`${isActive ? 'mt-[1.5rem]' : ''}`}
            >
              <a href=''>
                <PrimaryButton className='header_btn'>JOIN US</PrimaryButton>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    // <header>
    //   <div className='header_container'>
    //     <div className='logo_container' onClick={(e) => setIsActive(false)}>
    //       <Link to='/'>
    //         <img className='logo' src={Logo} alt='pmc-logo' />
    //         <p className='logo_text'> UBC PRODUCT MANAGEMENT CLUB</p>
    //       </Link>
    //     </div>
    //     <nav>
    //       <button
    //         className='burger'
    //         onClick={(e) => {
    //           setIsActive(!isActive);
    //         }}
    //       >
    //         {isActive ? (
    //           <MdClose
    //             style={{ color: '#fff', width: '40px', height: '40px' }}
    //           />
    //         ) : (
    //           <FiMenu
    //             style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
    //           />
    //         )}
    //       </button>
    //       <ul
    //         className={`navbar_links
    //       ${isActive ? ' showMenu' : ''}`}
    //       >
    //         <li onClick={(e) => setIsActive(false)}>
    //           <Link to='/'>HOME</Link>
    //         </li>
    //         <li onClick={(e) => setIsActive(false)}>
    //           <Link to='/execs'>TEAM</Link>
    //         </li>
    //         {/* <li onClick={(e) => setIsActive(false)}>
    //           <Link to='/about'>ABOUT</Link>
    //         </li> */}
    //         {/* <li className='hamburger_content'>
    //           <div className='menu_dropdown_content'>
    //             <ProgramsDropDown />
    //             <div className='burger_content'>
    //               <Link
    //                 className='fellowship_link'
    //                 to='fellowship'
    //                 onClick={(e) => setIsActive(false)}
    //               >
    //                 Fellowship Program
    //               </Link>
    //               <a
    //                 href='https://www.ubcpm.club/productsprint/'
    //                 target='_blank'
    //                 onClick={(e) => setIsActive(false)}
    //               >
    //                 Product Sprint (2021-22)
    //               </a>
    //             </div>
    //           </div>
    //         </li> */}
    //         <li onClick={(e) => setIsActive(false)}>
    //           <a href='https://tally.so/r/mODJXk'>
    //             <PrimaryButton className='header_btn'>JOIN US</PrimaryButton>
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
}
export default Header;
