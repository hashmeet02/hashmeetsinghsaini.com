import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeInSection from "./components/FadeInSection"; // Adjust the import path as necessary

function App() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </Helmet>
      <NavBar />
      <Home />      
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Works />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
      <Footer />
    </div>
  );
}

export default App;
