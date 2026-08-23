import React, { useState, useEffect } from 'react';
import { 
  FaTimes, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaEye, 
  FaEyeSlash, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaArrowRight,
  FaLinkedinIn
} from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin' }) => {
  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    rememberMe: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  useEffect(() => {
    setIsSignUp(initialMode === 'signup');
  }, [initialMode]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setAuthSuccess(false);
      setIsLoading(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentic API authentication
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
      setTimeout(() => {
        onClose();
        setAuthSuccess(false);
      }, 1800);
    }, 1200);
  };

  const handleSocialAuth = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
      setTimeout(() => {
        onClose();
        setAuthSuccess(false);
      }, 1800);
    }, 1000);
  };

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div 
        className="auth-modal-card" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          className="auth-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close authentication modal"
        >
          <FaTimes />
        </button>

        {/* Ambient Top Glow */}
        <div className="auth-card-glow"></div>

        {/* Modal Header with Official Brand Logo */}
        <div className="auth-modal-header">
          <div className="auth-logo-badge">
            <img 
              src={getAssetUrl('logo.webp')} 
              alt="ILUSTRACA ACADEMY" 
              className="auth-logo-img"
            />
          </div>
          <h2 className="auth-modal-title">
            {isSignUp ? 'Create Engineer Account' : 'Welcome Back'}
          </h2>
          <p className="auth-modal-subtitle">
            {isSignUp 
              ? 'Join 20,000+ engineers mastering real-world structural design' 
              : 'Sign in to access your course dashboard, live projects & materials'
            }
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="auth-tab-switcher">
          <button 
            type="button"
            className={`auth-tab-btn ${!isSignUp ? 'active' : ''}`}
            onClick={() => { setIsSignUp(false); setAuthSuccess(false); }}
          >
            Sign In
          </button>
          <button 
            type="button"
            className={`auth-tab-btn ${isSignUp ? 'active' : ''}`}
            onClick={() => { setIsSignUp(true); setAuthSuccess(false); }}
          >
            Create Account
          </button>
        </div>

        {authSuccess ? (
          <div className="auth-success-state">
            <div className="success-icon-pulse">
              <FaCheckCircle />
            </div>
            <h3>{isSignUp ? 'Account Created Successfully!' : 'Signed In Successfully!'}</h3>
            <p>Redirecting to your student learning portal...</p>
          </div>
        ) : (
          <>
            {/* Social Logins */}
            <div className="auth-social-group">
              <button 
                type="button" 
                className="social-auth-btn google-btn"
                onClick={() => handleSocialAuth('Google')}
              >
                <svg className="google-svg-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              <button 
                type="button" 
                className="social-auth-btn linkedin-btn"
                onClick={() => handleSocialAuth('LinkedIn')}
              >
                <FaLinkedinIn className="linkedin-svg-icon" />
                <span>Continue with LinkedIn</span>
              </button>
            </div>

            {/* Divider */}
            <div className="auth-divider">
              <span>or continue with email</span>
            </div>

            {/* Auth Form */}
            <form className="auth-form" onSubmit={handleSubmit}>
              
              {/* Full Name for Sign Up */}
              {isSignUp && (
                <div className="auth-input-group">
                  <label htmlFor="auth-name">Full Name</label>
                  <div className="auth-input-wrapper">
                    <FaUser className="auth-field-icon" />
                    <input
                      id="auth-name"
                      type="text"
                      name="fullName"
                      placeholder="Er. John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div className="auth-input-group">
                <label htmlFor="auth-email">Email Address</label>
                <div className="auth-input-wrapper">
                  <FaEnvelope className="auth-field-icon" />
                  <input
                    id="auth-email"
                    type="email"
                    name="email"
                    placeholder="engineer@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="auth-input-group">
                <div className="auth-label-row">
                  <label htmlFor="auth-password">Password</label>
                  {!isSignUp && (
                    <a href="#contact" className="forgot-password-link" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your registered email!"); }}>
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="auth-input-wrapper">
                  <FaLock className="auth-field-icon" />
                  <input
                    id="auth-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter secure password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me / Terms */}
              <div className="auth-options-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-label">
                    {isSignUp ? 'I agree to the Terms & Privacy Policy' : 'Keep me signed in'}
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button 
                type="submit" 
                className="btn btn-primary auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="auth-spinner"></span>
                ) : (
                  <>
                    <span>{isSignUp ? 'Create Free Account' : 'Sign In to Portal'}</span>
                    <FaArrowRight className="submit-arrow" />
                  </>
                )}
              </button>
            </form>

            {/* Toggle Footer */}
            <div className="auth-toggle-footer">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <button 
                    type="button" 
                    className="toggle-link-btn"
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign In
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account yet?{' '}
                  <button 
                    type="button" 
                    className="toggle-link-btn"
                    onClick={() => setIsSignUp(true)}
                  >
                    Create one for free
                  </button>
                </p>
              )}
            </div>

            {/* Security Badge */}
            <div className="auth-security-badge">
              <FaShieldAlt className="shield-icon" />
              <span>256-Bit SSL Encrypted Student Portal</span>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default AuthModal;
