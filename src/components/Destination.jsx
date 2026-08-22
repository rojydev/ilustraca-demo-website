import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Destination.css';

const Destination = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const addToRefs = useScrollReveal();

  useEffect(() => {
    const img = new Image();
    img.src = '/destination_arch.png';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="section destination-section" id="about">
      {/* Background glow for this section */}
      <div className="glow-orb cyan" style={{ width: '400px', height: '400px', top: '20%', right: '10%', opacity: 0.2 }}></div>

      <div className="container">
        <div className="destination-grid">
          <div className="destination-image-side reveal" ref={addToRefs}>
            <div className={`dest-img-wrapper blur-load ${imageLoaded ? 'loaded' : ''}`}>
              <img src="/destination_arch.png" alt="Structural Design Destination" />
            </div>
            <div className="dest-image-accent"></div>
          </div>
          
          <div className="destination-content-side reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            <div className="section-pretitle">System Overview</div>
            <h2 className="section-title-left">
              The ultimate <span className="text-gradient">destination</span> for elite structural design
            </h2>
            <p className="destination-desc">
              We provide top-tier structural engineering education tailored to industry demands. Our hands-on approach and experienced faculty ensure you are equipped with the software proficiency and practical skills needed to excel in a high-tech corporate environment and tackle complex structural challenges.
            </p>
            <a href="#about" className="btn btn-primary dest-btn">Discover Our Legacy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
