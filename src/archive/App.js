import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Program from './components/program/Program';
import Highlights from './archive/highlights/Highlights';
import Footer from './components/footer/Footer';
import Fellowship from './components/fellowship/Fellowship';
import Team from './components/team/Team';
import ScrollToTop from './components/utils/ScrollToTop';
import Projects from './components/shared/team/Projects';
import Fellows from './components/fellowship/Fellows';

// Fellows Pic
import Sophia from './assets/fellowship_members/sophia.jpeg';
import Indira from './assets/fellowship_members/indira.jpeg';
import Ashkan from './assets/fellowship_members/ashkan.jpeg';
import Evan from './assets/fellowship_members/evan.jpeg';
import Martin from './assets/fellowship_members/martin.jpg';
import Oceanna from './assets/fellowship_members/oceanna.jpeg';
import Riti from './assets/fellowship_members/riti.jpeg';
import William from './assets/fellowship_members/william.jpeg';
import Eric from './assets/fellowship_members/eric.jpeg';
import Michael from './assets/fellowship_members/michael.jpeg';
import Ved from './assets/fellowship_members/ved.jpeg';
import Armando from './assets/fellowship_members/armando.png';
import Wilson from './assets/fellowship_members/wilson.jpeg';
import Vidisha from './assets/fellowship_members/vidisha.png';

// Projects Pic
import AppleMapsImg from './assets/projects/improving_apple_maps.jpeg';
import NotionImg from './assets/projects/improving_notion.jpeg';
import NikeImg from './assets/projects/introducing_nike_run.jpeg';
import SpotifyImg from './assets/projects/improving_spotify.jpeg';
import TicketMasterImg from './assets/projects/secondary_market_ticket_master.jpeg';
import NotabilityImg from './assets/projects/notability.jpeg';
import LinkedInImg from './assets/projects/improving_linkedin_jobs.jpeg';
import YoutubeImg from './assets/projects/youtube.jpeg';
import ImprovingLetterBoxDImg from './assets/projects/improving_letterboxd.jpeg';
import ImprovingDuolingoImg from './assets/projects/improving_duolingo.jpeg';
import ImprovingOneNoteImg from './assets/projects/improving_onenote.png';
import FlexibilityGoogleMapsImg from './assets/projects/flexibility_googlemaps.png';
import ImprovingKindertalesImg from './assets/projects/improving_kindertales.jpeg';
import NotabilityKidsImg from './assets/projects/notability_kids.jpeg';
import FacebookLiteImg from './assets/projects/facebook_lite.jpeg';
import NotionForPMImg from './assets/projects/notion_for_pm.jpeg';

// Projects Page
import DrivingExperienceAppleMaps from './components/fellowship/projects/DrivingExperienceAppleMaps';
import Notion from './components/fellowship/projects/Notion';
import Nike from './components/fellowship/projects/Nike';
import Spotify from './components/fellowship/projects/Spotify';
import TicketMaster from './components/fellowship/projects/TicketMaster';
import Notability from './components/fellowship/projects/Notability';
import LinkedIn from './components/fellowship/projects/LinkedIn';
import Youtube from './components/fellowship/projects/Youtube';
import ImprovingLetterBoxD from './components/fellowship/projects/ImprovingLetterBoxD';
import ImprovingDuolingo from './components/fellowship/projects/ImprovingDuolingo';
import ImprovingOneNote from './components/fellowship/projects/ImprovingOnenote';
import FlexibilityGoogleMaps from './components/fellowship/projects/FlexibilityGoogleMaps';
import ImprovingKindertales from './components/fellowship/projects/ImprovingKindertales';
import RewardProgramTicketMaster from './components/fellowship/projects/RewardProgramTicketMaster';
import NotabilityKids from './components/fellowship/projects/NotabilityKids';
import FacebookLite from './components/fellowship/projects/FacebookLite';
import NotionForPM from './components/fellowship/projects/NotionForPM';

function App() {
  // hardcode; might not need to migrate because it's static
  const phase_2 = {
    isFinished: false,
    title: 'Second Fellowship Project',
    text: 'Case: Repurpose a product for a new market. Create the strategy to bring a product to a new market by planning for implementation, considering the roadmap & risks involved.',
    link: 'To be released in November.',
  };
  // hardcode; might not need to migrate because it's static
  const phase_3 = {
    isFinished: false,
    title: 'Third Fellowship Project',
    text: 'Case: Disrupt an existing market with your idea. Validate a new product idea through intensive research, then pitch your first MVP to disrupt an existing market.',
    link: 'To be released in December.',
  };
  // const spatial_chat = {
  //   isFinished: true,
  //   title: 'Improving SpatialChat',
  //   text: 'A case study on how I would improve this spatial video meeting app that can simulate aspects of the in-person experience for online events and conferences.',
  //   image: SpatialChatImg,
  // };

  // hardcode
  const apple_maps = {
    isFinished: true,
    title: 'Improving the Driving Experience in Apple Maps',
    text: "For this project, I was a product manager for Apple Maps, Apple's native navigation app. To arrive at my solution, I conducted user research and interviews, identified pain points, and used product management-specific frameworks to narrow down a viable opportunity.",
    image: AppleMapsImg,
    link: '/improving-the-driving-experience-in-apple-maps',
  };
  // hardcode
  const notion = {
    isFinished: true,
    title: "Improving Notion's Accessibility",
    text: 'I was a PM for Notion, a project management, note-taking, and productivity application. I identified a significant issue on the platform, conducted user research to identify pain points and potential opportunities, and used PM frameworks to formulate a solution and design a mockup for my new feature in order to improve user experience.',
    image: NotionImg,
    link: '/improving-notion-accessibility',
  };
  // hardcode
  const nike_run_club = {
    isFinished: true,
    title: 'Improving the Social Feature of the Nike Run Club',
    text: 'For this case study, I took the role of a product manager for Nike Run Club, Nike’s running tracker and training program application. To arrive at well-developed a solution, I followed a rigorous product management process by conducting user research, identifying pain points, applying PM-specific frameworks to narrow down a viable opportunity and designing a solution.',
    image: NikeImg,
    link: '/improving-the-social-feature-of-the-nike-run-club',
  };
  // hardcode
  const spotify = {
    isFinished: true,
    title: 'Improving Spotify',
    text: 'For this case study, I took the role of a product manager for Nike Run Club, Nike’s running tracker and training program application. To arrive at well-developed a solution, I followed a rigorous product management process by conducting user research, identifying pain points, applying PM-specific frameworks to narrow down a viable opportunity and designing a solution.',
    image: SpotifyImg,
    link: '/improving-spotify',
  };
  // hardcode
  const ticket_master = {
    isFinished: true,
    title: 'Taking over the Secondary Market with Ticketmaster!',
    text: 'In this project, I took on the role of a PM for Ticketmaster, a North-American ticket sales and distribution company. My goal was to improve the secondary market buying and selling experience for users, mainly in regards to the resale of tickets, while also keeping in mind the need for Ticketmaster to gain revenue. Enjoy!',
    image: TicketMasterImg,
    link: '/taking-over-the-secondary-market-with-ticket-master',
  };
  // hardcode
  const notability = {
    isFinished: true,
    title: 'Notability',
    text: 'For this project, I was a PM for Notability, a note-taking software. I conducted user research, identified pain points, and used PM frameworks to develop a solution to improve the user experience.',
    image: NotabilityImg,
    link: '/notability',
  };
  // hardcode
  const linkedin_jobs = {
    isFinished: true,
    title: 'Improving LinkedIn Jobs',
    text: 'For this project, I was a product manager for LinkedIn, a business and employment-oriented online service. To arrive at my solution, I conducted primary and secondary market research and interviews, identified challenges, and used product management frameworks to develop a viable solution.',
    image: LinkedInImg,
    link: '/improving-linkedin-jobs',
  };
  // hardcode
  const youtube = {
    isFinished: true,
    title: 'Improving Accessibility in YouTube',
    text: 'In this project, I took the place of a product manager for Youtube. Through user interviews and broad research of the application and its complaints, I identified pain points and potential improvement opportunities and utilized product management frameworks to arrive at a viable solution.',
    image: YoutubeImg,
    link: '/improving-accessibility-in-youtube',
  };
  // hardcode
  const improving_letterboxd = {
    isFinished: true,
    title: 'Improving LetterboxD',
    text: "In this project, I assumed the position of a product manager for Letterboxd, a social media platform for movie-lovers. Over the course of the project's timeline, I leveraged a combination of primary and secondary market research to identify user pain points and utilized PM frameworks to create a solution.",
    image: ImprovingLetterBoxDImg,
    link: '/improving-letterboxd',
  };
  // hardcode
  const improving_duolingo = {
    isFinished: true,
    title: 'Improving Duolingo',
    text: 'In this project, I was the product manager for Duolingo, a language learning app. Over the course of this project, I incorpoated primary and secondary research to identify pain points and used PM frameworks to generate a solution.',
    image: ImprovingDuolingoImg,
    link: '/improving-duolingo',
  };
  // hardcode
  const improving_onenote = {
    isFinished: true,
    title: 'Improving OneNote',
    text: 'For this project, I assumed the role of a Product Manager working at Microsoft for OneNote. Through primary and secondary user research, I was able to identify pain points for OneNote users and used the product management framework to identify a viable solution.',
    image: ImprovingOneNoteImg,
    link: '/improving-onenote',
  };
  // hardcode
  const flexibility_with_google_maps = {
    isFinished: true,
    title: 'Inclusion and flexibility with Google Maps',
    text: "In this project, I took the role of a Product Manager at Google to improve Google Maps in terms of inclusion and flexibility for its users. Join me throughout this post to know my findings and proposal to improve one of the world's most used applications/platforms.",
    image: FlexibilityGoogleMapsImg,
    link: '/google',
  };
  // hardcode
  const improving_kindertales = {
    isFinished: true,
    title: 'Improving Kindertales',
    text: 'For this project, I was a product manager for Kindertales, a childcare management app. To arrive at my solution, I conducted user research and interviews, identified pain points, and used product management-specific frameworks to narrow down a viable opportunity.',
    image: ImprovingKindertalesImg,
    link: '/improving-kindertales',
  };
  // hardcode
  const reward_program_ticketmaster = {
    isFinished: true,
    title: 'Reward Program @ Ticket Master',
    text: 'Ticketmaster has a great potential to disrupt the rewards program market with all the available resources and the renowned brand they are. Read the following post to learn more about it.',
    image: TicketMasterImg,
    link: '/reward-program-ticketmaster',
  };
  // hardcode
  const notability_kids = {
    isFinished: true,
    title: 'Notability Kids',
    text: 'For this phase, I targeted a more niche section of students to focus on early childhood education.',
    image: NotabilityKidsImg,
    link: '/notability-kids',
  };
  // hardcode
  const facebook_lite = {
    isFinished: true,
    title: 'Improving the User Experience in Facebook Lite',
    text: ' For this project, I was a product manager for Facebook Lite, Meta’s lightweight version of the Facebook app. To arrive at my solution, I conducted user research and interviews, identified pain points, and used product management-specific frameworks to narrow down a viable opportunity.',
    image: FacebookLiteImg,
    link: '/improving-the-user-experience-in-facebook-lite',
  };
  // hardcode
  const notion_for_pm = {
    isFinished: true,
    title: 'Notion For PM',
    text: 'For this project, I decided to further explore Notion from a different angle. Assigned with the task of disrupting a product into another market space, I decided to redesign Notion with a focus on users who are PMs or working in an agile environment. I conducted further research and competitive analysis to identify the best features to be added to this iteration.',
    image: NotionForPMImg,
    link: '/notion-for-pm',
  };
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <About />
                <Program />
                <Highlights />
              </>
            }
          />
          <Route path='/execs' element={<Team />} />

          {/* <Route
            path='/about'
            element={
              <>
                <About />
              </>
            }
          /> */}
          <Route path='/fellowship' element={<Fellowship />} />
          <Route path='/fellows' element={<Fellows />} />
          {/* Scott Bio and Projects */}
          {/* <Route
            path='/scott-langille'
            element={
              <Projects
                img={Scott}
                name='Scott Langille'
                title='Fellow'
                bio_text='Aspiring Product Manager with experience in front-end development
              and design. Currently working as a PM Intern at BlackBerry in
              Toronto, but eventually wants to break out of the corporate world to
              pursue his own startup and tackle problems in education.'
                linkedin='https://www.linkedin.com/in/scottlangille/'
                projects={[spatial_chat, phase_2, phase_3]}
              />
            }
          /> */}
          {/* Sophia Bio and Projects */}
          <Route
            path='/sophia-huang'
            element={
              // hardcode
              <Projects
                img={Sophia}
                name='Sophia Huang'
                title='Fellow'
                bio_text='Aspiring Product Manager with an eye for design and interest in analytics. Previous work experience includes consulting at a large, global firm, and IT Analyst at a hypergrowth company.'
                linkedin='https://www.linkedin.com/in/sophia-huang7/'
                projects={[apple_maps, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/indira-sowy'
            element={
              // hardcode
              <Projects
                img={Indira}
                name='Indira Sowy'
                title='Fellow'
                bio_text="Aspiring product manager with past experiences in software development and UX design, working as a UX Designer at a university faculty and a Software Engineer Intern at a YC startup over the summer. I'm passionate about combining my interests to work on building meaningful products that aim to benefit users' lives."
                linkedin='https://www.linkedin.com/in/indirasowy/'
                projects={[notion, notion_for_pm, phase_3]}
              />
            }
          />
          <Route
            path='/martin-tang'
            element={
              // hardcode
              <Projects
                img={Martin}
                name='Martin Tang'
                title='Fellow'
                bio_text="Hello 👋🏻 I'm Martin, currently a second year computer engineering student at UBC. I have worked previously at Bombardier as Product Management Intern and want to pursue this career in the tech industry. Feel free to reach out on Linkedin :) "
                linkedin='https://www.linkedin.com/in/martin-txng/'
                projects={[nike_run_club, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/riti-nawroz'
            element={
              // hardcode
              <Projects
                img={Riti}
                name='Riti Nawroz'
                title='Fellow'
                bio_text='Graduating Interdisciplinary Studies student at UBC. Currently interning at Deloitte as Risk and Quality Analyst. Looking to explore PM and its design thinking, problem solving and communication aspects. '
                linkedin='https://www.linkedin.com/in/ritinawroz/'
                projects={[spotify, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/evan-sandhu'
            element={
              // hardcode
              <Projects
                img={Evan}
                name='Evan Sandhu'
                title='Fellow'
                bio_text={
                  "Aspiring product manager with interests in design & development, blockchain technology & web3, and the gaming industry. Driven, passionate, and motivated marketing student at the University of British Columbia's Sauder School of Business."
                }
                linkedin='https://www.linkedin.com/in/evansandhu/'
                projects={[ticket_master, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/oceanna-nguyen'
            element={
              // hardcode
              <Projects
                img={Oceanna}
                name='Oceanna Nguyen'
                title='Fellow'
                bio_text={
                  'Customer driven aspiring product manager passionate about getting to the root of problems. Experience working in a hyper growth SaaS startup with 6+ years of customer experience. Currently learning about project management frameworks to start my own passion project!'
                }
                linkedin='https://www.linkedin.com/in/oceanna-nguyen/'
                projects={[notability, notability_kids, phase_3]}
              />
            }
          />
          <Route
            path='/ashkan-gharahgozli'
            element={
              // hardcode
              <Projects
                img={Ashkan}
                name='Ashkan Gharahgozli'
                title='Fellow'
                bio_text={
                  'Aspiring Product Manager with experience in R&D, Android development, and design. Currently working part-time as a back-end developer at a Vancouver startup and enjoys pursuing real-world challenges.'
                }
                linkedin='https://www.linkedin.com/in/ashgozli/'
                projects={[linkedin_jobs, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/william-nguyen'
            element={
              // hardcode
              <Projects
                img={William}
                name='William Nguyen'
                title='Fellow'
                bio_text={
                  'Aspiring product manager and developer with experience in front-end development. Currently, a student in the Business and Computer Science program at UBC. In the future, I hope to utilize my technology skills and business acumen to create a startup that combats climate change. '
                }
                linkedin='https://www.linkedin.com/in/william-nguyen202103/'
                projects={[youtube, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/eric-gadbois'
            element={
              // hardcode
              <Projects
                img={Eric}
                name='Eric Gadbois'
                title='Fellow'
                bio_text={
                  'I am a 5th-year UBC student with a passion for creation. As a product manager, I aspire to create meaningful and innovative products that deliver real value to customers. My background in both business and computer science uniqely equips me with a multi-angled perspective on product development and empowers me to effectively communicate across teams throughout the development lifecycle.'
                }
                linkedin='https://www.linkedin.com/in/ericgadbois/'
                projects={[improving_letterboxd, phase_2, phase_3]}
              />
            }
          />
          {/* Todo */}
          <Route
            path='/michael-tham'
            element={
              // hardcode
              <Projects
                img={Michael}
                name='Michael Tham'
                title='Fellow'
                bio_text={
                  'A 3rd year at UBC studying Business and Computer Science whom is currently exploring the world of tech to see how I can best use his skills to provide value and solve pressing social issues. '
                }
                linkedin='https://www.linkedin.com/in/michael-tham/'
                projects={[improving_duolingo, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/ved-varshney'
            element={
              // hardcode
              <Projects
                img={Ved}
                name='Ved Varshney'
                title='Fellow'
                bio_text={
                  'Aspiring Product Manager with experience in Backend and Front End Software development. Currently working in software, but eventually wants to break out into the Product space and work on fintech products.'
                }
                linkedin='https://www.linkedin.com/in/vedvarshney/'
                projects={[improving_onenote, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/armando-rocha'
            element={
              // hardcode
              <Projects
                img={Armando}
                name='Armando Rocha'
                title='Fellow'
                bio_text={
                  "Product Manager with experience in financial products and athletic apparel. I'm passionate about talking and listening to customers, executing plans, and, well... just making things happen."
                }
                linkedin='https://www.linkedin.com/in/armandorochac/'
                projects={[
                  flexibility_with_google_maps,
                  reward_program_ticketmaster,
                  phase_3,
                ]}
              />
            }
          />
          <Route
            path='/wilson-cheung'
            element={
              <Projects
                // hardcode
                img={Wilson}
                name='Wilson Cheung'
                title='Fellow'
                bio_text={
                  'Professional MBA student at UBC with over 10 years of technology consulting experience working on large scale and complex finance transformation projects in North America and Asia. Combines strong business acumen with in-depth technical expertise to be fluent in the dual languages of business and technology. Currently learning about product management to explore about a career pivot and developing personal projects.'
                }
                linkedin='https://www.linkedin.com/in/wilscheung/'
                projects={[improving_kindertales, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/vidisha-khaitan'
            element={
              // hardcode
              <Projects
                img={Vidisha}
                name='Vidisha Khaitan'
                title='Fellow'
                bio_text={
                  'Aspiring Product Manager with a keen eye for UX and consumer behavior. Previously worked in content and strategy roles across Marketing, Entertainment, Advertising, and Journalism with clients like Samsung, General Motors, and Hyatt. Channeling expertise in analytics, communications, and storytelling into customer discovery and product stories.'
                }
                linkedin='https://www.linkedin.com/in/vidishakhaitan95/'
                projects={[facebook_lite, phase_2, phase_3]}
              />
            }
          />
          {/* Projects */}
          <Route
            path='/improving-the-driving-experience-in-apple-maps'
            element={<DrivingExperienceAppleMaps />}
          />
          <Route path='/improving-notion-accessibility' element={<Notion />} />
          <Route
            path='/improving-the-social-feature-of-the-nike-run-club'
            element={<Nike />}
          />
          <Route path='/improving-spotify' element={<Spotify />} />
          <Route
            path='/taking-over-the-secondary-market-with-ticket-master'
            element={<TicketMaster />}
          />
          <Route path='/notability' element={<Notability />} />
          <Route path='/improving-linkedin-jobs' element={<LinkedIn />} />
          <Route
            path='/improving-accessibility-in-youtube'
            element={<Youtube />}
          />
          <Route
            path='/improving-letterboxd'
            element={<ImprovingLetterBoxD />}
          />
          <Route path='/improving-duolingo' element={<ImprovingDuolingo />} />
          <Route path='/improving-onenote' element={<ImprovingOneNote />} />
          <Route path='/google' element={<FlexibilityGoogleMaps />} />
          <Route
            path='/improving-kindertales'
            element={<ImprovingKindertales />}
          />
          <Route
            path='/reward-program-ticketmaster'
            element={<RewardProgramTicketMaster />}
          />
          <Route path='/notability-kids' element={<NotabilityKids />} />
          <Route
            path='/improving-the-user-experience-in-facebook-lite'
            element={<FacebookLite />}
          />
          <Route path='/notion-for-pm' element={<NotionForPM />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
