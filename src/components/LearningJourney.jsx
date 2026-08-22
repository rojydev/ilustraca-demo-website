import React from 'react';
import { FaPlayCircle, FaLayerGroup, FaComments, FaYoutube, FaArrowRight, FaGraduationCap } from 'react-icons/fa';
import './LearningJourney.css';

const offerings = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=600&q=80",
    badgeIcon: <FaPlayCircle />,
    title: "Pre-recorded Online Lessons",
    desc: "Learn anywhere, anytime at your convenience with self-paced comprehensive structural modules.",
    linkText: "EXPLORE COURSES",
    linkUrl: "#courses"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    badgeIcon: <FaLayerGroup />,
    title: "Learn Basic to Advanced",
    desc: "Learn from very basics and develop structural modeling & design skills gradually step-by-step.",
    linkText: "EXPLORE COURSES",
    linkUrl: "#courses"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    badgeIcon: <FaComments />,
    title: "No Place for any Doubt",
    desc: "Clear all your doubts instantly through our dedicated mentor and peer discussion chat groups.",
    linkText: "JOIN GROUP",
    linkUrl: "#contact"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=80",
    badgeIcon: <FaYoutube />,
    title: "Learn Free from Our Channel",
    desc: "Learn for free from our detailed and exclusive civil engineering lectures on YouTube.",
    linkText: "VISIT YOUTUBE",
    linkUrl: "https://www.youtube.com/watch?v=Yai9Hp0E0r8",
    isExternal: true
  }
];

const LearningJourney = () => {
  return (
    <section className="section journey-section" id="offerings">
      {/* Decorative CAD Elements */}
      <div className="cad-crosshair" style={{ top: '30px', left: '3%' }}></div>
      <div className="cad-crosshair" style={{ top: '30px', right: '3%' }}></div>

      <div className="container">
        
        {/* Section Header */}
        <div className="journey-header">
          <div className="offerings-tagline">
            <span className="tagline-arrows">&#9658;&#9658;&#9658;</span>
            <span className="tagline-text">OUR OFFERINGS FOR YOU</span>
          </div>
          
          <h2 className="journey-main-title">LEARNING JOURNEY</h2>
          
          <p className="journey-main-subtitle">
            Our experienced and certified instructor is committed to helping you gain expertise and confidence in Civil and Structural Engineering concepts and design.
          </p>
        </div>

        {/* 4 Cards in 1 Row */}
        <div className="journey-cards-grid">
          {offerings.map((item) => (
            <div className="journey-offering-card" key={item.id}>
              
              {/* Image Frame */}
              <div className="offering-image-box">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="offering-badge-icon">
                  {item.badgeIcon}
                </div>
              </div>

              {/* Card Content */}
              <div className="offering-card-body">
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
    </section>
  );
};

export default LearningJourney;
