import React from 'react';
import './projects.css';
import Armando from '../../../assets/fellowship_members/armando.png';

function FlexibilityGoogleMaps() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img
                src={Armando}
                alt='
              Armando
              '
              />
              <div className='meta_p'>
                <p className='meta_name'>Armando Rocha</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Inclusion and flexibility with Google Maps</strong>
          </h1>
          <div className='project_meta_intro'>
            {' '}
            <p>
              In this project, I took the role of a Product Manager at Google to
              improve Google Maps in terms of inclusion and flexibility for its
              users. Join me throughout this post to know my findings and
              proposal to improve one of the world's most used
              applications/platforms.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/Z8eW5iZm9HO1tbT11eoAE?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p></p>
            <p>
              Since I arrived as an international student in Canada 🍁, Google
              Maps has become my favorite product, compass, and best friend
              <em>(since I also fight with it a lot)</em>. However, if you have
              never used Google Maps ... I don't believe you 🤔{' '}
              <em>(#SorryNotSorry)</em> since Google Maps 🗺️ was founded in 2005
              🗓️ and today is used by more than 1 billion people 🌎 every month.
            </p>
            <figure>
              <div class='video_container aspect-video -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'>
                {/* <div style='width: 100%; height: 100%'> */}
                <div class='vsc-controller'></div>
                {/* <video
                  src='https://files-us-east-1.t-cdn.net/files/NTMauYBin7kI2PMQPwvYk'
                  preload='auto'
                  controls=''
                  style='width: 100%; height: 100%'
                ></video> */}
                <video
                  controls
                  preload='auto'
                  style={({ width: '100%' }, { height: '100%' })}
                >
                  <source src='https://files-us-east-1.t-cdn.net/files/NTMauYBin7kI2PMQPwvYk' />
                </video>
                {/* </div> */}
              </div>
            </figure>
            <p>
              <strong>Google Maps</strong> is a web mapping platform and
              consumer application offered by Google. It provides satellite 🛰️
              imagery, aerial photography, street maps 🗺️, 360° interactive
              <a
                class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
                target='_blank'
                rel='noopener noreferrer nofollow ugc'
                to='https://en.wikipedia.org/wiki/Interactive_panorama'
                href='https://en.wikipedia.org/wiki/Interactive_panorama'
              ></a>
              panoramic views of streets (Street View), real-time traffic 🚗 🚕
              🚜 🏎️ conditions, and route
              <a
                class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
                target='_blank'
                rel='noopener noreferrer nofollow ugc'
                to='https://en.wikipedia.org/wiki/Route_planner'
                href='https://en.wikipedia.org/wiki/Route_planner'
              ></a>
              planning for traveling by foot 👣, car🚙, bike🚲 , air🛩️ , and
              public transportation🚌 (Wikipedia, 2022).
            </p>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-xl'>
            <strong>PROJECT PROPOSAL</strong>
          </h2>

          <h3 class='text-lg'>
            <strong>Problem Identification</strong>
          </h3>
          <p>
            Google maps is undoubtedly an application that I use almost every
            day ☀️ and night 🌙 to get around by public transport. I mainly use
            it to know the correct route 🚷 and public transportation schedules
            🕝 for my destination.
          </p>
          <p>
            However, not all that glitters is gold🔆 . Google Maps has several
            areas of opportunity 👎 that I list below:
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Considers all people equally and assumes that we all arrive
                walking at a certain average pace which ... no one knows what it
                is🚷.
              </p>
            </li>
            <li>
              <p>
                It doesn't consider whether people walk faster🏃‍♀️, are in
                wheelchairs👨‍🦽👨‍🦼, or will arrive at the stop by bike 🚴‍♂️ at a
                faster speed.
              </p>
            </li>
            <li>
              <p>
                Doesn't consider that if you are in a hurry, you can run and get
                to the bus stop in a shorter time😅 .
              </p>
            </li>
            <li>
              <p>
                Doesn't consider if you have children 👨‍👧‍👧 and it will take you
                longer.
              </p>
            </li>
            <li>
              <p>
                Does not consider that you can cross parks 🌱 or certain areas
                through the "hypotenuse" 📐 and save time.
              </p>
            </li>
            <li>
              <p>
                The bus is almost always late or early ⏳. Info in real life is
                not available everywhere.
              </p>
            </li>
            <li>
              <p>Among others...</p>
            </li>
          </ul>
          <p>
            This is why I have a plan to improve Google Maps and its interface
            so that users with specific needs can use it without doing
            additional calculations in their minds.
          </p>
          <h3 class='text-lg'>
            <strong>Execution Plan</strong>
          </h3>
          <p>My plan consists of several stages:</p>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Exploration</u>
                </em>
                🔎
              </p>
            </li>
          </ol>
          <p>
            First, none of this should be valid until I do the necessary
            research (primary 1️⃣ and secondary 2️⃣ ) to understand if my
            situation is familiar to others.
          </p>
          <ol start='2' class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Validation </u>
                </em>
                ✅
              </p>
            </li>
          </ol>
          <p>
            Validate the needs and outcomes using opportunity scores; understand
            the solution's importance 💡 and current satisfaction.
          </p>
          <ol start='3' class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Design </u>
                </em>
                🎨
              </p>
            </li>
          </ol>
          <p>
            Think about the look and feel 💘 of the solution to be attractive 🥰
            to users.
          </p>
          <ol start='4' class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Prototype </u>
                </em>
                📲
              </p>
            </li>
          </ol>
          <p>Make a mockup of the solution to show to potential users📶.</p>
          <ol start='5' class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Test </u>
                </em>
                💯
              </p>
            </li>
          </ol>
          <p>Test ... 📝 iterate ♾️ ... and test again the prototype</p>
          <ol start='6' class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <em>
                  <u>Launch </u>
                </em>
                🚀
              </p>
            </li>
          </ol>
          <p>
            After the necessary tests and validations of the acceptance of the
            solution, we will proceed🤞 with the go-to-market plan to update the
            app. I'll devote 3-4 hours to tackling these steps weekly.
          </p>
          <h3 class='text-lg'>
            <strong>Assumptions</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>Users face the same challenges 🧩 I do</p>
            </li>
            <li>
              <p>
                Users with disabilities have to calculate 🧮 their own times to
                get to the bus stop since there's no "rolling" 🦽 mode.
              </p>
            </li>
            <li>
              <p>
                People use Google Maps as their favorite app to move from point
                A 🔜 to point B 🔄
              </p>
            </li>
            <li>
              <p>
                People don't know how the walking time is calculated and prefer
                having the option to adjust it manually 🔧
              </p>
            </li>
          </ul>
          <hr />
          <h2 class='text-xl'>
            <strong>USER RESEARCH</strong>
          </h2>
          <h3 class='text-lg'>
            <strong>Research Insights</strong>
          </h3>
          <p>
            After interviewing 5+ people, it became clear that everyone
            knows/uses Google Maps frequently and is aware of some of the
            problems I had as a hypothesis. I will mention some of the ones that
            were reinforced below:
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                People perceive that buses are always early or late; rarely on
                time. Their scale of trust in the ETA is around 8 out of 10.
              </p>
            </li>
            <li>
              <p>
                Most people consider a buffer (+-3mins) to the time Google Maps
                specify.
              </p>
            </li>
            <li>
              <p>
                Some people would prefer to have a better UX within the app.
              </p>
            </li>
            <li>
              <p>
                People believe they walk faster than the average time Google
                Maps consider for their algorithm.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>
            <strong>User Persona</strong>
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/PhSPG9wBV5q0GiOIlqSbp?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>
            <strong>Opportunity Map</strong>
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/3HM5GDrO7SSUqC6jQ42uI?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            For example, some of the information gathered is that Google Maps
            assumes that an average human walks at ~4.5km/hour or ~3 miles/hour.
            This is important to validate my hypothesis that Google considers
            everyone walks at the same speed, and it can't be manually adjusted.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>POTENTIAL SOLUTION</strong>
          </h2>
          <h3 class='text-lg'>
            <strong>Solution Ideation</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                A device installed on the buses to synchronize precisely with
                Google Maps{' '}
                <em>
                  (<u>Synchronization Device</u>)
                </em>
              </p>
            </li>
            <li>
              <p>
                Algorithm to use Google Maps location in every mobile device to
                identify if they are on the bus to predict ETA times for the
                next stops
                <em>
                  (<u>Geolocation Algorithm</u>)
                </em>
              </p>
            </li>
            <li>
              <p>
                New feature to adjust the speed of
                walking/biking/wheelchair/etc. (
                <em>
                  <u>Speed Personalization</u>
                </em>
                )
              </p>
            </li>
            <li>
              <p>
                Further options to combine methods of transportation like
                bike-bus-bike
                <em>
                  <u>(Transportation Combination</u>).
                </em>
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>
            <strong>Feature Prioritization</strong>
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/9L39d3X0Djr5iScgS6duL?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>
            <strong>Value Proposition</strong>
          </h3>
          <p>
            Speed personalization will allow users to simply, quickly, and
            realistically calculate the estimated transport time according to
            their needs.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>DESIGN PHASE</strong>
          </h2>
          <h3 class='text-lg'>
            <strong>Product Requirements</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Users should be able to decide if they believe they will take
                longer or vice-versa to arrive at the bus/train stop.
              </p>
            </li>
            <li>
              <p>
                Users should be able to select how they arrive at the bus stop
                <em>(walking slow, walking fast, by wheelchair.)</em>
              </p>
            </li>
            <li>
              <p>
                Users should be able to save this preference the next time they
                use the platform.
              </p>
            </li>
            <li>
              <p>
                Users should be able to identify when the bus is running
                late/early clearly.
              </p>
            </li>
            <li>
              <p>
                Users should be able to see the changes in the arrival time due
                to transportation being late/early.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>
            <strong>Visual Mockup</strong>
          </h3>
          <p>Current view of the map and setting options:</p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/eI0z5K4sQC4hYWQyeNhCA?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Next, a proposed view with an adjustment in the setting options
            where people will be able to choose their desired speed or current
            method of arriving at the bus/train station:
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/PZd0yDBSnh2Cxqwb0b77x?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Finally, after selecting the desired option, the system will
            recalculate and show you the real-time, correct bus, and ETA to
            point B:
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='6'
            >
              <img
                src='https://tribe-s3-production.imgix.net/fg4idpJ4h8eIXDWq3UcwD?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            I am taking into account that the system will save the desired
            option for next time, so the user will have to edit in case they
            need to.
          </p>
          <hr />
          <h2 class='text-xl'>CONCLUSION</h2>
          <p>
            Undoubtedly, this fast-paced project experience was very valuable.
            During this past month, I got the opportunity to look for an
            improvement feature for Google Maps. Thanks to the materials
            provided, the support of the team, and the guidance of the mentors,
            I can say that I feel more confident about what it takes to get a
            job interview in a big-tech company and have the certainty of having
            a great example of hard work where I apply what a PM does on a "day
            to day" basis.
          </p>
          <h3 class='text-lg'>
            <strong>Risks </strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                The most significant risk I identify is not having sufficiently
                validated the problem by having, in my opinion, a low number of
                interviews with users. No doubt, the way to mitigate this is to
                keep listening to customers, but above all, to listen to the
                right customers who will use the new feature.
              </p>
            </li>
            <li>
              <p>
                Another risk I identify is that it can be confusing to access
                this functionality's configuration. This is mitigated with
                "simple" communication, but it is important not to assume that
                people will remember or use it, which can be a nuisance.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>
            <strong>Next Steps</strong>
          </h3>
          <p>If I had more time:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                I would interview more people with disabilities, older people,
                and people who walk faster/slower than the average population. I
                would ask such people how important it is for them to have an
                option to modify their speed to get more accurate times. And how
                satisfied are they with the current timing provided by the
                application?
              </p>
            </li>
            <li>
              <p>
                I would generate a high-fidelity prototype to do a proof of
                concept with people on the street and get feedback on the UX and
                ease of use.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>
            <strong>Lessons Learned</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                There are always areas for improvement, even for big-tech
                companies like Google.
              </p>
            </li>
            <li>
              <p>Listening to customers is the most essential phase.</p>
            </li>
            <li>
              <p>
                Having a diverse team and a mentor is crucial to challenge
                yourself and bring more clarity to your ideas.
              </p>
            </li>
            <li>
              <p>Product Management is the place to be 😜.</p>
            </li>
          </ul>
          <p>THANK YOU!</p>
          <p>
            <strong>Armando Rocha </strong>
            <em>(</em>
            <a
              class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
              target='_blank'
              rel='noopener noreferrer nofollow ugc'
              to='https://www.linkedin.com/in/armandorochac/'
              href='https://www.linkedin.com/in/armandorochac/'
            >
              <em>https://www.linkedin.com/in/armandorochac/</em>
            </a>
            <em>)</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlexibilityGoogleMaps;
