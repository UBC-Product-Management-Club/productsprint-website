import React from 'react';
import './projects.css';
import Sophia from '../../../assets/fellowship_members/sophia_bio.png';

function Template() {
  return (
    // <p>hello</p>
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Sophia} alt='Sophia' />
              <div className='meta_p'>
                <p className='meta_name'>Sophia Huang</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving the Driving Experience in Apple Maps</strong>
          </h1>
          <div className='project_meta_intro'></div>

          <p></p>
        </div>

        <div className='project_container'></div>
      </div>
    </div>
  );
}

export default Template;
