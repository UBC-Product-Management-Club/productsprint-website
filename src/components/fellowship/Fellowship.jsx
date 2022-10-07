import { Link } from 'react-router-dom';

import React from 'react';
import FellowshipVector from '../../assets/fellowship_vector.png';
import Build from '../../assets/build.png';
import Create from '../../assets/create.png';
import Learn from '../../assets/learn.png';
import Connect from '../../assets/connect.png';
import Google from '../../assets/fellowship_program_logos/google.png';
import Microsoft from '../../assets/fellowship_program_logos/microsoft.png';
import Amazon from '../../assets/fellowship_program_logos/amazon.png';
import Shopify from '../../assets/fellowship_program_logos/shopify.png';
import Intuit from '../../assets/fellowship_program_logos/intuit.png';
import Hootsuite from '../../assets/fellowship_program_logos/hootsuite.png';
import Grammarly from '../../assets/fellowship_program_logos/grammarly.png';
import Asana from '../../assets/fellowship_program_logos/asana.png';
import ProductBoard from '../../assets/fellowship_program_logos/productboard.png';
import Unity from '../../assets/fellowship_program_logos/unity.png';
import PrimaryButton from '../shared/buttons/PrimaryButton';

import down_arrow from '../../assets/icons/down-arrow.svg';
import icon_1 from '../../assets/icons/fa-application.svg';
import icon_2 from '../../assets/icons/fa-users.svg';
import icon_3 from '../../assets/icons/fa-magic.svg';
import icon_4 from '../../assets/icons/fa-wrench.svg';
import icon_5 from '../../assets/icons/fa-lightbulb.svg';

import './fellowship.css';

function Fellowship() {
  return (
    <div className='fellowship_container'>
      <div className='container'>
        <div className='information_container'>
          <div className='fellowship_text_container'>
            <p className='fellowship_title'>Fellowship Program</p>
            <p className='fellowship_text'>
              Prepare for product internships by creating a portfolio of 3
              projects covering product design, strategy, and discovery. By
              immersing yourself in this 4-month program, you will learn the
              fundamentals of product management while meeting others on a
              similar path to you.
            </p>
            <Link to='/fellows'>
              <PrimaryButton className='primary'>
                Meet our Fellows
              </PrimaryButton>
            </Link>
            {/* <a href='https://tally.so/r/nPdYY5?src=web_hero'>
              
            </a> */}
          </div>
          <img
            className='fellowship_vector'
            src={FellowshipVector}
            alt='Fellowship img'
          />
        </div>
      </div>
      <div className='perks_container'>
        <p className='title'>PROGRAM PERKS</p>
        <div className='perks_display'>
          <div className='perks_display_subcontainer'>
            <img src={Build} alt='Build' />
            <p className='perks_subtitle'>Build Product Skills</p>
            <p className='perks_text'>
              Learn from curated resources and put new skills into practice
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Create} alt='Create' />
            <p className='perks_subtitle'>Create a Portfolio</p>
            <p className='perks_text'>
              Develop 3 projects for your profile on this website
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Learn} alt='Learn' />
            <p className='perks_subtitle'>Learn from Mentors</p>
            <p className='perks_text'>
              Receive feedback on your work from industry PMs
            </p>
          </div>
          <div className='perks_display_subcontainer'>
            <img src={Connect} alt='Connect' />
            <p className='perks_subtitle'>Meet Others</p>
            <p className='perks_text'>
              Make friends and connections for life with other fellows
            </p>
          </div>
        </div>
      </div>

      <div id='timeline' class='timeline section'>
        <div class='info'>
          <h2>What to Expect</h2>
        </div>

        <div class='phase' id='application-interview'>
          <div class='phase-left'>
            <div class='phase-icon'>
              <img src={icon_1} />
            </div>
            <div class='phase-arrow'>
              <img src={down_arrow} />
            </div>
          </div>
          <div class='phase-text'>
            <div class='phase-title'>
              <h3>Application &amp; Interview</h3>
            </div>
            <div class='phase-date'>Apply by Sept 12 at 11:59 PM</div>
            <div class='phase-description'>
              <p>
                Share your interest in product management and your commitment to
                the fellowship program.
              </p>
            </div>
          </div>
        </div>

        <div class='phase' id='program-launch'>
          <div class='phase-left'>
            <div class='phase-icon'>
              <img src={icon_2} />
            </div>
            <div class='phase-arrow'>
              <img src={down_arrow} />
            </div>
          </div>
          <div class='phase-text'>
            <div class='phase-title'>
              <h3>Program Launch</h3>
            </div>
            <div class='phase-date'>Sept 18: In-person &amp; Online</div>
            <div class='phase-description'>
              <p>
                Meet others and learn about the process you will embark on
                through a real case study from a Senior PM at Shopify.
              </p>
            </div>
          </div>
        </div>

        <div class='phase' id='phase-1'>
          <div class='phase-left'>
            <div class='phase-icon'>
              <img src={icon_3} />
            </div>
            <div class='phase-arrow'>
              <img src={down_arrow} />
            </div>
          </div>
          <div class='phase-text'>
            <div class='phase-title'>
              <h3>Product Sense &amp; Design</h3>
            </div>
            <div class='phase-date'>Case 1: improve your favourite product</div>
            <div class='phase-description'>
              <p>
                Design a new feature for your favourite software product by
                incorporating design and prioritization methods.
              </p>
            </div>
          </div>
        </div>

        <div class='phase' id='phase-2'>
          <div class='phase-left'>
            <div class='phase-icon'>
              <img src={icon_4} />
            </div>
            <div class='phase-arrow'>
              <img src={down_arrow} />
            </div>
          </div>
          <div class='phase-text'>
            <div class='phase-title'>
              <h3>Product Strategy &amp; Execution</h3>
            </div>
            <div class='phase-date'>
              Case 2: repurpose a product for a new market
            </div>
            <div class='phase-description'>
              <p>
                Create the strategy to bring a product to a new market by
                planning for implementation, considering the roadmap &amp; risks
                involved.
              </p>
            </div>
          </div>
        </div>

        <div class='phase' id='phase-3'>
          <div class='phase-left'>
            <div class='phase-icon'>
              <img src={icon_5} />
            </div>
            <div class='phase-arrow'>
              <img class='hidden-arrow' src={down_arrow} />
            </div>
          </div>
          <div class='phase-text'>
            <div class='phase-title'>
              <h3>Product Discovery</h3>
            </div>
            <div class='phase-date'>
              Case 3: disrupt an existing market with your idea
            </div>
            <div class='phase-description'>
              <p>
                Validate a new product idea through intensive research, then
                pitch your first MVP to disrupt an existing market.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='past_mentors'>
        <p className='title'>PAST MENTORS HAVE WORKED AT</p>
        <div className='fellowship_company_logos'>
          <img src={Google} alt='' />
          <img src={Microsoft} alt='' />
          <img src={Amazon} alt='' />
          <img src={Shopify} alt='' />
          <img src={Intuit} alt='' />
          <img src={Hootsuite} alt='' />
          <img src={Grammarly} alt='' />
          <img src={Asana} alt='' />
          <img src={ProductBoard} alt='' />
          <img src={Unity} alt='' />
        </div>
      </div>
      <div className='fellowship_footer_signup'>
        <p>
          Learn the skills it takes to be a product manager while building your
          portfolio to break into the industry.
        </p>
        <Link to='/fellows'>
          <PrimaryButton className='primary'>Meet our Fellows</PrimaryButton>
        </Link>
        {/* <a href='https://tally.so/r/nPdYY5?src=web_footer'></a> */}
      </div>
    </div>
  );
}

export default Fellowship;
