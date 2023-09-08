import React from 'react';
import './projects.css';
import Eric from '../../../assets/fellowship_members/eric.jpeg';

function ImprovingLetterBoxD() {
  return (
    <div className='container project_main_container'>
      <div className='project_page'>
        <div className='project_meta'>
          <div className='project_meta_card_container'>
            <div className='project_meta_card'>
              <img src={Eric} alt='Eric' />
              <div className='meta_p'>
                <p className='meta_name'>Eric Gadbois</p>
                <p className='meta_date'>Oct 2, 2022</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg'>
            <strong>Improving Letterboxd</strong>
          </h1>
          <div className='project_meta_intro'>
            <p>
              In this project, I assumed the position of a product manager for
              Letterboxd, a social media platform for movie-lovers. Over the
              course of the project's timeline, I leveraged a combination of
              primary and secondary market research to identify user pain points
              and utilized PM frameworks to create a solution.
            </p>
            <hr />
            {/* <h2 class='text-xl'>Project Proposal</h2> */}
            <h3 class='text-xl'>Overview</h3>
            <p>
              A favourite software of mine has been the mobile application
              Letterboxd, which is essentially a social media platform for movie
              lovers. The product has great functionality right now, such as the
              ability to add movies to watchlists, rate and review films, see
              your friends’ ratings to name just a few. However, I think that
              there are new features which could be added and would enhance the
              overall value of the app.
            </p>
            <figure>
              <div
                class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
                data-index='0'
              >
                <img
                  src='https://tribe-s3-production.imgix.net/ej8xNNSJZOR7gSVatjm6E?w=1000&amp;auto=compress,format&amp;dl'
                  class='cursor-pointer max-h-120'
                  alt=''
                />
              </div>
            </figure>
          </div>

          <p></p>
        </div>

        <div className='project_container'>
          <h2 class='text-xl'>Project Objective</h2>
          <h3 class='text-lg'>Situation</h3>
          <p>
            Currently, the social aspect of the platform is limited to basic
            online interactions – following users, liking and commenting on
            reviews, viewing others’ profiles, etc.
          </p>
          <p>
            As the only major social media platform focused on movie-watching,
            Letterboxd should expand it’s features to lean more into the
            “social” aspect. Although we live in the age of at-home streaming,
            it cannot be forgotten how important movie theatres still are to
            people who watch movies (like me!) – this fact is an example of just
            one way that movies can bring people together.
          </p>
          <p>
            Letterboxd is a unique position to bridge the gap between the
            individual-based aspects of movie watching with the social aspects,
            and as such has a huge opportunity ahead of it.
          </p>
          <p></p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='1'
            >
              <img
                src='https://tribe-s3-production.imgix.net/WI5NB966IUk3q454S681l?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>Assumptions</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Letterboxd users want to watch movies with friends that also use
                Letterboxd
              </p>
            </li>
            <li>
              <p>People enjoy making movies social</p>
            </li>
          </ul>
          <h3 class='text-lg'>Hypothesis</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Letterboxd can improve on the platform by introducing more ways
                to make movie-watching social and facilitating users to watch
                movies together in real-life.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>Timeline</h3>
          <p>
            I plan to spend 10 hours working on this project, allocated as
            follows:
          </p>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>3 hours researching user needs</p>
            </li>
            <li>
              <p>1.5 hours honing in on a solution</p>
            </li>
            <li>
              <p>3.5 hours wireframing</p>
            </li>
            <li>
              <p>2 hours on the conclusion and final writings</p>
            </li>
          </ul>
          <hr />
          <h2 class='text-xl'>
            <strong>User Research</strong>
          </h2>
          <h3 class='text-lg'>Research Insights:</h3>
          <p>
            For my research, I used a combination of existing information and
            user interviews. For existing information, I researched through the
            Letterboxd community subreddit and Discord server to gather
            information. Additionally, I held user interviews with 3 friends who
            regularly use Letterboxd to understand how they use the app and what
            functionalities they felt were missing from the platform.
          </p>
          <h3 class='text-lg'>User Persona:</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='2'
            >
              <img
                src='https://tribe-s3-production.imgix.net/imO40XAnvxwc1GAMp7QCM?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>Opportunity Map:</h3>
          <p>
            Based off my conversations with fellow users, I was able to identify
            specific opportunities that may be addressed. Using the overall
            focus of attracting more users onto the app, I mapped out these
            opportunities as seen below.
          </p>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='3'
            >
              <img
                src='https://tribe-s3-production.imgix.net/fbQtxwzQnYtDpaTVH0kEA?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            The most prevalent insight that I discovered from this research is
            that the biggest value point of the app for users is how it makes
            the process of choosing a movie to watch easier. This is primarily
            done through the Watchlist feature of the app, where users can
            easily maintain a list of movies that they would like to watch. When
            selecting a movie, users would typically browse through their
            watchlist and choose a movie from that collection. Another feature
            also played a significant role in this process: the integration of
            the JustWatch web service, which indicates to users what streaming
            services currently have the given movie available in their region.
          </p>
          <p>
            However, when asked about how this process works when trying to
            decide on a movie with more than one person, it was clear that it
            starts to break down. The individuals that I interviewed indicated
            that their process is the same as when they watch alone, but instead
            requires much more time as often their movie-watching partner will
            decline movies that the user suggests. This is due to user reasons
            such as having seen the movie before, not having access to the
            service the movie is available on, or just flat-out not interested
            in the movie. Therefore, there is clearly room for development to
            build upon the watchlist-centred focus of choosing what to watch to
            better accommodate group-settings. This understanding has helped me
            to narrow my initial focus to a specific user story: “As a user, I
            would like to easily compare watchlists with my friends according to
            constraints such as available streaming services to help me choose a
            movie to watch with one or more other people.”
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Solution</strong>
          </h2>
          <h3 class='text-lg'>Potential Solutions:</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                <em>
                  Build out the review comment sections to function like a forum
                </em>
              </p>
              <p>
                The comment section would become its own page in the
                application. Multiple discussion threads can be occurring at
                once.
              </p>
            </li>
            <li>
              <p>
                <em>
                  Allow users to set notifications for when their friends are
                  commenting on other reviews
                </em>
              </p>
              <p>
                Friends can choose to be notified when certain friends comment
                on
                <strong>any </strong>reviews, not just the user’s own. They can
                stay up-to-date in real time with the discourse that their
                friends are engaging in.
              </p>
            </li>
            <li>
              <p>
                <em>
                  Create blended watchlists based on the watchlist overlap of
                  multiple users
                </em>
              </p>
              <p>
                Automatically cross reference multiple watchlists and make a new
                “blended” list made up of movies that are present on all source
                lists.
              </p>
            </li>
            <li>
              <p>
                <em>
                  Generate recommendations based on the intersection of multiple
                  users
                </em>
              </p>
              <p>
                Similar to the blended list feature, wherein it takes the
                watchlists of multiple users as an input, but the output is a
                list of recommendations based on common trends identified.
              </p>
            </li>
            <li>
              <p>
                <em>Add a news feed tab that hosts the latest movie news</em>
              </p>
              <p>
                This scrollable feed would look similar to other news apps but
                contain the newest announcements and articles. The articles
                could be written by Letterboxd staff or be from partner sites
                that report on movie news.
              </p>
            </li>
          </ul>
          <h3 class='text-lg'>Feature Prioritization:</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='4'
            >
              <img
                src='https://tribe-s3-production.imgix.net/ubaJKAsw9eZqbOPs0tiaZ?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <h3 class='text-lg'>Value Proposition:</h3>
          <p>
            Letterboxd’s implementation of Blended Watchlists will help friends
            to use their free-time more efficiently by helping groups of
            movie-lovers pick the perfect movie night film in minimal time.
            Because the Blended Watchlists are the result of finding overlaps in
            individual account watchlists, the movies included are sure to be of
            interest to everyone, without the need to settle. Utilizing these
            lists, friends can spend less time debating and more time doing
            what’s important to them: enjoying great films together.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Design</strong>
          </h2>
          <h3 class='text-lg'>Product Requirements:</h3>
          <ul class='list-disc list-inside pl-6'>
            <li>
              <p>
                Users can create blended watchlists with any number of other
                profiles (assuming enough overlap exists)
              </p>
            </li>
            <li>
              <p>
                Users can view their blended watchlists from their main
                watchlist screen
              </p>
            </li>
            <li>
              <p>Users can create as many blended watchlists as they want</p>
            </li>
            <li>
              <p>Users can give a name to their blended watchlist</p>
            </li>
          </ul>
          <h3 class='text-lg'>Visual Mockup:</h3>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='5'
            >
              <img
                src='https://tribe-s3-production.imgix.net/Wf1YC98vs7x7MwFkI4ubb?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <figure>
            <div
              class='flex items-center mt-5 ignore-typography justify-center bg-surface-100 -ml-4 -mr-4 sm:!-ml-6 sm:!-mr-6'
              data-index='6'
            >
              <img
                src='https://tribe-s3-production.imgix.net/FeMWtJa0bkZbtwR5zDw5j?w=1000&amp;auto=compress,format&amp;dl'
                class='cursor-pointer max-h-120'
                alt=''
              />
            </div>
          </figure>
          <p>
            The new feature will be accessible from the pre-existing watchlist
            screen through a new button located at the top left. Clicking this
            button will bring the user to the second screen, where they will be
            able to view their blended watchlists. While only 3 list names can
            be seen on the screen at a given time, the bar can be swiped left
            &amp; right to view more lists if the user has them. As can be seen
            in the mock-up, the default name of a list will simply be the name
            of the user(s) that it is made with (see the 3rd list title),
            however, users can also customize the names of lists via the
            configuration button on the top right. The plus button located near
            the top left allows for the creation of new blended watchlists.
            Clicking on it will present the user with their list of friends and
            the user can select which accounts will be included in the new
            watchlist.
          </p>
          <hr />
          <h2 class='text-xl'>
            <strong>Conclusion</strong>
          </h2>
          <h3 class='text-lg'>Risks and Mitigation</h3>
          <p>
            The primary risk that comes to mind is that the addition of Blended
            Watchlists could make the UI become overwhelming for some users,
            especially those with less experience on the app. In order to
            mitigate this, it is crucial to user test the proposed screen design
            and workflow to verify that it makes logical sense.
          </p>
          <h3 class='text-lg'>Looking Forward</h3>
          <p>
            In the future, this feature could be built out further by adding
            more customization features. An easily implemented addition that
            would be the next step in buidling out Blended Watchlists would be
            the ability for both users to be able to make manual changes to the
            shared list - thereby affecting the list from both perspectives. The
            kind of changes in question are manual removal/addition of movies
            and reordering of the list.
          </p>
          <h3 class='text-lg'>Learnings</h3>
          <p>
            This project allowed me the opportunity to learn a great deal about
            balance. Specifically, balance in making valuable changes without
            fundamentally changing too much about the current product. As can be
            seen in the project, there were multiple potential ideas for how to
            make Letterboxd into a tool that better facilitates the social
            aspect of watching movies. However, I realized that it would be
            unwise to pursue options that involve adding new features which may
            drastically change how users approach the application. Instead, I
            found far more success in finding opportunities that leverage the
            pre-exisiting functions and user workflows of the application. This
            understanding is not specific to Letterboxd and can be applied
            broadly to any future products that I work on, making it as valuable
            as any learning opportunity can be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImprovingLetterBoxD;
