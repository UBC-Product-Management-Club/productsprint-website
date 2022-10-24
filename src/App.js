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

// Projects Page
import AppleMaps from './components/fellowship/projects/AppleMaps';
import Notion from './components/fellowship/projects/Notion';

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
                bio_text='Aspiring Product Manager with experience in front-end development
              and design. Currently working as a PM Intern at BlackBerry in
              Toronto, but eventually wants to break out of the corporate world to
              pursue his own startup and tackle problems in education.'
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
                linkedin='https://www.linkedin.com/in/sophia-huang7/'
                projects={[notion, phase_2, phase_3]}
              />
            }
          />
          {/* Apple Maps Projects */}
          <Route path='/apple-maps' element={<AppleMaps />} />
          <Route path='/notion' element={<Notion />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
