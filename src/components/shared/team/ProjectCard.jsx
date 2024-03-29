import React from 'react';
import { Link } from 'react-router-dom';
import './/projects.css';

function ProjectCard({ project, img }) {
  return (
    <div className='project_card'>
      {console.log(project.isFinished)}
      {project.isFinished && (
        <div className='project_card_container'>
          <div className='project_image_container'>
            <img className='project_image' src={project.image} alt='project1' />
          </div>
          <div className='project_text_container'>
            <p className='project_text_title'>{project.title}</p>
            <p className='project_text'>{project.text}</p>

            <Link to={project.link}>
              <a className='about_link' href=''>
                View Project →
              </a>
            </Link>
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
