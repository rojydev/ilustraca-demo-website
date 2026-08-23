import React, { useState, useEffect, useRef } from 'react';
import { 
  FaArrowRight, 
  FaPlay, 
  FaStar, 
  FaCheckCircle, 
  FaAward, 
  FaUserGraduate, 
  FaBuilding, 
  FaThumbsUp,
  FaBolt,
  FaShieldAlt
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Hero.css';

const CountUpNumber = ({ start = 1, target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elemRef.current) {
      observer.observe(elemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out cubic animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, start, target, duration]);

  return (
    <span ref={elemRef}>
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState('model'); // 'model' | 'analytics'

  // Auto-change between 3D Structural Model & FEM Stress Analysis every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === 'model' ? 'analytics' : 'model'));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Dynamic Ambient Glows */}
      <div className="hero-ambient-glow glow-1"></div>
      <div className="hero-ambient-glow glow-2"></div>
      
      {/* Decorative CAD Elements */}
      <div className="hero-decorations">
        <div className="cad-crosshair" style={{ top: '100px', left: '3%' }}></div>
        <div className="cad-crosshair" style={{ top: '120px', right: '3%' }}></div>
        <div className="cad-crosshair" style={{ bottom: '220px', left: '6%' }}></div>
        <div className="cad-grid-accent"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Punchy Modern Copy & CTAs */}
        <div className="hero-content">
          
          {/* Fresh Pill Badge */}
          <div className="hero-badge-pill">
            <span className="pulse-indicator"></span>
            <span className="hero-badge-text">CIVIL &amp; STRUCTURAL ACADEMY</span>
            <span className="hero-badge-divider">•</span>
            <span className="hero-badge-highlight">2026 Batch Open</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-heading">
            <span className="hero-cursive-kicker">Bridge the gap between</span>
            <span className="hero-main-title">
              CLASSROOM <br />
              <span className="hero-amp">&amp;</span> <span className="hero-gradient-text">CORPORATE</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle">
            Transform theoretical textbook formulas into real-world structural engineering mastery. 
            Learn ETABS, SAP2000, SAFE &amp; seismic design through live high-rise consulting projects.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#courses" className="btn btn-primary hero-btn-main">
              <span>EXPLORE TOP COURSES</span>
              <FaArrowRight className="hero-btn-arrow" />
            </a>

            <a href="#we-teach" className="btn hero-btn-secondary">
              <span className="hero-play-circle">
                <FaPlay className="hero-play-icon" />
              </span>
              <span>How We Teach</span>
            </a>
          </div>

          {/* Social Proof & Trust Strip */}
          <div className="hero-social-proof">
            <div className="hero-avatar-stack">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
                alt="Student avatar" 
                className="hero-avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" 
                alt="Student avatar" 
                className="hero-avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" 
                alt="Student avatar" 
                className="hero-avatar"
              />
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" 
                alt="Student avatar" 
                className="hero-avatar"
              />
              <div className="hero-avatar-count">+20k</div>
            </div>

            <div className="hero-rating-box">
              <div className="hero-stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span className="rating-score">4.9/5</span>
              </div>
              <p className="rating-label">Trusted by 20,000+ Structural &amp; Civil Engineers</p>
            </div>
          </div>

          {/* Quick Value Bullets */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>Live Consulting Projects</span>
            </div>
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>1-on-1 Mentor Support</span>
            </div>
            <div className="hero-feature-item">
              <FaCheckCircle className="feature-check-icon" />
              <span>Lifetime Portal Access</span>
            </div>
          </div>

        </div>

        {/* Right Column: High-Impact 3D Structural Showcase Card */}
        <div className="hero-showcase-wrapper">
          <div className="hero-visual-card">
            
            {/* Visual Header / Window bar */}
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
                >
                  <FaBuilding className="tab-icon" /> 3D Structural Model
                </button>
                <button 
                  className={`showcase-tab ${activeTab === 'analytics' ? 'active' : ''}`}
                  onClick={() => setActiveTab('analytics')}
                >
                  <FaBolt className="tab-icon" /> FEM Stress Analysis
                </button>
              </div>
              <div className="showcase-live-status">
                <span className="live-dot"></span> LIVE
              </div>
            </div>

            {/* Main Showcase Image Display with Dual Layer Cross-Fade */}
            <div className="showcase-image-container">
              <img 
                src={getAssetUrl('hero.png')} 
                alt="3D Structural Model" 
                className={`showcase-main-img ${activeTab === 'model' ? 'active-img' : 'inactive-img'}`}
                loading="eager"
              />
              <img 
                src={getAssetUrl('software_ui.png')} 
                alt="FEM Stress Analysis" 
                className={`showcase-main-img ${activeTab === 'analytics' ? 'active-img' : 'inactive-img'}`}
                loading="eager"
              />
              <div className="showcase-overlay-gradient"></div>

              {/* Floating Badge 1: Quality / Certification (Top Right) */}
              <div className="floating-badge badge-top-right">
                <div className="badge-icon-box gold">
                  <FaAward />
                </div>
                <div className="badge-info">
                  <span className="badge-label">100% Practical</span>
                  <span className="badge-sub">IS &amp; ACI Code Compliant</span>
                </div>
              </div>

              {/* Floating Badge 2: Live High-Rise Project (Bottom Left) */}
              <div className="floating-badge badge-bottom-left">
                <div className="badge-icon-box purple">
                  <FaBuilding />
                </div>
                <div className="badge-info">
                  <div className="badge-row">
                    <span className="badge-label">G+32 High-Rise Analysis</span>
                    <span className="badge-tag">ETABS</span>
                  </div>
                  <div className="badge-progress-bar">
                    <div className="badge-progress-fill" style={{ width: '96%' }}></div>
                  </div>
                  <span className="badge-sub">Non-linear Seismic Verified</span>
                </div>
              </div>

              {/* Floating Badge 3: Student Success Metric (Bottom Right) */}
              <div className="floating-badge badge-bottom-right">
                <div className="badge-icon-box green">
                  <FaShieldAlt />
                </div>
                <div className="badge-info">
                  <span className="badge-label">Consulting Ready</span>
                  <span className="badge-sub">100% Real Design Sheets</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
      
      {/* Upgraded 3-Stat Floating Glass Card */}
      <div className="container hero-banner-container">
        <div className="hero-banner">
          
          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaAward className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>
                <CountUpNumber start={10} target={64} suffix="+" duration={2000} />
              </h2>
              <p>Years of combined<br />engineering excellence</p>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaThumbsUp className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>
                <CountUpNumber start={15} target={96} suffix="%" duration={2200} />
              </h2>
              <p>Recommended by students<br />&amp; design professionals</p>
            </div>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <div className="stat-icon-wrapper">
              <FaUserGraduate className="stat-decor-icon" />
            </div>
            <div className="stat-text-box">
              <h2>
                <CountUpNumber start={10} target={20} suffix="K+" duration={1800} />
              </h2>
              <p>Engineers trained for<br />structural consulting</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
