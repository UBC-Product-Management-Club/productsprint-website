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
import ProjectCard from './components/shared/team/ProjectCard';
import Scott from './assets/fellowship_members/scott/scott_bio.png';
import ProjectData from './class/ProjectData';

function App() {
  const phase_2 = {
    isFinished: false,
    title: 'Second Fellowship Project',
    text: 'Case: Repurpose a product for a new market. Create the strategy to bring a product to a new market by planning for implementation, considering the roadmap &amp; risks involved.',
    link: 'To be released in November.',
  };
  const phase_3 = {
    isFinished: false,
    title: 'Third Fellowship Project',
    text: 'A case study on how I would improve this spatial video meeting app that can simulate aspects of the in-person experience for online events and conferences.',
  };
  const spatial_chat = {
    isFinished: true,
    title: 'Improving SpatialChat',
    text: 'A case study on how I would improve this spatial video meeting app that can simulate aspects of the in-person experience for online events and conferences.',
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
          <Route
            path='/execs'
            element={
              <>
                <Team />
              </>
            }
          />

          {/* <Route
            path='/about'
            element={
              <>
                <About />
              </>
            }
          /> */}
          <Route
            path='/fellowship'
            element={
              <>
                <Fellowship />
              </>
            }
          />
          <Route
            path='/fellows'
            element={
              <>
                <Fellows />
              </>
            }
          />
          {/* Scott Bio and Projects */}
          <Route
            exact
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
          />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
