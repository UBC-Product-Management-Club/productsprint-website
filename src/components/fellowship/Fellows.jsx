import React from 'react';
import '../team/team.css';
import { Route, Routes, Link, Switch, BrowserRouter } from 'react-router-dom';
import ProfileCard from '../shared/team/ProfileCard';
import Scott from '../../assets/team_pictures/scott.png';
import Sophia from '../../assets/fellowship_members/sophia/sophia_bio.png';

function Fellows() {
  return (
    <div>
      <div className='container'>
        <p className='team_title'>Fellows</p>
        <div className='card_display_container'>
          <Link to='/scott-langille'>
            <ProfileCard img={Scott} name='Scott Langille' title='Fellow' />
          </Link>
          <Link to='/sophia-huang'>
            <ProfileCard img={Sophia} name='Sophia Huang' title='Fellow' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fellows;
