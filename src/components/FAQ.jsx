import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: "What structural software will I master in these courses?",
    answer: "You will master ETABS for 3D high-rise dynamic & seismic analysis, CSI SAFE for foundation & raft modeling, SAP2000 for complex frame geometries, and AutoCAD / automated Excel sheets for BBS and structural detailing."
  },
  {
    question: "Are the case studies based on live consulting projects?",
    answer: "Yes! All courses feature real-world G+32 commercial and residential building drawings, IS 1893 / IS 13920 / ACI 318 code compliance, soil-structure interaction, and peer-review audit verification."
  },
  {
    question: "Can I access the course recordings if I miss live sessions?",
    answer: "Absolutely. All lectures, sample calculation spreadsheets, architectural blueprints, and model files (.edb, .fdb) come with lifetime portal access on your student dashboard."
  },
  {
    question: "How does 1-on-1 mentor guidance and doubt solving work?",
    answer: "You get direct access to practicing principal structural consultants through dedicated mentor channels. You can submit your project models for review and schedule 1-on-1 clarification sessions."
  },
  {
    question: "Will I receive a recognized certification upon course completion?",
    answer: "Yes, you will receive an industry-recognized Certificate of Structural Engineering Mastery from ILUSTRACA ACADEMY, along with a verified portfolio of completed project calculation sheets."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        
        {/* Centered FAQ Header */}
        <div className="faq-header-centered">
          <div className="sketch-badge" style={{ marginBottom: '12px' }}>
            <FaQuestionCircle /> Student Support &amp; FAQ
          </div>
          <h2 className="faq-main-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="faq-subtitle">
            Find answers to common questions about course prerequisites, software coverage, live consulting projects, and certification.
          </p>
        </div>

        {/* Centered Clean Accordion List */}
        <div className="faq-accordion-centered-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                className={`faq-card-minimal ${isOpen ? 'active' : ''}`}
                key={index}
              >
                <button
                  className="faq-card-header-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-card-body-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
