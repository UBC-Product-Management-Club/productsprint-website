import React from 'react';
import './/profileCard.css';

function ProfileCard({ img, name, title }) {
  const itemsDimension = "w-[calc(9.8rem*0.8)] h-[calc(10.1rem*0.8)] md:w-[9.8rem] md:h-[10.1rem]"
  return (
    <>
      <div className= 'flex w-[calc(23.8rem*0.8)] h-[calc(13.0rem*0.8)] md:w-[23.8rem] md:h-[13.0rem] bg-[rgb(43,57,80)] rounded-[1.25rem] px-[0.8rem] py-[1.5rem] gap-[1.25rem]'>
        <div className={itemsDimension + ' rounded-[5.7rem] overflow-hidden aspect-auto'}>
          <img className='object-cover w-full h-full' src={img}></img>
        </div>
        <div className={itemsDimension + ' bg-transparent flex flex-col gap-[calc(2.3rem*0.3)] md:gap-[2.3rem]'}>
          <h3 className='text-h3 font-header bg-transparent'>{name}</h3>
          <p className='font-content bg-transparent text-[0.81rem]'>{title}</p>
          <p className='font-content bg-transparent text-[0.81rem] hidden md:block'>Email: </p>
          {/* Mobile */}
          <p className='font-content bg-transparent text-[0.81rem] block md:hidden'>Example@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
