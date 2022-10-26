import React from 'react';
import './projects.css';
import Ved from '../../../assets/fellowship_members/ved.jpeg';

function Template() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img
                src={Ved}
                alt='
              Ved
              '
              />
              <div className='meta_p'>
                <p className='meta_name'>Ved Varshney</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving OneNote</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              For this project, I assumed the role of a Product Manager working
              at Microsoft for OneNote. Through primary and secondary user
              research, I was able to identify pain points for OneNote users and
              used the product management framework to identify a viable
              solution.
            </p>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-xl'>Project Proposal - Improving Onenote</h2>
          <p>
            Going into university from high school was a tough transition. Like
            me, some of you might have also been overwhelmed by the number of
            books, notebooks, and general papers that needed to be stored and
            neatly organized for future reference.
          </p>
          <p>
            Taking this into account, I decided to buy an android tablet and its
            accompanying pen to take in-class notes. This led me to research
            note-taking apps and finding out what would be the best and I found
            that Onenote was the best note-taking application for me.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='0'
            >
              <img
                src='https://tribe-s3-production.imgix.net/MY7OiBYp6uVyWzY49VQKK?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3>
            <strong>Why Onenote?</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Easy Integration with desktop software - allows users to share
                notebooks and make edits on the desktop version of the
                application
              </p>
            </li>
            <li>
              <p>
                Easily add elements you need - Many times instead of handwriting
                the lecture notes, I just paste them into my notebook, making my
                life easier
              </p>
            </li>
            <li>
              <p>
                Organization - Onenote can seamlessly organize all of your notes
                in a hierarchy to make them very easy to find
              </p>
            </li>
          </ul>
          <h2 class='text-lg'>
            <strong>Project Objectives</strong>
          </h2>
          <h3>
            <strong>Situation:</strong>
          </h3>
          <p>
            Back when I started using Onenote in 2019 (in my first year) I was
            very satisfied with the product. It made my life easier and more
            organized. Most importantly, now I only had to carry around one
            tablet rather than 4-5 notebooks.
          </p>
          <p>
            It also allows me to add pdf slides to my document very easily and
            view them across my devices. This can enable me to work smarter and
            use Onenote's search function to find exactly what I need when I
            need it.
          </p>
          <p>
            While Onenote is great on laptops and Ipads, it is lacking in
            features on android tablets. I have discussed with several folks who
            own android tablets and they all share similar concerns. For one,
            several features are just simply not available. Things like the
            insert pdf and adding pictures from the camera are simply not
            available. When on the go, it proves to be a challenge to open up a
            laptop and insert the pdfs/pictures you need, and wait for the 2
            devices to sync. Moreover, several pen functions that are supported
            natively on the tablet, are not supported through Onenote. As of
            now, it feels like a beta application on Android. Improving the
            functionality of the application on android devices will make the
            product more usable, allowing more folks to download the app on
            android.
          </p>
          <h3>
            <strong>Assumptions:</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Students are generally dissatisfied with Onenote's features on
                android
              </p>
            </li>
            <li>
              <p>
                Students will improve efficiency and decrease the time required
                for tasks if they were able to use Onenote to its full
                potential.
              </p>
            </li>
          </ul>
          <h3>
            <strong>Hypothesis:</strong>
          </h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Onenote can increase its Android user base by making the
                features available and easy to use on all of the supported
                platforms
              </p>
            </li>
          </ul>
          <h3>
            <strong>Timeline:</strong>
          </h3>
          <p>I plan to spend 12 hours on this project.</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>4 hours on defining user needs</p>
            </li>
            <li>
              <p>2 hours developing a solution</p>
            </li>
            <li>
              <p>3 hours wireframing</p>
            </li>
            <li>
              <p>3 hours on the conclusion &amp; additional writing</p>
            </li>
          </ul>
          <p></p>
          <hr />
          <h2 class='text-xl'>OneNote User Research</h2>
          <h3 class='text-lg'>
            <br />
            Research Insights:
          </h3>
          <p>
            My User Research primarily consisted of people displaying their
            frustrations on online forums like Reddit and a few interviews with
            folks that use OneNote on their tablets.
            <br />
            The Opportunity Map and the User Persona below show more in-depth
            about the user's pain points and frustrations. However, these pain
            points focus on the bugs in OneNote and the lack of development on
            certain features on OneNote.
          </p>
          <h3 class='text-lg'>User Persona:</h3>
          <p>
            From my research, it seems like most users of OneNote are students
            and folks that have a lot of writing to do at school or work. The
            user persona below outlines the typical university student that may
            use OneNote:
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/TeJH4BRHe9CaiQMH2qbHB?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>Opportunity Map:</h3>
          <p>
            The opportunity map below outlines the opportunities available to
            improve OneNote
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/Ai3s5fEBJnX50k3Th1I8r?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            To summarize, OneNote users are waiting on feature fixes and bug
            fixes on OneNote to improve their study efficiency. Thanks to my
            user research I have found several common pain points between
            android users and users on other devices. However, the Android
            version of the application is significantly worse and could use
            further development.
          </p>
          <p></p>
          <hr />
          <h2 class='text-xl'>
            <strong>OneNote Solutions</strong>
          </h2>
          <h3 class='text-lg'>
            <br />
            Solutions:
          </h3>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>Improve the PDF Insert Feature</p>
              <p>
                While researching, I found that adding PDFs is a real pain point
                for several users. The primary concern of these users is how
                OneNote often messes up the PDF formatting when inserted into a
                notebook. These are the specific issues users face:
              </p>
              <p>
                a. PDF features like hyperlinks are stripped when inserted into
                a Notebook
              </p>
              <p>b. Formatting PDFs is not permitted in OneNote</p>
              <p>
                Fixing these issues would prove to improve the efficiency of
                OneNote users and decrease their complaints. This would be a
                medium effort, higher value task
              </p>
            </li>
            <li>
              <p>Reduce Sync Times</p>
              <p>
                In a world of lightning-fast wifi, users are accustomed to fast
                sync times and fast loading times. OneNote falls behind in this
                because it is unable to quickly sync notebooks.
              </p>
              <p>
                The solution to this would be to invest in infrastructure and
                development to support faster sync times. This would be a
                high-effort, very high-value solution
              </p>
              <p>
                <em>However, </em>the main if we reframe the problem by saying
                the user is really just annoyed by the wait, we can create a
                creative solution to satisfy users. In this case, we can improve
                on the UI in OneNote with a more aesthetic design to let users
                know about their sync process. This would be a low-effort,
                medium/high-value task.
              </p>
            </li>
            <li>
              <p>Improve Android Application Features</p>
              <p>
                Android users often face issues on OneNote with a lack of
                features on tablets and other devices. For example, a feature
                that is missing is the 'insert photo' feature. Adding features
                like this and other features would make usability on an android
                much higher. This will be a low/medium effort task since this
                feature already exists on other platforms. However, it will be a
                lower value task since Android users represent a minority of the
                users.
              </p>
            </li>
          </ol>
          <h3 class='text-lg'>Effort vs Value Map</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/3Y9eUr2SE08NDzBdQo9ul?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>Value Proposition Statement</h3>
          <p>
            <br />
            OneNote faces a lot of competition that has features that the
            consumer demands. Keeping up with consumer demands and
            implementing/improving features on their product will help retain
            existing customers and capture new customers. The users who use
            OneNote demand efficiency and all of the features listed above will
            help in accomplishing this goal.
            <br />
            <br />
            Reducing Sync times and helping to improve the PDF insert feature
            are 2 key ways that Microsoft can improve OneNote and improve it's
            performance for users. This will make it more competitive in the
            already competitive market.
          </p>
          <p></p>
          <hr />
          <h2 class='text-lg'>
            OneNote Design
            <br />
          </h2>
          <h3 class='text-lg'>Product Requirements</h3>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                Sync feature needs to have a better UI for users to interact
                with
              </p>
              <p>a. Needs to occupy users while the notebook is syncing</p>
              <p>
                b. Needs to give a visual interface of what is happening on
                screen
              </p>
            </li>
            <li>
              <p>
                PDF insert needs to be resizable and maintain all pdf features
              </p>
              <p>a. Users need to be able to resize their pdf</p>
              <p>b. Hyperlinks need to work</p>
              <p>c. Users should have the option to insert only one page</p>
            </li>
          </ol>
          <p>
            We can measure the success of all of these factors with an
            overarching benchmark of satisfaction. For the sync feature, users
            often times hit the 'sync now' button when they are frustrated with
            sync times. We can measure the effectiveness of the improved UI by
            measuring if the number of times that button is hit decreases. For
            the PDF feature, we can measure effectiveness by tracking the number
            of PDF's inserted.
          </p>
          <h3 class='text-lg'>Visual Mockup (Sync Feature):</h3>
          <p>
            <strong>Sync feature</strong> - this can be solved with a simple
            progress or saving status indication.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/qEPVE0WrsUC6MHQG6klzK?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Similarly, a loading bar can also be implemented such that users
            know where the progress of their sync is This can look something
            like this:
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/PlzyKKO3sIgS5ulR4gu6R?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            The Nielson Norman Group suggests that "wait animations, such as
            percent-done bars and spinners, inform users of the current working
            state and make the process more tolerable to the user by reducing
            uncertainty. Users experience higher satisfaction with a site and
            are willing to wait longer when the site uses a dynamic progress
            indicator."
          </p>
          <p>
            <em>Tradeoffs</em>: There are tradeoffs with either design selected,
            but the main thing is the clutter that is associated with this. It
            may bother users to have another item in the UI.
          </p>
          <h3 class='text-lg'>
            <br />
            Visual Mockup (PDF insert improvements):
          </h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='6'
            >
              <img
                src='https://tribe-s3-production.imgix.net/FmGTA7rO1tTbUXKVMUUPa?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <br />
            <em>Tradeoffs</em>: The main thing here is also the clutter that it
            will add. Users may also have a hard time understanding the new
            feature.
          </p>
          <p></p>
          <hr />
          <h3 class='text-lg'>Risks and Mitigation:</h3>
          <p>
            <br />A big risk is that the new UI may be unfriendly, and users
            simply don't know how to use it. A simple way to solve this is to
            first off test the new design with an existing user group and see
            how they use it. There can also be documentation online to describe
            how to use it.
          </p>
          <h3 class='text-lg'>Next Steps:</h3>
          <p>
            In this project, I switched focus from Android to the desktop
            application. Going forward, I would like to see these features be
            imported on all platforms
          </p>
          <p>
            I would also like to see further development on the infrastructure
            to sync documents. This can be improved to match the sync times
            offered by competitors.
          </p>
          <h3 class='text-lg'>What I learned:</h3>
          <p>
            My pain points are not everyone's pain points. While there may be
            people that do have the same pain points as me, I may not represent
            the majority of people who experience frustrations using a product.
            This is where user research really comes in handy. Doing research on
            the customer is essential in finding the true pain points and
            developing a viable solution. For example, starting off this
            project, I was heavily focused on improving OneNote for people using
            an Android tablet. Going into the project, I quickly realized that I
            represent a minority of the population that uses OneNote. While
            there were still people out there that experienced the same issues
            as me, there were a lot more people that experienced the issues
            outlined above. This project was essential in finding that my ideas
            may need a complete overhaul after truly understanding the customer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Template;
