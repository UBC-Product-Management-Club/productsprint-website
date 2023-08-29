import React from 'react';
import Whiteboard from '../../assets/whiteboard.png';
import Learning from '../../assets/what_we_offer/enhancement.png';
import Play from '../../assets/what_we_offer/learning.png';
import Activities from '../../assets/what_we_offer/activities.png';
import Presentation from '../../assets/what_we_offer/presentation.png';

function WhiteBoardingSessions() {
  return (
    <div className='justify-center flex-col text-center w-[94rem]'>
      <h1 className='text-[45px] font-[600] item-center '>
        WEEKLY WHITEBOARDING SESSIONS
      </h1>
      <img className='mt-[2.69rem] w-[100rem]' src={Whiteboard} alt='' />
      <div className='flex justify-center items-center mt-[3rem]'>
        <div className='w-[80.875rem] border-[10px] border-solid border-gray-700 rounded-[2.5rem] p-10 flex flex-wrap items-center justify-center gap-[2rem]'>
          {/* First row */}
          <div className='rounded-xl p-4 w-[48%] flex items-center'>
            <img
              src={Learning}
              alt='Learning'
              className='w-[10rem] h-[10rem]'
            />
            <div>
              <h2 className='font-[700]'>Skill Enhancement</h2>
              <p className='leading-[2rem]'>
                Our weekly whiteboarding sessions, led by experienced product
                managers, are an excellent opportunity to refine your ideation
                and problem-solving skills in an applied setting.
              </p>
            </div>
          </div>
          <div className='rounded-xl p-4 w-[48%] flex items-center'>
            <img src={Play} alt='Hands-on' className='w-[10rem] h-[10rem]' />
            <div>
              <h2 className='font-[600]'>Hands-On Learning</h2>
              <p className='leading-[2rem]'>
                The interactive nature of these sessions provides a practical
                and hands-on learning environment, fostering a deeper
                understanding of product management concepts.
              </p>
            </div>
          </div>

          {/* Second row */}
          <div className='rounded-xl p-4 w-[48%] flex items-center'>
            <img
              src={Activities}
              alt='Activites'
              className='w-[10rem] h-[10rem]'
            />
            <div>
              <h2 className='font-[600]'>PM Specific Activities</h2>
              <p className='leading-[2rem]'>
                The interactive nature of these sessions provides a practical
                and hands-on learning environment, fostering a deeper
                understanding of product management concepts.
              </p>
            </div>
          </div>
          <div className='rounded-xl p-4 w-[48%] flex items-center'>
            <img
              src={Presentation}
              alt='Career'
              className='w-[10rem] h-[10rem]'
            />
            <div>
              <h2 className='font-[600]'>Career Readiness</h2>
              <p className='leading-[2rem]'>
                The interactive nature of these sessions provides a practical
                and hands-on learning environment, fostering a deeper
                understanding of product management concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteBoardingSessions;
