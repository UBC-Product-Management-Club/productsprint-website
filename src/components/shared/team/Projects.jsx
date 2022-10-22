import React from 'react';
import './projects.css';
import AppleMapsImg from '../../../assets/fellowship_members/sophia/apple_maps.png';

import ProjectCard from './ProjectCard';

function Projects({ img, name, title, bio_text, linkedin, projects }) {
  return (
    <div className='fellow_project_container'>
      <div className='bio_container'>
        <div className='bio_information_container'>
          <img src={img} alt='img' />
          <div className='bio_text_container'>
            <p className='bio_name'>{name}</p>
            <p className='bio_title'>{title}</p>
            <p className='bio_text'>{bio_text}</p>
            <a className='about_link' target='blank' href={linkedin}>
              Visit LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>
      <div className='projects_container'>
        <p className='project_container_title'>Projects</p>
        {projects.map((item) => {
          return <ProjectCard project={item} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
