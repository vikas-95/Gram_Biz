import React from "react";
import Navbar from "../components/Navbar";
import HeaderJumbo from "../components/HeaderJumbo";
import Main from "../components/Main";
import Map from "../components/Map";
import Logos from "../components/Logos";
import MiddleJumbo from "../components/MiddleJumbo";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Subtopics from "../components/Subtopics";

const Home = () => {
  return (
      <div className="items-center place-content-center justify-center">
        <Navbar />
        <HeaderJumbo />
        <Main />
        <Map />
        <MiddleJumbo />
        <Subtopics />
        <Testimonials />
        <Logos />
        <FAQ />
        <Footer />
      </div>
  );
};

export default Home;
