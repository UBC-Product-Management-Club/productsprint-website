import React from 'react';
import { Link } from 'react-router-dom';
import './/projects.css';
import SpatialChat from '../../../assets/fellowship_members/scott/spatial_chat.png';

function ProjectCard({ project, img }) {
  return (
    <div>
      {console.log(project.isFinished)}
      {project.isFinished && (
        <div className='project_card_container'>
          <div className='project_image_container'>
            <img className='project_image' src={project.image} alt='project1' />
          </div>
          <div className='project_text_container'>
            <p className='project_text_title'>{project.title}</p>
            <p className='project_text'>{project.text}</p>
            {/* <a href='/Users/kevintan/ReactProjects/productsprint-website/src/components/fellowship/projects/AppleMaps.html'>
              View Project →
            </a> */}
            {/* <a href='AppleMaps.html'>View Project →</a> */}

            <Link to='/apple-maps'>
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
