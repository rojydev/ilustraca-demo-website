import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">

        {/* Official Logo Only */}
        <div className="logo">
          <a href="#home" className="logo-brand-link">
            <img
              src={getAssetUrl('logo.webp')}
              alt="ILUSTRACA ACADEMY"
              className="header-logo-img"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="active-link">Home</a></li>
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="#we-teach">How We Teach</a></li>
            <li><a href="#trust">Why Trust Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <a href="tel:7005738920" className="btn btn-primary btn-phone">
            <FaPhoneAlt /> 700 573 8920
          </a>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
