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
import Sophia from './assets/fellowship_members/sophia_bio.png';
import Indira from './assets/fellowship_members/indira.jpeg';
import Ashkan from './assets/fellowship_members/ashkan.jpeg';
import Evan from './assets/fellowship_members/evan.jpeg';
import Martin from './assets/fellowship_members/martin.png';
import Oceanna from './assets/fellowship_members/oceanna.jpeg';
import Riti from './assets/fellowship_members/riti.jpeg';

// Projects Pic
import AppleMapsImg from './assets/projects/apple_maps.png';
import NotionImg from './assets/projects/notion.png';
import NikeImg from './assets/projects/nike_run_club.png';
import SpotifyImg from './assets/projects/spotify.png';
import TicketMasterImg from './assets/projects/ticketmaster.png';
import NotabilityImg from './assets/projects/notability.png';

// Projects Page
import AppleMaps from './components/fellowship/projects/AppleMaps';
import Notion from './components/fellowship/projects/Notion';
import Nike from './components/fellowship/projects/Nike';
import Spotify from './components/fellowship/projects/Spotify';
import TicketMaster from './components/fellowship/projects/TicketMaster';
import Notability from './components/fellowship/projects/Notability';

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
    link: '/apple-maps',
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
          {/* Projects */}
          <Route path='/apple-maps' element={<AppleMaps />} />
          <Route path='/notion' element={<Notion />} />
          <Route path='/nike-run-club' element={<Nike />} />
          <Route path='/spotify' element={<Spotify />} />
          <Route path='/ticket-master' element={<TicketMaster />} />
          <Route path='/notability' element={<Notability />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
