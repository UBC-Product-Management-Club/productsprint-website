import React from 'react';
import './projects.css';
import Scott from '../../../assets/bio_pictures/scott_bio.png';

function Projects() {
  return (
    <div>
      <div className='bio_container'>
        <img src={Scott} alt='scott' />
        <div className='bio_text_container'>
          <p className='bio_name'>Scott Langille</p>
          <p className='bio_title'>Club President</p>
          <p className='bio_text'>
            Aspiring Product Manager with experience in front-end development
            and design. Currently working as a PM Intern at BlackBerry in
            Toronto, but eventually wants to break out of the corporate world to
            pursue his own startup and tackle problems in education.
          </p>
          <a className='about_link' href=''>
            Visit LinkedIn Profile →
          </a>
        </div>
      </div>
      <div className='projects_container'>
        <p>Projects</p>
      </div>
    </div>
  );
}

export default Projects;
