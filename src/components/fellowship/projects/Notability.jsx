import React from 'react';
import './projects.css';
import Oceanna from '../../../assets/fellowship_members/oceanna.jpeg';

function Notability() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Oceanna} alt='Oceanna' />
              <div className='meta_p'>
                <p className='meta_name'>Oceanna Nguyen</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Notability</strong>
          </h1>
          <div className='project_meta_intro'>
            <p></p>
            <p>
              For this project, I was a PM for Notability, a note-taking
              software. I conducted user research, identified pain points, and
              used PM frameworks to develop a solution to improve the user
              experience.
            </p>
            <hr />
            <h2 class='text-xl'>
              <strong>Introducing my Favorite Product</strong>
            </h2>
            <p>
              When I first started university, I decided to buy an iPad and
              Apple Pen to try and set myself up for success. I also wanted to
              splurge on a note-taking app. I was able to narrow down my choices
              since the note-taking software market was an oligopoly. I didn’t
              want anything too fancy, I just needed to be able to annotate on
              pdfs and write my notes. I ended up downloading Notability, and I
              haven't looked back since.
            </p>
            <p></p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/m5g5zsoTbSDmXL7TX7eYs?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <p>
            <strong>Why Notability is Superior</strong>
          </p>
          <p>
            Notability is superior for students who want to write and organize
            their school notes in one app. It has simple and unique features
            that allow for convenience and efficiency.
          </p>
          <p>
            <em>Easy to use</em>
          </p>
          <p>
            Notability is simple because it has everything you need. I found
            that its competitors had too many drawing tools and features that
            overwhelmed me, and I knew I would never care to use them anyway.
          </p>
          <p>
            <em>Recording feature</em>
          </p>
          <p>
            It also has a recording option, which is unique to Notability as its
            competitors do not have this. When I felt overwhelmed with content
            during class, I simply hit record as my professor was speaking and
            annotated along the way. After class, I’m able to press play and
            watch my notes in real time. I can then add any parts of the lecture
            I missed.
          </p>
          <h2 class='text-xl'>
            <strong>Project Objective</strong>
          </h2>
          <p>
            <strong>Situation:</strong>
          </p>
          <p>
            Notability allows you to import PDFs, allowing the user to command F
            keywords and find important topics quickly. This is great for
            students who are usually always trying to buy more time. Professors
            often release their lectures in a pdf format ahead of time and
            textbooks are cheaper (or free) online. The education world is
            digitizing, and students need to keep up. Notability is great for
            high school and university students. Both groups want convenience
            and efficiency while still being able to digest information.
          </p>
          <p>
            <strong>Improving:</strong>
          </p>
          <p>
            Notability's major point of difference is its recording feature.
            None of its competitors have that, and based on Reddit forums I
            learned that this feature alone is why people have purchased
            Notability.
          </p>
          <p>
            However, the way students learn and retain information is different
            for all. Therefore, listening to a recording after class may not be
            the most helpful way to catch up as this can be timely and
            ineffective for a visual learner.
          </p>
          <p>
            <br />
            <strong>Assumptions</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Visual reading components help students learn and retain
                information
              </p>
            </li>
            <li>
              <p>AI will create transcripts that are at least 80% correct</p>
            </li>
            <li>
              <p>
                Students have enough time to record an entire lecture/parts of a
                lecture
              </p>
            </li>
          </ul>
          <p>
            <strong>Hypothesis</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Notability can
                <strong>
                  scale its point of difference and increase active users{' '}
                </strong>
                by adding video transcripts of recordings
              </p>
            </li>
            <li>
              <p>
                Resulting in a more attractive feature, catering to all diverse
                learning styles, and saving students time and energy of
                listening to an entire lecture
              </p>
            </li>
          </ul>
          <p>
            <strong>Timeline</strong>
          </p>
          <p>I plan to spend 13 hours on this project:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                2 hours researching users' needs + informational interviews as
                necessary
              </p>
            </li>
            <li>
              <p>2 hours developing a solution/ upfront validation on need</p>
            </li>
            <li>
              <p>2 hours on the usability of wireframe</p>
            </li>
            <li>
              <p>3 hours wireframing</p>
            </li>
            <li>
              <p>2 hours on the conclusion and additional writing</p>
            </li>
            <li>
              <p>2 hours of editing and rewriting</p>
            </li>
          </ul>
          <h2 class='text-xl'>
            <strong>User Research</strong>
          </h2>
          <h2 class='text-xl'>
            <strong>Research Insights</strong>
          </h2>
          <p>
            By interviewing five Notability users and conducting online research
            through multiple Reddit threads (r/notabilityapp, r/ipad), there
            were many issues of all sizes.
          </p>
          <p>
            80% of interviewees have felt they have missed lecture material in
            their notes, ultimately negatively affecting their grades
          </p>
          <p>
            80% of interviewees said that the feature that drew them to
            Notability in the first place was the ability to record lectures.
          </p>
          <p>
            100% of interviewees considered themselves visual learners, meaning
            they retain information better when they can read something in front
            of them
          </p>
          <p></p>
          <h2 class='text-xl'>
            <strong>User Persona</strong>
          </h2>
          <p>
            With user research, I found that students (primarily postgraduates)
            are the primary segment I want to address.
          </p>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/xzxeV7IBrEV5ShOo8dR4m?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-xl'>
            <strong>Opportunity Map</strong>
          </h2>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/2GI4EpDIe2tyw6dhA35ly?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Summary</strong>
          </p>
          <p>
            There are many desires from Notability customers considering how
            many hours they spend on it. However, my user research helped me
            determine pain points that will help me create the most impact.
            Students should feel confident they are capturing all the lecture
            content with Notability.
          </p>
          <h2 class='text-xl'>
            <strong>Notability</strong>
            <a
              class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
              href='/curriculum/1-3/post/notability-solution-6WqGgZZhrxDOJ7O'
            >
              <strong> </strong>
            </a>
            <strong>Solution</strong>
          </h2>
          <p>
            <strong>Solutions</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Collaboration feature allows users to annotate on the same note
                simultaneously and work together through content
              </p>
            </li>
            <li>
              <p>
                Create a deeper nest for organization/ change tabs to folders
              </p>
            </li>
            <li>
              <p>Provide a transcript of audio recordings</p>
            </li>
          </ul>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/Yg3te8uQl0OhPUw0A7OEs?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Value Prop statement</strong>
          </p>
          <p>
            Notability's transcription of audio recording helps busy students
            who want to cut time and increase productivity by reducing study
            time and allowing students to capture all details from a lecture,
            unlike Goodnotes which does not have an audio recording in the first
            place.
          </p>
          <h2 class='text-xl'>
            <strong>New Notability Design</strong>
          </h2>
          <p>
            <strong>Product Requirements</strong>
          </p>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>Users can get an accurate transcription of their audio</p>
            </li>
            <li>
              <p>
                Users can read the transcript while having their notes open so
                they can add details, cross reference, fact check, etc.
              </p>
            </li>
            <li>
              <p>
                Users can still sort through notes while having the transcript
                so they can easily flip (doesn't take up too much space or
                impede other features)
              </p>
            </li>
            <li>
              <p>
                Users can choose if they want to turn captions on if they need
                more room to sort through notes on the sidebar
              </p>
              <p></p>
              <p>
                <strong>Visual Mockup</strong>
              </p>
              <figure>
                <div
                  class='flex items-center mt-5 ignore-typography justify-center bg-surface-100'
                  data-index='4'
                >
                  <img
                    src='https://tribe-s3-production.imgix.net/Xxf8iK1DSkIn77mODgX9k?w=1000&amp;auto=compress,format&amp;dl'
                    class='cursor-pointer max-h-120'
                    alt=''
                  />
                </div>
              </figure>
            </li>
          </ol>
          <p>
            <strong>Trade-offs:</strong> Users have less space to see an
            overview of notes when reading captions. The caption box is small so
            it will scroll, which may be annoying to some since they have to
            scroll up and down. Also, less space on the actual note itself
            because I had to make the sidebar wider.
          </p>
          <h2 class='text-xl'>
            <strong>Conclusion</strong>
          </h2>
          <p>
            <strong>Risks</strong>
          </p>
          <p>
            A major risk would be not having an accurate transcript, which is
            extremely frustrating for the user experience. There are two ways to
            help mitigate this, externally and internally.
          </p>
          <p>
            <em>Internally</em>
          </p>
          <p>
            Instead of developing transcription software in-house, buy quality
            premade to integrate with current software.
          </p>
          <p>
            <em>Externally</em>
          </p>
          <p>
            Educate users on the quality of the audio recording (Ex. try to get
            as close as possible, don't cover the mic, etc.) This can be shown
            in the "Settings" portion or as a pop-up window.
          </p>
          <p>
            <strong>Reflection</strong>
          </p>
          <p>
            If I had more time, I would talk to SWEs to further explore the
            feasibility. Also, I would explore my other solution (collaboration
            feature) more by doing more user research and more meetings with
            SWEs.
          </p>
          <p>
            From this project, I learned how much responsibility a PM has. I
            found that I wanted to jump right into a solution, just going off on
            my own assumptions. PMs don't necessarily just build solutions, they
            first have to understand and identify needs, pain points, and
            opportunities. The people around you may all want different things
            but at the end of the day, it's your user who is always right. A PM
            has to prioritize what their user finds the most impactful, not what
            their team thinks. I realized how important it is to use empathy to
            truly step into the user's shoes and try to understand them because
            once you have an understanding you have a purpose and drive to get
            to the right solution.
          </p>
          <p>
            Once you understand this, you have to sell it. Convince your
            stakeholders why its a problem, why we're solving this, and how this
            will impact both the user AND the business. These are important
            aspects of sealing the deal!
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Notability;
