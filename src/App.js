import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import News from "./News";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Travel from "./Travel";
import "./App.css";
import { Route, Routes, Redirect } from "react-router-dom";
import "./Footer.css";
import Flight from "./Flight";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderC from "./SliderC";
import Freeapi from "./Freeapi";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/travel" element={<Travel />} />
        <Route exact path="/flight" element={<Flight />} />
        <Route exact path="/freeapi" element={<Freeapi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
