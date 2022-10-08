import React from 'react';
import './/projects.css';
import FellowProject1 from '../../../assets/fellowship_members/scott/spatial_chat.png';

function ProjectCard({ project }) {
  return (
    <div>
      {console.log(project.isFinished)}
      {project.isFinished && (
        <div className='project_card_container'>
          <div className='project_image_container'>
            <img
              className='project_image'
              src={FellowProject1}
              alt='project1'
            />
          </div>
          <div className='project_text_container'>
            <p className='project_text_title'>{project.title}</p>
            <p className='project_text'>{project.text}</p>
            <a className='about_link' href=''>
              View Project →
            </a>
          </div>
        </div>
      )}
      {!project.isFinished && (
        <div className='project_card_container unfinished'>
          <div className='project_text_container'>
            <p className='project_text_title'>{project.title}</p>
            <p className='project_text'>{project.text}</p>
            <p className='about_link'>{project.link}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
