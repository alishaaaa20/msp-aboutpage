import React from "react";
import Distribution from "../components/Distribution";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Foundation from "../components/Foundation";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Foundation />
      <Distribution />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
