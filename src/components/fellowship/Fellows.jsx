import React from 'react';
import '../team/team.css';
import { Route, Routes, Link, Switch, BrowserRouter } from 'react-router-dom';
import ProfileCard from '../shared/team/ProfileCard';
import Sophia from '../../assets/fellowship_members/sophia.jpeg';
import Indira from '../../assets/fellowship_members/indira.jpeg';
import Ashkan from '../../assets/fellowship_members/ashkan.jpeg';
import Evan from '../../assets/fellowship_members/evan.jpeg';
import Martin from '../../assets/fellowship_members/martin.png';
import Oceanna from '../../assets/fellowship_members/oceanna.jpeg';
import Riti from '../../assets/fellowship_members/riti.jpeg';
import Will from '../../assets/fellowship_members/william.png';
import Eric from '../../assets/fellowship_members/eric.jpeg';
import Michael from '../../assets/fellowship_members/michael.jpeg';
import Ved from '../../assets/fellowship_members/ved.jpeg';

function Fellows() {
  return (
    <div>
      <div className='container'>
        <p className='team_title'>Fellows</p>
        <div className='card_display_container'>
          {/* <Link to='/scott-langille'>
            <ProfileCard img={Scott} name='Scott Langille' title='Fellow' />
          </Link> */}
          <Link to='/sophia-huang'>
            <ProfileCard img={Sophia} name='Sophia Huang' title='Fellow' />
          </Link>
          <Link to='/indira-sowy'>
            <ProfileCard img={Indira} name='Indira Sowy' title='Fellow' />
          </Link>
          <Link to='/ashkan-gharahgozli'>
            <ProfileCard
              img={Ashkan}
              name='Ashkan Gharahgozli'
              title='Fellow'
            />
          </Link>
          <Link to='/evan-sandhu'>
            <ProfileCard img={Evan} name='Evan Sandhu' title='Fellow' />
          </Link>
          <Link to='/martin-tang'>
            <ProfileCard img={Martin} name='Martin Tang' title='Fellow' />
          </Link>
          <Link to='/oceanna-nguyen'>
            <ProfileCard img={Oceanna} name='Oceanna Nguyen' title='Fellow' />
          </Link>
          <Link to='/riti-nawroz'>
            <ProfileCard img={Riti} name='Riti Nawroz' title='Fellow' />
          </Link>
          <Link to='/william-nguyen'>
            <ProfileCard img={Will} name='William Nguyen' title='Fellow' />
          </Link>
          <Link to='/eric-gadbois'>
            <ProfileCard img={Eric} name='Eric Gadbois' title='Fellow' />
          </Link>
          <Link to='/michael-tham'>
            <ProfileCard img={Michael} name='Michael Tham' title='Fellow' />
          </Link>
          <Link to='/ved-varshney'>
            <ProfileCard img={Ved} name='Ved Varshney' title='Fellow' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fellows;
