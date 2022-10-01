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

function App() {
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
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
