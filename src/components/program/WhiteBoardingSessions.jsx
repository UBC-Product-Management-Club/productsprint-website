import React from 'react';
import Whiteboard from '../../assets/whiteboard.png';
import Learning from '../../assets/what_we_offer/enhancement.png';
import Play from '../../assets/what_we_offer/learning.png';
import Activities from '../../assets/what_we_offer/activities.png';
import Presentation from '../../assets/what_we_offer/presentation.png';

function WhiteBoardingSessions() {
  return (
    <div className='mt-[3rem] mx-0 justify-center flex-col text-center relative'>
      <h1 className='text-[45px] font-[600] text-center'>
        WEEKLY WHITEBOARDING SESSIONS
      </h1>
      <img
        className='left-0 right-0 mx-auto max-w-full'
        src={Whiteboard}
        alt=''
      />
      <div className='flex justify-center items-center mt-[3rem]'>
        {/* <div className='w-[40.875rem] md:w-[80.875rem] border-[10px] border-solid border-gray-700 rounded-[2.5rem] p-10 flex flex-wrap items-center justify-center gap-[2rem]'>
          <div className='w-[100%] rounded-xl p-4 md:w-[48%] flex items-center'>
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
          <div className='w-[100%] rounded-xl p-4 md:w-[48%] flex items-center'>
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

          <div className='w-[100%] rounded-xl p-4 md:w-[48%] flex items-center'>
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
          <div className='w-[100%] rounded-xl p-4 md:w-[48%] flex items-center'>
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
        </div> */}
      </div>
    </div>
  );
}

export default WhiteBoardingSessions;
