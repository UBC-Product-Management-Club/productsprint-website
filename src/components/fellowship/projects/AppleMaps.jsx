import React from 'react';
import './projects.css';
import Sophia from '../../../assets/fellowship_members/sophia/sophia_bio.png';

function AppleMaps() {
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
          <div className='project_meta_intro'>
            <p>
              In 2021, I had to travel alone from San Francisco to San Jose via
              the metro. This was initially scary and challenging as a
              foreigner. Everything was going smoothly until I got to San Jose
              and stepped out of the station. I realized I had no idea which way
              to turn. I opened Apple Maps on my phone to find the directions
              and discovered there was a new feature. Users who have a
              compatible phone can use the augmented reality (AR) walking
              directions feature to see AR directions through their iPhone
              camera lens. It is as simple as pointing the phone at my
              surroundings and seeing a floating arrow pointing me in the
              direction I needed to walk in. This saved me from the awkwardness
              of spinning around to have my map calibrate my location. Since
              that experience, Apple Maps has been a favourite app of mine as it
              distinguishes itself from its competitors by merging hardware and
              software to assist directionally challenged individuals, like
              me.&nbsp;
            </p>
            <img
              className='projects_img'
              src='https://tribe-s3-production.imgix.net/PpS3sJ1ndIjliRhRR1gZi?w=1000&amp;auto=compress,format&amp;dl'
              alt=''
            />
            <p>
              Apple Maps is Apple’s native mapping app that allows users to
              navigate their surroundings via car, walking, public transit,
              cycling, and ride-hailing. In recent years, its features have been
              upgraded drastically. Most notably, Maps has a smooth UI that
              provides better visibility into one's surroundings such as 3D
              road-level perspective and 3D landmark exploration. These
              additional features push Maps beyond a regular GPS map.
            </p>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <article className='mt-2 text-md text-basicSurface-700'>
            <h1 className='text-lg'>
              <strong>Introducing Apple Maps</strong>
            </h1>
            <h2 className='text-lg'>
              <strong>Project Objective</strong>
            </h2>
            <h3>
              <strong>Situation:</strong>
            </h3>
            <p>
              Apple Maps’ detailed view currently allows you to view the lane
              markings, however, it does not identify which lane is designated
              for high occupancy vehicles (HOV). HOV lanes are considered
              “express lanes” which move vehicles along at a faster frequency as
              the special lanes have minimum requirements. The lack of HOV
              identifiers in Maps can result in inflated commute times for
              drivers.
            </p>
            <h3>
              <strong>Assumptions:</strong>
            </h3>
            <ul className='list-disc list-inside pl-6'>
              <li>
                <p>
                  Users follow Maps’ directions extremely closely and do not
                  attempt to drive in HOV lanes despite being qualified to do
                  so.
                </p>
              </li>
              <li>
                <p>Users are not interested in driving through back alleys.</p>
              </li>
            </ul>
            <h3>
              <strong>Hypothesis:</strong>
            </h3>
            <p>
              Apple can reduce commute times for drivers by including HOV lanes
              in its navigation route calculations.
            </p>
            <h3>
              <strong>Timeline:</strong>
            </h3>
            <p>I am to spend 11.5 hours on this project:</p>
            <ul className='list-disc list-inside pl-6'>
              <li>
                <p>
                  3.5 hours researching users' needs + informational interviews
                </p>
              </li>
              <li>
                <p>2 hours refining the solution</p>
              </li>
              <li>
                <p>4 hours designing the mockup</p>
              </li>
              <li>
                <p>2 hours on the conclusion and additional writing</p>
              </li>
            </ul>
            <p></p>
            <hr />
            <h2 className='text-xl'>
              <strong>User Research</strong>
            </h2>
            <h3 className='text-lg'>
              <strong>User Research Insights</strong>
            </h3>
            <p>
              My user research comprises insights from subreddits (r/applemaps,
              r/iphone), Apple Discussions, MacRumors threads, and seven user
              interviews. These users' pain points mainly centred around Apple
              Maps' inability to allow users to arrive at their destination in
              an efficient manner unlike competitors – namely Google Maps and
              Waze. These user frustrations will be explored in the following
              User Persona and Opportunity sections.
            </p>
            <h3 className='text-lg'>
              <strong>User Persona</strong>
            </h3>
            <p>
              My user research revealed that users who used Apple Maps the most
              were those working in white-collar jobs that required them to
              travel frequently. These users also tend to have more than one
              navigation app on their mobile devices to compare the quickest and
              most accurate route. The User Persona below highlights a regular
              user of Apple Maps.
            </p>
            <figure>
              <div
                className='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='1'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/ZLCejwWyg1Dck6amga9tD?w=1000&amp;auto=compress,format&amp;dl'
                  className='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <h3 className='text-lg'>
              <strong>Opportunity Map</strong>
            </h3>
            <p>
              The Opportunity Map below indicates the various areas that can be
              improved in Apple Maps.
            </p>
            <figure>
              <div
                className='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='2'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/DNaspPvl6q1RiN2Od5ceb?w=1000&amp;auto=compress,format&amp;dl'
                  className='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <hr />
            <h2 className='text-xl'>
              <strong>Solution</strong>
            </h2>
            <h3 className='text-lg'>
              <strong>Potential Solutions</strong>
            </h3>
            <ul className='list-disc list-inside pl-6'>
              <li>
                <p>
                  Crowd-sourced routes: Allow users to submit their discovered
                  'faster' routes that are not currently mapped. Those that gain
                  a significant amount of similar submissions will be added.
                </p>
              </li>
              <li>
                <p>
                  HOV lane routing: Allowing users to choose routes that use HOV
                  lanes if they meet the minimum requirements.
                </p>
              </li>
              <li>
                <p>
                  Changing map services provider: Partnering with a new map
                  services provider to potentially gain increased navigation
                  routes that are timely.
                </p>
              </li>
            </ul>
            <h3 className='text-lg'>
              <strong>Feature Prioritization</strong>
            </h3>
            <figure>
              <div
                className='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='3'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/D4fnKwloLQ46f1JCkAV6q?w=1000&amp;auto=compress,format&amp;dl'
                  className='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p>
              The ideal solution, based on the Kano Model shown, is HOV lane
              routing. This feature can cut down on users' cumulative travel
              time and allow them to regain time in their day. The underlying
              reason for the establishment of HOV lanes (reducing vehicle
              emissions) contributes to Apple's long-term goal of combating
              climate change. This can encourage Apple Maps users to seek
              emission-reducing methods without compromising on travel time.
            </p>
            <h3 className='text-lg'>
              <strong>Value Proposition</strong>
            </h3>
            <p>
              Leave later – <em>without</em> the need to speed.
            </p>
            <hr />
            <h2 className='text-xl'>
              <strong>Design</strong>
            </h2>
            <h3 className='text-lg'>
              <strong>Product Requirements</strong>
            </h3>
            <p>
              Based on user interviews, persona development, and Apple's design
              language, the following user requirements are the following:
            </p>
            <ul className='list-disc list-inside pl-6'>
              <li>
                <p>
                  Users need easy access to toggle HOV lane routing on and off
                  to adhere to driving requirements and personal preferences
                </p>
              </li>
              <li>
                <p>
                  Users should have a clear distinction between selecting HOV
                  optimized routes vs regular routes
                </p>
              </li>
              <li>
                <p>
                  Users need to have a clear distinction when driving on HOV
                  optimized routes vs regular routes to signal they are still on
                  the fastest route
                </p>
              </li>
              <li>
                <p>
                  Users need to be aware of the minimum requirements needed to
                  drive in an HOV lane
                </p>
              </li>
            </ul>
            <h3 className='text-lg'>
              <strong>Visual Mockup</strong>
            </h3>
            <div className='preview relative w-full'>
              <figure>
                <div>
                  <div
                    style={{
                      left: '0px',
                      width: '100%',
                      height: '450px',
                      position: 'relative',
                      paddingBottom: '0px',
                    }}
                  >
                    <iframe
                      src='//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvQO2yipyHQE5M5Gcq9OMN8%2FUBC-PMC%253A-Apple-Maps-Trip-Saver-Mockup&amp;key=29ae8f7432aadad5ca7c91b46030e818'
                      style={{
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        border: '0',
                      }}
                      allowFullScreen=''
                    ></iframe>
                  </div>
                </div>
              </figure>
            </div>
            <p>
              Trade-off with this design: Apple aims for minimalistic designs.
              The two different 'GO' button colours may contrast with their
              design language.
            </p>
            <hr />
            <h2 className='text-xl'>
              <strong>Conclusion</strong>
            </h2>
            <h3 className='text-lg'>
              <strong>Risk and Mitigation</strong>
            </h3>
            <p>
              <em>
                Inaccurate educational screening can leave Apple vulnerable to
                legal risks.
              </em>
            </p>
            <p>
              This can be mitigated by setting up code that crawls for changes
              on government websites that posts the regulations. When changes
              are discovered, an update can be quickly developed and hopefully
              pushed out quickly to users.
            </p>
            <h3 className='text-lg'>
              <strong>Looking Forward</strong>
            </h3>
            <p>
              If I were given more time for this project, I would test out
              competing apps. Waze was mentioned by the users I interviewed as a
              popular alternative as users are able to select HOV routing for
              their navigation needs. By testing the functionality on Waze, I
              can better understand what users may like to experience using this
              feature, and what features Apple can implement that differentiates
              it from its competitor.
            </p>
            <p>
              Additionally, I would love to calculate metrics on how many people
              would benefit from the Trip Saver function. Being able to measure
              the impact can present a stronger case for the implementation of
              this feature.
            </p>
            <h3 className='text-lg'>
              <strong>Learnings</strong>
            </h3>
            <p>
              I learned the importance of asking open questions in user
              interviews. Rather than asking a specific question which could
              lead them to prioritize certain answers, open questions allowed
              interviewees' genuine thoughts to flow freely. As the interview is
              conducted in the early stages of the process, asking appropriate
              questions from the start can reduce potentially having to go back
              and re-interview users, saving costs. Learning how to conduct user
              interviews properly proved to be valuable in discovering that
              educating users is an important part of this feature.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AppleMaps;
