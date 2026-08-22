import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const addToRefs = useScrollReveal();
  const reasons = [
    "Industry-standard software protocols (ETABS, SAP2000, SAFE)",
    "Real-world project simulations and case studies",
    "Expert mentorship from practicing professionals",
    "Lifetime access to core materials and system updates"
  ];

  return (
    <section className="section why-choose-section">
      <div className="glow-orb purple" style={{ width: '400px', height: '400px', top: '10%', right: '5%', opacity: 0.2 }}></div>

      <div className="container">
        <div className="why-choose-grid">
          <div className="why-choose-content reveal" ref={addToRefs}>
            <h2 className="section-title text-left">Why Connect to Ilustraca?</h2>
            <p className="why-choose-desc">
              Because you don't just want to learn software interfaces. You want to decode the engineering behind them. Here is our system advantage:
            </p>
            
            <ul className="check-list">
              {reasons.map((reason, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="why-choose-image reveal" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            <div className="why-img-wrapper">
              <img src="/destination_arch.png" alt="Structural Blueprint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
