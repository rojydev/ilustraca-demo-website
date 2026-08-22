import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft, FaShieldAlt } from 'react-icons/fa';
import './Trust.css';

const testimonialsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Senior Structural Consultant",
    company: "BuildTech Infra",
    text: "ILUSTRACA ACADEMY bridged theoretical concepts with real-world ETABS & SAFE modeling. It boosted my project execution confidence tenfold.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Project Engineer",
    company: "L&T Construction",
    text: "The practical case studies and high-rise structural design workflows are unmatched. Truly industry-grade corporate training!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Civil Design Associate",
    company: "Sterling Engineering",
    text: "From deep foundation design to advanced seismic detailing, every single module is tailored for actual corporate challenges.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Sneha Mukherjee",
    role: "BIM & Structural Specialist",
    company: "Mott MacDonald",
    text: "The mentorship by practicing engineers helped me transition from classroom theory into high-impact infrastructure projects smoothly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Karan Malhotra",
    role: "Lead Structural Modeler",
    company: "Atkins Infrastructure",
    text: "Hands-on software exposure and practical structural detailing taught here are exactly what top global consulting firms look for.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Ananya Gupta",
    role: "Structural Analyst",
    company: "Thornton Tomasetti",
    text: "The deep dive into code provisions and real project calculations is phenomenal. Highly recommended for every civil engineer.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 7,
    name: "Vikramaditya Roy",
    role: "Principal Consultant",
    company: "VR Structures",
    text: "We actively prefer candidates trained at ILUSTRACA ACADEMY because their practical project execution skills are immediately deployable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80"
  }
];

const Trust = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll every 4 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="section trust-section" id="trust">
      {/* Background Tech Mesh & Ambient Lighting */}
      <div className="trust-ambient-orb"></div>
      <div className="cad-crosshair" style={{ top: '30px', left: '4%', opacity: 0.2 }}></div>
      <div className="cad-crosshair" style={{ bottom: '30px', right: '4%', opacity: 0.2 }}></div>

      <div className="container">

        <div className="trust-layout">
          {/* Main Left Video Player with YouTube Embed */}
          <div className="trust-video-main">
            <div className="trust-header-tag">
              <FaShieldAlt className="shield-icon" />
              <span>WHY TRUST US? // LIVE CLASSROOM DEMO</span>
            </div>

            <div className="video-player-container">
              <div className="video-player">
                <iframe
                  className="youtube-iframe"
                  src="https://www.youtube.com/embed/Yai9Hp0E0r8?rel=0&modestbranding=1"
                  title="Why ILUSTRACA ACADEMY"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-glow-effect"></div>
            </div>
          </div>

          {/* Right Side Testimonial Card matching Video Height */}
          <div
            className="trust-content"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="trust-content-header">
              <h2>Why ILUSTRACA ACADEMY?<br />Hear from our alumni</h2>
              <p className="trust-desc">Authentic project feedback from engineers now leading global projects.</p>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-slider-card">

              {/* Card Top Bar with Quote, Stars & Top-Right Professional Arrows */}
              <div className="card-top-bar">
                <div className="card-top-left">
                  <FaQuoteLeft className="quote-badge" />
                  <div className="stars-row">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>

                {/* Top Right Professional Navigation Arrows */}
                <div className="testimonial-card-arrows">
                  <button
                    className="card-arrow-btn"
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    title="Previous"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="card-arrow-btn"
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    title="Next"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* Testimonial Review Body */}
              <p className="testimonial-body-text">
                "{currentTestimonial.text}"
              </p>

              {/* Card Bottom: Author Block & Slide Dots */}
              <div className="card-bottom-bar">
                <div className="testimonial-author-block">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="author-details">
                    <h4>{currentTestimonial.name}</h4>
                    <span>{currentTestimonial.role} &bull; {currentTestimonial.company}</span>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="testimonial-dots">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Trust;
