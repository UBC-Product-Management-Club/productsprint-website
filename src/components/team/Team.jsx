import React from 'react';
import './/team.css';
import ProfileCard from '../shared/ProfileCard';
import Scott from '../../assets/team_pictures/scott.png';

function Team() {
  return (
    <div>
      <div className='container'>
        <p className='team_title'>Our Team</p>
        <div className='card_display_container'>
          <ProfileCard
            img={Scott}
            name='Scott Langille'
            title='president'
          ></ProfileCard>
        </div>

        <p className='team_title'>Our Founders</p>
      </div>
    </div>
  );
}

export default Team;
