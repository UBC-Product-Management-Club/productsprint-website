import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Program from './components/program/Program';
import Highlights from './components/highlights/Highlights';
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
import Martin from './assets/fellowship_members/martin.png';
import Oceanna from './assets/fellowship_members/oceanna.jpeg';
import Riti from './assets/fellowship_members/riti.jpeg';
import William from './assets/fellowship_members/william.png';
import Eric from './assets/fellowship_members/eric.jpeg';
import Michael from './assets/fellowship_members/michael.jpeg';
import Ved from './assets/fellowship_members/ved.jpeg';

// Projects Pic
import AppleMapsImg from './assets/projects/apple_maps.png';
import NotionImg from './assets/projects/notion.png';
import NikeImg from './assets/projects/nike_run_club.png';
import SpotifyImg from './assets/projects/spotify.png';
import TicketMasterImg from './assets/projects/ticketmaster.png';
import NotabilityImg from './assets/projects/notability.png';
import LinkedInImg from './assets/projects/linkedin.png';
import YoutubeImg from './assets/projects/youtube.png';
import ImprovingLetterBoxDImg from './assets/projects/improving_letterboxd.jpeg';
import ImprovingDuolingoImg from './assets/projects/improving_duolingo.jpeg';
import ImprovingOneNoteImg from './assets/projects/improving_onenote.png';

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

function App() {
  const phase_2 = {
    isFinished: false,
    title: 'Second Fellowship Project',
    text: 'Case: Repurpose a product for a new market. Create the strategy to bring a product to a new market by planning for implementation, considering the roadmap & risks involved.',
    link: 'To be released in November.',
  };
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
  const apple_maps = {
    isFinished: true,
    title: 'Improving the Driving Experience in Apple Maps',
    text: 'Apple Maps is Apple’s native mapping app that allows users to navigate their surroundings via car, walking, public transit, cycling, and ride-hailing.',
    image: AppleMapsImg,
    link: '/improving-the-driving-experience-in-apple-maps',
  };
  const notion = {
    isFinished: true,
    title: "Improving Notion's Accessibility",
    text: 'I was a PM for Notion, a project management, note-taking, and productivity application. I identified a significant issue on the platform, conducted user research to identify pain points and potential opportunities, and used PM frameworks to formulate a solution and design a mockup for my new feature in order to improve user experience.',
    image: NotionImg,
    link: '/notion',
  };
  const nike_run_club = {
    isFinished: true,
    title: 'Improving the Social Feature of the Nike Run Club',
    text: 'For this case study, I took the role of a product manager for Nike Run Club, Nike’s running tracker and training program application. To arrive at well-developed a solution, I followed a rigorous product management process by conducting user research, identifying pain points, applying PM-specific frameworks to narrow down a viable opportunity and designing a solution.',
    image: NikeImg,
    link: '/nike-run-club',
  };
  const spotify = {
    isFinished: true,
    title: 'Improving Spotify',
    text: 'For this case study, I took the role of a product manager for Nike Run Club, Nike’s running tracker and training program application. To arrive at well-developed a solution, I followed a rigorous product management process by conducting user research, identifying pain points, applying PM-specific frameworks to narrow down a viable opportunity and designing a solution.',
    image: SpotifyImg,
    link: '/spotify',
  };
  const ticket_master = {
    isFinished: true,
    title: 'Taking over the Secondary Market with Ticketmaster!',
    text: 'In this project, I took on the role of a PM for Ticketmaster, a North-American ticket sales and distribution company. My goal was to improve the secondary market buying and selling experience for users, mainly in regards to the resale of tickets, while also keeping in mind the need for Ticketmaster to gain revenue. Enjoy!',
    image: TicketMasterImg,
    link: '/ticket-master',
  };
  const notability = {
    isFinished: true,
    title: 'Notability',
    text: 'For this project, I was a PM for Notability, a note-taking software. I conducted user research, identified pain points, and used PM frameworks to develop a solution to improve the user experience.',
    image: NotabilityImg,
    link: '/notability',
  };
  const linkedin_jobs = {
    isFinished: true,
    title: 'Improving LinkedIn Jobs',
    text: 'For this project, I was a product manager for LinkedIn, a business and employment-oriented online service. To arrive at my solution, I conducted primary and secondary market research and interviews, identified challenges, and used product management frameworks to develop a viable solution.',
    image: LinkedInImg,
    link: '/linkedin-jobs',
  };
  const youtube = {
    isFinished: true,
    title: 'Improving accessibility in YouTube',
    text: 'In this project, I took the place of a product manager for Youtube. Through user interviews and broad research of the application and its complaints, I identified pain points and potential improvement opportunities and utilized product management frameworks to arrive at a viable solution.',
    image: YoutubeImg,
    link: '/youtube',
  };
  const improving_letterboxd = {
    isFinished: true,
    title: 'Improving accessibility in YouTube',
    text: "In this project, I assumed the position of a product manager for Letterboxd, a social media platform for movie-lovers. Over the course of the project's timeline, I leveraged a combination of primary and secondary market research to identify user pain points and utilized PM frameworks to create a solution.",
    image: ImprovingLetterBoxDImg,
    link: '/improving-letterboxd',
  };
  // @Todo
  const improving_duolingo = {
    isFinished: true,
    title: 'Improving Duolingo',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iste doloribus dolorum omnis cupiditate minima quas architecto consequatur unde. Doloremque eligendi fugit ullam porro, mollitia iusto rem iure ipsam facilis?',
    image: ImprovingDuolingoImg,
    link: '/improving-duolingo',
  };

  const improving_onenote = {
    isFinished: true,
    title: 'Improving OneNote',
    text: 'For this project, I assumed the role of a Product Manager working at Microsoft for OneNote. Through primary and secondary user research, I was able to identify pain points for OneNote users and used the product management framework to identify a viable solution.',
    image: ImprovingOneNoteImg,
    link: '/improving-onenote',
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
              <Projects
                img={Indira}
                name='Indira Sowy'
                title='Fellow'
                bio_text="Aspiring product manager with past experiences in software development and UX design, working as a UX Designer at a university faculty and a Software Engineer Intern at a YC startup over the summer. I'm passionate about combining my interests to work on building meaningful products that aim to benefit users' lives."
                linkedin='https://www.linkedin.com/in/indirasowy/'
                projects={[notion, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/martin-tang'
            element={
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
              <Projects
                img={Oceanna}
                name='Oceanna Nguyen'
                title='Fellow'
                bio_text={
                  'Customer driven aspiring product manager passionate about getting to the root of problems. Experience working in a hyper growth SaaS startup with 6+ years of customer experience. Currently learning about project management frameworks to start my own passion project!'
                }
                linkedin='https://www.linkedin.com/in/oceanna-nguyen/'
                projects={[notability, phase_2, phase_3]}
              />
            }
          />
          <Route
            path='/ashkan-gharahgozli'
            element={
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
          {/* Projects */}
          <Route
            path='/improving-the-driving-experience-in-apple-maps'
            element={<DrivingExperienceAppleMaps />}
          />
          <Route path='/notion' element={<Notion />} />
          <Route path='/nike-run-club' element={<Nike />} />
          <Route path='/spotify' element={<Spotify />} />
          <Route path='/ticket-master' element={<TicketMaster />} />
          <Route path='/notability' element={<Notability />} />
          <Route path='/linkedin-jobs' element={<LinkedIn />} />
          <Route path='/youtube' element={<Youtube />} />
          <Route
            path='/improving-letterboxd'
            element={<ImprovingLetterBoxD />}
          />
          <Route path='/improving-duolingo' element={<ImprovingDuolingo />} />
          <Route path='/improving-onenote' element={<ImprovingOneNote />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
