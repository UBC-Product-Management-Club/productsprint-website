import React from 'react';
import './projects.css';
import Ashkan from '../../../assets/fellowship_members/ashkan.jpeg';

function LinkedIn() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Ashkan} alt='Ashkan' />
              <div className='meta_p'>
                <p className='meta_name'>Ashkan Gharahgozli</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving LinkedIn Jobs</strong>
          </h1>
          <div className='project_meta_intro'></div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-lg'>
            <strong>Introducing LinkedIn Jobs</strong>
          </h2>
          <p>
            One of the favourite software products that I frequently use is
            LinkedIn. I love the platform because it has allowed me to meet and
            connect with many brilliant individuals. But not every software
            comes without flaws, and I can see the platform growing and serving
            its purpose in many areas. For example, through my job search, I
            realized that the application section does not update user
            application status, and I find that to be discouraging for
            applicants desperately looking for opportunities. The job category
            only includes a section for the jobs applied but does not let the
            user know where in the application process they are.
          </p>
          <p>
            Another aspect that I see the platform improving is its subscription
            features provided explicitly to users who are looking for jobs and
            want their profiles to be in priority—adding a job-seeking
            subscription model with the features mentioned below that target
            users looking for jobs and needing specific
            accommodations.&nbsp;&nbsp;
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='0'
            >
              <img
                src='https://tribe-s3-production.imgix.net/HU5q8Ls9yGTPajDvYVBnM?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-lg'>
            <strong>Hypothesis</strong>
          </h2>
          <p>
            LinkedIn can increase user engagement and usability of their job
            search feature by allowing users to track and manage each stage of
            their job application.
          </p>
          <h2 class='text-lg'>
            <strong>Assumptions</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Job-seekers tend to receive more feedback and have a higher
                chance of acquiring a job if they have online/hybrid
                interactions with their recruiter.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Job-seekers feel more engaged and motivated to apply for jobs
                when they receive personalized feedback and understand what
                level of knowledge their recruiters expect.&nbsp;
              </p>
            </li>
            <li>
              <p>
                LinkedIn would increase its user engagement and revenue model by
                introducing new features and subscription models to cater to how
                job-seekers engage with their platform to find job
                opportunities.&nbsp;
              </p>
            </li>
          </ul>
          <h2 class='text-lg'>
            <strong>Key Features</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Matching and recommending applicants based on their profiles
                with potential hiring recruiters looking for qualified
                candidates.
              </p>
            </li>
            <li>
              <p>
                Allowing applicants to connect with hiring recruiters through a
                specialized messaging system. This feature will give applicants
                access to necessary information about the type of applicants
                recruiters are looking for and what level of knowledge is
                expected through the interviewing process. (I.e. a set of
                role-related questions and information would be available to
                users before interviewing process for further preparation).
              </p>
            </li>
          </ul>
          <h2 class='text-lg'>Separate User Dashboard</h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Adding a section where users can connect to specific top
                priority recruiters for hiring and interviewing.
              </p>
            </li>
            <li>
              <p>
                Include high-priority hirings and top-ranked recruiters based on
                their message responsiveness count or overall non-anonymous past
                reviews on their interview process. (I.e. reviewing feature only
                allows applicants who have acquired a job from the corresponding
                recruiter to leave a review. The reviews section would use
                language filtering to avoid unprofessional writing/behaviour).
              </p>
            </li>
          </ul>
          <h2 class='text-lg'>
            <strong>Objective</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Research and brainstorm a solution using different products
                available in the current market.
              </p>
            </li>
            <li>
              <p>
                Survey users to find out if the product is viable and solves the
                main challenges of LinkedIn job-seekers.&nbsp;
              </p>
            </li>
            <li>
              <p>Develop an early prototype of the feature using Figma.</p>
            </li>
          </ul>
          <h2 class='text-lg'>
            <strong>Potential Challenges</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                &nbsp;Some recruiters might not be willing to share their
                interview processes and specifications with the public.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Recruiters might use other platforms to filter applicants'
                resumes and cover letters automatically.
              </p>
            </li>
          </ul>
          <h2 class='text-lg'>
            <strong>Timeline</strong>
          </h2>
          <p>I aim to spend 12 hours in total on this product feature:&nbsp;</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>2 hours brainstorming and researching user needs</p>
            </li>
            <li>
              <p>
                3 hours in constructing user personas, product user flow,
                executive summary
              </p>
            </li>
            <li>
              <p>&nbsp;4 hours of wireframing and building a prototype</p>
            </li>
            <li>
              <p>3 hours of user interviews and additional writing</p>
            </li>
          </ul>
          <p>
            My next steps are to study the potential challenges recruiters face
            using LinkedIn compared to other platforms and optimize the
            recruiters' side of features and dashboards.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>User Research</strong>
          </h2>
          <h2 class='text-lg'>
            <strong>Research Overview</strong>
          </h2>
          <p>
            After reading many articles and Reddit threads<strong> </strong>on
            LinkedIn users who have had no luck securing the jobs they have
            applied for, it became clear that LinkedIn job-seeker shares the
            same distaste towards their ignored messages and time-consuming
            over-looked applications.&nbsp;&nbsp;
          </p>
          <p>
            Here are a few examples of how users are experiencing job searching
            using LinkedIn:&nbsp;
          </p>
          <blockquote>
            <p>
              "Ghosted by recruiter. Is it okay to go straight to the hiring
              manager on LinkedIn? [...] He's since viewed my LinkedIn profile
              but no reply yet." (u/dibs45)
            </p>
            <p>
              "I feel you, I've easily applied to hundreds of applications since
              graduating from my school, also in a digital art field. I don't
              think I've gotten a single interview off of LinkedIn, whenever I
              get interviews it's usually from places I've applied to outside
              LinkedIn." (
              <a
                class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
                target='_blank'
                rel='noopener noreferrer nofollow ugc'
                to='https://www.reddit.com/user/Fenelasa/'
                href='https://www.reddit.com/user/Fenelasa/'
              >
                Fenelasa
              </a>
              )
            </p>
          </blockquote>
          <blockquote>
            <p>
              "LinkedIn Job Scam [...] I think I got scammed by a recruiter?" (
              <a
                class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
                target='_blank'
                rel='noopener noreferrer nofollow ugc'
                to='https://www.reddit.com/user/FloraN9797/'
                href='https://www.reddit.com/user/FloraN9797/'
              >
                u/FloraN9797
              </a>
              )
            </p>
          </blockquote>
          <blockquote>
            <p>
              "I applied to 500+ applications on LinkedIn and got no response.
              Is that ok? [...] I tried Easy Apply, applying through the company
              website, contacting the recruiters directly, writing on company
              email." (
              <a
                class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
                target='_blank'
                rel='noopener noreferrer nofollow ugc'
                to='https://www.reddit.com/user/fauhrenheit/'
                href='https://www.reddit.com/user/fauhrenheit/'
              >
                u/fauhrenhei
              </a>
              )
            </p>
          </blockquote>
          <p>
            During my research, it was crucial to differentiate applicant skill
            levels to understand better if this issue still exists in more
            senior-level applicants. LinkedIn has a variety of users that use
            and engage with the platform and online communities for different
            purposes. Thus, I focused on researching the pain points of junior
            to senior-level undergraduates and graduates looking for internships
            and part-time/full-time job opportunities using the LinkedIn job
            application tool.&nbsp;
          </p>
          <p>
            Through extensive secondary research and conducting multiple user
            interviews with my target users, it became clear that LinkedIn's job
            application tracking and messaging services require optimization.
            More on this in the Solution phase.
          </p>
          <h2 class='text-lg'>
            <strong>User Persona</strong>
          </h2>
          <p>
            I have focused on interviewing the job-seeker/applicant side of the
            LinkedIn job search feature. In addition, I targeted undergraduate
            and graduate student experiences using the platform. These users
            typically look for internships and or full-time opportunities all
            year round.
          </p>
          <p>
            My user research revealed that my targeted user primarily uses
            LinkedIn as a secondary resource for exploring job opportunities.
            These users use the platform more for networking purposes with
            recruiters and others in interested companies. The User Persona
            below highlights a graduate student with prior work experience using
            the app for job search purposes.&nbsp;
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/RL9V0c1rdF56tLe1cPT6C?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-lg'>
            <strong>Opportunity Map</strong>
          </h2>
          <p>
            The Opportunity Map below shows potential areas where LinkedIn can
            further improve their job searching features.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/s5IaSroUSOGcNe2bU2HDc?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-lg'>
            <strong>Findings</strong>
          </h2>
          <p>
            There are three main opportunities identified through my secondary
            and primary user research. Application tracking and responsiveness
            are one of the most common pain points that affect users. Thus I
            will focus on optimizing the application tracking system as the
            first part of my project.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Solution</strong>
          </h2>
          <h2 class='text-lg'>
            <strong>Potential Features</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                <strong>Track In-progress Job Applications:</strong>
              </p>
            </li>
          </ul>
          <p>
            Allow users to see where they are in the application process of the
            desired role on the job search dashboard menu.&nbsp;
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                <strong>Real-time Application Status Update:</strong>
              </p>
            </li>
          </ul>
          <p>
            A real-time feature that updates a user's job application status and
            allows users to see whether their application has been viewed,
            considered, or rejected by the employer.
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                <strong>Job Preparedness Reminder and Suggestions:</strong>
              </p>
            </li>
          </ul>
          <p>
            Reminds users to review material and topics required from their
            applied roles. This feature could refer premium users to related
            LinkedIn Learning topics to prepare them for their applied
            roles.&nbsp;
          </p>
          <h2 class='text-lg'>
            <strong>Feature Prioritization</strong>
          </h2>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/UGouWHnTXGQsgZPbKUHXY?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Based on the RICE framework, improving the Tracking In-Progress Job
            Applications provides the most value to-effort ratio. The reason is
            that LinkedIn has already implemented features that can further help
            develop this feature. The Real-Time Applications Status Updates and
            Job Preparedness Suggestions are great ideas that will provide
            clarity and confidence in users' job search; however, it requires
            features to be developed on the recruitment side and should be a
            project later. Overall, the goal is to increase users' job
            acceptance rate; therefore, tracking applications for users can
            incentivize users them complete more applications that may result in
            higher chances of acceptance.&nbsp;
          </p>
          <h2 class='text-lg'>
            <strong>Value Proposition</strong>
          </h2>
          <p>
            Implementing a tracking feature for in-progress job applications
            ensures that users can understand the steps to their application
            process and feel more incentivized to complete more applications,
            thus leading to higher chances of job acceptance. In addition,
            knowing and sorting where users are in the application process makes
            managing their job search more seamless.&nbsp;
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Design</strong>
          </h2>
          <h2 class='text-lg'>
            <strong>Product Requirements</strong>
          </h2>
          <p>
            Based on user interviews, persona development, and LinkedIn visual
            interface, the following user requirements are the following:&nbsp;
          </p>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                Users need to have progress bars for each position available
                while filling out job applications.
              </p>
            </li>
            <li>
              <p>
                It should be possible for users to distinguish between the jobs
                for which they are being interviewed.&nbsp;
              </p>
            </li>
            <li>
              <p>
                Users should see their job application summary in their home
                dashboard.
              </p>
            </li>
          </ol>
          <h2 class='text-lg'>
            <strong>Visual Mockup</strong>
          </h2>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/V1194y3q16CWWxkU3wWvT?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/ImhvItJWG4cyKp5LBJ8K6?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Trade-offs:&nbsp;</strong>LinkedIn aims for minimalistic and
            consistent designs. The two different progress bar colours and an
            individual "Interview" section in the "Job" dashboard may contrast
            with their design language.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Conclusion</strong>
          </h2>
          <h2 class='text-lg'>
            <strong>Risks and Mitigation</strong>
          </h2>
          <p>
            This project's significant risk and assumption are that recruiters
            and companies are open to integrating LinkedIn applicants with their
            main recruiting software.&nbsp;
          </p>
          <p>
            Companies must share and update onboarding processes with LinkedIn
            to update job applications in real time for users to manage. This
            decision could raise data privacy issues within companies, and some
            third-party recruitment might need additional privacy access to use
            such a feature.&nbsp; &nbsp;
          </p>
          <h2 class='text-lg'>
            <strong>Looking Forward</strong>
          </h2>
          <p>
            So far in this project, I have focused on researching the applicant
            side of LinkedIn job searchers; however, I am planning to do more
            user research on the pain points of recruiters using this
            platform.&nbsp;
          </p>
          <h2 class='text-lg'>
            <strong>Learnings</strong>
          </h2>
          <p>
            During this time, I learned not to rely on my assumptions about the
            solution and look into what my target users experience using this
            platform. Collect as much feedback using secondary and primary
            market research. In addition, I learned to use new feature
            prioritization frameworks, such as Kano Model and RICE, to balance
            the value and effort needed to create my features. I also had the
            chance to sharpen my user interview skills, prepare and ask my users
            open-ended questions, and let them expand on their pain points. This
            technique has allowed me to identify new potential features that can
            be explored and improved in my project's subsequent phases.&nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;
