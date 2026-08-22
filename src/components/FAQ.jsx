import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaGraduationCap, FaCheck } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What levels of English courses do you offer?",
      answer: "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "Are your instructors certified and experienced?",
      answer: "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "What teaching methods and materials do you use?",
      answer: "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "Can I join an English course if I have a busy schedule?",
      answer: "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "Is there any age restriction for enrolling in English courses?",
      answer: "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      {/* Decorative CAD elements */}
      <div className="cad-crosshair" style={{ top: '40px', left: '4%' }}></div>
      <div className="cad-crosshair" style={{ bottom: '40px', right: '4%' }}></div>

      <div className="container">

        <div className="faq-grid-layout">

          {/* Left Side: Image with floating badge and architectural frame */}
          <div className="faq-image-side">
            <div className="faq-image-wrapper">
              <div className="faq-bg-pattern-box"></div>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80"
                alt="Students collaborating at ILUSTRACA ACADEMY"
                className="faq-main-img"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/hero_bridge.webp';
                }}
              />

              {/* Floating Highlight Card */}
              <div className="faq-floating-badge">
                <div className="badge-icon">
                  <FaGraduationCap />
                </div>
                <div className="badge-text">
                  <h4>Dedicated Support</h4>
                  <p><FaCheck style={{ color: '#10B981', marginRight: '4px' }} /> 1-on-1 Mentor Guidance</p>
                </div>
              </div>

              {/* Technical CAD spec tag */}
              <div className="faq-cad-tag">
                <span>[ SUPPORT // 24/7 HELPDESK ]</span>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion Items */}
          <div className="faq-content-side">
            <div className="faq-header">
              <div className="sketch-badge" style={{ marginBottom: '12px' }}>
                <FaQuestionCircle /> FAQ Support Center
              </div>
              <h2 className="faq-main-title">Frequently Asked Questions</h2>
              <p className="faq-subtitle">
                Everything you need to know about our courses, schedules, and learning methods.
              </p>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    className={`faq-card ${isOpen ? 'active' : ''}`}
                    key={index}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="faq-card-header">
                      <h3>{faq.question}</h3>
                      <button
                        className="faq-toggle-btn"
                        aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                      >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </div>

                    <div className="faq-card-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
