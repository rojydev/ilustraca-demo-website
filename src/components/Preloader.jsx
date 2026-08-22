import React, { useState, useEffect } from 'react';
import { FaDraftingCompass } from 'react-icons/fa';
import { getAssetUrl } from '../utils/assetHelper';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let finishTimeout1;
    let finishTimeout2;
    let isCompleted = false;

    const completeLoading = () => {
      if (isCompleted) return;
      isCompleted = true;
      setProgress(100);
      finishTimeout1 = setTimeout(() => {
        setIsFading(true);
        finishTimeout2 = setTimeout(() => {
          if (onFinish) onFinish();
        }, 450);
      }, 150);
    };

    const startTime = performance.now();
    const duration = 1000; // 1.0s fast smooth load

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease out
      const easeOut = 1 - Math.pow(1 - rawProgress, 3);
      const currentPct = Math.floor(easeOut * 100);

      setProgress(currentPct);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        completeLoading();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Guaranteed fallback timer (e.g., if browser throttles RAF in background tabs)
    const fallbackTimer = setTimeout(() => {
      completeLoading();
    }, 1800);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(finishTimeout1);
      clearTimeout(finishTimeout2);
      clearTimeout(fallbackTimer);
    };
  }, [onFinish]);

  return (
    <div className={`preloader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* Background Animated Compass Mesh */}
      <div className="preloader-backdrop-ring"></div>
      <div className="preloader-ambient-glow"></div>

      <div className="preloader-content">
        {/* Animated Emblem */}
        <div className="preloader-emblem">
          <div className="emblem-compass-spin">
            <FaDraftingCompass />
          </div>

          <div className="emblem-center-badge">
            <img 
              src={getAssetUrl('logo.webp')} 
              alt="ILUSTRACA ACADEMY" 
              className="preloader-official-logo" 
            />
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="preloader-title">
          ILUSTRACA <span className="text-highlight">ACADEMY</span>
        </h1>

        <p className="preloader-tagline">
          BRIDGING CLASSROOM &bull; CORPORATE ENGINEERING
        </p>

        {/* Progress Bar & Counter */}
        <div className="preloader-progress-wrap">
          <div className="preloader-bar-bg">
            <div
              className="preloader-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="preloader-counter">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

