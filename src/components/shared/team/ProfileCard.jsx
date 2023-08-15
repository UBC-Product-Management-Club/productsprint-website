import React from 'react';
import './/profileCard.css';

function ProfileCard({ img, name, title }) {
  return (
    <>
      <div className= 'flex w-[23.8rem] h-[13.0rem] bg-[rgb(43,57,80)] rounded-[1.25rem] px-[0.8rem] py-[1.5rem] gap-[1.25rem]'>
        <div className='w-[9.8rem] h-[10.1rem] rounded-[5.7rem] overflow-hidden aspect-auto'>
          <img className='object-cover w-full h-full' src={img}></img>
        </div>
        <div className='h-[10.1rem] bg-transparent flex flex-col gap-[2.3rem]'>
          <h3 className='text-h3 font-header bg-transparent'>{name}</h3>
          <p className='font-content bg-transparent text-[0.81rem]'>{title}</p>
          <p className='font-content bg-transparent text-[0.81rem]'>Email: </p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
