import React from 'react';

function ProfileCard({ img, name, title }) {
  return (
    <div className='card_container'>
      <div>
        <img src={img} alt='Scott' />
      </div>
      <div>{name}</div>
      <div>{title}</div>
    </div>
  );
}

export default ProfileCard;
