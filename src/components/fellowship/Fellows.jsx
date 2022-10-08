import React from 'react';
import '../team/team.css';
import { Route, Routes, Link, Switch, BrowserRouter } from 'react-router-dom';
import ProfileCard from '../shared/team/ProfileCard';
import Scott from '../../assets/team_pictures/scott.png';
import Kevin from '../../assets/team_pictures/kevin.png';
import Landseer from '../../assets/team_pictures/landseer.png';
import Varun from '../../assets/team_pictures/varun.png';
import Yash from '../../assets/team_pictures/yash.JPG';
import Kimia from '../../assets/team_pictures/kimia.png';
import Fahim from '../../assets/team_pictures/fahim.png';
import Khushi from '../../assets/team_pictures/khushi.png';
import Sarah from '../../assets/team_pictures/sarah.png';
import Rachit from '../../assets/team_pictures/rachit.png';
import Rithvik from '../../assets/team_pictures/rithvik.png';
import ProjectCard from '../shared/team/ProjectCard';
import Projects from '../shared/team/Projects';

function Fellows() {
  return (
    <div>
      <div className='container'>
        <p className='team_title'>Fellows</p>
        <div className='card_display_container'>
          <Link to='/scott-langille'>
            <ProfileCard img={Scott} name='Scott Langille' title='Fellow' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fellows;
