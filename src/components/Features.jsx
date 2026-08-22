import React from 'react';
import { FaLaptopCode, FaHardHat, FaChalkboardTeacher } from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Experienced Instructors",
      description: "Learn from industry experts with years of practical experience in structural engineering and design."
    },
    {
      icon: <FaHardHat />,
      title: "Practical Techniques",
      description: "Master the real-world skills and problem-solving strategies required to shape modern built environments."
    },
    {
      icon: <FaLaptopCode />,
      title: "Software Mastery",
      description: "Get hands-on training with essential structural design software used by top firms globally."
    }
  ];

  return (
    <section className="section features-section" id="training">
      <div className="container">
        <div className="features-grid">
          <div className="features-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>A Few Words About Us</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              At Ilustraca, we bridge the gap between theoretical knowledge and practical application. Our curriculum is designed to empower the next generation of structural engineers.
            </p>
            
            <div className="feature-items">
              {featureList.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="features-image-container">
            <div className="features-image">
              <img src={getAssetUrl('feature.png')} alt="Structural Design Education" className="rounded-img shadow-lg" loading="lazy" />
              <div className="floating-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
