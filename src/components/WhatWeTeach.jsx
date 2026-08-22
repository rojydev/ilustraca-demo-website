import React, { useState, useEffect } from 'react';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaCheckCircle 
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './WhatWeTeach.css';

const teachSlides = [
  {
    id: 1,
    src: getAssetUrl('1.webp'),
    title: 'ETABS 3D Modeling & Joint Detailing',
    step: 'STEP 01',
    category: 'STRUCTURAL ANALYSIS',
    desc: 'Live high-rise frame simulation with load pattern combinations and rigid diaphragm analysis.'
  },
  {
    id: 2,
    src: getAssetUrl('2.webp'),
    title: 'SAFE Foundation Raft & Pile Design',
    step: 'STEP 02',
    category: 'FOUNDATION ENGINEERING',
    desc: 'Soil-structure interaction modeling, settlement analysis, and punching shear calculations.'
  },
  {
    id: 3,
    src: getAssetUrl('3.webp'),
    title: 'Ductile Detailing & IS Code Provisions',
    step: 'STEP 03',
    category: 'IS 13920 & ACI CODE',
    desc: 'Confining reinforcement in beam-column joints and ductility reinforcement detailing.'
  },
  {
    id: 4,
    src: getAssetUrl('4.webp'),
    title: 'Dynamic Seismic Response Spectrum',
    step: 'STEP 04',
    category: 'LATERAL LOAD ANALYSIS',
    desc: 'Modal analysis, base shear scaling, and torsional irregularity verification.'
  },
  {
    id: 5,
    src: getAssetUrl('5.webp'),
    title: 'Practical Rebar Scheduling & BBS',
    step: 'STEP 05',
    category: 'DRAFTING & BBS',
    desc: 'Production-ready structural drawings, bar bending schedules, and site execution plans.'
  },
  {
    id: 6,
    src: getAssetUrl('6.webp'),
    title: 'Soil-Structure Interaction Analysis',
    step: 'STEP 06',
    category: 'GEOTECHNICAL DESIGN',
    desc: 'Subgrade modulus computation, mat foundation design, and deep pile group action.'
  },
  {
    id: 7,
    src: getAssetUrl('7.webp'),
    title: 'Live Commercial Project Blueprints',
    step: 'STEP 07',
    category: 'CORPORATE WORKFLOW',
    desc: 'Real-world commercial project design vetting and corporate client design defense.'
  }
];

const WhatWeTeach = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Auto-scroll every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const changeSlide = (newIndex) => {
    setAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setAnimating(false), 300);
  };

  const handlePrev = () => {
    const prev = currentSlide === 0 ? teachSlides.length - 1 : currentSlide - 1;
    changeSlide(prev);
  };

  const handleNext = () => {
    const next = currentSlide === teachSlides.length - 1 ? 0 : currentSlide + 1;
    changeSlide(next);
  };

  const activeSlide = teachSlides[currentSlide];

  return (
    <section className="section we-teach-section" id="we-teach">
      {/* Background CAD Crosshairs & Ambient Lighting */}
      <div className="cad-crosshair" style={{ top: '40px', left: '4%' }}></div>
      <div className="cad-crosshair" style={{ top: '40px', right: '4%' }}></div>
      <div className="cad-crosshair" style={{ bottom: '40px', right: '6%' }}></div>
      <div className="teach-ambient-orb"></div>

      <div className="container">
        
        {/* Section Top Header */}
        <div className="we-teach-header">
          <div className="teach-badge-pill">
            <span className="pulse-indicator"></span>
            <span>OUR PEDAGOGY &amp; METHODOLOGY</span>
          </div>

          <h2 className="teach-title">
            THAT'S HOW <span className="text-primary">WE TEACH</span>
          </h2>

          <p className="teach-subtitle">
            At the heart of our approach is innovation, passion, and a commitment to excellence. We blend cutting-edge methods with time-tested techniques to inspire and empower learners at every stage.
          </p>
        </div>

        {/* Centered Large CAD Workstation Carousel Display */}
        <div 
          className="teach-carousel-centered-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="cad-workstation-window">
            
            {/* Window Header Bar with OS Dots */}
            <div className="workstation-header">
              <div className="window-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
                <span className="window-title">ILUSTRACA CAD STUDIO // LIVE CALCULATION WORKSPACE</span>
              </div>
            </div>

            {/* Main Workstation Screen View */}
            <div className="workstation-screen">
              <div className={`screen-image-wrap ${animating ? 'fade-anim' : ''}`}>
                <img 
                  src={activeSlide.src} 
                  alt={activeSlide.title} 
                  className="workstation-img"
                  onError={(e) => {
                    e.target.src = getAssetUrl('software_ui.png');
                  }}
                />
              </div>

              {/* Floating Top CAD Tag */}
              <div className="floating-cad-spec">
                <span className="cad-step-pill">{activeSlide.step}</span>
                <span className="cad-cat-text">{activeSlide.category}</span>
              </div>
            </div>

            {/* Workstation Bottom Control Bar */}
            <div className="workstation-bottom-bar">
              <div className="slide-description-area">
                <h4>{activeSlide.title}</h4>
                <p>{activeSlide.desc}</p>
              </div>

              <div className="workstation-nav-controls">
                <span className="workstation-counter">
                  0{currentSlide + 1} <small>/ 0{teachSlides.length}</small>
                </span>
                
                <div className="nav-btn-group">
                  <button 
                    className="workstation-nav-btn" 
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    title="Previous Slide"
                  >
                    <FaArrowLeft />
                  </button>
                  <button 
                    className="workstation-nav-btn" 
                    onClick={handleNext}
                    aria-label="Next Slide"
                    title="Next Slide"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* 7 Progress Indicator Bars */}
            <div className="workstation-progress-bar-strip">
              {teachSlides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`progress-segment ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => changeSlide(index)}
                  title={slide.title}
                >
                  <div className="segment-fill"></div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mentors Signature Showcase Footer */}
        <div className="mentors-bottom-banner">
          <div className="mentors-banner-intro">
            <span className="mentors-box-tag">INDUSTRY PRACTITIONERS</span>
            <h4>Guided by Veteran Mentors</h4>
          </div>

          <div className="mentors-dual-grid">
            <div className="mentor-chip">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" 
                alt="Er. Saurabh Mishra" 
                className="mentor-chip-avatar"
              />
              <div className="mentor-chip-info">
                <div className="mentor-chip-name">
                  <h5>Er. Saurabh Mishra</h5>
                  <FaCheckCircle className="verified-badge" />
                </div>
                <span>Principal Structural Mentor</span>
              </div>
            </div>

            <div className="mentor-chip">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" 
                alt="Jane Doe" 
                className="mentor-chip-avatar"
              />
              <div className="mentor-chip-info">
                <div className="mentor-chip-name">
                  <h5>Jane Doe</h5>
                  <FaCheckCircle className="verified-badge" />
                </div>
                <span>Senior Design Associate</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeTeach;
