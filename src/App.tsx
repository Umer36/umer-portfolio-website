import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Loader from "./components/loader/Loader";
import Particles from "./components/particles/Particles";
import ScrollProgress from "./components/scrollProgress/ScrollProgress";
import ThemeToggle from "./components/theme/ThemeToggle";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <ScrollProgress />
          <ThemeToggle />
          <Particles />
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
