import React from 'react';
import './/team.css';
import ProfileCard from '../shared/team/ProfileCard';
import Scott from '../../assets/team_pictures/scott.png';
import Kevin from '../../assets/team_pictures/kevin.png';
import Landseer from '../../assets/team_pictures/landseer.png';
import Varun from '../../assets/team_pictures/varun.png';
import Kimia from '../../assets/team_pictures/kimia.png';
import Fahim from '../../assets/team_pictures/fahim.png';
import Khushi from '../../assets/team_pictures/khushi.png';
import Sarah from '../../assets/team_pictures/sarah.png';
import Rachit from '../../assets/team_pictures/rachit.png';
import Rithvik from '../../assets/team_pictures/rithvik.png';

function Team() {
  return (
    <div>
      <div className='container'>
        <p className='team_title'>Our Team</p>
        <div className='card_display_container'>
          <ProfileCard
            img={Scott}
            name='Scott Langille'
            title='President'
          ></ProfileCard>
          <ProfileCard
            img={Kevin}
            name='Kevin Tan'
            title='Infrastructure'
          ></ProfileCard>
          <ProfileCard
            img={Landseer}
            name='Landseer Enga'
            title='Learning & Recruit Prep'
          ></ProfileCard>
          <ProfileCard
            img={Varun}
            name='Varun Puri'
            title='Industry Connections'
          ></ProfileCard>
          <ProfileCard
            img={Kimia}
            name='Kimia Naghavi'
            title='Membership'
          ></ProfileCard>
          <ProfileCard
            img={Fahim}
            name='Fahim Gbon'
            title='Learning Tools'
          ></ProfileCard>
          <ProfileCard
            img={Khushi}
            name='Khushi Dhand'
            title='Design & Marketing'
          ></ProfileCard>
          <ProfileCard
            img={Sarah}
            name='Sarah Cheng'
            title='Events'
          ></ProfileCard>
        </div>

        <p className='team_title'>Our Founders</p>
        <div className='card_display_container'>
          <ProfileCard
            img={Rachit}
            name='Rachit Malik'
            title='PM @ Microsoft'
          ></ProfileCard>
          <ProfileCard
            img={Rithvik}
            name='Rithvik Alluri'
            title='SWE @ Microsoft'
          ></ProfileCard>
        </div>
      </div>
    </div>
  );
}

export default Team;
