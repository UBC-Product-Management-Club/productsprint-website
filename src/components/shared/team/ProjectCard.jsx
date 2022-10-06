import React from 'react';
import './/projects.css';
import FellowProject1 from '../../../assets/fellowship_members/scott/spatial_chat.png';

function ProjectCard({ isFinished }) {
  return (
    <div>
      {isFinished && (
        <div className='project_card_container'>
          <div className='project_image_container'>
            <img
              className='project_image'
              src={FellowProject1}
              alt='project1'
            />
          </div>
          <div className='project_text_container'>
            <p className='project_text_title'>Improving SpatialChat</p>
            <p className='project_text'>
              A case study on how I would improve this spatial video meeting app
              that can simulate aspects of the in-person experience for online
              events and conferences.
            </p>
            <a className='about_link' href=''>
              View Project →
            </a>
          </div>
        </div>
      )}
      {!isFinished && (
        <div className='project_card_container unfinished'>
          <div className='project_text_container'>
            <p className='project_text_title'>Second Fellowship Project</p>
            <p className='project_text'>
              Case: Repurpose a product for a new market. Create the strategy to
              bring a product to a new market by planning for implementation,
              considering the roadmap & risks involved.
            </p>
            <p className='about_link'>To be released in November.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
