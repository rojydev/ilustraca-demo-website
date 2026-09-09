import React, { useState } from 'react';
import { 
  FaArrowRight, 
  FaPlay, 
  FaStar, 
  FaCheckCircle, 
  FaAward, 
  FaUserGraduate, 
  FaBuilding, 
  FaThumbsUp,
  FaBolt
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Hero.css';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('model'); // 'model' | 'analytics'

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* Left Column: Clean, Punchy Modern Copy & CTAs */}
        <div className="hero-content">
          
          {/* Pill Badge */}
          <div className="hero-badge-pill">
            <span className="pulse-indicator"></span>
            <span className="hero-badge-text">CIVIL &amp; STRUCTURAL ACADEMY</span>
            <span className="hero-badge-divider">•</span>
            <span className="hero-badge-highlight">2026 Batch Open</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-heading">
            <span className="hero-kicker">Bridge the gap between</span>
            <span className="hero-main-title">
              CLASSROOM <br />
              <span className="hero-amp">&amp;</span> <span className="hero-gradient-text">CORPORATE</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Transform theoretical formulas into real-world structural engineering mastery. 
            Learn ETABS, SAP2000, SAFE &amp; seismic design through live high-rise consulting projects.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#courses" className="btn btn-primary hero-btn-main">
              <span>EXPLORE COURSES</span>
              <FaArrowRight className="hero-btn-arrow" />
            </a>

            <a href="#we-teach" className="btn hero-btn-secondary">
              <span className="hero-play-circle">
                <FaPlay className="hero-play-icon" />
              </span>
              <span>How We Teach</span>
            </a>
          </div>

          {/* Clean Rating & Trust Strip (Zero stock photos) */}
          <div className="hero-rating-badge-strip">
            <div className="hero-stars-row">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="hero-rating-text">
              <strong>4.9/5 Rating</strong> &bull; Trusted by 20,000+ Civil &amp; Structural Engineers
            </span>
          </div>

          {/* Value Highlights */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>Live Consulting Projects</span>
            </div>
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>1-on-1 Mentor Guidance</span>
            </div>
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>Lifetime Portal Access</span>
            </div>
          </div>

        </div>

        {/* Right Column: Clean Structural Engineering Showcase */}
        <div className="hero-showcase-wrapper">
          <div className="hero-visual-card">
            
            {/* Visual Header / Tab Switcher */}
            <div className="showcase-window-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="showcase-tabs">
                <button 
                  className={`showcase-tab ${activeTab === 'model' ? 'active' : ''}`}
                  onClick={() => setActiveTab('model')}
                  type="button"
                >
                  <FaBuilding className="tab-icon" /> 3D Structural Model
                </button>
                <button 
                  className={`showcase-tab ${activeTab === 'analytics' ? 'active' : ''}`}
                  onClick={() => setActiveTab('analytics')}
                  type="button"
                >
                  <FaBolt className="tab-icon" /> FEM Stress Analysis
                </button>
              </div>
            </div>

            {/* Showcase Image Display */}
            <div className="showcase-image-container">
              <img 
                src={activeTab === 'model' ? getAssetUrl('hero.png') : getAssetUrl('software_ui.png')} 
                alt={activeTab === 'model' ? "3D Structural Model" : "FEM Stress Analysis"} 
                className="showcase-main-img active-img"
              />
              
              {/* Minimalist Spec Tag */}
              <div className="showcase-caption-tag">
                <span className="spec-tag-title">
                  {activeTab === 'model' ? 'ETABS G+32 Frame Simulation' : 'Non-Linear Dynamic FEM Analysis'}
                </span>
                <span className="spec-tag-sub">IS 1893 &amp; ACI 318 Compliant</span>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      {/* Clean 3-Stat Strip */}
      <div className="container hero-banner-container">
        <div className="hero-banner">
          
          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaAward className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>64+</h2>
              <p>Years of combined<br />engineering excellence</p>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaThumbsUp className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>96%</h2>
              <p>Recommended by students<br />&amp; design professionals</p>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaUserGraduate className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>20K+</h2>
              <p>Engineers trained for<br />structural consulting</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
