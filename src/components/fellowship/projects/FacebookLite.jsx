import React from 'react';
import './projects.css';
import Vidisha from '../../../assets/fellowship_members/vidisha.png';

function FacebookLite() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img
                src={Vidisha}
                alt='
              Vidisha Khaitan
              '
              />
              <div className='meta_p'>
                <p className='meta_name'>Vidisha Khaitan</p>
                <p className='meta_date'>Feb 2, 2023</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving the User Experince in Facebook Lite</strong>
          </h1>
          <div className='project_meta_intro'>
            {' '}
            <p>
              For this project, I was a product manager for Facebook Lite,
              Meta’s lightweight version of the Facebook app. To arrive at my
              solution, I conducted user research and interviews, identified
              pain points, and used product management-specific frameworks to
              narrow down a viable opportunity.
            </p>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <article class='text-base text-basicSurface-700'>
            <h2 class='text-xl'>
              <strong>Introducing Facebook Lite</strong>
            </h2>
            <p>
              In 2018, I went on my first solo travel across rural north India.
              After a busride, I found myself crossing a lonely street in the
              dark. I tried to drop my location to a friend but the internet was
              inconsistent and WhatsApp wouldn’t load. That’s when Facebook Lite
              came to my rescue! I was able to update my status on the app to
              let my friends and family know where exactly I was.
            </p>
            <p>
              Meta’s vision is to connect the world. As a woman, immigrant, and
              journalist, I care deeply about providing equal access to
              populations that are often overlooked. I resonate with Facebook
              Lite’s mission to provide the ‘next billion’ with the opportunity
              to access local news, relevant events, and social bonding.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/wcgYCCFPis9En9ddwwOkO?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p>
              Facebook Lite is a lighter version of Facebook for android
              devices. It requires only 5MB for downloading compared to regular
              Facebook’s 50MB - 1GB. It also does not preload the user feed
              saving data, occupying less space, and working well on lower end
              devices with lower RAM and CPU power.
            </p>
            <h2 class='text-xl'>
              <strong>Project Objective</strong>
            </h2>
            <h2 class='text-lg'>
              <strong>Situation</strong>
            </h2>
            <p>
              Facebook Lite uses minimal data with the tradeoff of fewer
              features, and reduced resolution and speed. The app reloads during
              scrolling, and sometimes this causes users to start over. For
              example, if they were in the middle of posting a photo, and the
              feed reloads, then their progress is lost. This results in
              frustration while scrolling and a higher churn rate for the app.
            </p>
            <h2 class='text-lg'>
              <strong>Assumptions</strong>
            </h2>
            <ul class='list-disc list-inside pl-6'>
              <li>
                <p>Users are scrolling the feed.&nbsp;</p>
              </li>
              <li>
                <p>
                  Users are engaging with the app by posting comments, photos,
                  and status updates.
                </p>
              </li>
            </ul>
            <h2 class='text-lg'>
              <strong>Hypothesis</strong>
            </h2>
            <p>
              Facebook can reduce the number of times the user feed reloads by
              managing its content load.
            </p>
            <h2 class='text-lg'>
              <strong>Timeline</strong>
            </h2>
            <ol class='list-decimal list-inside pl-6'>
              <li>
                <p>I am to spend 11.5 hours on this project:</p>
              </li>
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
            </ol>
            <p>&nbsp;</p>
            <h2 class='text-xl'>
              <strong>User Research</strong>
            </h2>
            <h2 class='text-lg'>
              <strong>User Research Insights</strong>
            </h2>
            <p>
              My user research comprises insights from subreddits
              (r/revancedapps, r/android), Google Groups Facebook Lite, Google
              Play app reviews, and six user interviews. These users' pain
              points mainly centered around the lack of a smooth scrolling
              experience unlike the full version of the app. These user
              frustrations will be explored in the following User Persona and
              Opportunity sections.
            </p>
            <h2 class='text-lg'>
              <strong>User Persona</strong>
            </h2>
            <p>
              My user research revealed that users who used Facebook Lite the
              most enjoyed the app’s laser focus on a community bonding
              experience. These users tend to consume lower amounts of internet
              data overall on Android devices in low network areas. They might
              be using 2G data or using WiFi while working from offices or
              cafes. The User Persona below highlights a regular user of
              Facebook Lite.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6'
                data-index='1'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/fDYkbpSn9dpSDeS9HQ7l6?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <h2 class='text-xl'>
              <strong>Opportunity Map</strong>
            </h2>
            <p>
              The Opportunity Map below indicates the various areas that can be
              improved in Facebook Lite.
              <br />
              <br />
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6'
                data-index='2'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/BRWvKVtkz61ZCMzA2NWyc?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p></p>
            <h2 class='text-xl'>
              <strong>Solution</strong>
            </h2>
            <h2 class='text-lg'>
              <strong>Potential Solutions</strong>
            </h2>
            <ol class='list-decimal list-inside pl-6'>
              <li>
                <p>Space with Security</p>
                <ol class='list-decimal list-inside pl-6'>
                  <li>
                    <p>
                      Weed out trolls, fake accounts, bots, and content that
                      does not adhere to Meta’s security rules to maximize space
                      for users.
                    </p>
                  </li>
                  <li>
                    <p>
                      Difficult to implement at a large scale.
                      <br />
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p>Text Images</p>
                <ol class='list-decimal list-inside pl-6'>
                  <li>
                    <p>
                      Identify images that only have text. Categorize them as
                      announcements. Reduce their image quality to make the app
                      lighter and more accessible, while keeping the text
                      clearly legible.
                    </p>
                  </li>
                  <li>
                    <p>
                      User experience of image quality affected only slightly.
                      <br />
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p>Reduce Size</p>
                <ol class='list-decimal list-inside pl-6'>
                  <li>
                    <p>
                      Reduce the size of videos, images, and other content while
                      uploading to make it faster.
                    </p>
                  </li>
                  <li>
                    <p>
                      Already a tradeoff for users, reducing further might
                      affect user experience.
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
            <p>&nbsp;</p>
            <h2 class='text-xl'>
              <strong>Feature Prioritization</strong>
            </h2>
            <p></p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6'
                data-index='3'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/qP0kPdZUzcleMeF10C552?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p></p>
            <p>
              Text Images emerges as the ideal solution based on the KANO Model
              shown above.&nbsp;
            </p>
            <p>
              This feature creates space on the app, reducing the number of
              times the user feed reloads. Interruptions in scrolling and
              unwarranted reloads will be reduced. This will help users make
              posts without interruptions, before users lose interest or run out
              of internet time. This is in line with Meta’s vision to optimize
              user experience while trading off lower resolution for images that
              are only text. This delivers the solution without hampering user
              experience. Thus, user satisfaction is maximized.&nbsp;
            </p>
            <p>&nbsp;</p>
            <h2 class='text-xl'>
              <strong>Value Proposition</strong>
            </h2>
            <p>Catch up with family and friends in just five minutes.</p>
            <p>&nbsp;</p>
            <h2 class='text-xl'>
              <strong>Design</strong>
            </h2>
            <h2 class='text-lg'>
              <strong>Product Requirements</strong>
            </h2>
            <p>
              Based on user interviews, persona development, and Facebook’s
              design language, user requirements are the following:
            </p>
            <ol class='list-decimal list-inside pl-6'>
              <li>
                <p>
                  Users should be aware and have a clear distinction between
                  Text Images and other images. Text Images should be clearly
                  labeled as announcements and show text clearly outside the
                  image along with on the image.&nbsp;
                </p>
              </li>
              <li>
                <p>
                  Users should be flagged while posting a Text Image that it
                  will be catgorised as an announcement.
                </p>
              </li>
              <li>
                <p>
                  Users should be notified of previously posted Text Images
                  being transformed into announcements.
                </p>
              </li>
            </ol>
            <p>&nbsp;</p>
            <h2 class='text-lg'>
              <strong>Visual Mockup</strong>
            </h2>
            <p>&nbsp;</p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:-ml-6 sm:-mr-6'
                data-index='4'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/E7fxnRi3lp72YrddWpaDa?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p>&nbsp;</p>
            <h2 class='text-xl'>
              <strong>Conclusion</strong>
            </h2>
            <h2 class='text-lg'>
              <strong>Risk and Mitigation</strong>
            </h2>
            <p>
              Risk: Inaccurate categorization of images as Text Images could
              lead to user frustration.
            </p>
            <p>
              Mitigation: This can be mitigated by allowing users to flag
              mistakes and correcting the categorization. Meanwhile, updates to
              perfect the code could be pushed out to improve accuracy with
              time.
            </p>
            <h2 class='text-lg'>
              <strong>Looking Forward</strong>
            </h2>
            <p>
              Moving forward, I want to spend more time working on user
              research. This will help me develop a better understanding of user
              needs and address product development.
            </p>
            <h2 class='text-lg'>
              <strong>Reflection and Learnings</strong>
            </h2>
            <p>
              This project allowed me to simulate and perform the role of a
              product manager. I understood the right balance between user
              interviews and data analysis for user research. Creating a
              detailed illustration of a user persona provided coherence to my
              thought process. This helped me narrow down to one recommendation
              in the decision-making phase.&nbsp;
            </p>
            <p>
              I learned how to apply the methodologies that I’ve been studying
              for a long term. It’s cliche to say that “theory is very different
              from practice,” but cliches exist for a reason. With the
              mentorship of industry leaders, my first deep dive into user
              research and design mockups have lent me a peak into my future as
              a product manager in Canada.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default FacebookLite;
