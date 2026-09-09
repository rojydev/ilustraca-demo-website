import React from 'react';
import { FaLaptopCode, FaLayerGroup, FaUsers, FaYoutube, FaArrowRight } from 'react-icons/fa';
import './LearningJourney.css';

const offerings = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    tag: "SELF-PACED",
    title: "Pre-recorded Online Lessons",
    desc: "Learn anywhere, anytime with self-paced comprehensive structural analysis & design modules.",
    linkText: "EXPLORE COURSES",
    linkUrl: "#courses"
  },
  {
    id: 2,
    icon: <FaLayerGroup />,
    tag: "STEP-BY-STEP",
    title: "Basic to Advanced Roadmap",
    desc: "Master ETABS, SAFE & AutoCAD starting from fundamental mechanics up to high-rise FEM design.",
    linkText: "VIEW SYLLABUS",
    linkUrl: "#courses"
  },
  {
    id: 3,
    icon: <FaUsers />,
    tag: "DIRECT SUPPORT",
    title: "1-on-1 Mentor Guidance",
    desc: "Clear your doubts directly with practicing structural consultants through dedicated doubt forums.",
    linkText: "JOIN COMMUNITY",
    linkUrl: "#contact"
  },
  {
    id: 4,
    icon: <FaYoutube />,
    tag: "FREE CONTENT",
    title: "Free Video Masterclasses",
    desc: "Access hours of free, in-depth civil engineering and structural modeling masterclasses on YouTube.",
    linkText: "WATCH ON YOUTUBE",
    linkUrl: "https://www.youtube.com/watch?v=Yai9Hp0E0r8",
    isExternal: true
  }
];

const LearningJourney = () => {
  return (
    <section className="section journey-section" id="offerings">
      <div className="container">
        
        {/* Section Header */}
        <div className="journey-header">
          <div className="offerings-tagline">
            <span className="tagline-text">OUR ACADEMIC OFFERINGS</span>
          </div>
          
          <h2 className="journey-main-title">STRUCTURED LEARNING PATHWAY</h2>
          
          <p className="journey-main-subtitle">
            Designed by structural consultants to help engineers gain deep practical mastery in structural design, code provisions, and corporate consulting workflows.
          </p>
        </div>

        {/* Roadmap Layout */}
        <div className="roadmap-wrapper">
          <div className="roadmap-line"></div>
          <div className="roadmap-items">
            {offerings.map((item, index) => (
              <div className="roadmap-item" key={item.id}>
                
                <div className="roadmap-marker">
                  <span className="step-num">0{index + 1}</span>
                  <div className="marker-icon">{item.icon}</div>
                </div>

                <div className="roadmap-content">
                  <div className="roadmap-content-header">
                    <span className="offering-tag-pill">{item.tag}</span>
                  </div>
                  <h3 className="offering-card-title">{item.title}</h3>
                  <p className="offering-card-desc">{item.desc}</p>
                  
                  <a 
                    href={item.linkUrl} 
                    className="offering-action-link"
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : ""}
                  >
                    <span>{item.linkText}</span>
                    <FaArrowRight className="link-arrow" />
                  </a>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningJourney;
