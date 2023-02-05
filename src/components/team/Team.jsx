import React from 'react';
import './/team.css';
import ProfileCard from '../shared/team/ProfileCard';
import Scott from '../../assets/team_pictures/scott.png';
import Kevin from '../../assets/team_pictures/kevin.png';
import Landseer from '../../assets/team_pictures/landseer.png';
import Varun from '../../assets/team_pictures/varun.png';
import Yash from '../../assets/team_pictures/yash.JPG';
import Fahim from '../../assets/team_pictures/fahim.png';
import Khushi from '../../assets/team_pictures/khushi.png';
import Sarah from '../../assets/team_pictures/sarah.png';
import Rachit from '../../assets/team_pictures/rachit.png';
import Rithvik from '../../assets/team_pictures/rithvik.png';
import Grace from '../../assets/team_pictures/grace.jpeg';
import Gunyup from '../../assets/team_pictures/gunyup.png';

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
            title='Technology and Finance'
          ></ProfileCard>
          <ProfileCard
            img={Landseer}
            name='Landseer Enga'
            title='Learning Design'
          ></ProfileCard>
          <ProfileCard
            img={Varun}
            name='Varun Puri'
            title='Partnerships'
          ></ProfileCard>
          <ProfileCard
            img={Yash}
            name='Yashkumar Shiroya'
            title='Event Design'
          ></ProfileCard>
          <ProfileCard
            img={Fahim}
            name='Fahim Gbon'
            title='Internships'
          ></ProfileCard>
          <ProfileCard
            img={Khushi}
            name='Khushi Dhand'
            title='Design &amp; Marketing'
          ></ProfileCard>
          <ProfileCard
            img={Sarah}
            name='Sarah Cheng'
            title='Content Writing'
          ></ProfileCard>
          <ProfileCard
            img={Gunyup}
            name='Gunyup Chun'
            title='Community'
          ></ProfileCard>
          <ProfileCard
            img={Grace}
            name='Grace Guan'
            title='Member Experience'
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
