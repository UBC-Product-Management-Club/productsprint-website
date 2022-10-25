import React from 'react';
import './projects.css';
// import author

function Template() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img
                src={Filler}
                alt='
              Filler
              '
              />
              <div className='meta_p'>
                <p className='meta_name'>{/* Author Name */}</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong></strong>
          </h1>
          <div className='project_meta_intro'>{/* Project Name */}</div>

          <p></p>
        </div>

        <div className='project_container'>{/* Project Details */}</div>
      </div>
    </div>
  );
}

export default Template;
