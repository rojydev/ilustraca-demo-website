import React, { useState, Suspense, lazy } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import LearningJourney from './components/LearningJourney'
import WhatWeTeach from './components/WhatWeTeach'

// Progressive lazy loading for below-the-fold components to maximize initial load performance
const Trust = lazy(() => import('./components/Trust'))
const Courses = lazy(() => import('./components/Courses'))
const FAQ = lazy(() => import('./components/FAQ'))
const Blog = lazy(() => import('./components/Blog'))
const Footer = lazy(() => import('./components/Footer'))

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
        <Suspense fallback={<div className="section-skeleton-loader" style={{ minHeight: '300px' }} />}>
          <Trust />
          <Courses />
          <FAQ />
          <Blog />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
