import React from "react";
import HomeHeroImg from '../assets/hero2.jpeg'
import Hero from "../components/Hero/Hero";
import BottomHero from "../components/HomeComponents/BottomHero/BottomHero";
import FeaturedDestinations from "../components/HomeComponents/FeaturedDestinations/FeaturedDestinations";


function Home() {

  // Hero Content
  const heroHeading = 'Travel Beyond Limits'
  const primaryBtnTitle = 'Explore Places'
  const secondaryBtnTitle = 'Explore Cruises'

  return (
    <>
      <Hero
        heroImage={HomeHeroImg}
        textClass='home-text-container'
        title={heroHeading}
        primaryBtnTitle={primaryBtnTitle}
        btnClass='home-hero-btn'
        primaryBtnUrl='destinations'
        secondaryBtnTitle={secondaryBtnTitle}
        secondaryBtnUrl='cruises'
      />
      <BottomHero />
      <FeaturedDestinations />
    </>
  )
}

export default Home;
