import React, { useState } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaCheckCircle
} from 'react-icons/fa';
import './WhatWeTeach.css';
import { getAssetUrl } from '../utils/assetHelper';

const galleryImages = [
  '1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'
];

const WhatWeTeach = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section className="section we-teach-section" id="we-teach">
      <div className="container">
        
        {/* Header */}
        <div className="we-teach-header">
          <div className="teach-badge-pill">
            <span className="teach-badge-text">ENGINEERING PEDAGOGY</span>
          </div>

          <h2 className="teach-title">
            THAT'S HOW <span className="text-primary">WE TEACH</span>
          </h2>

          <p className="teach-subtitle">
            We bridge academic theory with corporate engineering consulting standards through structured, code-compliant, and software-integrated modules.
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="gallery-wrapper">
          <div className="gallery-container">
            <button className="gallery-nav-btn prev-btn" onClick={prevImage} aria-label="Previous Image">
              <FaChevronLeft />
            </button>
            
            <div className="gallery-track-viewport">
              <div 
                className="gallery-track" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryImages.map((imgName, index) => (
                  <div className="gallery-slide" key={index}>
                    <img 
                      src={getAssetUrl(imgName)} 
                      alt={`Study content ${index + 1}`} 
                      className="gallery-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button className="gallery-nav-btn next-btn" onClick={nextImage} aria-label="Next Image">
              <FaChevronRight />
            </button>
          </div>
          
          <div className="gallery-indicators">
            {galleryImages.map((_, index) => (
              <div 
                key={index} 
                className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Clean Mentor Credentials Strip (Zero stock photos) */}
        <div className="mentors-summary-bar">
          <div className="mentors-summary-intro">
            <span className="mentors-tag">CONSULTING MENTORSHIP</span>
            <h4>Guided by Practicing Structural Consultants</h4>
          </div>

          <div className="mentors-pills-row">
            <div className="mentor-credential-pill">
              <div className="mentor-avatar-initials">SM</div>
              <div className="mentor-pill-info">
                <strong>Er. Saurabh Mishra</strong>
                <span>Principal Structural Consultant <FaCheckCircle className="verified-icon" /></span>
              </div>
            </div>

            <div className="mentor-credential-pill">
              <div className="mentor-avatar-initials">JD</div>
              <div className="mentor-pill-info">
                <strong>Jane Doe</strong>
                <span>Senior Seismic Design Associate <FaCheckCircle className="verified-icon" /></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeTeach;

