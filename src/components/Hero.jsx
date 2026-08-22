import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
  return (
    <section className="hero" id="home">
      {/* Full Cover hero_bridge.webp Background Image Layer */}
      <div className="hero-bg-cover-wrap">
        <img 
          src="/hero_bridge.webp" 
          alt="Bridge The Gap Between Classroom & Corporate" 
          className="hero-bg-full-img"
          loading="eager"
        />
        <div className="hero-gradient-scrim"></div>
      </div>

      {/* Decorative CAD Elements */}
      <div className="hero-decorations">
        <div className="cad-crosshair" style={{ top: '120px', left: '4%' }}></div>
        <div className="cad-crosshair" style={{ top: '120px', right: '4%' }}></div>
        <div className="cad-crosshair" style={{ bottom: '180px', left: '8%' }}></div>
      </div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-main-heading">
            <span className="hero-cursive-kicker">Bridge the gap between</span>
            <span className="hero-main-title">
              CLASSROOM<br />
              &amp; <span className="hero-gradient-text">CORPORATE</span>
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Learn to implement your classroom knowledge in real life projects
          </p>

          <div className="hero-cta-group">
            <a href="#courses" className="btn btn-primary hero-btn">
              EXPLORE TOP COURSES <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating 3-Stat Premium Glass Card */}
      <div className="container">
        <div className="hero-banner">
          <div className="banner-stat">
            <h2>
              <CountUpNumber start={10} target={64} suffix="+" duration={2000} />
            </h2>
            <p>Years of combined<br/>engineering excellence</p>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <h2>
              <CountUpNumber start={15} target={96} suffix="%" duration={2200} />
            </h2>
            <p>Recommended by students<br/>&amp; design professionals</p>
          </div>

          <div className="banner-divider"></div>

          <div className="banner-stat">
            <h2>
              <CountUpNumber start={10} target={20} suffix="K+" duration={1800} />
            </h2>
            <p>Engineers trained for<br/>structural consulting</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
