import React, { useState } from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">

        {/* Don't Miss Anything Signup Card */}
        <div className="footer-signup-card">
          <div className="signup-content">
            <span className="signup-badge">
              <FaPaperPlane className="signup-badge-icon" /> NEWSLETTER &amp; DISPATCHES
            </span>
            <h3 className="signup-title">Don't Miss Anything! Stay Ahead in Engineering</h3>
            <p className="signup-subtitle">
              Get practical structural case studies, software tips (ETABS/SAFE), and exclusive webinar invites directly in your inbox.
            </p>
          </div>

          <div className="signup-form-wrapper">
            {submitted ? (
              <div className="signup-success">
                <FaCheckCircle className="success-icon" />
                <span>You're in! Thank you for subscribing.</span>
              </div>
            ) : (
              <form className="signup-form" onSubmit={handleSubscribe}>
                <div className="signup-input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email Address for newsletter"
                  />
                </div>
                <button type="submit" className="btn btn-signup">
                  Subscribe Now <FaArrowRight />
                </button>
              </form>
            )}
            <p className="signup-privacy-note">
              🔒 Join 20,000+ civil engineers. We never spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Footer 5-Column Menu Grid */}
        <div className="footer-grid">

          <div className="footer-col">
            <h4>Lessons</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#courses">Courses Info</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Teaching</h4>
            <ul>
              <li><a href="#courses">Course</a></li>
              <li><a href="#training">Training</a></li>
              <li><a href="#learning">Learning</a></li>
              <li><a href="#freemn">Freemn</a></li>
              <li><a href="#accreditation">Accreditability</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Learning</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#faq">FAQ Support</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Promotions</h4>
            <ul>
              <li><a href="#promotions">Promotions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Alerts</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>
                <a href="tel:+7005738920" className="contact-link">
                  <span className="contact-icon-wrapper">
                    <FaPhoneAlt />
                  </span>
                  +700 573 8920
                </a>
              </li>
              <li>
                <a href="mailto:info@ilustraca.in" className="contact-link">
                  <span className="contact-icon-wrapper">
                    <FaEnvelope />
                  </span>
                  info@ilustraca.in
                </a>
              </li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-brand-wrap">
            <img src={getAssetUrl('logo.webp')} alt="ILUSTRACA ACADEMY" className="footer-logo-img" />
            <p className="footer-logo-text">ILUSTRACA ACADEMY</p>
          </div>
          <p>Copyright &copy; {new Date().getFullYear()} ILUSTRACA ACADEMY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
