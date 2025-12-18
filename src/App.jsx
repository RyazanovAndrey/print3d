import { useState, useEffect } from "react"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Advantages from "./sections/Advantages"
import Who from "./sections/Who"
import WhyItems from "./sections/WhyItems"
import Services from "./sections/Services"
import Banner from "./sections/Banner"
import ButtonUp from "./components/ButtonUp"
import Projects from "./sections/Projects"
import Choose from "./sections/Choose"
import Blog from "./sections/Blog"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <div className="container">
        <div className="h-[400px] bg-center bg-cover rounded-[30px]" style={{ background: 'url(About-Us-Image-1.jpg)' }}></div>
      </div>
      <Who />
      <WhyItems />
      <Services />
      <Banner />
      <ButtonUp />
      <Projects />
      <Choose />
      <Blog />
      <Footer />
    </>
  )
}

export default App