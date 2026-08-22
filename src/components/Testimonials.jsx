import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const Testimonials = () => {
  const addToRefs = useScrollReveal();
  const testimonials = [
    {
      name: "Samantha Williams",
      course: "Advanced Structural Analysis",
      text: "The practical approach to complex structural problems is unmatched. The instructors break down advanced software techniques perfectly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      course: "Bridge Design Fundamentals",
      text: "I gained more confidence in my design skills in 3 months here than I did in years of theoretical study. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="glow-orb cyan" style={{ width: '500px', height: '500px', top: '10%', left: '-15%', opacity: 0.2 }}></div>
      <div className="container">
        <div className="text-center reveal" ref={addToRefs}>
          <h2 className="section-title">Network Feedback</h2>
          <p className="section-subtitle">Hear from our alumni who are now shaping the skyline.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div className="testimonial-card glass-panel reveal" ref={addToRefs} key={index} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="stars">
                {[...Array(test.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h5>{test.name}</h5>
                  <span>{test.course}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
