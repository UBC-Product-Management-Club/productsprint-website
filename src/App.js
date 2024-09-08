// import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

// import Header from "./components/header/Header";
// import Hero from "./components/hero/Hero";
// import About from "./components/about/About";
// import Program from "./components/program/Program";
// import Highlights from "./archive/highlights/Highlights";
// import Footer from "./components/footer/Footer";
// import Team from "./components/team/Team";
// import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  useEffect(() => {
    window.location.href = "https://ubcpmc.com";
  }, []);

  return (
    <>
      {/* <Header />
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Program />
                <Highlights />
              </>
            }
          />
          <Route path="/execs" element={<Team />} />
        </Routes>
      </ScrollToTop>
      <Footer /> */}
    </>
  );
}

export default App;
