import React from 'react';
import './/profileCard.css';

function ProfileCard({ img, name, title }) {
  return (
    <>
      <div className='card_container'>
        <div className='card_information_container'>
          <div>
            <img className='profile_img' src={img} alt='name' />
          </div>
          <div className='name_title'>{name}</div>
          <div className='exec_title'>{title}</div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
