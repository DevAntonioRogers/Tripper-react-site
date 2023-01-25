import React from "react";
import hero1 from '../assets/hero2.jpeg'
import Hero from "../components/Hero/Hero";


function Home() {

  // Hero Content
  const heroHeading = 'Travel Beyond Limits'
  const heroText = 'Break free from the everyday and discover new horizons'
  const btnTitle = 'Explore Deals'

  return (
    <>
      <Hero
        imgClass='home-hero'
        heroImage={hero1}
        textClass='home-text-container'
        title={heroHeading}
        text={heroText}
        btnTitle={btnTitle}
        btnClass='home-hero-btn'
        btnUrl='destinations'
      />

    </>
  )
}

export default Home;
