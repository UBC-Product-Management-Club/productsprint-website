import React from 'react';
import './projects.css';
import Indira from '../../../assets/fellowship_members/indira.jpeg';

function Notion() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Indira} alt='Indira' />
              <div className='meta_p'>
                <p className='meta_name'>Indira Sowy</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving Notion's Accessibility</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              For this project, I was a PM for Notion, a project management,
              note-taking, and productivity application. I identified a
              significant issue on the platform, conducted user research to
              identify pain points and potential opportunities, and used PM
              frameworks to formulate a solution and design a mockup for my new
              feature in order to improve user experience.
            </p>
            <h2 class='text-xl'>
              <strong>Introducing my Favourite Product</strong>
            </h2>
            <p>
              Notion is a productivity and note-taking tool aimed at helping
              users collaborate and increase productivity. I discovered this
              application in high school and have been using it ever since, from
              keeping track of my calendar, to taking notes for class, to
              sorting my to-do list, to listing a database of my expenses, and
              so much more.
            </p>
            <p>
              The best thing about Notion for me is the versatility in its many
              features, being able to use various components to aid with any
              aspect of my life while remaining completely customizable.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/mjy59cmD3JfWnU9tOXSa1?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
            <p></p>
          </div>
        </div>

        <div className='project_container'>
          <h2 class='text-xl'>
            <strong>Project Objective</strong>
          </h2>
          <p>
            <strong>Situation:</strong>
          </p>
          <p>
            Currently, you cannot access your Notion offline unless you have
            revisited a certain page. Given the versatility of Notion, people
            use the application for a range of various things and some of these
            tasks may occur while a user is not connected to the Internet. In
            addition to this, they may want to check their notes/calendars at
            random times but may be unable to do so if not connected to the
            Internet. Moreover, if they are at a location where their Wi-fi or
            cellular data is weak, they cannot access their workspace at all
            either even when connected to the Internet.
          </p>
          <p>
            Notion should add a feature allowing users to access their workspace
            offline to remedy this issue. This will allow users to access their
            notes and such even when not connected to the Internet and have all
            their updated data immediately saved when they are back online,
            similar to platforms like Google Docs.
          </p>
          <p>
            <strong>Assumptions:</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>Users use Notion for various things</p>
            </li>
            <li>
              <p>
                Users use Notion to keep track of things and may want to view
                certain pages at random times
              </p>
            </li>
            <li>
              <p>
                Users are likely to want to use Notion even while they aren't
                connected to the Internet (writing their shopping list, taking
                notes during class, etc.), and certain users are pushed away
                from the app simply because this feature isn't available
              </p>
            </li>
          </ul>
          <p>
            <strong>Hypothesis:</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Notion could improve its platform and increase its user base by
                allowing an offline mode to be available that allows users to
                access and edit their workspace even when not connected to the
                Internet.
              </p>
            </li>
          </ul>
          <h2 class='text-xl'>
            <strong>Timeline</strong>
          </h2>
          <p>I aim to spend 10 hours in total on this project:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>3 hours researching user needs</p>
            </li>
            <li>
              <p>2 hours honing in on a solution</p>
            </li>
            <li>
              <p>3 hours wireframing</p>
            </li>
            <li>
              <p>2 hours on the conclusion &amp; additional writing</p>
            </li>
          </ul>
          <p>
            My next step is to investigate more user complaints/needs regarding
            this issue to identify pain points and come up with a solution.
          </p>
          <p>
            For the purpose of my research, I looked at several online resources
            and forums with an extensive Notion community like Reddit. I also
            spoke with other users of Notion, especially students who use
            Notion, and I was able to identify some main pain points people deal
            with, with a focus on the accessibility of the platform.
          </p>
          <h2 class='text-xl'>
            <strong>User Research</strong>
          </h2>
          <p>
            <strong>User Persona:</strong>
          </p>
          <p>
            The large majority of Notion's user base is made up of 17-35 year
            olds, or young adults. A sizable portion of this group includes
            students and young working professionals. I wanted to capture this
            demographic in my user persona, outlining the typical student using
            Notion.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/Gcv0MHd5Vdc3veRe2eX68?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Opportunity Map:</strong>
          </p>
          <p>
            The opportunity map outlines certain pain points and areas of
            improvement for Notion, specifically when it comes to its
            flexibility and accessibility. Many sub-opportunities are related
            because they are connected.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/G3P8GYqDriK3QKUDfN2oD?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            In summary, I have identified pain points in users that prevent them
            from fully taking advantage of the Notion experience due to the lack
            of the app's accessibility when not online. Users want to be able to
            view and edit their workspace/calendars when needed and these issues
            validate the necessity to develop a feature like offline mode.
          </p>
          <h2 class='text-xl'>
            <strong>Solution</strong>
          </h2>
          <p>
            <strong>Solution Ideation:</strong>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                My initial solution was to make a fully-fledged offline mode
                available for users. This would allow users to access their
                entire workspaces freely when needed, thus making the app more
                accessible.
              </p>
            </li>
            <li>
              <p>
                However, given that Notion is a progressive web app (PWA) or a
                website running on a wrapper, it may prove difficult to make an
                entire workspace offline. This is something users may also be
                opposed to as it may take up a lot of space on their devices. A
                better alternative solution is to allow certain pages to be
                available offline. Users would be able to download individual
                pages/components to be saved offline to their choosing.
              </p>
            </li>
          </ul>
          <p>
            <strong>Feature Prioritization</strong>
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/akafxFbLQVpj57g7tygY6?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Value Proposition</strong>
          </p>
          <p>
            Enabling an offline mode for Notion will allow users to customize
            their experience and view/edit necessary pages on the go, whenever
            they want. This will allow the platform to become more accessible
            and flexible, increasing user satisfaction and gaining more users
            now that the app is more integrated.
          </p>
          <p>
            <strong>Product Requirements</strong>
          </p>
          <p>
            Based on user interviews, persona development, and Notion's visual
            interface, the following user requirements are the following:
          </p>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                Users should be able to save individual pages offline from the
                page menu
              </p>
            </li>
            <li>
              <p>
                Users should be able to view all their offline pages whenever
                needed even though the rest of their workspace is offline
              </p>
            </li>
            <li>
              <p>
                Users should be able to edit saved pages offline which get
                synced once they go online
              </p>
            </li>
          </ol>
          <h2 class='text-xl'>
            <strong>Design</strong>
          </h2>
          <p>
            <strong>Visual Mockup</strong>
          </p>
          <p>
            The Notion interface below is a hi-fidelity prototype purely mocked
            up on Figma
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/mBS2sxg132aHNgGeJ2K9N?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-xl'>
            <strong>Conclusion</strong>
          </h2>
          <p>
            <strong>Risks</strong>
          </p>
          <p>
            One risk of the offline mode is that users may complain about how
            much space their offline workspace may take on their devices. This
            is mitigated by giving them the freedom to choose which pages to
            save offline, meaning that they could only save a small part of
            their workspace and not take up much of their device storage.
          </p>
          <p>
            Another risk is potential bugs with offline sync, especially if one
            page is being updated offline with two devices. In this case, if the
            edits are being done on different parts of the page, the edit will
            automatically merge and resolve itself. However, if edits are being
            done on the same part of the page, Notion can choose to save the
            latest changes but store all changes in its version history so that
            it doesn't get lost if needed. This is similar to how other sites
            like Google Docs or Wikipedia resolve issues like this.
          </p>
          <h3>
            <strong>Reflection</strong>
          </h3>
          <p>
            If I had more time, I would have researched more on the technical
            side of how to enable the offline mode and save particular pages to
            a user's device, as well as how to sync the data online. I would
            have implemented a working prototype using frontend or full-stack
            programming technologies to test out its feasibility.
          </p>
          <p>
            From this project, I learned the importance of conducting in-depth
            user research and learning how to view the perspective of all actors
            involved, from the business itself (Notion) to the consumers. I also
            gained a deeper understanding of opportunity mapping and feature
            prioritization, learning to think of alternative ways to address a
            problem while weighing the benefits and risks of pursuing multiple
            different solutions.
          </p>
          <p>
            Finally, I learned how to justify my decisions during the group and
            mentor feedback sessions. This allowed me to rethink my strategy
            while building stronger arguments to convince stakeholders why they
            should pursue my suggested solutions.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Notion;
