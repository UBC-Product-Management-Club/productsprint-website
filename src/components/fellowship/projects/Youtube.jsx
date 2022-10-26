import React from 'react';
import './projects.css';
import William from '../../../assets/fellowship_members/william.jpeg';

function Template() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={William} alt='William' />
              <div className='meta_p'>
                <p className='meta_name'>William Nguyen</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving Accessibility in YouTube</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              In this project, I took the place of a product manager for
              Youtube. Through user interviews and broad research of the
              application and its complaints, I identified pain points and
              potential improvement opportunities and utilized product
              management frameworks to arrive at a viable solution.
            </p>
            <h2 class='text-xl'>
              <strong>Introducing YouTube:</strong>
            </h2>
            <p>
              YouTube has been essential to many people’s education.&nbsp; It is
              a hub of free learning that has facilitated me and millions of
              others in learning various topics from history to cooking.
              Moreover, it is free compared to expensive traditional cable or
              streaming platforms.&nbsp; Furthermore, due to this extensive
              library, immigrants like me can enjoy media from home, allowing us
              to practice our cultural heritage anywhere on earth.
            </p>
            <p>
              YouTube is also efficient because one can watch videos anywhere,
              anytime, and on any device.&nbsp; YouTube is also incredibly easy
              to understand and use, exemplified by my grandparents, who are
              tech illiterate but found it intuitive and brought incredible
              value to their life.
            </p>
            <p>
              It is an astonishingly innovative algorithm that matches a user’s
              search history with relevant content, allowing them to discover
              similar videos they would not have thought about watching
              otherwise and encouraging them to continue using the
              software.&nbsp;
            </p>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-xl'>
            <strong>Situation:</strong>
          </h2>
          <p>
            Following my conversations with youtube users alongside receiving
            feedback from the mentors, I believe my original proposal to improve
            youtube would not be of significant value to the user experience.
            However, I identified a new problem with Youtube that has much more
            promise, improving the accessibility of YouTube for the 65+
            demographic, specifically this demographic overseas, by allowing
            them to customize essential aspects of their user experience. This
            stems from conversations with my grandparents, who have difficulty
            using YouTube as they struggle to access features that might benefit
            their experience, such as changing font sizes of text and subtitles,
            as they have poor eyesight. Moreover, Youtube does not currently
            offer a tutorial on how to use YouTube, forcing them to rely on
            friends and family to help navigate the application. Furthermore,
            they aren't fluent in English, and YouTube's default language is
            English, which leaves them with almost no way to navigate the
            website except when helped by someone fluent. This experience is
            standard for the average elderly user. However, this represents a
            massive loss of opportunity for YouTube to gain new customers and
            deepen engagement with existing ones.&nbsp;
          </p>
          <p>
            Below are two diagrams of the standard Youtube landing page; one is
            the default landing page, and the other is the landing page when
            YouTube's language preferences are changed. Each diagram is
            annotated and numbered to identify potential issues that could
            decrease the 65+ demographic's engagement with the application.
          </p>
          <h3 class='text-lg'>Current Youtube Landing page</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='0'
            >
              <img
                src='https://tribe-s3-production.imgix.net/GBf8KUNG0IRr3LNfnK9Sl?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                The sizes of these icons and text are small and might be
                challenging to read for a person who is hard of vision; however,
                changing the size requires high navigation in YouTube’s
                settings.
              </p>
            </li>
            <li>
              <p>
                Categories are based on your watch history; however, adding and
                removing tags from the beginning can improve the YouTube
                algorithm’s ability to recommend videos and reduce the amount of
                trash, potentially improving user engagement.&nbsp;
              </p>
            </li>
            <li>
              <p>
                These icons are not labelled with text, making it difficult for
                an elderly person to know exactly what each icon does.
              </p>
            </li>
            <li>
              <p>
                The icon is not labelled with text, making it difficult for an
                elderly person to know exactly what this icon does.
              </p>
            </li>
            <li>
              <p>
                Trash content that I do not want on my YouTube homepage
                decreases my engagement with the application; however, an older
                person might not know how to reduce the amount of trash on their
                homepage.&nbsp;
              </p>
            </li>
            <li>
              <p>
                I cannot categorize the order of my homepage based on my tags
                and previously watched videos decreasing engagement.
              </p>
            </li>
          </ol>
          <h3 class='text-lg'>YouTube in a different language:</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/n0vuknl3sKESFgbiAsi4w?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                The video titles are not translated, and although someone might
                still want to watch the video with subtitles, they wouldn't know
                what the title is saying. Moreover, there should also be an
                additional youtube tag that indicates what language the content
                is in.&nbsp;
              </p>
            </li>
          </ol>
          <h2 class='text-xl'>
            <strong>Assumption:</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Elderly people currently find it difficult to navigate youtube’s
                site and access all its features.
              </p>
            </li>
            <li>
              <p>
                Elderly people have a harder time feeding the algorithm correct
                information on their actual preferences and keeping their
                homepage clear of trash.
              </p>
            </li>
            <li>
              <p>
                The features that matter most to elderly people (language
                preferences, font and thumbnail sizes, and tutorial on how to
                use youtube) are disparate and require a lot of navigation to
                access each feature.
              </p>
            </li>
          </ul>
          <h2 class='text-xl'>
            <strong>Hypothesis:</strong>
          </h2>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                YouTube can increase its market penetration in the 65+
                demographic category and specifically this demographic overseas
                by creating a landing page that allows these users to customize
                crucial aspects of their youtube experience (language
                preferences, font size, content tags, and tutorial on how
                youtube works).
              </p>
            </li>
          </ul>
          <h2>
            &nbsp;<strong>Timeline:</strong>
          </h2>
          <p>&nbsp;I aim to spend 12 hours total on this project:</p>
          <p>
            &nbsp;1.&nbsp;&nbsp;&nbsp; 3 hours researching user needs and other
            successful features on sites like TikTok
          </p>
          <p>2.&nbsp;&nbsp;&nbsp; 3 hours developing a solution</p>
          <p>3.&nbsp;&nbsp;&nbsp; 2 hours wireframing</p>
          <p>
            4.&nbsp;&nbsp;&nbsp; 2 hours writing a conclusion and any additional
            writing
          </p>
          <p>5.&nbsp;&nbsp;&nbsp; 2 hours of editing and rewriting</p>
          <p>
            __________________________________________________________________________
          </p>
          <h2 class='text-xl'>User Research</h2>
          <h3 class='text-xl'>
            <strong>Research Insight:</strong>
          </h3>
          <p>
            Through interviews with four users (1 user &lt; 50 years old and 3
            users &gt; 50 years old) and online research (Nielsen Norman Group -
            Usability for Seniors: Challenges and Changes and Pew Research
            Center - Older Adults and Technology Use) on the biggest issues
            facing seniors engaging in technology alongside the research of
            YouYube’s public documents concerning demographic make-up by age; I
            identified that older and foreign language speaking population
            struggle to maximize their usage of YouTube due to barriers with the
            layout of the website and specifically the ease of usage with
            accessibility features. They desire the ability to customize the
            important aspects of their experience (language preferences, font
            size, content controls, and tutorial on how youtube works).
            Moreover, for users above the age of 65, there is an additional need
            for social connection due to social isolation that Youtube can
            provide due to their algorithm already providing insights into a
            user’s relevant interest; youtube can match seniors with people
            within a given proximity who share similar interests.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/mO5gd7otr9z9IDMR5Bp1F?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3>User Persona:</h3>
          <p>
            Through user research, I identified the
            <strong>
              <u> elderly population (65+) </u>
            </strong>
            and, more specifically, outside of English-speaking countries,
            seniors as the primary YouTube segment I hope to address.
          </p>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/TnqjxPAV5WM7lSlnt8JjY?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-xl'>
            <strong>Opportunity Map:</strong>
          </h3>
          <p>
            The opportunity map below highlights potential changes to improve
            the YouTube experience.&nbsp;
          </p>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/XqR9nh52ugTXxlSJiD4Uc?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Ultimately, YouTube fails to cater to the elderly population
            adequately. There is a lack of guidance and readily available
            accessibility and language features. Further, elders face much
            higher rates of social isolation than other age groups, and a social
            aspect of watching content with others and connecting with
            like-minded individuals can improve their user experience.
          </p>
          <p>
            __________________________________________________________________________
          </p>
          <h2 class='text-xl'>
            <strong>Solutions</strong>
          </h2>
          <ol class='list-decimal list-inside pl-6'>
            <li>
              <p>
                <strong>
                  <u>Social Media Component (social isolation)</u>
                </strong>
              </p>
              <ol class='list-decimal list-inside pl-6'>
                <li>
                  <p>
                    Based on user's content tags and country of viewership (high
                    chance of speaking the same language) --&gt; YouTube
                    recommends users people to connect with
                  </p>
                  <ol class='list-decimal list-inside pl-6'>
                    <li>
                      <p>Watch and share videos</p>
                    </li>
                    <li>
                      <p>Chat feature</p>
                    </li>
                    <li>
                      <p>Different groups for different interest</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>Iteration into the future</p>
                  <ol class='list-decimal list-inside pl-6'>
                    <li>
                      <p>
                        If users accept, YouTube can recommend users' "friends"
                        or other users with the same interest who are close to
                        the current user.&nbsp;
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
              <p></p>
            </li>
            <li>
              <p>
                <strong>
                  <u>YouTube tutorial and walk-through (cognitive ability)</u>
                </strong>
              </p>
              <ol class='list-decimal list-inside pl-6'>
                <li>
                  <p>
                    Guided walk-through of the most essential features and how
                    to use YouTube most effectively:
                  </p>
                  <ol class='list-decimal list-inside pl-6'>
                    <li>
                      <p>Saved videos (cognitive issues)</p>
                    </li>
                    <li>
                      <p>Accessing different settings</p>
                    </li>
                  </ol>
                </li>
              </ol>
              <p></p>
            </li>
            <li>
              <p>
                <strong>
                  <u>Guided customization</u>
                </strong>
              </p>
              <ol class='list-decimal list-inside pl-6'>
                <li>
                  <p>Accessibility features (vision and motor issues)&nbsp;</p>
                  <ol class='list-decimal list-inside pl-6'>
                    <li>
                      <p>Font sizes&nbsp;</p>
                    </li>
                    <li>
                      <p>Icon sizes</p>
                    </li>
                    <li>
                      <p>Subtitle sizes (hearing issues)</p>
                    </li>
                    <li>
                      <p>Thumbnail sizes</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    Allowing users to choose content tags can improve the
                    algorithm's accuracy in recommending relevant videos to the
                    users from the beginning.
                  </p>
                </li>
              </ol>
            </li>
          </ol>
          <p></p>
          <h2 class='text-xl'>
            <strong>Value-Based Scorecard</strong>
          </h2>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/dVlhlCYdgDDB1EOCGNQqt?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-xl'>
            <strong>Value Vs Effort</strong>
          </h2>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='6'
            >
              <img
                src='https://tribe-s3-production.imgix.net/BWb2ucJGF6xS7XBh0xvfN?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h2 class='text-xl'>
            <strong>Value Proposition Statement:</strong>
          </h2>
          <p>
            YouTube’s guided customization and tutorial features create the most
            welcoming experience for senior users who struggle with technology,
            thus, increasing user satisfaction and engagement with the
            application. Moreover, the social media component directly addresses
            the growing problem of social isolation in the elderly population.
            Therefore, YouTube’s matching of older adults based on their
            interests can dramatically make the YouTube experience more
            enjoyable and increase user retention, as YouTube can become a
            pillar of social connection for this demographic.
          </p>
          <p>
            __________________________________________________________________________
          </p>
          <h2 class='text-xl'>
            <strong>Design</strong>
          </h2>
          <h3 class='text-xl'>
            <strong>Product Requirements</strong>
          </h3>
          <p>
            Through user research, persona development, and the feedback of our
            mentors, the user requirements are as follows:&nbsp;
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Elderly users need to feel that YouTube is an approachable
                software for people of all ages
              </p>
            </li>
            <li>
              <p>
                The UI to change their accessibility needs has to be simple and
                functional
              </p>
            </li>
            <li>
              <p>
                Users need to be able to distinguish what each icon’s
                functionality is easily&nbsp;
              </p>
            </li>
            <li>
              <p>
                Users need to be able to customize and access their
                accessibility features easily
              </p>
              <ul class='list-disc list-inside pl-6'>
                <li>
                  <p>Font sizes&nbsp;</p>
                </li>
                <li>
                  <p>Icon sizes</p>
                </li>
                <li>
                  <p>Subtitle default on&nbsp;</p>
                </li>
                <li>
                  <p>Light mode</p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                Users need to be able to quickly and easily change what language
                they use on Youtube&nbsp;
              </p>
            </li>
          </ul>
          <h3 class='text-xl'>
            <strong>Visual Mockup</strong>
          </h3>
          <p>
            Below is a visual mockup of my most crucial Solution: &nbsp;
            <strong>
              an accessibility hub to help elderly people and people with
              accessibility needs access all the relevant accessibility settings
              in one place &nbsp;
            </strong>
            using Figma.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='7'
            >
              <img
                src='https://tribe-s3-production.imgix.net/OhtkkfzUl21uGui9HbLOS?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='8'
            >
              <img
                src='https://tribe-s3-production.imgix.net/FXLGfdwVoO7HV2iRgFEJB?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='9'
            >
              <img
                src='https://tribe-s3-production.imgix.net/0R5lTMtpqOdcaSI63knrj?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p></p>
          <p>
            The trade-off with the design: In an effort to adhere to designing
            principles for elderly people, form and function was prioritized
            over beautifying the user interface and may contrast with Youtube’s
            design language
          </p>
          <p>
            __________________________________________________________________________
          </p>
          <h2 class='text-xl'>Conclusion</h2>
          <h3 class='text-lg'>Risks</h3>
          <p>
            <em>
              If the user does not sign in to YouTube over privacy concerns or
              is simply browsing in guest or incognito mode, they might not have
              access to their saved features.&nbsp;
            </em>
          </p>
          <p>
            We can mitigate this issue by collecting user data on the optimum
            accessibility set-ups and providing users with 1-3 pre-set
            accessibility choices based on categories like low-vision or hearing
            issues.&nbsp;
          </p>
          <h3 class='text-lg'>Iteration</h3>
          <p>
            If I had more time on the project, I would overhaul the design of my
            interface and conduct user testing on the current design. Although I
            prioritized simplicity and function over aesthetics, it would be
            interesting to see how elderly users view my feature. Moreover, I
            hope to gain metrics on my feature's usage, specifically engagement
            in the 65+ demographic category and the differences in satisfaction
            in using YouTube before and after the feature was implemented.
          </p>
          <p>
            If my feature were proven to be a success, I would further iterate
            on it by providing more functionality to the accessibility hub,
            adding a guided tutorial for older users to harness all the powers
            the YouTube application offers.
          </p>
          <h3 class='text-lg'>What I learned</h3>
          <p>
            I have learned the importance of consistent revision and overcoming
            my fear of starting over again. Previously, I felt attached to a
            proposed solution as I thought I was losing all my hard work.
            However, through this project, I learned that arriving at the best
            possible solution requires revision after revision, and if a product
            doesn't meet the users' needs, then it does not matter how much time
            you spend on it. Learning from failure is more critical than
            dreading it in the first place. Moreover, I learned to be more
            empathetic as everyone subconsciously favours their opinions and
            overcoming that in pursuit of what the users need would ultimately
            create the best product. This feedback from my mentor humbled me.
            Still, it gave me an excellent learning opportunity to listen and
            overcome my cognitive biases to truly understand my users' needs and
            prioritize them in everything I do. Ultimately, it's all about the
            users; USER OBSESSION is the key to success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Template;
