import React from "react";
import HomeHeroImg from '../assets/homehero.jpg'
import Hero from "../components/Hero/Hero";
import BottomHero from "../components/HomeComponents/BottomHero/BottomHero";
import FeaturedList from "../components/HomeComponents/FeaturedDestinations/FeaturedList";
import Parallex from "../components/HomeComponents/Parallax Image/Parallex";
import AppSection from "../components/HomeComponents/AppSection/AppSection";
import Footer from "../components/Footer/Footer";
import '../components/Hero/HomeHero.css'


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
      <FeaturedList />
      <Parallex />
      <AppSection />
      <Footer />

    </>
  )
}

export default Home;
