import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AuthorityStrip from "./components/AuthorityStrip";
import LinkHub from "./components/LinkHub";
import Community from "./components/Community";
import Resources from "./components/Resources";
import ResourceDetail from "./components/ResourceDetail";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CalendlyWidget from "./components/CalendlyWidget";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => {
  return (
    <div className="bg-[#FFFEFC]">
      <Navigation />
      <Hero />
      <AuthorityStrip />
      <Community />
      <LinkHub />
      <Resources />
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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources/:id" element={<ResourceDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
