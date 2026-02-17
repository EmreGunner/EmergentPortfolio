import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AuthorityStrip from "./components/AuthorityStrip";
import LinkHub from "./components/LinkHub";
import Experiments from "./components/Experiments";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CalendlyWidget from "./components/CalendlyWidget";

const Home = () => {
  return (
    <div className="bg-[#FFFEFC]">
      <Navigation />
      <Hero />
      <AuthorityStrip />
      <LinkHub />
      <Experiments />
      <Events />
      <Blog />
      <Footer />
      <CalendlyWidget />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
