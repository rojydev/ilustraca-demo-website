import React, { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaArrowUp,
  FaShieldAlt,
  FaClock,
  FaGraduationCap
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
        setSubmitted(false);
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">

        {/* High-Impact Newsletter / VIP Engineer Dispatch Card */}
        <div className="footer-signup-card">
          <div className="signup-decor-circle circle-1"></div>
          <div className="signup-decor-circle circle-2"></div>

          <div className="signup-content">
            <div className="signup-badge">
              <FaPaperPlane className="signup-badge-icon" /> 
              <span>ENGINEERING DISPATCHES &amp; BLUEPRINTS</span>
            </div>
            <h3 className="signup-title">Stay Ahead in Modern Structural Engineering</h3>
            <p className="signup-subtitle">
              Get real-world high-rise case studies, ETABS/SAFE tips, and free structural design templates delivered to your inbox every week.
            </p>
            <div className="signup-perks">
              <span className="perk-item"><FaCheckCircle className="perk-icon" /> Free Design Sheets</span>
              <span className="perk-item"><FaCheckCircle className="perk-icon" /> Webinar Invites</span>
              <span className="perk-item"><FaCheckCircle className="perk-icon" /> No Spam Ever</span>
            </div>
          </div>

          <div className="signup-form-wrapper">
            {submitted ? (
              <div className="signup-success">
                <FaCheckCircle className="success-icon" />
                <div className="success-text">
                  <strong>You're Subscribed!</strong>
                  <span>Check your inbox for your free welcome design bundle.</span>
                </div>
              </div>
            ) : (
              <form className="signup-form" onSubmit={handleSubscribe}>
                <div className="signup-input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your professional email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email Address for newsletter"
                  />
                </div>
                <button type="submit" className="btn btn-signup">
                  <span>Subscribe</span>
                  <FaArrowRight className="btn-signup-arrow" />
                </button>
              </form>
            )}
            <p className="signup-privacy-note">
              🔒 Join 20,000+ civil and structural engineers worldwide.
            </p>
          </div>
        </div>

        {/* Main Footer Multi-Column Grid */}
        <div className="footer-grid">

          {/* Brand & Mission Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <a href="#home" className="footer-logo-link">
                <img src={getAssetUrl('logo.webp')} alt="ILUSTRACA ACADEMY" className="footer-logo-img" />
              </a>
              <span className="footer-brand-title">ILUSTRACA ACADEMY</span>
            </div>

            <p className="footer-mission-text">
              Bridging the gap between classroom theory and real-world structural consultancy. Empowering engineers with live project mastery in ETABS, SAFE &amp; seismic design.
            </p>

            <div className="footer-cert-pill">
              <FaShieldAlt className="cert-icon" />
              <span>IS 456, IS 1893 &amp; ACI Compliant Training</span>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon youtube">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://wa.me/917005738920" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Column 2: Top Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Top Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#courses">Multi-Storey High-Rise Design</a></li>
              <li><a href="#courses">Foundation &amp; Raft Design (SAFE)</a></li>
              <li><a href="#courses">Seismic &amp; Wind Dynamic Analysis</a></li>
              <li><a href="#courses">Steel Industrial PEB Structures</a></li>
              <li><a href="#courses">Structural Detailing in AutoCAD</a></li>
              <li><a href="#courses">Live Consulting Internship</a></li>
            </ul>
          </div>

          {/* Column 3: Academy */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academy</h4>
            <ul className="footer-links-list">
              <li><a href="#offerings">Our Offerings</a></li>
              <li><a href="#we-teach">How We Teach</a></li>
              <li><a href="#trust">Why Trust Us</a></li>
              <li><a href="#faq">Student FAQ</a></li>
              <li><a href="#blog">Engineering Blog</a></li>
              <li><a href="https://www.youtube.com/watch?v=Yai9Hp0E0r8" target="_blank" rel="noopener noreferrer">Free Video Lectures</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="tel:7005738920" className="contact-item-link">
                  <div className="contact-icon-box phone">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Direct Helpline</span>
                    <span className="contact-val">+91 700 573 8920</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:info@ilustraca.in" className="contact-item-link">
                  <div className="contact-icon-box email">
                    <FaEnvelope />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Email Support</span>
                    <span className="contact-val">info@ilustraca.in</span>
                  </div>
                </a>
              </li>

              <li>
                <div className="contact-item-static">
                  <div className="contact-icon-box location">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Headquarters</span>
                    <span className="contact-val">Siliguri / Delhi, India</span>
                  </div>
                </div>
              </li>

              <li>
                <div className="contact-item-static">
                  <div className="contact-icon-box hours">
                    <FaClock />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-label">Consulting Hours</span>
                    <span className="contact-val">Mon – Sat: 9 AM – 7 PM</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar with Back-to-Top */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} <strong>ILUSTRACA ACADEMY</strong>. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="sep">•</span>
              <a href="#terms">Terms of Service</a>
              <span className="sep">•</span>
              <a href="#cookies">Cookie Settings</a>
            </div>
          </div>

          <div className="footer-bottom-right">
            <button 
              className="back-to-top-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll back to top of the page"
              title="Back to Top"
            >
              <span>Back to top</span>
              <div className="back-to-top-icon">
                <FaArrowUp />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
