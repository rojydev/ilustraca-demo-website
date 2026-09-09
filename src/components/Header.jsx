import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, 
  FaArrowRight, 
  FaRocket, 
  FaTimes, 
  FaBars,
  FaUser
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import AuthModal from './AuthModal';
import './Header.css';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Offerings', href: '#offerings', id: 'offerings' },
  { name: 'How We Teach', href: '#we-teach', id: 'we-teach' },
  { name: 'Why Us', href: '#trust', id: 'trust' },
  { name: 'Courses', href: '#courses', id: 'courses' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Blog', href: '#blog', id: 'blog' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const openAuth = (mode = 'signin') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        
        {/* Top Header Bar (Phone & Admissions Info Only) */}
        <div className="header-top-banner">
          <div className="container header-top-container">
            <div className="top-banner-left">
              <span className="top-banner-badge">2026 COHORT</span>
              <span className="top-banner-text">Structural Engineering &amp; High-Rise Design Admissions Open</span>
            </div>
            <div className="top-banner-right">
              <a href="tel:7005738920" className="top-banner-contact">
                <FaPhoneAlt className="top-contact-icon" />
                <span className="top-contact-label">Call Consultant:</span>
                <span className="top-contact-number">+91 700 573 8920</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="header-main">
          <div className="container header-container">
            
            {/* Brand Logo */}
            <div className="logo">
              <a href="#home" className="logo-brand-link" aria-label="Ilustraca Academy Home">
                <img
                  src={getAssetUrl('logo.webp')}
                  alt="ILUSTRACA ACADEMY"
                  className="header-logo-img"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.name} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${activeSection === item.id ? 'active-link' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span>{item.name}</span>
                      {activeSection === item.id && <span className="active-indicator"></span>}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Action CTAs (Sign In + Enroll Now) */}
            <div className="header-actions">
              
              {/* Sign In Trigger Button (Opens Popup) */}
              <button 
                type="button"
                className="header-signin-btn" 
                onClick={() => openAuth('signin')}
                title="Student Portal Login"
              >
                <div className="signin-icon-box">
                  <FaUser />
                </div>
                <span>Sign In</span>
              </button>

              {/* Primary Enroll Action Button */}
              <a href="#courses" className="btn btn-primary header-enroll-btn">
                <span>Enroll Now</span>
                <FaArrowRight className="enroll-btn-arrow" />
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>

          </div>
        </div>

      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-backdrop ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <img
            src={getAssetUrl('logo.webp')}
            alt="ILUSTRACA ACADEMY"
            className="mobile-drawer-logo"
          />
          <button 
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span>{item.name}</span>
                  <FaArrowRight className="mobile-link-arrow" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-cta-group">
            <button 
              type="button"
              className="btn btn-outline mobile-drawer-btn"
              onClick={() => openAuth('signin')}
            >
              <FaUser /> Sign In to Student Portal
            </button>
            <a 
              href="#courses" 
              className="btn btn-primary mobile-drawer-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaRocket /> Explore All Courses
            </a>
            <a 
              href="tel:7005738920" 
              className="mobile-drawer-call-link"
            >
              <FaPhoneAlt /> Helpline: +91 700 573 8920
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <p>Ilustraca Engineering Academy</p>
            <span>Bridge the Gap Between Classroom &amp; Corporate</span>
          </div>
        </div>
      </div>

      {/* Interactive Authentication Popup Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialMode={authModalMode}
      />
    </>
  );
};

export default Header;
