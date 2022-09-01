import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Program from './components/program/Program';
import Highlights from './components/highlights/Highlights';
import Footer from './components/footer/Footer';
import Fellowship from './components/fellowship/Fellowship';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero />
              <About />
              <Program />
              <Highlights />
              <Footer />
            </>
          }
        />
        <Route
          path='about'
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path='fellowship'
          element={
            <>
              <Fellowship />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
