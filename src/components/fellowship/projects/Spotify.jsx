import React from 'react';
import './projects.css';
import Riti from '../../../assets/fellowship_members/riti.jpeg';

function Spotify() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Riti} alt='Riti' />
              <div className='meta_p'>
                <p className='meta_name'>Riti Nawroz</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving Spotify</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              For this project, I acted as a PM for the popular music streaming
              platform, Spotify. I performed user research to find pain points
              and then utilized various design thinking tools to brainstorm
              solutions to improve the user experience.
            </p>
            <p>
              <strong>Introducing my Favorite Product</strong>
            </p>
            <p>
              Spotify is an app I use on a daily basis because it enhances my
              daily life while requiring low levels of effort. It is great for
              discovering and listening to music. I am easily able to find music
              according to my taste while also being able to expose myself to
              other types of music through Spotify or user created playlists. It
              is one of the biggest music streaming services on the market
              currently with over 433 million monthly users. Its freemium
              revenue model is attractive to young consumers because it allows
              them to explore the platform for free. In this model, the free
              version is a limited ad-supported service and the paid premium
              version offers unlimited access within the platform. It has an
              edge over other music streaming services because it allows its
              users to discover new content easily through self exploration and
              AI driven recommendation.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/RvVOCSmzBGNv1wGtBtjow?w=1000&amp;auto=compress,format&amp;dl'
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
            <strong>
              <u>Project Objective</u>
            </strong>
          </p>
          <p>
            <u>Situation</u>
          </p>
          <p>
            Spotify offers a
            <a
              class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
              target='_blank'
              rel='noopener noreferrer nofollow ugc'
              to='https://spotify.design/article/introducing-spotifys-new-design-principles'
              href='https://spotify.design/article/introducing-spotifys-new-design-principles'
            >
              <u>relevant, human, and unified</u>
            </a>
            user experience. It is personalized to each user and their
            behavioural patterns. The platform’s focus on the individual makes
            it a space where users feel valued and catered to. Regardless, the
            app is isolating for users as it does not allow for much interaction
            with other users within the platform.
          </p>
          <p>
            In its current form, Spotify allows users to see public playlists
            made by other users on the platform. People are also able to see in
            real time what their friends are listening to but there is no
            opportunity for direct interaction. Further, if users want to share
            content with others, they have to do so through other applications
            such as Instagram, Facebook, Snapchat, Whatsapp, and iMessage. This
            is inconvenient and requires a lot more effort.&nbsp;
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/fkyYpWH6KpXMDLE9FTlPq?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            Beyond sharing content with each other, there is also no way for
            people to share their reactions and feedback to specific content
            matters. For example, if a content makes people feel a certain way,
            there is no way for other users to be privy to that. If it was not
            that way, there would be greater potential for community building.
          </p>
          <p>
            <u>Assumptions:</u>
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Users are interested in higher levels of interactivity with each
                other
              </p>
            </li>
            <li>
              <p>
                Users are inclined to find and build like-minded
                communities&nbsp;
              </p>
            </li>
            <li>
              <p>
                Users are looking for ways to share their feedback and reactions
                to other users
              </p>
            </li>
          </ul>
          <p>
            <u>Hypothesis:</u>
          </p>
          <p>
            <em>
              Spotify could increase time spent by user on the platform by
              improving its user experience and make it more human by
              incorporating more social features that allow users to 1) share
              their experience and 2) interact with others internally.
            </em>
          </p>
          <p>
            <u>Timeline:</u>
          </p>
          <p>Total projected time - 10 hours</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>3 hours for user research (online and in-person)</p>
            </li>
            <li>
              <p>2 hours for solution design</p>
            </li>
            <li>
              <p>3 hours for wireframing</p>
            </li>
            <li>
              <p>2 hours of editing and final presentation</p>
            </li>
          </ul>
          <h2 class='text-xl'>Spotify User Research</h2>
          <p>
            <strong>Research insights:</strong>
          </p>
          <p>
            For the purpose of my research, I look at various online articles
            and public forums where people expressed their frustrations with the
            Spotify platform. Further, I asked my friends and roommates about
            their experience on the platform. There are a wide variety of pain
            points but I specifically focused on the social aspects of the
            platform. Mainly, I am interested in the interactive and explorative
            elements of socializing on Spotify.
          </p>
          <p>
            <strong>User Persona:</strong>
          </p>
          <p>
            People
            <a
              class='cursor-pointer transition duration-100 ease-in-out text-actionAccent-600 hover:text-actionAccentHover-500'
              href="/curriculum/1-2/post/https://thesocialshepherd.com/blog/spotify-statistics#:~:text=Most%20of%20Spotify's%20Users%20in,make%20up%2029%25%20of%20users."
            >
              <u>18 to 34 </u>
            </a>
            years of age makeup over 50% of all Spotify Users. Many in this
            demographic are students or young professionals. They share similar
            pains and needs as well as behave similarly on the platform. The
            user persona below outlines the typical university student that may
            use Spotify.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/PDP2KS4OfjrtdwpxbVXN1?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            <strong>Opportunity Map:</strong>
          </p>
          <p>
            The opportunity map below outlines the opportunities available to
            improve Spotify. Many of the pain points seem interrelated as they
            are closely connected.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/tW69Cb2RDlVypyguvEw3J?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            In summary, the specific pain points of not being able to interact
            with friends more on the platform and also not being able to
            discover the right music in a timely manner become evident. These
            two pain points can be addressed together to make the Spotify user
            experience more human. Allowing people to share their experience can
            validate their need for interactions and the data derived from their
            activity can go on to enhance the discoverability aspect for other
            users.&nbsp;
          </p>
          <h2 class='text-xl'>Spotify Solution</h2>
          <p>Solutions:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                React feature to songs, friends receive automatic notifications
              </p>
            </li>
            <li>
              <p>
                Playlist of music friends are reacting to, filter option based
                on genre and mood
              </p>
            </li>
            <li>
              <p>Direct share feature within Spotify</p>
            </li>
            <li>
              <p>
                Questionnaire for music recommendation when people don’t know
                what to search
              </p>
              <figure>
                <div
                  class='flex items-center mt-5 ignore-typography justify-center bg-surface-100'
                  data-index='4'
                >
                  <img
                    src='https://tribe-s3-production.imgix.net/Sf0MH26fVmhRQwwQfTq7o?w=1000&amp;auto=compress,format&amp;dl'
                    class='cursor-pointer max-h-120'
                    alt=''
                  />
                </div>
              </figure>
              <p>Value Prop Statement:</p>
              <p>
                Spotify’s react feature will help users satisfy the human need
                of expressing one’s emotions and the playlist composed of
                friends’ reactions will allow individuals to be exposed to what
                their peers are listening to and discover new music without
                having to invest too much time or effort.
              </p>
            </li>
          </ul>
          <h2 class='text-xl'>Spotify Design</h2>
          <p>Product Requirements:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>Users can react to songs based on their mood</p>
            </li>
            <li>
              <p>
                The songs they react to get compiled into a playlist for their
                friends&nbsp;
              </p>
            </li>
            <li>
              <p>Songs can be filtered based on mood emoticons and genres</p>
            </li>
            <li>
              <p>Users can share songs directly with others in Spotify</p>
            </li>
          </ul>
          <p>Visual Mockup:</p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/keVuNcyRL5OLgBK4kVDHB?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>Trade-offs:</p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Screen might look cluttered at the bottom with reaction buttons
              </p>
            </li>
            <li>
              <p>
                Might be hard to make Friends playlist standout among all the
                others
              </p>
            </li>
          </ul>
          <h2 class='text-xl'>Conclusion</h2>
          <h2 class='text-lg'>Risks:</h2>
          <p>
            A potential risk that could arise from the solution is that users
            might not understand how the react feature works in the social
            context (i.e., the songs they react to are put into a personal
            playlist but are also compiled into a group playlist with friends).
            There are two ways to address this issue.&nbsp;
          </p>
          <p>
            <em>Internally</em>
          </p>
          <p>
            Create distinct branding for the new feature so the new additions
            will stand out to the user immediately. If they are hyper aware of
            the new feature initially then they will purposely explore it.
          </p>
          <p>
            <em>Externally</em>
          </p>
          <p>
            Provide a demo or brief explanation to the user of what the new
            feature is and how they can use it.&nbsp;
          </p>
          <h2 class='text-lg'>Reflection:</h2>
          <p>
            Through this project I learned the importance of Discovery. If I had
            more time, I would refine my research process and reach out to a
            wider demographic. Quality user research is critical in being able
            to identify relevant pain points that can be addressed at the right
            time for maximum impact. Coming into the project, I had some ideas
            for the solution feature I wanted to build but I quickly learned
            that this approach introduced bias into the problem identification
            process. When working on the construction side of the platform, it
            can be very different from the actual user experience. Therefore it
            is vital to be able to let go of the biases that come with being
            associated with the product and consider the users perspectives. As
            important as users are to a PMs role, so are stakeholders.
            Communication and negotiation are key when it comes to getting
            buy-in from others within the company. Sometimes situations may
            arise where PMs have to pivot from their original plans or abandon
            it all together so it is important to not get emotionally attached
            to a particular solution and always take into account competing
            factors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Spotify;
