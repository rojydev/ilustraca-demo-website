import React, { useState } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import LearningJourney from './components/LearningJourney'
import WhatWeTeach from './components/WhatWeTeach'
import Trust from './components/Trust'
import Courses from './components/Courses'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <Header />
      <main>
        <Hero />
        <LearningJourney />
        <WhatWeTeach />
        <Trust />
        <Courses />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App
