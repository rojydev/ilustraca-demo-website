import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaQuoteLeft, FaShieldAlt } from 'react-icons/fa';
import './Trust.css';

const testimonialsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    initials: "AS",
    role: "Senior Structural Consultant",
    company: "BuildTech Infra",
    text: "ILUSTRACA ACADEMY bridged theoretical concepts with real-world ETABS & SAFE modeling. It boosted my project execution confidence tenfold.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    initials: "PP",
    role: "Project Engineer",
    company: "L&T Construction",
    text: "The practical case studies and high-rise structural design workflows are unmatched. Truly industry-grade corporate training!",
    rating: 5
  },
  {
    id: 3,
    name: "Rahul Verma",
    initials: "RV",
    role: "Civil Design Associate",
    company: "Sterling Engineering",
    text: "From deep foundation design to advanced seismic detailing, every single module is tailored for actual corporate engineering challenges.",
    rating: 5
  },
  {
    id: 4,
    name: "Sneha Mukherjee",
    initials: "SM",
    role: "BIM & Structural Specialist",
    company: "Mott MacDonald",
    text: "The mentorship by practicing engineers helped me transition from classroom theory into high-impact infrastructure projects smoothly.",
    rating: 5
  },
  {
    id: 5,
    name: "Karan Malhotra",
    initials: "KM",
    role: "Lead Structural Modeler",
    company: "Atkins Infrastructure",
    text: "Hands-on software exposure and practical structural detailing taught here are exactly what top global consulting firms look for.",
    rating: 5
  }
];

const Trust = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="container">

        <div className="trust-layout">
          {/* Left: Video Player Embed */}
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
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="trust-content">
            <div className="trust-content-header">
              <h2>Why ILUSTRACA ACADEMY?<br />Hear from our alumni</h2>
              <p className="trust-desc">Authentic project feedback from engineers now leading global consultancy projects.</p>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-slider-card">

              <div className="card-top-bar">
                <div className="card-top-left">
                  <FaQuoteLeft className="quote-badge" />
                  <div className="stars-row">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-card-arrows">
                  <button
                    className="card-arrow-btn"
                    onClick={handlePrev}
                    aria-label="Previous Testimonial"
                    type="button"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="card-arrow-btn"
                    onClick={handleNext}
                    aria-label="Next Testimonial"
                    type="button"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <p className="testimonial-body-text">
                "{currentTestimonial.text}"
              </p>

              <div className="card-bottom-bar">
                <div className="testimonial-author-block">
                  <div className="testimonial-initials-avatar">
                    {currentTestimonial.initials}
                  </div>
                  <div className="author-details">
                    <h4>{currentTestimonial.name}</h4>
                    <span>{currentTestimonial.role} &bull; {currentTestimonial.company}</span>
                  </div>
                </div>

                <div className="testimonial-dots">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                      type="button"
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
